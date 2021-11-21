// ****************** DATA CONTROLLER ********************

import * as Data from './models/data/data';
import landingPositions from './models/data/landings';


export function random(num) {
  return Math.floor(Math.random() * num);
}


export function isTakeoff(setup) {
  return /(carry-through|reverse pop|pop|punch|cheat)/.test(setup);
}


export function isLanding(landing) {
  return /^(mega|turbo|semi|gyro frontside|gyro backside|half gyro frontside|half gyro backside|rapid round|rapid hook|broken)$/.test(landing);
}


export function randomMove(list) {
  if (list.length) {
    const randomIndex = random(list.length);
    const move = list[randomIndex];
    return move;
  }
}


export function chooseFromList(list, modifiers) {
  if (list.length) {
    const filteredList = list.filter(item => Data[modifiers].includes(item));
    return randomMove(filteredList);
  }
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
export function redoPrevLanding(prevTrick, diff) {
  prevTrick.generateLanding(prevTrick.level, diff);
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

    const isTrans = /(pop|punch|vanish|reversal|redirect|carry-through|swing|hyper)$/.test(mod);
    if (isTrans) return mod.split(' ').pop();

    const isALanding = isLanding(mod);
    if (isALanding) {
      if (mod.startsWith('gyro')) return 'gyro';
      if (mod.startsWith('half')) return 'half gyro';
      return mod;
    }
  }
}


export function filterTrickList(level, landing) {
  return Data.tricks[level].filter(trick => trick.setups.includes(landing));
}

// * THIS FUNCTION IS FOR RANDOM MODE ONLY
// Recursively search all levels from first to last
export function searchLevels(level, landing, prevTrick) {
  // Stopping condition, TODO: needs to check against a max level
  if (level === 'level6') return;

  // Get level number
  const levelNum = Number(level.match(/\d$/));

  // Try filtering the level
  const filteredList = filterTrickList(level, landing, prevTrick);

  // If couldn't filter, then search the next level, otherwise return the filtered list
  return filteredList.length ? filteredList : searchLevels(`level${levelNum + 1}`, landing, prevTrick);
}
