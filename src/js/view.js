// ****************************** UI CONTROLLER ***********************************

export const elements = {
  startScreen: document.querySelector('.start-screen'),
  buildComboLine: document.querySelector('buildComboBox hr'),
  trickElement: document.querySelector('.trick'),

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


export function displayTrick(prevTrick, curTrick, container, mode) {
  const trickEl = document.createElement('div');

  if (mode === 'random') {
    trickEl.className = 'trick';

    if (prevTrick) createConnector(container, mode);

    displayTransition(curTrick, container, mode);
    displayTakeoffAndName(curTrick, trickEl, container);
  } else {
    animateTrick(prevTrick, curTrick, container, mode, trickEl);
  }

  displayLanding(curTrick.landingMod, trickEl);
}


export function clearContainer(container) {
  container.innerHTML = '';
}


export function removeLastTransition() {
  const transElements = elements.builtCmbContainer.querySelectorAll('.transition');

  if (transElements.length) {
    const lastTransEl = transElements[transElements.length - 1];
    if (elements.builtCmbContainer.lastElementChild === lastTransEl) {
      lastTransEl.remove();
    }
  }
}


export function removeLastConnector() {
  const connElements = elements.builtCmbContainer.querySelectorAll('.connector');
  if (connElements.length) connElements[connElements.length - 1].remove();
}


export function removeCurrentTrick() {
  elements.builtCmbContainer.lastElementChild.remove();
  removeLastTransition();
  removeLastConnector();
}

// * * * * PRIVATE FUNCTIONS * * * *

function animateTrick(prevTrick, curTrick, container, mode, trickEl) {
  trickEl.classList.add('trick', 'hidden');

  if (prevTrick) createConnector(container, mode);

  const transition = displayTransition(curTrick, container, mode);

  if (transition) {
    setTimeout(() => {
      trickEl.classList.remove('hidden');
      trickEl.classList.add('build');
    }, 600);
    displayTakeoffAndName(curTrick, trickEl, container);
  } else if (prevTrick) {
    setTimeout(() => {
      trickEl.classList.remove('hidden');
      trickEl.classList.add('build');
    }, 200);
    displayTakeoffAndName(curTrick, trickEl, container);
  } else {
    trickEl.classList.remove('hidden');
    trickEl.classList.add('build');
    displayTakeoffAndName(curTrick, trickEl, container);
  }

  trickEl.addEventListener('animationend', e => {
    console.log(e);
    elements.redoBtn.classList.remove('hide');
    elements.nextTrickBtn.classList.remove('hide');
    elements.newCmbBtn.classList.remove('hide');
    elements.backBtn.classList.remove('hide');
  });
}


function createConnector(container, mode) {
  const connector = document.createElement('div');
  if (mode === 'random') {
    connector.className = 'connector';
  } else {
    connector.classList.add('connector', 'build');
  }
  connector.innerHTML = '&darr;';
  container.append(connector);
}


function displayTransition(trick, container, mode) {
  if (trick.transition) {
    const notTakeoff = trick.transition !== trick.takeoff;

    if (notTakeoff) {
      const transEl = document.createElement('div');
      if (mode === 'random') {
        transEl.className = 'transition';
      } else {
        transEl.classList.add('transition', 'hidden');
        setTimeout(() => {
          transEl.classList.remove('hidden');
          transEl.classList.add('build');
        }, 500);
      }
      transEl.textContent = `- ${trick.transition} -`;
      container.append(transEl);
    }
    return true;
  }
  return false;
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
