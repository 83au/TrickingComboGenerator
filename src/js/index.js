// = = = = = = = = = = = = = = = = = = = APP CONTROLLER = = = = = = = = = = = = = = = = = = =
// TESTING
// import * as Data from './models/data';

import * as Model from './models/model';
import Trick from './models/Trick';
import * as View from './view';


const app = {
  state: {},

  init() {
    View.elements.generateComboBtn.addEventListener('click', () => {
      const choices = View.getChoices();
      this.generateCombo(choices.difficulty, choices.numTricks);
    });

    // document.getElementById('randomComboOption').addEventListener('click', () => {
    //   document.querySelector('.start-screen').style.display = 'none';
    //   document.querySelector('.randomComboBox').style.display = 'block';
    // });

    // document.getElementById('backToChoices').addEventListener('click', () => {
    //   document.querySelector('.randomComboBox').style.display = 'none';
    //   document.querySelector('.start-screen').style.display = 'block';
    // });
  },

  generateCombo(maxDiff, numTricks) {
    this.clear();

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

  clear() {
    console.clear();
    View.clearContainer(View.elements.comboContainer);
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
