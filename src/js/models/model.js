// ****************** DATA CONTROLLER ********************

import * as Data from './data';


export function random(num) {
  return Math.floor(Math.random() * num);
}


export function randomMove(list) {
  if (list.length) {
    const randomIndex = random(list.length);
    const move = list[randomIndex];
    return move;
  }
  return undefined;
}


export function chooseFromList(list, modifiers) {
  if (list.length) {
    const filteredList = list.filter(item => Data[modifiers].includes(item));
    return randomMove(filteredList);
  }
  return undefined;
}


export function adjustForLandingMod(prevTrick, obj) {
  let landing;
  const prevLandingMod = Data.landingModifiers.includes(prevTrick.landing);

  if (prevLandingMod && Data.landingPositions[prevTrick.landing]) {
    landing = randomMove(Data.landingPositions[prevTrick.landing]);

    if (!(/(semi|mega)/.test(landing))) {
      obj.transition = landing;
    } else {
      obj.transition = null;
    }

    return landing;
  }

  return prevTrick.landing;
}


export function formatMod(mod) {
  if (mod) {
    if (/^(vanish|missleg|reverse pop|cheat|hook|wrap|complete)$/.test(mod)) return mod;
    if (/reverse pop$/.test(mod)) return 'reverse pop';
    if (mod.startsWith('skip')) return 'skip';

    const isTrans = /(pop|punch|vanish|reversal|redirect|carry-through)$/.test(mod);
    if (isTrans) return mod.split(' ').pop();

    const isLanding = /^(hyper|mega|turbo|semi|gyro frontside|gyro backside|half gyro frontside|half gyro backside|rapid round|rapid hook)$/.test(mod);
    if (isLanding) {
      if (mod.startsWith('gyro')) return 'gyro';
      if (mod.startsWith('half')) return 'half gyro';
      return mod;
    }
  }
  return undefined;
}


export function filterTrickList(level, landing) {
  return Data.tricks[level].filter(trick => trick.setups.includes(landing));
}


// Recursively search all levels from first to last
// Perhaps try this without recursion?
export function searchLevels(level, landing) { // TODO: need a max level
  // Stopping condition, TODO: needs to check against a max level
  if (level === 'level3') return undefined;

  // Get level number
  const levelArr = level.split('');
  const levelNum = Number(levelArr.pop());

  // Try filtering the level
  const filteredList = filterTrickList(level, landing);

  // If couldn't filter, then search the next level, otherwise return the filtered list
  return filteredList.length ? filteredList : searchLevels(`level${levelNum + 1}`, landing);
}
