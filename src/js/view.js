// ****************************** UI CONTROLLER ***********************************

export const elements = {
  startScreen: document.querySelector('.start-screen'),
  buildComboLine: document.querySelector('buildComboBox hr'),
  trickElement: document.querySelector('.trick'),
  installBanner: document.querySelector('.install'),
  installBtn: document.querySelector('.install__btn'),
  installClose: document.querySelector('.install__close'),
  iosInstallPopup: document.querySelector('.ios-install'),
  iosInstallClose: document.querySelector('.ios-install__close'),

  // Info modal
  openModal: document.querySelector('.open-info'),
  closeModal: document.querySelector('.close-info'),
  modal: document.querySelector('.info-modal'),
  copy: document.querySelector('.copy'),
  year: document.querySelector('.year'),

  // Build Combo elements
  buildCmbBtn: document.getElementById('buildComboOption'),
  buildScreen: document.querySelector('.build-screen'),
  builtCmbContainer: document.getElementById('builtCombo'),
  buildDiffContainer: document.querySelector('.build-screen__choices-difficulty'),
  buildDiffSelection: document.getElementById('buildCmbDifficulty'),
  generateTrickBtn: document.getElementById('generateTrickBtn'),
  redoBtn: document.getElementById('redo'),
  nextTrickBtn: document.getElementById('next'),
  newCmbBtn: document.getElementById('new'),

  // Random combo elements
  randomCmbBtn: document.getElementById('randomComboOption'),
  randomScreen: document.querySelector('.random-screen'),
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


// Too many parameters?
export function displayTrick(prevTrick, curTrick, container, mode, animate) {
  const trickEl = document.createElement('div');

  if (mode === 'random') {
    trickEl.className = 'trick';
    if (prevTrick) createConnector(container, mode);
    displayTransition(curTrick, container, mode);
    displayTakeoffAndName(curTrick, trickEl, container);
  } else {
    animateTrick(prevTrick, curTrick, container, mode, trickEl, animate);
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


export function removeCurrentTrick(split, currTrick, prevTrick) {
  const tricks = elements.builtCmbContainer.querySelectorAll('.trick');
  const lastTrick = tricks[tricks.length - 1];

  if (split) {
    // In safari the animation doesn't always fire for some reason
    // lastTrick.addEventListener('animationend', () => {
    //   lastTrick.remove();
    //   removeLastTransition();
    //   removeLastConnector();
    //   if (!prevTrick) elements.buildDiffContainer.classList.remove('hide');
    // }, { once: true });

    lastTrick.classList.remove('build');

    const { takeoff, landingMod } = currTrick;

    if (takeoff && landingMod) {
      lastTrick.innerHTML = `
        <span class="split trick-left">${`${takeoff} ${currTrick.name} ${landingMod}`}</span>
        <span class="split trick-right">${`${takeoff} ${currTrick.name} ${landingMod}`}</span>
      `;
    } else if (takeoff) {
      lastTrick.innerHTML = `
        <span class="split trick-left">${`${takeoff} ${currTrick.name}`}</span>
        <span class="split trick-right">${`${takeoff} ${currTrick.name}`}</span>
      `;
    } else if (landingMod) {
      lastTrick.innerHTML = `
        <span class="split trick-left">${`${currTrick.name} ${landingMod}`}</span>
        <span class="split trick-right">${`${currTrick.name} ${landingMod}`}</span>
      `;
    } else {
      lastTrick.innerHTML = `
        <span class="split trick-left">${currTrick.name}</span>
        <span class="split trick-right">${currTrick.name}</span>
      `;
    }

    // Delay is to ensure the animation finishes before everything else happens
    setTimeout(() => {
      lastTrick.remove();
      removeLastTransition();
      removeLastConnector();
      if (!prevTrick) elements.buildDiffContainer.classList.remove('hide');
    }, 1900);
  } else {
    lastTrick.remove();
    removeLastTransition();
    removeLastConnector();
  }
}


// * * * * PRIVATE FUNCTIONS * * * *

// This only gets called in Build Mode
function animateTrick(prevTrick, curTrick, container, mode, trickEl, animate) {
  trickEl.classList.add('trick', 'hidden');

  if (prevTrick) createConnector(container, mode);

  const transition = displayTransition(curTrick, container, mode);

  if (transition) {
    // Delay so that connector & transition animations have time to finish
    setTimeout(() => {
      trickEl.classList.remove('hidden');
      trickEl.classList.add('build');
    }, 1100);
    displayTakeoffAndName(curTrick, trickEl, container);
  } else if (prevTrick) {
    // Delay so that connector animation has time to finish
    setTimeout(() => {
      trickEl.classList.remove('hidden');
      trickEl.classList.add('build');
    }, 800);
    displayTakeoffAndName(curTrick, trickEl, container);
  } else {
    // Animate immediately
    trickEl.classList.remove('hidden');
    trickEl.classList.add('build');
    displayTakeoffAndName(curTrick, trickEl, container);
  }

  if (animate) {
    // Using a terminating event listener, animate buttons after trick's animation
    trickEl.addEventListener('animationend', animateButtons, { once: true });
  }
}


function animateButtons() {
  elements.redoBtn.classList.remove('hide');
  elements.nextTrickBtn.classList.remove('hide');
  elements.newCmbBtn.classList.remove('hide');
  elements.backBtn.classList.remove('hide');
}


function createConnector(container, mode) {
  const connector = document.createElement('div');

  if (mode === 'random') {
    connector.className = 'connector';
  } else {
    connector.classList.add('connector', 'build');
  }

  const html = `
    <svg class="connector__arrow">
      <use xlink:href="assets/icon-spritesheet.svg#icon-arrow-down"></use>
    </svg>
  `;
  connector.insertAdjacentHTML('afterbegin', html);
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
        // ANIMATE after delay so that connector animation has time to finish
        transEl.classList.add('transition', 'hidden');
        setTimeout(() => {
          transEl.classList.remove('hidden');
          transEl.classList.add('build');
        }, 1000);
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
    trickEl.innerHTML = `${trick.takeoff} ${trick.name}`;
    container.append(trickEl);
  } else {
    trickEl.textContent = trick.name;
    container.append(trickEl);
  }
}


function displayLanding(landingMod, trickEl) {
  if (landingMod) {
    trickEl.textContent += ` ${landingMod}`;
  }
}
