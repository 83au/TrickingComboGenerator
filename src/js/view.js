// ****************************** UI CONTROLLER ***********************************

export const elements = {
  comboContainer: document.getElementById('combo'),
  generateComboBtn: document.getElementById('generateRandomCombo'),
};


function displayTransition(trick, trickEl) {
  const notTakeoff = trick.transition !== trick.takeoff;
  const notLanding = trick.transition !== trick.prevLanding;

  if (trick.transition && notTakeoff && notLanding) {
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

function displayLanding(landing, trickEl) {
  console.log(landing);
  if (landing) {
    const landingEl = document.createElement('span');
    landingEl.className = 'landing';
    landingEl.innerHTML = `&nbsp;${landing}`;
    trickEl.append(landingEl);
  }
}

// function displayLanding(landing) {
//   if (landing) {
//     const landingEl = document.createElement('span');
//     landingEl.className = 'landing';
//     landingEl.innerHTML = `&nbsp;${landing}`;
//     const trickList = document.querySelectorAll('.trick');
//     const prevTrickEl = trickList[trickList.length - 1];
//     prevTrickEl.append(landingEl);
//   }
// }

export function displayTrick(trick) {
  const trickEl = document.createElement('div');
  trickEl.className = 'trick';
  displayTakeoff(trick, trickEl);
  displayLanding(trick.landing, trickEl);
  displayTransition(trick, trickEl);
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
