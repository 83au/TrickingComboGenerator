import * as Model from './models/model';
import * as Data from './models/tricks';
import * as View from './view';

// NEXT TODO: ADD LANDING MODIFIERS
// make landing modifiers like transitions?
/*
  If transition is a landing modifier, append previous trick with it
*/

// =========== EVENT LISTENERS ============
View.elements.generateComboBtn.onclick = generateCombo;


// =============== FUNCTIONS ==================
// ============================================

// APP CONTROLLER
function generateCombo() {
  console.clear();

  let transition;
  let takeoff;

  View.clearContainer(View.elements.comboContainer);

  let randomLevel = Model.generateLevel(2);
  const trick1 = Model.generateFirstTrick(Data.tricks[randomLevel]);
  View.createTrickElement(trick1, Model.generateMod(trick1.setups));
  View.createConnector();

  console.log(trick1.name);

  randomLevel = Model.generateLevel(2);
  const trick2 = Model.generateTrick(Data.tricks[randomLevel], trick1);
  transition = Model.generateTransition(trick1, trick2);
  takeoff = Model.handleHook(transition, trick2);
  takeoff = Model.handleTakeoff(transition, takeoff, trick2);
  View.createTrickElement(trick2, transition, takeoff);
  View.createConnector();

  console.log(trick2.name);

  randomLevel = Model.generateLevel(2);
  const trick3 = Model.generateTrick(Data.tricks[randomLevel], trick2);
  transition = Model.generateTransition(trick2, trick3);
  takeoff = Model.handleHook(transition, trick3);
  takeoff = Model.handleTakeoff(transition, takeoff, trick3);
  View.createTrickElement(trick3, transition, takeoff);
  View.createConnector();

  console.log(trick3.name);

  randomLevel = Model.generateLevel(2);
  const trick4 = Model.generateLastTrick(Data.tricks[randomLevel], trick3);
  transition = Model.generateTransition(trick3, trick4);
  takeoff = Model.handleHook(transition, trick4);
  takeoff = Model.handleTakeoff(transition, takeoff, trick4);
  View.createTrickElement(trick4, transition, takeoff);

  console.log(trick4.name);
}
