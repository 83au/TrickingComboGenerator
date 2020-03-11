// = = = = = = = = = = = = = = = = = = = APP CONTROLLER = = = = = = = = = = = = = = = = = = =
// TESTING
// import * as Data from './models/data';

import * as Model from './models/model';
import Trick from './models/Trick';
import * as View from './view';

const DOM = View.elements;

const app = {
  state: {},


  init() {
    this.reset();

    DOM.randomCmbBtn.addEventListener('click', () => {
      this.state.mode = 'randomCombo';
      DOM.startScreen.classList.add('hide');
      DOM.randomCmbBox.classList.remove('hide');
      DOM.backBtn.classList.remove('hide');
    });

    DOM.generateComboBtn.addEventListener('click', () => {
      const choices = View.getChoices();
      this.generateCombo(choices.difficulty, choices.numTricks);
    });

    DOM.backBtn.addEventListener('click', () => {
      if (this.state.mode === 'randomCombo') this.clear(DOM.randomCmbContainer);
      this.reset();
    });
  },


  reset() {
    DOM.startScreen.classList.remove('hide');
    DOM.randomCmbBox.classList.add('hide');
    DOM.buildCmbBox.classList.add('hide');
    DOM.backBtn.classList.add('hide');
  },


  generateCombo(maxDiff, numTricks) {
    this.clear(DOM.randomCmbContainer);

    let officialNumTricks;
    if (numTricks === 'random') {
      officialNumTricks = Model.random(10) + 1;
    } else {
      officialNumTricks = numTricks;
    }

    let officialMaxDiff;
    if (maxDiff === 'random') {
      officialMaxDiff = Model.random(2) + 1;
    } else {
      officialMaxDiff = maxDiff;
    }

    do {
      if (this.state.currTrick) {
        this.state.prevTrick = this.state.currTrick;
        this.state.currTrick = undefined;
      }

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
    const trick = new Trick();

    trick.generateLevel(maxDiff);
    trick.generateTrick(prevTrick);
    trick.setName();

    if (prevTrick) {
      trick.generateTransition(prevTrick.landing);
    } else {
      trick.takeoff = Model.chooseFromList(trick.trickObj.setups, 'takeoffModifiers');
    }

    trick.generateLanding();
    trick.handleHook();
    trick.handleTakeoff();
    trick.handleLandingMod();

    if (trick.transition) trick.transition = Model.formatMod(trick.transition);

    View.displayTrick(prevTrick, trick);
    this.state.currTrick = trick;
  },
};


app.init();
