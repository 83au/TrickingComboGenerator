// ****************************** UI CONTROLLER ***********************************

export const elements = {
  comboContainer: document.getElementById('combo'),
  generateComboBtn: document.getElementById('generateRandomCombo'),
};


// function displayTransition(trick, trickEl) {
//   const notTakeoff = trick.transition !== trick.takeoff;
//   const notLanding = trick.transition !== trick.prevLanding;

//   if (trick.transition && notTakeoff && notLanding) {
//     const transEl = document.createElement('div');
//     transEl.className = 'transition';
//     transEl.textContent = `- ${trick.transition} -`;
//     elements.comboContainer.append(transEl);
//     trickEl.textContent = trick.name;
//     elements.comboContainer.append(trickEl);
//   }
// }

// function displayTakeoff(trick, trickEl) {
//   if (trick.takeoff) {
//     trickEl.innerHTML = `<span class="takeoff">${trick.takeoff}</span> ${trick.name}`;
//     elements.comboContainer.append(trickEl);
//   } else {
//     trickEl.textContent = trick.name;
//     elements.comboContainer.append(trickEl);
//   }
// }

// function displayLanding(landingMod, trickEl) {
//   console.log(landingMod);
//   if (landingMod) {
//     const landingEl = document.createElement('span');
//     landingEl.className = 'landing';
//     landingEl.innerHTML = `&nbsp;${landingMod}`;
//     trickEl.append(landingEl);
//   }
// }

// // function displayLanding(landing) {
// //   if (landing) {
// //     const landingEl = document.createElement('span');
// //     landingEl.className = 'landing';
// //     landingEl.innerHTML = `&nbsp;${landing}`;
// //     const trickList = document.querySelectorAll('.trick');
// //     const prevTrickEl = trickList[trickList.length - 1];
// //     prevTrickEl.append(landingEl);
// //   }
// // }

// export function displayTrick(trick) {
//   const trickEl = document.createElement('div');
//   trickEl.className = 'trick';
//   displayTakeoff(trick, trickEl);
//   displayLanding(trick.landingMod, trickEl);
//   displayTransition(trick, trickEl);
// }


function createConnector() {
  const connector = document.createElement('div');
  connector.className = 'connector';
  connector.innerHTML = '&darr;';
  elements.comboContainer.append(connector);
}


export function clearContainer() {
  elements.comboContainer.innerHTML = '';
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
