// = = = = = = = = = = = = = = = = = = = APP CONTROLLER = = = = = = = = = = = = = = = = = = =
// TESTING
// import * as Data from './models/data';

import * as Model from './models/model';
import Trick from './models/Trick';
import * as View from './view';


const app = {
  DOM: View.elements,
  state: {},


  init() {
    this.reset();
    this.setEventListeners();
  },


  reset() {
    this.state.mode = 'start';
    this.state.currTrick = undefined;
    this.state.prevTrick = undefined;
    this.state.trickCount = 0;

    this.DOM.buildDiffSelection.value = 'random';
    this.DOM.randomDiffSelection.value = 'random';
    this.DOM.numTricksSelection.value = 'random';

    this.DOM.startScreen.classList.remove('hide');
    this.DOM.randomCmbBox.classList.add('hide');
    this.DOM.buildCmbBox.classList.add('hide');
    this.DOM.backBtn.classList.add('hide');
  },


  setEventListeners() {
    this.DOM.buildCmbBtn.addEventListener('click', () => {
      this.setBuildMode();
    });

    this.DOM.generateTrickBtn.addEventListener('click', () => {
      this.createAndDisplayTrick();
    });

    this.DOM.redoBtn.addEventListener('click', () => {
      this.redoTrick();
    });

    this.DOM.nextTrickBtn.addEventListener('click', () => {
      this.nextTrick();
    });

    this.DOM.newCmbBtn.addEventListener('click', () => {
      this.newBuildCombo();
    });

    this.DOM.randomCmbBtn.addEventListener('click', () => {
      this.setRandomMode();
    });

    this.DOM.generateCmbBtn.addEventListener('click', () => {
      const choices = View.getChoices(this.state.mode);
      this.generateCombo(choices.difficulty, choices.numTricks);
    });

    this.DOM.backBtn.addEventListener('click', () => {
      this.backToStart();
    });
  },


  setBuildMode() {
    this.state.mode = 'build';
    this.DOM.startScreen.classList.add('hide');
    this.DOM.buildCmbBox.classList.remove('hide');
    this.DOM.backBtn.classList.remove('hide');
    this.DOM.generateTrickBtn.classList.remove('hide');
    this.DOM.buildDiffContainer.classList.remove('hide');

    this.DOM.redoBtn.classList.add('hide');
    this.DOM.nextTrickBtn.classList.add('hide');
    this.DOM.newCmbBtn.classList.add('hide');
  },


  setRandomMode() {
    this.state.mode = 'random';
    this.DOM.startScreen.classList.add('hide');
    this.DOM.randomCmbBox.classList.remove('hide');
    this.DOM.backBtn.classList.remove('hide');
  },


  createAndDisplayTrick() {
    this.setCurrAndPrevTrick();

    const difficulty = View.getChoices(this.state.mode);
    this.buildTrick(difficulty, this.state.prevTrick);

    this.DOM.redoBtn.classList.remove('hide');
    this.DOM.nextTrickBtn.classList.remove('hide');
    this.DOM.newCmbBtn.classList.remove('hide');

    this.DOM.generateTrickBtn.classList.add('hide');
    this.DOM.buildDiffContainer.classList.add('hide');
  },


  setCurrAndPrevTrick() {
    if (this.state.currTrick) {
      this.state.prevTrick = this.state.currTrick;
      this.state.currTrick = undefined;
    }
  },


  redoTrick() {
    this.state.currTrick = undefined;

    // Remove current trick from UI
    this.DOM.builtCmbContainer.lastElementChild.remove();
    this.removeLastTransition();
    this.removeLastConnector();

    // If there's a previous trick, remove it and put it back with new landing
    if (this.state.prevTrick) {
      const { prevTrick } = this.state;
      prevTrick.generateLanding();
      prevTrick.handleLandingMod();

      if (prevTrick.transition) {
        prevTrick.transition = Model.formatMod(prevTrick.transition);
      }

      this.DOM.builtCmbContainer.lastElementChild.remove();
      this.removeLastTransition();
      this.removeLastConnector();

      const hasMoreTricks = this.DOM.builtCmbContainer.children.length > 0;
      View.displayTrick(hasMoreTricks, prevTrick, this.DOM.builtCmbContainer);
    }

    this.nextTrick();
  },


  removeLastTransition() {
    const transElements = this.DOM.builtCmbContainer.querySelectorAll('.transition');
    if (transElements.length) {
      const lastTransEl = transElements[transElements.length - 1];
      if (this.DOM.builtCmbContainer.lastElementChild === lastTransEl) {
        lastTransEl.remove();
      }
    }
  },


  removeLastConnector() {
    const connElements = this.DOM.builtCmbContainer.querySelectorAll('.connector');
    if (connElements.length) connElements[connElements.length - 1].remove();
  },


  nextTrick() {
    this.DOM.generateTrickBtn.classList.remove('hide');
    this.DOM.buildDiffContainer.classList.remove('hide');

    this.DOM.redoBtn.classList.add('hide');
    this.DOM.nextTrickBtn.classList.add('hide');
    this.DOM.newCmbBtn.classList.add('hide');
  },


  newBuildCombo() {
    this.state.currTrick = undefined;
    this.state.prevTrick = undefined;
    this.clear(this.DOM.builtCmbContainer);

    this.setBuildMode();
    this.DOM.buildDiffSelection.value = 'random';
  },


  backToStart() {
    if (this.state.mode === 'random') {
      this.clear(this.DOM.randomCmbContainer);
    } else {
      this.clear(this.DOM.builtCmbContainer);
    }
    this.reset();
  },


  handleDifficulty(difficulty) {
    if (difficulty === 'random') {
      return Model.random(2) + 1;
    }
    return difficulty;
  },


  generateCombo(maxDiff, numTricks) {
    this.clear(this.DOM.randomCmbContainer);

    let officialNumTricks;
    if (numTricks === 'random') {
      officialNumTricks = Model.random(10) + 1;
    } else {
      officialNumTricks = numTricks;
    }

    const officialMaxDiff = this.handleDifficulty(maxDiff);

    do {
      this.setCurrAndPrevTrick();

      this.buildTrick(officialMaxDiff, this.state.prevTrick);
      this.state.trickCount += 1;
    } while (this.state.trickCount < officialNumTricks);
  },


  clear(container) {
    console.clear();
    View.clearContainer(container);
    this.state.trickCount = 0;
    this.state.prevTrick = undefined;
    this.state.currTrick = undefined;
  },


  buildTrick(maxDiff, prevTrick) {
    const officialMaxDiff = this.handleDifficulty(maxDiff);

    const trick = new Trick();

    // Set trick level
    if (this.state.mode === 'random') {
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

    if (this.state.mode === 'random') {
      View.displayTrick(prevTrick, trick, this.DOM.randomCmbContainer, 'random');
    } else {
      View.displayTrick(prevTrick, trick, this.DOM.builtCmbContainer, 'build');
    }
    this.state.currTrick = trick;
  },
};


app.init();
