// = = = = = = = = = = = = = = = = = = = APP CONTROLLER = = = = = = = = = = = = = = = = = = =

import * as Model from './models/model';
import * as Data from './models/data/data';
import Trick from './models/Trick';
import * as View from './views/view';
import elements from './views/elements';
import '../sass/main.scss';


/* TODO:
  PWA (current version)
    1. Refactor, reducing size of files
    2. Improve algorithm (merge levels before randomly choosing a trick)
    3. Users can see a list of all the tricks in each level.
    4. Save each combo made in the session.
    5. Have option to share/copy a combo.

  Native App (v2)
    1. Have option to save favorite combos.
*/

const DOM = elements;
const state = {};


document.addEventListener('DOMContentLoaded', init);


function init() {
  registerServiceWorker();
  reset();
  setCopyrightYear();
  initInstallPopup();
  setEventListeners();
}


function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => console.log('service worker registered', registration))
      .catch(err => console.log('service worker not registered', err));
  }
}


function reset() {
  state.mode = 'start';
  state.currTrick = undefined;
  state.prevTrick = undefined;
  state.trickCount = 0;

  DOM.buildDiffSelection.value = 'random';
  DOM.randomDiffSelection.value = 'random';
  DOM.numTricksSelection.value = 'random';

  DOM.generateTrickBtn.classList.add('hide');
  DOM.startScreen.classList.remove('hide');
  DOM.randomScreen.classList.add('hide');
  DOM.buildScreen.classList.add('hide');
  DOM.backBtn.classList.add('hide');
}


function setCopyrightYear() {
  const year = new Date().getFullYear();
  DOM.year.innerHTML = year;
}


function initInstallPopup() {
  // Detects if device is on iOS
  const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  };

  // Detects if device is in standalone mode
  const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

  // Checks if should display install popup notification:
  if (isIos() && !isInStandaloneMode()) {
    DOM.iosInstallPopup.classList.remove('hide');
  }
}


function setEventListeners() {
  // PWA events
  window.addEventListener('beforeinstallprompt', handleInstallBanner);
  window.addEventListener('appinstalled', trackInstall);
  DOM.installClose.addEventListener('click', closeInstallBanner);
  DOM.iosInstallClose.addEventListener('click', closeIosPopup);
  DOM.installBtn.addEventListener('click', handleInstall);

  // Modal events
  DOM.openModal.addEventListener('click', openModal);
  DOM.closeModal.addEventListener('click', closeModal);

  // Build mode events
  DOM.buildCmbBtn.addEventListener('click', setBuildMode);
  DOM.buildDiffContainer.addEventListener('animationend', e => animateButtons(e));
  DOM.generateTrickBtn.addEventListener('click', createAndDisplayTrick);
  DOM.redoBtn.addEventListener('click', redoTrick);
  DOM.nextTrickBtn.addEventListener('click', nextTrick);
  DOM.newCmbBtn.addEventListener('click', newBuildCombo);

  // Random mode events
  DOM.randomCmbBtn.addEventListener('click', setRandomMode);
  DOM.generateCmbBtn.addEventListener('click', generateCombo);
  DOM.backBtn.addEventListener('click', backToStart);
}


function handleInstallBanner(event) {
  // Prevent mini-infobar from appearing on mobile
  event.preventDefault();

  // Stash the event so it can be triggered later
  window.deferredPrompt = event;

  // Show custom install prompt
  DOM.installBanner.classList.remove('hide');
}


function trackInstall(event) {
  console.log('app installed', event);
  gtag('event', 'install', {
    event_category: 'app install',
  });
}


function closeInstallBanner() {
  DOM.installBanner.classList.add('hide');
}


function closeIosPopup() {
  DOM.iosInstallPopup.classList.add('hide');
}


function handleInstall() {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) return;

  // Show install prompt
  promptEvent.prompt();

  // Log result
  promptEvent.userChoice.then(result => {
    console.log('user choice:', result);

    // Reset deferredPrompt variable
    window.deferredPrompt = null;

    // Hide install banner
    DOM.installBanner.classList.add('hide');
  });
}


function openModal() {
  DOM.modal.classList.add('open');
}


function closeModal() {
  DOM.modal.classList.remove('open');
}


function setBuildMode() {
  state.mode = 'build';
  DOM.startScreen.classList.add('hide');

  // Hide build buttons
  DOM.redoBtn.classList.add('hide');
  DOM.nextTrickBtn.classList.add('hide');
  DOM.newCmbBtn.classList.add('hide');

  // Show build screen
  DOM.buildScreen.classList.remove('hide');

  // Show build options * this initiates button animation on animationend
  DOM.buildDiffContainer.classList.remove('hide');
}


function animateButtons() {
  DOM.generateTrickBtn.classList.remove('hide');
  DOM.backBtn.classList.remove('hide');
}


function createAndDisplayTrick() {
  setCurrAndPrevTrick();

  const difficulty = View.getChoices(state.mode);

  // Buttons are animated and shown in this function call
  buildTrick(difficulty, true);

  DOM.backBtn.classList.add('hide');
  DOM.generateTrickBtn.classList.add('hide');

  DOM.buildDiffContainer.classList.add('hide');
}


function setCurrAndPrevTrick() {
  if (state.currTrick) {
    state.prevTrick = state.currTrick;
    state.currTrick = undefined;
  }
}


function buildTrick(maxDiff, animate) {
  // This returns a number if the difficulty is 'random'
  const diff = handleDifficulty(maxDiff);

  const trick = new Trick();

  // Set trick level
  if (state.mode === 'random') {
    if (typeof diff === 'number') {
      trick.generateLevel(diff);
    } else {
      trick.generateLevel(Data.difficultyLevels[diff]);
    }
  } else if (typeof diff === 'number') {
    trick.setLevel(diff);
  } else {
    trick.setLevel(Data.difficultyLevels[diff]);

    // Check if last trick was cart and change its landing if the level isn't novice
    const changeCart = diff !== 'novice'
      && (state.prevTrick
      && (state.prevTrick.name === 'Cartwheel'
        || state.prevTrick.name === 'One-handed Cartwheel'));
    if (changeCart) {
      Model.redoPrevLanding(state.prevTrick, diff);
    }
  }

  let numTries = 0;
  const tryGenerateTrick = () => {
    try {
      trick.generateTrick(state.prevTrick, state.mode);
    } catch (err) {
      if (numTries >= 20) return undefined;
      console.log(err);
      state.prevTrick = Model.redoPrevLanding(state.prevTrick);
      numTries += 1;
      tryGenerateTrick();
    }
    return undefined;
  };
  tryGenerateTrick();

  trick.setName();

  if (state.prevTrick) {
    trick.generateTransition(state.prevTrick.landing);
  } else {
    trick.takeoff = Model.chooseFromList(trick.trickObj.setups, 'takeoffModifiers');
  }

  trick.handleHook();
  // trick.level = level[#] & diff = [word]

  // diff = typeof diff === 'number' ? diff : Data.difficultyLevels[diff];
  trick.generateLanding(trick.level, diff);
  trick.handleTakeoff();
  trick.handleLandingMod();

  if (trick.transition) trick.transition = Model.formatMod(trick.transition);
  if (trick.takeoff) trick.takeoff = Model.formatMod(trick.takeoff);

  if (state.mode === 'random') {
    View.displayTrick(state.prevTrick, trick, DOM.randomCmbContainer, 'random');
  } else {
    View.displayTrick(state.prevTrick, trick, DOM.builtCmbContainer, 'build', animate);
  }
  state.currTrick = trick;
  console.log(trick.takeoff, trick.name, trick.landing);
}


function handleDifficulty(difficulty) {
  if (difficulty === 'random') {
    return Model.random(6) + 1;
  }
  return difficulty;
}


function redoTrick() {
  hideButtons();

  View.removeCurrentTrick(true, state.currTrick, state.prevTrick);
  state.currTrick = undefined;

  // Delay long enough for removal animation to finish
  setTimeout(() => {
    if (state.prevTrick) {
      // Remove previous trick and put it back with new landing
      state.prevTrick = Model.redoPrevLanding(state.prevTrick);

      // Redisplay last trick
      View.removeCurrentTrick();
      const hasMoreTricks = DOM.builtCmbContainer.children.length > 0;
      View.displayTrick(hasMoreTricks, state.prevTrick, DOM.builtCmbContainer);

      // Pass in true value to set a delay for other animations to finish
      nextTrick(null, true);
    }

    nextTrick(null, false);
  }, 2500);
}


function hideButtons() {
  DOM.redoBtn.classList.add('hide');
  DOM.nextTrickBtn.classList.add('hide');
  DOM.newCmbBtn.classList.add('hide');
  DOM.backBtn.classList.add('hide');
}


function nextTrick(event, delay) {
  hideButtons();

  // If this function was called clicking the generate trick button
  if (event) {
    DOM.buildDiffContainer.classList.remove('hide');
  }

  if (delay) {
    setTimeout(() => DOM.buildDiffContainer.classList.remove('hide'), 700);
  }
}


function newBuildCombo() {
  state.currTrick = undefined;
  state.prevTrick = undefined;
  clear(DOM.builtCmbContainer);

  DOM.backBtn.classList.add('hide');
  setTimeout(setBuildMode, 10);
  DOM.buildDiffSelection.value = 'random';
}


function setRandomMode() {
  state.mode = 'random';
  DOM.startScreen.classList.add('hide');
  DOM.randomScreen.classList.remove('hide');
  DOM.backBtn.classList.remove('hide');
  DOM.randomCmbContainer.classList.add('hide');
}


function generateCombo() {
  DOM.randomCmbContainer.classList.remove('hide');
  let { difficulty, numTricks } = View.getChoices(state.mode);

  clear(DOM.randomCmbContainer);

  if (numTricks === 'random') {
    numTricks = Model.random(10) + 1;
  }

  do {
    setCurrAndPrevTrick();
    buildTrick(difficulty);
    state.trickCount += 1;
  } while (state.trickCount < numTricks);
}


function clear(container) {
  console.clear();
  View.clearContainer(container);
  state.trickCount = 0;
  state.prevTrick = undefined;
  state.currTrick = undefined;
}


function backToStart() {
  if (state.mode === 'random') {
    clear(DOM.randomCmbContainer);
  } else {
    clear(DOM.builtCmbContainer);
  }
  reset();
}
