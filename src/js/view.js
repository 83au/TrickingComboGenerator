// ****************************** UI CONTROLLER ***********************************

export const elements = {
  comboContainer: document.getElementById('combo'),
  generateComboBtn: document.getElementById('generateRandomCombo'),
};


function displayTransition(trick, trickEl) {
  if (trick.transition && trick.transition !== trick.takeoff) {
    const transEl = document.createElement('div');
    transEl.className = 'transition';
    transEl.textContent = `- ${trick.transition} -`;
    elements.comboContainer.append(transEl);
    trickEl.textContent = trick.name;
    elements.comboContainer.append(trickEl);
  }
}

function displayTakeoff(trick, trickEl) {
  if (trick.takeoff) {
    trickEl.innerHTML = `<span class="takeoff">${trick.takeoff}</span> ${trick.name}`;
    elements.comboContainer.append(trickEl);
  } else {
    trickEl.textContent = trick.name;
    elements.comboContainer.append(trickEl);
  }
}

export function displayTrick(trick) {
  const trickEl = document.createElement('div');
  trickEl.className = 'trick';
  displayTransition(trick, trickEl);
  displayTakeoff(trick, trickEl);
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
