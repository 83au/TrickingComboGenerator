// **************************** UI CONTROLLER *******************************
export const elements = {
  comboContainer: document.getElementById('combo'),
  generateComboBtn: document.getElementById('generateRandomCombo'),
};

// ============================ FUNCTIONS =================================

export function createTrickElement(trickObj, transition, takeoff) {
  const trickEl = document.createElement('div');
  trickEl.className = 'trick';

  // Make this a helper function - displayTransition()
  if (transition && transition !== takeoff) {
    const transEl = document.createElement('div');
    transEl.className = 'transition';
    transEl.textContent = `- ${transition} -`;
    elements.comboContainer.append(transEl);
    trickEl.textContent = trickObj.name;
    elements.comboContainer.append(trickEl);
  }

  // Make this a helper function - displayTakeoff()
  if (takeoff) {
    trickEl.innerHTML = `<span class="takeoff">${takeoff}</span> ${trickObj.name}`;
    elements.comboContainer.append(trickEl);
  } else {
    trickEl.textContent = trickObj.name;
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
