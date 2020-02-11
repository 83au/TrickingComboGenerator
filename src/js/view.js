// **************************** UI CONTROLLER *******************************
import { formatMod } from './model';


// ============================ FUNCTIONS =================================

export function createTrickElement(trick, container, transition, takeoff) {
  const trickEl = document.createElement('div');
  trickEl.className = 'trick';

  let fixedTrans;
  let fixedTakeoff;

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
    container.append(transEl);
    trickEl.textContent = trick.name;
    container.append(trickEl);
  }

  if (fixedTakeoff) {
    trickEl.textContent = `${fixedTakeoff} ${trick.name}`;
    container.append(trickEl);
  } else {
    trickEl.textContent = trick.name;
    container.append(trickEl);
  }
}


export function createConnector(container) {
  const connector = document.createElement('div');
  connector.className = 'connector';
  connector.innerHTML = '&darr;';
  container.append(connector);
}


export function clearContainer(container) {
  while (container.firstChild) {
    container.firstChild.remove();
  }
}


// document.getElementById('randomComboOption').addEventListener('click', () => {
//   document.querySelector('.start-screen').style.display = 'none';
//   document.querySelector('.randomComboBox').style.display = 'block';
// });

// document.getElementById('backToChoices').addEventListener('click', () => {
//   document.querySelector('.randomComboBox').style.display = 'none';
//   document.querySelector('.start-screen').style.display = 'block';
// });
