// = = = = = = = = = = = = = = = = = = = APP CONTROLLER = = = = = = = = = = = = = = = = = = =

import * as Model from './models/model';
import Trick from './models/Trick';
import * as View from './view';

// TESTING
// import * as Data from './models/data';

const state = {};

// =============== FUNCTIONS ==================
// ============================================

function buildTrick(maxDiff, preTrick) {
  // 1) Initiate new Trick object

  // 2) Generate level using maxDiff

  // 3) Generate trick using prevTrick

  // 4) Add trick to state's current trick property

  // 5) Set name

  // 6) Generate transition

  // 7) Generate landing

  // 8) Handle hook

  // 9) Handle takeoff

  // 10 Handle landing modifier

  // 11) Format transition

  // 12) Display trick in UI
}


function generateCombo(maxDiff, numTricks) {
  console.clear();

  // 1) Clear combo container and state object's trick properties
  View.clearContainer(View.elements.comboContainer);
  state.combo = [];
  state.prevTrick = undefined;
  state.currentTrick = undefined;

  // 2) Create loop that builds tricks until combo has numTricks in it
  do {
    buildTrick(maxDiff, state.prevTrick);
  } while (state.combo.length < numTricks);
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
