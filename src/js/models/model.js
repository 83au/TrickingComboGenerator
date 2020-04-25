// ****************** DATA CONTROLLER ********************

import * as Data from './data/data';
import landingPositions from './data/landings';


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

  if (prevLandingMod && landingPositions[prevTrick.landing]) {
    landing = randomMove(landingPositions[prevTrick.landing]);

    if (!(/semi|mega/.test(landing))) {
      obj.transition = landing;
    } else {
      obj.transition = null;
    }

    return landing;
  }

  return prevTrick.landing;
}


// * THIS FUNCTION IS FOR BUILD MODE ONLY
export function redoPrevLanding(prevTrick) {
  prevTrick.generateLanding();
  prevTrick.handleLandingMod();

  if (prevTrick.transition) {
    prevTrick.transition = formatMod(prevTrick.transition);
  }

  return prevTrick;
}


export function formatMod(mod) {
  if (mod) {
    if (/^(vanish|missleg|reverse pop|cheat|hook|wrap|complete|skip)$/.test(mod)) return mod;
    if (/reverse pop$/.test(mod)) return 'reverse pop';
    if (mod === 'skip round') return 'skip';
    if (/skip backswing|skip frontswing| skip masterswing/.test(mod)) return 'skip swing';
    if (/left right redirect/.test(mod)) return 'redirect swing';

    const isTrans = /(pop|punch|vanish|reversal|redirect|carry-through|swing)$/.test(mod);
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

// * THIS FUNCTION IS FOR RANDOM MODE ONLY
// Recursively search all levels from first to last
export function searchLevels(level, landing) {
  // Stopping condition, TODO: needs to check against a max level
  if (level === 'level3') return undefined;

  // Get level number
  const levelNum = Number(level.match(/\d$/));

  // Try filtering the level
  const filteredList = filterTrickList(level, landing);

  // If couldn't filter, then search the next level, otherwise return the filtered list
  return filteredList.length ? filteredList : searchLevels(`level${levelNum + 1}`, landing);
}
