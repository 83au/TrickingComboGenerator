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
  // 1) Initiate new Trick object
  const trick = new Trick();

  // 2) Generate level using maxDiff
  trick.generateLevel(maxDiff);
  console.log(trick.level);

  // 3) Generate trick using prevTrick
  trick.generateTrick(prevTrick);

  // 4) Add trick to state's current trick property
  state.currTrick = trick.trickObj;

  // 5) Set name
  trick.setName();

  // 6) Generate transition
  if (prevTrick) trick.generateTransition(prevTrick.landing);

  // 7) Generate landing
  if (prevTrick) {
    trick.generateLanding();
  } else {
    trick.landing = Model.chooseFromList(trick.trickObj.setups, 'takeoffModifiers');
  }

  // 8) Handle hook
  trick.handleHook();

  // 9) Handle takeoff
  trick.handleTakeoff();

  // 10 Handle landing modifier
  trick.handleLandingMod();

  // 11) Format transition
  if (trick.transition) trick.transition = Model.formatMod(trick.transition);

  // 12) Display trick in UI
  View.displayTrick(prevTrick, trick);

  console.log(trick.name);
}


function generateCombo(maxDiff, numTricks) {
  console.clear();

  // 1) Clear combo container and state object's trick properties
  View.clearContainer(View.elements.comboContainer);
  state.trickCount = 0;
  state.prevTrick = undefined;
  state.currTrick = undefined;

  // 2) Create loop that builds tricks until combo has numTricks in it
  do {
    if (state.currTrick) {
      state.prevTrick = state.currTrick;
      state.currTrick = undefined;
    }
    buildTrick(maxDiff, state.prevTrick);
    state.trickCount += 1;
  } while (state.trickCount < numTricks);
}


// =========== EVENT LISTENERS ============
View.elements.generateComboBtn.addEventListener('click', () => {
  generateCombo(2, 4);
});

// document.getElementById('randomComboOption').addEventListener('click', () => {
//   document.querySelector('.start-screen').style.display = 'none';
//   document.querySelector('.randomComboBox').style.display = 'block';
// });

// document.getElementById('backToChoices').addEventListener('click', () => {
//   document.querySelector('.randomComboBox').style.display = 'none';
//   document.querySelector('.start-screen').style.display = 'block';
// });
