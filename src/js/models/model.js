// ****************** DATA CONTROLLER ********************
/* TODO: MAKE TRICK OBJECT
class trick {
  constructor(transition, takeoffModifier, trickName, landingModifier) {
    this.transition = transition;
    this.takeoff= takeoffModifier;
    this.name = trickName;
    this.landing = landingModifier;
  }
  display() {
    * Display trick element in the UI
  }
}
*/

import {
  landingPositions,
  takeoffModifiers,
  transitions,
} from './tricks';


export function generateLevel(max) {
  const random = Math.floor(Math.random() * max + 1);
  return `level${random}`;
}


export function randomMove(list) {
  if (list.length) {
    const random = Math.floor(Math.random() * list.length);
    const move = list[random];
    return move;
  }
  return undefined;
}


export function generateMod(setups) {
  if (setups.length) {
    const setupMods = setups.filter(setup => takeoffModifiers.includes(setup));
    return randomMove(setupMods);
  }
  return undefined;
}


// Perhaps make this part of View controller?
export function formatMod(mod, trickName) {
  if (mod) {
    if (/^(vanish|missleg|reverse pop|cheat|hook|wrap)$/.test(mod)) return mod;
    if (/reverse pop$/.test(mod)) return 'reverse pop';
    if (mod.startsWith('skip')) return trickName === '900 Kick' ? 'skip wrap' : 'skip';

    const isTrans = /(pop|punch|hyper|vanish|reversal|redirect|carry-through)$/.test(mod);
    if (isTrans) return mod.split(' ').pop();
  }
  return undefined;
}


export function handleHook(transition, trick) {
  if (transition === 'hook') {
    const possibleTakeoffs = trick.setups.filter(setup => landingPositions.hook.includes(setup));
    return generateMod(possibleTakeoffs);
  }
  return undefined;
}


export function handleTakeoff(transition, takeoff, trick) {
  if (!takeoff) {
    if (takeoffModifiers.includes(transition)) return formatMod(transition, trick.name);
  }
  if (takeoffModifiers.includes(takeoff)) return formatMod(takeoff, trick.name);
  return undefined;
}


// *** CORE ALGORITHM ***
export function generateTrick(level, prevTrick) {
  let selectedTrick;

  if (prevTrick) {
    // Filter list for tricks that have a setup that matches at least one landing of prevTrick
    const possibleTricks = level.filter(trick => {
      const match = trick.setups.some(setup => prevTrick.landings.includes(setup));
      // Or if prevTrick itself is a setup for new trick
      return match || trick.setups.includes(prevTrick.name);
    });
    // Pick random trick object from list
    selectedTrick = randomMove(possibleTricks);
  } else {
    selectedTrick = randomMove(level);
  }

  return selectedTrick;
}


export function generateTransition(prevTrick, current) {
  if (current.setups) {
    // Filter current trick's setups for ones that match previous trick's landings
    const matches = current.setups.filter(setup => prevTrick.landings.includes(setup));

    if (matches.length > 0) {
      // Cross check matches with transitions list
      const possibleTransitions = transitions.filter(trans => matches.includes(trans));
      if (possibleTransitions.length > 1) {
        // Pick random transition from possible transition list
        return possibleTransitions[Math.floor(Math.random() * possibleTransitions.length)];
      }
      if (possibleTransitions.length === 0) {
        return undefined;
      }
      return possibleTransitions[0];
    }
  }
  return undefined;
}


export function generateLastTrick(level, prevTrick) {
  const possibleTricks = level.filter(trick => {
    const match = trick.setups.some(setup => prevTrick.landings.includes(setup));
    return (match && !trick.notFinisher)
      || (trick.setups.includes(prevTrick.name) && !trick.notFinisher);
  });

  // Pick random trick object from list
  const trick = randomMove(possibleTricks);
  if (!trick) return { name: 'Finishing Trick' };
  return trick;
}
