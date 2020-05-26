// = = = = = = = = = = = = = = = = = = = APP CONTROLLER = = = = = = = = = = = = = = = = = = =

import * as Model from './models/model';
import * as Data from './models/data/data';
import Trick from './models/Trick';
import * as View from './view';
import '../styles.css';


const DOM = View.elements;
const state = {};


init();


function init() {
  reset();
  setEventListeners();
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


function setEventListeners() {
  DOM.buildCmbBtn.addEventListener('click', setBuildMode);
  // Safari does not support 'animationend'
  // DOM.buildDiffContainer.addEventListener('animationend', e => animateButtons(e));
  DOM.generateTrickBtn.addEventListener('click', createAndDisplayTrick);
  DOM.redoBtn.addEventListener('click', redoTrick);
  DOM.nextTrickBtn.addEventListener('click', nextTrick);
  DOM.newCmbBtn.addEventListener('click', newBuildCombo);
  DOM.randomCmbBtn.addEventListener('click', setRandomMode);
  DOM.generateCmbBtn.addEventListener('click', generateCombo);
  DOM.backBtn.addEventListener('click', backToStart);
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

  // Show build options and initial buttons
  DOM.buildDiffContainer.classList.remove('hide');
  setTimeout(animateButtons, 500);
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
  }

  tryGenerateTrick(trick);

  trick.setName();

  if (state.prevTrick) {
    trick.generateTransition(state.prevTrick.landing);
  } else {
    trick.takeoff = Model.chooseFromList(trick.trickObj.setups, 'takeoffModifiers');
  }

  trick.handleHook();
  trick.handleTakeoff();
  trick.generateLanding();
  trick.handleLandingMod();

  if (trick.transition) trick.transition = Model.formatMod(trick.transition);

  if (state.mode === 'random') {
    View.displayTrick(state.prevTrick, trick, DOM.randomCmbContainer, 'random');
  } else {
    View.displayTrick(state.prevTrick, trick, DOM.builtCmbContainer, 'build', animate);
  }
  state.currTrick = trick;
}


function handleDifficulty(difficulty) {
  if (difficulty === 'random') {
    return Model.random(3) + 1;
  }
  return difficulty;
}


function tryGenerateTrick(trick) {
  try {
    trick.generateTrick(state.prevTrick, state.mode);
  } catch (err) {
    console.log(err);
    state.prevTrick = Model.redoPrevLanding(state.prevTrick);
    tryGenerateTrick(trick);
  }
}


function redoTrick() {
  state.currTrick = undefined;
  View.removeCurrentTrick(DOM.builtCmbContainer);

  if (state.prevTrick) {
    // Remove previous trick and put it back with new landing
    state.prevTrick = Model.redoPrevLanding(state.prevTrick);

    // Redisplay last trick
    View.removeCurrentTrick();
    const hasMoreTricks = DOM.builtCmbContainer.children.length > 0;
    View.displayTrick(hasMoreTricks, state.prevTrick, DOM.builtCmbContainer);
  }

  nextTrick();
}

function nextTrick() {
  DOM.redoBtn.classList.add('hide');
  DOM.nextTrickBtn.classList.add('hide');
  DOM.newCmbBtn.classList.add('hide');
  DOM.backBtn.classList.add('hide');

  // Make asynchronous function ?
  setTimeout(() => {
    DOM.buildDiffContainer.classList.remove('hide');
    setTimeout(animateButtons, 500);
  }, 100);
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

  difficulty = handleDifficulty(difficulty);

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
