// = = = = = = = = = = = = = = = = = = = APP CONTROLLER = = = = = = = = = = = = = = = = = = =

import * as Model from './models/model';
import * as Data from './models/tricks';
import * as View from './view';

/* TODO: MAKE TRICK ELEMENT OBJECT ?
class trick {
  generateLevel() {

  }

  randomMove() {

  }

  generateTrick() {

  }

  etc.
}

*/


// =========== EVENT LISTENERS ============
View.elements.generateComboBtn.onclick = generateCombo;

// document.getElementById('randomComboOption').addEventListener('click', () => {
//   document.querySelector('.start-screen').style.display = 'none';
//   document.querySelector('.randomComboBox').style.display = 'block';
// });

// document.getElementById('backToChoices').addEventListener('click', () => {
//   document.querySelector('.randomComboBox').style.display = 'none';
//   document.querySelector('.start-screen').style.display = 'block';
// });


// =============== FUNCTIONS ==================
// ============================================

function generateCombo() {
  console.clear();

  let transition;
  let takeoff;

  View.clearContainer(View.elements.comboContainer);

  let randomLevel = Model.generateLevel(2);
  const trick1 = Model.generateTrick(Data.tricks[randomLevel]);
  takeoff = Model.generateTakeoff(trick1.setups);
  takeoff = Model.handleTakeoff(transition, takeoff, trick1);
  View.createTrickElement(trick1, transition, takeoff);
  View.createConnector();

  console.log(trick1.name);

  randomLevel = Model.generateLevel(2);
  const trick2 = Model.generateTrick(Data.tricks[randomLevel], trick1);
  transition = Model.generateTransition(trick1.landings, trick2.setups);
  takeoff = Model.handleHook(transition, trick2);
  takeoff = Model.handleTakeoff(transition, takeoff, trick2);
  transition = Model.formatMod(transition);
  View.createTrickElement(trick2, transition, takeoff);
  View.createConnector();

  console.log(trick2.name);

  randomLevel = Model.generateLevel(2);
  const trick3 = Model.generateTrick(Data.tricks[randomLevel], trick2);
  transition = Model.generateTransition(trick2.landings, trick3.setups);
  takeoff = Model.handleHook(transition, trick3);
  takeoff = Model.handleTakeoff(transition, takeoff, trick3);
  transition = Model.formatMod(transition);
  View.createTrickElement(trick3, transition, takeoff);
  View.createConnector();

  console.log(trick3.name);

  randomLevel = Model.generateLevel(2);
  const trick4 = Model.generateLastTrick(Data.tricks[randomLevel], trick3);
  transition = Model.generateTransition(trick3.landings, trick4.setups);
  takeoff = Model.handleHook(transition, trick4);
  takeoff = Model.handleTakeoff(transition, takeoff, trick4);
  transition = Model.formatMod(transition);
  View.createTrickElement(trick4, transition, takeoff);

  console.log(trick4.name);
}
