// **************************** UI CONTROLLER *******************************
import { formatMod } from './models/model';

export const elements = {
  comboContainer: document.getElementById('combo'),
  generateComboBtn: document.getElementById('generateRandomCombo'),
};

// ============================ FUNCTIONS =================================

export function createTrickElement(trick, transition, takeoff) {
  const trickEl = document.createElement('div');
  trickEl.className = 'trick';

  let fixedTrans;
  let fixedTakeoff;

  // Prepare transition and takeoff elements
  if (transition) {
    if (/cheat|pop|punch$/.test(transition)) {
      fixedTakeoff = formatMod(transition, trick.name);
    } else {
      fixedTrans = formatMod(transition, trick.name);
    }
  }

  if (takeoff) {
    fixedTakeoff = takeoff;
  }

  if (fixedTrans) {
    const transEl = document.createElement('div');
    transEl.className = 'transition';
    transEl.textContent = `- ${fixedTrans} -`;
    elements.comboContainer.append(transEl);
    trickEl.textContent = trick.name;
    elements.comboContainer.append(trickEl);
  }

  if (fixedTakeoff) {
    trickEl.textContent = `${fixedTakeoff} ${trick.name}`;
    elements.comboContainer.append(trickEl);
  } else {
    trickEl.textContent = trick.name;
    elements.comboContainer.append(trickEl);
  }
}


export function createConnector() {
  const connector = document.createElement('div');
  connector.className = 'connector';
  connector.innerHTML = '&darr;';
  elements.comboContainer.append(connector);
}


export function clearContainer() {
  elements.comboContainer.innerHTML = '';
}


// document.getElementById('randomComboOption').addEventListener('click', () => {
//   document.querySelector('.start-screen').style.display = 'none';
//   document.querySelector('.randomComboBox').style.display = 'block';
// });

// document.getElementById('backToChoices').addEventListener('click', () => {
//   document.querySelector('.randomComboBox').style.display = 'none';
//   document.querySelector('.start-screen').style.display = 'block';
// });
