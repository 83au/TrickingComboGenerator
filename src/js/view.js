// ****************************** UI CONTROLLER ***********************************

export const elements = {
  startScreen: document.querySelector('.start-screen'),
  randomCmbBtn: document.getElementById('randomComboOption'),
  randomCmbBox: document.querySelector('.randomComboBox'),
  buildCmbBtn: document.getElementById('buildComboOption'),
  buildCmbBox: document.querySelector('.buildComboBox'),
  randomCmbContainer: document.getElementById('randomCombo'),
  randomDiffSelection: document.getElementById('randomCmbDifficulty'),
  numTricksSelection: document.getElementById('numTricks'),
  generateComboBtn: document.getElementById('generateRandomCombo'),
  backBtn: document.getElementById('backToChoices'),
};


export function displayTrick(prevTrick, curTrick) {
  const trickEl = document.createElement('div');
  trickEl.className = 'trick';

  if (prevTrick) createConnector();

  displayTransition(curTrick, trickEl);
  displayTakeoffAndName(curTrick, trickEl);
  displayLanding(curTrick.landingMod, trickEl);
}


export function getChoices() {
  const difficulty = elements.randomDiffSelection.value;
  const numTricks = elements.numTricksSelection.value;
  return {
    difficulty,
    numTricks,
  };
}


export function clearContainer(container) {
  container.innerHTML = '';
}


// * * * * PRIVATE FUNCTIONS * * * *

function createConnector() {
  const connector = document.createElement('div');
  connector.className = 'connector';
  connector.innerHTML = '&darr;';
  elements.randomCmbContainer.append(connector);
}


function displayTransition(trick) {
  if (trick.transition) {
    const notTakeoff = trick.transition !== trick.takeoff;

    if (notTakeoff) {
      const transEl = document.createElement('div');
      transEl.className = 'transition';
      transEl.textContent = `- ${trick.transition} -`;
      elements.randomCmbContainer.append(transEl);
    }
  }
}


function displayTakeoffAndName(trick, trickEl) {
  if (trick.takeoff) {
    trickEl.innerHTML = `<span class="takeoff">${trick.takeoff}</span> ${trick.name}`;
    elements.randomCmbContainer.append(trickEl);
  } else {
    trickEl.textContent = trick.name;
    elements.randomCmbContainer.append(trickEl);
  }
}


function displayLanding(landingMod, trickEl) {
  if (landingMod) {
    const landingEl = document.createElement('span');
    landingEl.className = 'landing';
    landingEl.innerHTML = `&nbsp;${landingMod}`;
    trickEl.append(landingEl);
  }
}
