/*
================================================================================================
  UI CONTROLLER
================================================================================================
*/

import DOM from './elements';
import { formatMod, isTakeoff, isLanding } from '../helpers';


export function resetElements() {
  DOM.buildDiffSelection.value = 'random';
  DOM.randomDiffSelection.value = 'random';
  DOM.numTricksSelection.value = 'random';

  DOM.generateTrickBtn.classList.add('hide');
  DOM.trickListScreen.classList.add('hide');
  DOM.startScreen.classList.add('hide');
  DOM.randomScreen.classList.add('hide');
  DOM.buildScreen.classList.add('hide');
  DOM.backBtn.classList.add('hide');
}


export function activateNavItem(item) {
  DOM.nav.children.forEach(navItem => navItem.classList.remove('active'));
  if (item) item.classList.add('active');
}


export function setCopyrightYear() {
  const year = new Date().getFullYear();
  DOM.year.innerHTML = year;
}


export function closeInstallBanner() {
  DOM.installBanner.classList.add('hide');
}


export function closeIosPopup() {
  DOM.iosInstallPopup.classList.add('hide');
}


export function openModal() {
  DOM.modal.classList.add('open');
}


export function closeModal() {
  DOM.modal.classList.remove('open');
}


function createTrickList(tricks) {
  const trickListElement = DOM.trickList;

  const levels = {
    level1: 'Novice',
    level2: 'Intermediate',
    level3: 'Advanced',
    level4: 'Expert',
    level5: 'Elite',
    level6: 'GOAT',
  };

  for (const level in tricks) {
    const levelListItem = document.createElement('li');
    const h1 = document.createElement('h1');
    const ul = document.createElement('ul');

    levelListItem.className = 'trick-list__level';
    h1.textContent = levels[level];
    ul.className = 'trick-list__list';

    levelListItem.append(h1);
    levelListItem.append(ul);

    const trickList = [];

    for (const trick of tricks[level]) {
      let formattedTakeoffs = [];
      for (const setup of trick.setups) {
        if (isTakeoff(setup)) {
          formattedTakeoffs.push(formatMod(setup));
        }
      }

      let formattedLandings = [];
      for (const landing of trick.landings) {
        if (isLanding(landing)) {
          formattedLandings.push(formatMod(landing));
        }
      }

      if (!trickList.includes(trick.name)) {
        if (!formattedTakeoffs.length) {
          if (formattedLandings.length) {
            for (const landing of formattedLandings) {
              trickList.push(`${trick.name} ${landing}`);
            }
          } 
        } else if (!formattedLandings.length) {
          if (formattedTakeoffs.length) {
            for (const takeoff of formattedTakeoffs) {
              trickList.push(`${takeoff} ${trick.name}`);
            }
          }
        } else if (formattedTakeoffs.length && formattedLandings.length) {
          for (const takeoff of formattedTakeoffs) {
            trickList.push(`${takeoff} ${trick.name}`)
            for (const landing of formattedLandings) {
              trickList.push(`${takeoff || ''} ${trick.name} ${landing || ''}`);
            }
          }
        } else {
          trickList.push(trick.name);
        }
      }
    }

    const filteredTrickList = new Set(trickList);


    for (const trick of filteredTrickList.values()) {
      const trickListItem = document.createElement('li');
      trickListItem.className = 'trick-list__trick';
      trickListItem.textContent = trick;
      ul.append(trickListItem);
    }

    trickListElement.append(levelListItem);
  }
}


export function showTrickList(data) {
  resetElements();
  activateNavItem(DOM.trickListNavBtn);
  createTrickList(data);
  DOM.startScreen.classList.add('hide');
  DOM.trickListScreen.classList.remove('hide');

  DOM.trickList.querySelectorAll('h1').forEach(trigger => {
    trigger.addEventListener('click', toggleList);
  });
}


export function toggleList(event) {
  const list = event.target.nextElementSibling;

  if (list.classList.contains('show')) {
    list.classList.remove('show');
  } else {
    list.classList.add('show');
  }
}


export function animateBuildDiffButtons() {
  DOM.generateTrickBtn.classList.remove('hide');
  DOM.backBtn.classList.remove('hide');
}


export function getChoices(mode) {
  let difficulty;
  let numTricks;

  if (mode === 'random') {
    difficulty = DOM.randomDiffSelection.value;
    numTricks = DOM.numTricksSelection.value;
    return {
      difficulty,
      numTricks,
    };
  }

  difficulty = DOM.buildDiffSelection.value;
  return difficulty;
}


export function hideButtons() {
  DOM.redoBtn.classList.add('hide');
  DOM.nextTrickBtn.classList.add('hide');
  DOM.newCmbBtn.classList.add('hide');
  DOM.backBtn.classList.add('hide');
}


export function setupElementsForBuildMode() {
  resetElements();
  activateNavItem(DOM.buildNavBtn);

  // Hide build buttons
  DOM.redoBtn.classList.add('hide');
  DOM.nextTrickBtn.classList.add('hide');
  DOM.newCmbBtn.classList.add('hide');

  // Show build screen
  DOM.buildScreen.classList.remove('hide');

  // Show build options * this initiates button animation on animationend
  DOM.buildDiffContainer.classList.remove('hide');
}


export function setupElementsForRandomMode() {
  resetElements();
  activateNavItem(DOM.randomNavBtn);

  DOM.randomCmbContainer.classList.add('hide');
  DOM.randomScreen.classList.remove('hide');
  DOM.backBtn.classList.remove('hide');
}


export function nextTrick(event, delay) {
  hideButtons();

  // If this function was called clicking the generate trick button
  if (event) {
    DOM.buildDiffContainer.classList.remove('hide');
  }

  if (delay) {
    setTimeout(() => DOM.buildDiffContainer.classList.remove('hide'), 700);
  }
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
  const transElements = DOM.builtCmbContainer.querySelectorAll('.transition');

  if (transElements.length) {
    const lastTransEl = transElements[transElements.length - 1];
    if (DOM.builtCmbContainer.lastElementChild === lastTransEl) {
      lastTransEl.remove();
    }
  }
}


export function removeLastConnector() {
  const connElements = DOM.builtCmbContainer.querySelectorAll('.connector');
  if (connElements.length) connElements[connElements.length - 1].remove();
}


export function removeCurrentTrick(split, currTrick, prevTrick) {
  const tricks = DOM.builtCmbContainer.querySelectorAll('.trick');
  const lastTrick = tricks[tricks.length - 1];

  if (split) {
    // In safari the animation doesn't always fire for some reason
    // lastTrick.addEventListener('animationend', () => {
    //   lastTrick.remove();
    //   removeLastTransition();
    //   removeLastConnector();
    //   if (!prevTrick) DOM.buildDiffContainer.classList.remove('hide');
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
      if (!prevTrick) DOM.buildDiffContainer.classList.remove('hide');
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
    trickEl.addEventListener('animationend', animateTrickButtons, { once: true });
  }
}


function animateTrickButtons() {
  DOM.redoBtn.classList.remove('hide');
  DOM.nextTrickBtn.classList.remove('hide');
  DOM.newCmbBtn.classList.remove('hide');
  DOM.backBtn.classList.remove('hide');
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
