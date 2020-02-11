import * as model from './model';
import * as view from './view';
// NEXT TODO: ADD LANDING MODIFIERS
// make landing modifiers like transitions?
/*
  If transition is a landing modifier, append previous trick with it
*/

// =========== EVENT LISTENERS ============
const DOM = view.DOMStrings;
document.getElementById(DOM.generateComboBtn).onclick = generateCombo;


// =============== FUNCTIONS ==================
// ============================================

// APP CONTROLLER
function generateCombo() {
  console.clear();

  const comboContainer = document.getElementById(DOM.comboContainer);
  let transition;
  let takeoff;

  view.clearContainer(comboContainer);

  let randomLevel = model.generateLevel(2);
  const trick1 = model.generateFirstTrick(model.tricks[randomLevel]);
  view.createTrickElement(trick1, comboContainer, model.generateMod(trick1.setups));
  view.createConnector(comboContainer);

  console.log(trick1.name);

  randomLevel = model.generateLevel(2);
  const trick2 = model.generateTrick(model.tricks[randomLevel], trick1);
  transition = model.generateTransition(trick1, trick2);
  takeoff = model.handleHook(transition, trick2);
  takeoff = model.handleTakeoff(transition, takeoff, trick2);
  view.createTrickElement(trick2, comboContainer, transition, takeoff);
  view.createConnector(comboContainer);

  console.log(trick2.name);

  randomLevel = model.generateLevel(2);
  const trick3 = model.generateTrick(model.tricks[randomLevel], trick2);
  transition = model.generateTransition(trick2, trick3);
  takeoff = model.handleHook(transition, trick3);
  takeoff = model.handleTakeoff(transition, takeoff, trick3);
  view.createTrickElement(trick3, comboContainer, transition, takeoff);
  view.createConnector(comboContainer);

  console.log(trick3.name);

  randomLevel = model.generateLevel(2);
  const trick4 = model.generateLastTrick(model.tricks[randomLevel], trick3);
  transition = model.generateTransition(trick3, trick4);
  takeoff = model.handleHook(transition, trick4);
  takeoff = model.handleTakeoff(transition, takeoff, trick4);
  view.createTrickElement(trick4, comboContainer, transition, takeoff);

  console.log(trick4.name);
}
