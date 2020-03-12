// ****************************** UI CONTROLLER ***********************************

export const elements = {
  startScreen: document.querySelector('.start-screen'),
  // Build Combo elements
  buildCmbBtn: document.getElementById('buildComboOption'),
  buildCmbBox: document.querySelector('.buildComboBox'),
  builtCmbContainer: document.getElementById('builtCombo'),
  buildDiffContainer: document.querySelector('.buildCmbChoices__difficulty'),
  buildDiffSelection: document.getElementById('buildCmbDifficulty'),
  generateTrickBtn: document.getElementById('generateTrickBtn'),
  redoBtn: document.getElementById('redo'),
  nextTrickBtn: document.getElementById('next'),
  newCmbBtn: document.getElementById('new'),
  // Random combo elements
  randomCmbBtn: document.getElementById('randomComboOption'),
  randomCmbBox: document.querySelector('.randomComboBox'),
  randomCmbContainer: document.getElementById('randomCombo'),
  randomDiffSelection: document.getElementById('randomCmbDifficulty'),
  numTricksSelection: document.getElementById('numTricks'),
  generateCmbBtn: document.getElementById('generateRandomCombo'),
  // Back button
  backBtn: document.getElementById('backToChoices'),
};


export function displayTrick(prevTrick, curTrick, container) {
  const trickEl = document.createElement('div');
  trickEl.className = 'trick';

  if (prevTrick) createConnector(container);

  displayTransition(curTrick, container);
  displayTakeoffAndName(curTrick, trickEl, container);
  displayLanding(curTrick.landingMod, trickEl);
}


export function getChoices(mode) {
  let difficulty;
  let numTricks;

  if (mode === 'random') {
    difficulty = elements.randomDiffSelection.value;
    numTricks = elements.numTricksSelection.value;
    return {
      difficulty,
      numTricks,
    };
  }

  difficulty = elements.buildDiffSelection.value;
  return difficulty;
}


export function clearContainer(container) {
  container.innerHTML = '';
}


// * * * * PRIVATE FUNCTIONS * * * *

function createConnector(container) {
  const connector = document.createElement('div');
  connector.className = 'connector';
  connector.innerHTML = '&darr;';
  container.append(connector);
}


function displayTransition(trick, container) {
  if (trick.transition) {
    const notTakeoff = trick.transition !== trick.takeoff;

    if (notTakeoff) {
      const transEl = document.createElement('div');
      transEl.className = 'transition';
      transEl.textContent = `- ${trick.transition} -`;
      container.append(transEl);
    }
  }
}


function displayTakeoffAndName(trick, trickEl, container) {
  if (trick.takeoff) {
    trickEl.innerHTML = `<span class="takeoff">${trick.takeoff}</span> ${trick.name}`;
    container.append(trickEl);
  } else {
    trickEl.textContent = trick.name;
    container.append(trickEl);
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
