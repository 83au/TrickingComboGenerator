// = = = = = = = = = = = = = = = = = = = APP CONTROLLER = = = = = = = = = = = = = = = = = = =

import * as Model from './models/model';
import Trick from './models/Trick';
import * as View from './view';

import * as Data from './models/tricks';


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
  View.clearContainer(View.elements.comboContainer);

  const trick1 = new Trick();
  // trick1.generateLevel(2);
  // trick1.generateTrick();
  trick1.level = 'level1';
  [trick1.trickObj] = Data.tricks.level1;
  trick1.generateLanding();

  console.log(trick1.landing);

  trick1.setName();
  trick1.takeoff = Model.generateTakeoff(trick1.trickObj.setups);
  trick1.handleTakeoff();
  View.displayTrick(trick1);
  View.createConnector();

  console.log(trick1.name);

  const trick2 = new Trick();
  trick2.generateLevel(2);
  console.log(trick2.level);
  trick2.generateTrick(trick1);
  trick2.setName();
  trick2.generateTransition(trick1.trickObj.landings, trick2.prevLanding);
  trick2.handleHook();
  trick2.handleTakeoff();
  trick2.handleLanding();
  trick2.transition = Model.formatMod(trick2.transition);
  View.displayTrick(trick2);
  View.createConnector();

  console.log(trick2.name);

  // const trick3 = new Trick();
  // trick3.generateLevel(2);
  // trick3.generateTrick(trick2.trickObj);
  // trick3.setName();
  // trick3.generateTransition(trick2.trickObj.landings);
  // trick3.handleHook();
  // trick3.handleTakeoff();
  // trick3.transition = Model.formatMod(trick3.transition);
  // View.displayTrick(trick3);
  // View.createConnector();

  // console.log(trick3.name);

  // const trick4 = new Trick();
  // trick4.generateLevel(2);
  // trick4.generateLastTrick(trick3.trickObj);
  // trick4.setName();
  // trick4.generateTransition(trick3.trickObj.landings);
  // trick4.handleHook();
  // trick4.handleTakeoff();
  // trick4.transition = Model.formatMod(trick4.transition);
  // View.displayTrick(trick4);

  // console.log(trick4.name);
}
