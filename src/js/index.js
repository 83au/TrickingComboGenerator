// = = = = = = = = = = = = = = = = = = = APP CONTROLLER = = = = = = = = = = = = = = = = = = =
// TESTING
// import * as Data from './models/data';

import * as Model from './models/model';
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

  DOM.startScreen.classList.remove('hide');
  DOM.randomCmbBox.classList.add('hide');
  DOM.buildCmbBox.classList.add('hide');
  DOM.backBtn.classList.add('hide');
}


function setEventListeners() {
  DOM.buildCmbBtn.addEventListener('click', () => {
    setBuildMode();
  });

  DOM.generateTrickBtn.addEventListener('click', () => {
    createAndDisplayTrick();
  });

  DOM.redoBtn.addEventListener('click', () => {
    redoTrick();
  });

  DOM.nextTrickBtn.addEventListener('click', () => {
    nextTrick();
  });

  DOM.newCmbBtn.addEventListener('click', () => {
    newBuildCombo();
  });

  DOM.randomCmbBtn.addEventListener('click', () => {
    setRandomMode();
  });

  DOM.generateCmbBtn.addEventListener('click', () => {
    const choices = View.getChoices(state.mode);
    generateCombo(choices.difficulty, choices.numTricks);
  });

  DOM.backBtn.addEventListener('click', () => {
    backToStart();
  });
}


function setBuildMode() {
  state.mode = 'build';
  DOM.startScreen.classList.add('hide');
  DOM.buildCmbBox.classList.remove('hide');
  DOM.backBtn.classList.remove('hide');
  DOM.generateTrickBtn.classList.remove('hide');
  DOM.buildDiffContainer.classList.remove('hide');

  DOM.redoBtn.classList.add('hide');
  DOM.nextTrickBtn.classList.add('hide');
  DOM.newCmbBtn.classList.add('hide');
}


function createAndDisplayTrick() {
  setCurrAndPrevTrick();

  const difficulty = View.getChoices(state.mode);
  buildTrick(difficulty, state.prevTrick);

  DOM.redoBtn.classList.remove('hide');
  DOM.nextTrickBtn.classList.remove('hide');
  DOM.newCmbBtn.classList.remove('hide');

  DOM.generateTrickBtn.classList.add('hide');
  DOM.buildDiffContainer.classList.add('hide');
}


function setCurrAndPrevTrick() {
  if (state.currTrick) {
    state.prevTrick = state.currTrick;
    state.currTrick = undefined;
  }
}


function buildTrick(maxDiff, prevTrick) {
  const officialMaxDiff = handleDifficulty(maxDiff);

  const trick = new Trick();

  // Set trick level
  if (state.mode === 'random') {
    trick.generateLevel(officialMaxDiff);
  } else {
    trick.setLevel(officialMaxDiff);
  }
  trick.generateTrick(prevTrick);
  trick.setName();

  if (prevTrick) {
    trick.generateTransition(prevTrick.landing);
  } else {
    trick.takeoff = Model.chooseFromList(trick.trickObj.setups, 'takeoffModifiers');
  }

  trick.handleHook();
  trick.handleTakeoff();
  trick.generateLanding();
  trick.handleLandingMod();

  if (trick.transition) trick.transition = Model.formatMod(trick.transition);

  if (state.mode === 'random') {
    View.displayTrick(prevTrick, trick, DOM.randomCmbContainer, 'random');
  } else {
    View.displayTrick(prevTrick, trick, DOM.builtCmbContainer, 'build');
  }
  state.currTrick = trick;
}


function handleDifficulty(difficulty) {
  if (difficulty === 'random') {
    return Model.random(2) + 1;
  }
  return difficulty;
}


function redoTrick() {
  state.currTrick = undefined;

  // Remove current trick from UI
  View.removeCurrentTrick();

  // If there's a previous trick, remove it and put it back with new landing
  if (state.prevTrick) {
    const { prevTrick } = state;
    prevTrick.generateLanding();
    prevTrick.handleLandingMod();

    if (prevTrick.transition) {
      prevTrick.transition = Model.formatMod(prevTrick.transition);
    }

    View.removeCurrentTrick();

    const hasMoreTricks = DOM.builtCmbContainer.children.length > 0;
    View.displayTrick(hasMoreTricks, prevTrick, DOM.builtCmbContainer);
  }

  nextTrick();
}


function nextTrick() {
  DOM.generateTrickBtn.classList.remove('hide');
  DOM.buildDiffContainer.classList.remove('hide');

  DOM.redoBtn.classList.add('hide');
  DOM.nextTrickBtn.classList.add('hide');
  DOM.newCmbBtn.classList.add('hide');
}


function newBuildCombo() {
  state.currTrick = undefined;
  state.prevTrick = undefined;
  clear(DOM.builtCmbContainer);

  setBuildMode();
  DOM.buildDiffSelection.value = 'random';
}


function setRandomMode() {
  state.mode = 'random';
  DOM.startScreen.classList.add('hide');
  DOM.randomCmbBox.classList.remove('hide');
  DOM.backBtn.classList.remove('hide');
}


function generateCombo(maxDiff, numTricks) {
  clear(DOM.randomCmbContainer);

  let officialNumTricks;
  if (numTricks === 'random') {
    officialNumTricks = Model.random(10) + 1;
  } else {
    officialNumTricks = numTricks;
  }

  const officialMaxDiff = handleDifficulty(maxDiff);

  do {
    setCurrAndPrevTrick();

    buildTrick(officialMaxDiff, state.prevTrick);
    state.trickCount += 1;
  } while (state.trickCount < officialNumTricks);
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
