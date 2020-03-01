// = = = = = = = = = = = = = = = = = = = APP CONTROLLER = = = = = = = = = = = = = = = = = = =

import * as Model from './models/model';
import Trick from './models/Trick';
import * as View from './view';

// TESTING
// import * as Data from './models/data';


// =============== FUNCTIONS ==================
// ============================================

function generateCombo() {
  console.clear();
  View.clearContainer(View.elements.comboContainer);

  const trick1 = new Trick();
  trick1.generateLevel(2);
  trick1.generateTrick();

  // TESTING
  // trick1.level = 'level2';
  // trick1.trickObj = Data.tricks
  //   .level2[Data.tricks.level2.findIndex(el => el.name === 'Master Scoot')];

  trick1.generateLanding();
  console.log(trick1.landing);

  trick1.setName();
  trick1.takeoff = Model.chooseFromList(trick1.trickObj.setups, 'takeoffModifiers');
  trick1.handleTakeoff();
  trick1.handleLandingMod();
  View.displayTrick(null, trick1);

  console.log(trick1.name);


  const trick2 = new Trick();
  trick2.generateLevel(2);
  console.log(trick2.level);

  trick2.generateTrick(trick1);
  trick2.setName();
  trick2.generateTransition(trick1.landing);
  trick2.generateLanding();
  trick2.handleHook();
  trick2.handleTakeoff(trick1);
  trick2.handleLandingMod();
  trick2.transition = Model.formatMod(trick2.transition);
  View.displayTrick(trick1, trick2);

  console.log(trick2.name);


  const trick3 = new Trick();
  trick3.generateLevel(2);
  console.log(trick3.level);

  trick3.generateTrick(trick2);
  trick3.setName();
  trick3.generateTransition(trick2.landing);
  trick3.generateLanding();
  trick3.handleHook();
  trick3.handleTakeoff(trick2);
  trick3.handleLandingMod();
  trick3.transition = Model.formatMod(trick3.transition);
  View.displayTrick(trick2, trick3);

  console.log(trick3.name);


  const trick4 = new Trick();
  trick4.generateLevel(2);
  console.log(trick4.level);

  trick4.generateTrick(trick3);
  trick4.setName();
  trick4.generateTransition(trick3.landing);
  // trick4.generateLanding();
  trick4.handleHook();
  trick4.handleTakeoff(trick3);
  // trick4.handleLandingMod();
  trick4.transition = Model.formatMod(trick4.transition);
  View.displayTrick(trick3, trick4);

  console.log(trick4.name);
}


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
