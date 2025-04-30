/*
================================================================================================
======================================== APP CONTROLLER ========================================
================================================================================================
*/

import * as Helpers from './helpers';
import * as Data from './models/data/data';
import Trick from './models/Trick';
import * as View from './views';
import '../sass/main.scss';

console.log('================= VERSION 2.26 =================');

/*
TODO:
    TRICKS TO ADD:
      - ===== Viking Sweep (front sweep semi) =====
      - Wikkilash

TODO:
PWA (new major version)
    1. Users can see a list of all the tricks in each level. (COMPLETE)
    2. Fix so that page doesn't temporarily lose styling inbetween udpates (COMPLETE)
    3. Change theme color so that nav background doesn't appear as a strip on mobile app (COMPLETE)
    4. Change Tsunami Kick name (COMPLETE)
    5. Change trick list to not show setup variations (COMPLETE)
    6. Deprioritize corks slightly, and remove swing from takeoffs (COMPLETE)
    7. ===== Improve algorithm (merge levels before randomly choosing a trick) =====
    8. Add footer (include copyright and help(?) link) 
    8. NEW FEATURE: Add choice in build mode to set maximum difficulty level for a random trick.
    9. Fix bugs: 
      - Custom input styles need to be adjusted for mobile
      - Bottom of screen getting cut off when click on redo button
      - Styles breaking when user scrolls during trick animation.
    10. NEW FEATURE: user able to undo as many tricks in the combo as they want.
    11. NEW FEATURE: Have option to share/copy a combo.
    12: NEW FEATURE: User can prioritize specific tricks to have higher chance of being in a combo
    13: NEW FEATURE: User can tap/click on a trick and be taken to a website with info/video example of the trick.

  Version 3.0 / Tricking Combo Generator + (Native App) - to complete by end of 2025
    1. User can create their own set of tricks from the tricks dataset to use for the generator.
    2. User can save their favorite combos, and attach labels (which they can view as combo lists).
    3. User can create their own tricks and add them to their personal trick set or create a whole trick set of their own.
    4. User can share combos, tricks, and trick lists with other users.
    5. User can submit videos of them performing a trick or a combo. Those tricks will be viewable when users click on a trick.
    6. 

*/


const state = {};


document.addEventListener('DOMContentLoaded', init);


function init() {
  registerServiceWorker();
  reset();
  View.setCopyrightYear();
  View.createTrickList(Data.tricks);
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
  state.currentTrick = undefined;
  state.prevTrick = undefined;
  state.trickCount = 0;

  View.resetElements();
  View.activateNavItem();
  View.DOM.startScreen.classList.remove('hide');
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
    View.DOM.iosInstallPopup.classList.remove('hide');
  }
}


function setEventListeners() {
  // PWA events
  window.addEventListener('beforeinstallprompt', handleInstallBanner);
  window.addEventListener('appinstalled', trackInstall);
  View.DOM.installClose.addEventListener('click', View.closeInstallBanner);
  View.DOM.iosInstallClose.addEventListener('click', View.closeIosPopup);
  View.DOM.installBtn.addEventListener('click', handleInstall);

  // Modal events
  View.DOM.openModal.addEventListener('click', View.openModal);
  View.DOM.closeModal.addEventListener('click', View.closeModal);

  // Trick list
  View.DOM.trickListNavBtn.addEventListener('click', View.showTrickList);


  // Start screen addEventListener
  View.DOM.home.addEventListener('click', backToStart);

  // Build mode events
  View.DOM.buildNavBtn.addEventListener('click', setBuildMode);
  View.DOM.buildCmbBtn.addEventListener('click', setBuildMode);
  View.DOM.buildDiffContainer.addEventListener('animationend', View.animateBuildDiffButtons);
  View.DOM.generateTrickBtn.addEventListener('click', createAndDisplayTrick);
  View.DOM.redoBtn.addEventListener('click', redoTrick);
  View.DOM.nextTrickBtn.addEventListener('click', View.nextTrick);
  View.DOM.newCmbBtn.addEventListener('click', newBuildCombo);

  // Random mode events
  View.DOM.randomNavBtn.addEventListener('click', setRandomMode);
  View.DOM.randomCmbBtn.addEventListener('click', setRandomMode);
  View.DOM.generateCmbBtn.addEventListener('click', generateCombo);
  View.DOM.backBtn.addEventListener('click', backToStart);
}


function handleInstallBanner(event) {
  // Prevent mini-infobar from appearing on mobile
  event.preventDefault();

  // Stash the event so it can be triggered later
  window.deferredPrompt = event;

  // Show custom install prompt
  View.DOM.installBanner.classList.remove('hide');
}


function trackInstall(event) {
  console.log('app installed', event);
  gtag('event', 'install', {
    event_category: 'app install',
  });
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
    View.DOM.installBanner.classList.add('hide');
  });
}


function setBuildMode() {
  backToStart();
  state.mode = 'build';
  View.setupElementsForBuildMode();
}


function createAndDisplayTrick() {
  setCurrAndPrevTrick();

  const difficulty = View.getChoices(state.mode);

  // Buttons are animated and shown in this function call
  buildTrick(difficulty, true);

  View.DOM.backBtn.classList.add('hide');
  View.DOM.generateTrickBtn.classList.add('hide');

  View.DOM.buildDiffContainer.classList.add('hide');
}


function setCurrAndPrevTrick() {
  if (state.currentTrick) {
    state.prevTrick = state.currentTrick;
    state.currentTrick = undefined;
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
      Helpers.redoPrevLanding(state.prevTrick, diff);
    }
  }

  // TODO: numTries is confusing; change it to count up to 20
  const tryGenerateTrick = numTries => {
    try {
      trick.generateTrick(state.prevTrick, state.mode);
    } catch (err) {
      if (numTries < 1) return;
      console.log(err);
      state.prevTrick = Helpers.redoPrevLanding(state.prevTrick);
      tryGenerateTrick(numTries - 1);
    }
  };
  tryGenerateTrick(20);

  trick.setName();

  if (state.prevTrick) {
    trick.generateTransition(state.prevTrick.landing);
  } else {
    trick.takeoff = Helpers.chooseFromList(trick.trickObj.setups, 'takeoffModifiers');
  }

  trick.handleHook();

  trick.generateLanding(trick.level, diff);
  trick.handleTakeoff();
  trick.handleLandingMod();

  if (trick.transition) trick.transition = Helpers.formatMod(trick.transition);
  if (trick.takeoff) trick.takeoff = Helpers.formatMod(trick.takeoff);

  if (state.mode === 'random') {
    View.displayTrick({ 
      previousTrick: state.prevTrick, 
      currentTrick: trick, 
      container: View.DOM.randomCmbContainer, 
      mode: 'random' 
    });
  } else {
    View.displayTrick({ 
      previousTrick: state.prevTrick, 
      currentTrick: trick, 
      container: View.DOM.builtCmbContainer, 
      mode: 'build', 
      animate 
    });
  }
  state.currentTrick = trick;
  console.log(trick.takeoff, trick.name, trick.landing);
}


function handleDifficulty(difficulty) {
  if (difficulty === 'random') {
    return Helpers.random(6) + 1;
  }
  return difficulty;
}


function redoTrick() {
  View.hideButtons();

  View.removeCurrentTrick(true, state.currentTrick, state.prevTrick);
  state.currentTrick = undefined;

  // Delay long enough for removal animation to finish
  setTimeout(() => {
    if (state.prevTrick) {
      // Remove previous trick and put it back with new landing
      state.prevTrick = Helpers.redoPrevLanding(state.prevTrick);

      // Redisplay last trick
      View.removeCurrentTrick();
      const hasMoreTricks = View.DOM.builtCmbContainer.children.length > 0;
      View.displayTrick({ previousTrick: hasMoreTricks, currentTrick: state.prevTrick, container: View.DOM.builtCmbContainer });

      // Pass in true value to set a delay for other animations to finish
      View.nextTrick(null, true);
    }

    View.nextTrick(null, false);
  }, 2500);
}


function newBuildCombo() {
  state.currentTrick = undefined;
  state.prevTrick = undefined;
  clear(View.DOM.builtCmbContainer);

  View.DOM.backBtn.classList.add('hide');
  setTimeout(setBuildMode, 10);
  View.DOM.buildDiffSelection.value = 'random';
}


function setRandomMode() {
  backToStart();
  state.mode = 'random';
  View.setupElementsForRandomMode();
}


function generateCombo() {
  View.DOM.randomCmbContainer.classList.remove('hide');
  let { numTricks } = View.getChoices(state.mode);
  const { difficulty } = View.getChoices(state.mode);

  clear(View.DOM.randomCmbContainer);

  if (numTricks === 'random') {
    numTricks = Helpers.random(10) + 1;
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
  state.currentTrick = undefined;
}


function backToStart() {
  if (state.mode === 'random') {
    clear(View.DOM.randomCmbContainer);
  } else {
    clear(View.DOM.builtCmbContainer);
  }
  reset();
}
