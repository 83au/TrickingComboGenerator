// ****************** DATA CONTROLLER ********************

import {
  takeoffModifiers,
  landingModifiers,
  landingPositions,
  tricks,
} from './tricks';


export function randomMove(list) {
  if (list.length) {
    const random = Math.floor(Math.random() * list.length);
    const move = list[random];
    return move;
  }
  return undefined;
}


export function generateTakeoff(setups) {
  if (setups.length) {
    const setupMods = setups.filter(setup => takeoffModifiers.includes(setup));
    return randomMove(setupMods);
  }
  return undefined;
}


export function formatMod(mod) {
  if (mod) {
    if (/^(vanish|missleg|reverse pop|cheat|hook|wrap|complete)$/.test(mod)) return mod;
    if (/reverse pop$/.test(mod)) return 'reverse pop';
    if (mod.startsWith('skip')) return 'skip';

    const isTrans = /(pop|punch|vanish|reversal|redirect|carry-through)$/.test(mod);
    if (isTrans) return mod.split(' ').pop();

    const isLanding = /^(hyper|mega|turbo|semi|gyro frontside|gyro backside|rapid round|rapid hook)$/.test(mod);
    if (isLanding) return mod.startsWith('gyro') ? 'gyro' : mod;
  }
  return undefined;
}

export function chooseLanding(landings) {
  const possibleLandings = landings.filter(landing => landingModifiers.includes(landing));
  return randomMove(possibleLandings);
}


export function filterTrickList(obj, landing, prevTrick) {
  return tricks[obj.level].filter(trick => {
    const match = trick.setups.includes(landing);
    return match || trick.setups.includes(prevTrick.trickObj.name);
  });
}


export function adjustForLandingMod(prevTrick, obj) {
  let landing;
  const isLandingMod = landingModifiers.includes(prevTrick.landing);
  // Adjust if landing modifier
  if (isLandingMod && landingPositions[prevTrick.landing]) {
    landing = randomMove(landingPositions[prevTrick.landing]);
    obj.transition = landing;
    return landing;
  }
  return prevTrick.landing;
}


// *** CAREFUL, THESE COULD RESULT IN MAXIMUM CALL STACK EXCEEDING
// function chooseNewLevel(obj) {
//   const newLevel = randomMove(Object.keys(obj));
//   console.log(newLevel);
//   if (newLevel !== obj.level) {
//     return newLevel;
//   }
//   return chooseNewLevel(obj);
//   // obj.level = obj.level === 'level1' ? 'level2' : 'level1';
// }

// export function reFilter(possibleTricks, obj, landing, prevTrick) {
//   obj.level = chooseNewLevel(tricks);
//   const newPossibleTricks = tricks[obj.level].filter(trick => {
//     const match = trick.setups.some(setup => setup === landing);
//     // Does it match and can be a finisher?
//     if (match && !trick.notFinisher) {
//       return true;
//     } if ((trick.setups.includes(prevTrick.name) && !trick.notFinisher)) {
//       this.transition = null;
//       return true;
//     }
//     return false;
//   });

//   if (newPossibleTricks.length) {
//     return newPossibleTricks;
//   }
//   return reFilter(possibleTricks, obj, landing, prevTrick);
// }
