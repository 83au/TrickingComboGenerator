// = = = = = = = = = = = = = = = = = = = APP CONTROLLER = = = = = = = = = = = = = = = = = = =

import * as Model from './models/model';
import Trick from './models/Trick';
import * as View from './view';

// TESTING
// import * as Data from './models/data';

const state = {};


// =============== FUNCTIONS ==================
// ============================================

function buildTrick(maxDiff, prevTrick) {
  const trick = new Trick();

  trick.generateLevel(maxDiff);
  console.log(trick.level);

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

  state.currTrick = trick;
  console.log(trick.name);
}


function generateCombo(maxDiff, numTricks) {
  console.clear();
  View.clearContainer(View.elements.comboContainer);
  state.trickCount = 0;
  state.prevTrick = undefined;
  state.currTrick = undefined;

  let officialNumTricks;
  if (numTricks === 'random') {
    officialNumTricks = Math.floor((Math.random() * 10) + 1);
  } else {
    officialNumTricks = numTricks;
  }

  let officialMaxDiff;
  if (maxDiff === 'random') {
    officialMaxDiff = Math.floor((Math.random() * 2) + 1);
  } else {
    officialMaxDiff = maxDiff;
  }

  do {
    if (state.currTrick) {
      state.prevTrick = state.currTrick;
      state.currTrick = undefined;
    }

    buildTrick(officialMaxDiff, state.prevTrick);
    state.trickCount += 1;
  } while (state.trickCount < officialNumTricks);
}


// =========== EVENT LISTENERS ============
View.elements.generateComboBtn.addEventListener('click', () => {
  const choices = View.getChoices();
  generateCombo(choices.difficulty, choices.numTricks);
});

// document.getElementById('randomComboOption').addEventListener('click', () => {
//   document.querySelector('.start-screen').style.display = 'none';
//   document.querySelector('.randomComboBox').style.display = 'block';
// });

// document.getElementById('backToChoices').addEventListener('click', () => {
//   document.querySelector('.randomComboBox').style.display = 'none';
//   document.querySelector('.start-screen').style.display = 'block';
// });
