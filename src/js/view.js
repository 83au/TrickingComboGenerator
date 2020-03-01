// ****************************** UI CONTROLLER ***********************************

export const elements = {
  comboContainer: document.getElementById('combo'),
  generateComboBtn: document.getElementById('generateRandomCombo'),
};


export function clearContainer() {
  elements.comboContainer.innerHTML = '';
}


function createConnector() {
  const connector = document.createElement('div');
  connector.className = 'connector';
  connector.innerHTML = '&darr;';
  elements.comboContainer.append(connector);
}


function displayTransition(trick) {
  if (trick.transition) {
    const notTakeoff = trick.transition !== trick.takeoff;

    if (notTakeoff) {
      const transEl = document.createElement('div');
      transEl.className = 'transition';
      transEl.textContent = `- ${trick.transition} -`;
      elements.comboContainer.append(transEl);
    }
  }
}


function displayTakeoffAndName(trick, trickEl) {
  if (trick.takeoff) {
    trickEl.innerHTML = `<span class="takeoff">${trick.takeoff}</span> ${trick.name}`;
    elements.comboContainer.append(trickEl);
  } else {
    trickEl.textContent = trick.name;
    elements.comboContainer.append(trickEl);
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


export function displayTrick(prevTrick, curTrick) {
  const trickEl = document.createElement('div');
  trickEl.className = 'trick';

  if (prevTrick) createConnector();

  displayTransition(curTrick, trickEl);
  displayTakeoffAndName(curTrick, trickEl);
  displayLanding(curTrick.landingMod, trickEl);
}
