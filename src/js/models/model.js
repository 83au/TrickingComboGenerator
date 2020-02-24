// ****************** DATA CONTROLLER ********************

import {
  takeoffModifiers,
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
    if (/^(vanish|missleg|reverse pop|cheat|hook|wrap)$/.test(mod)) return mod;
    if (/reverse pop$/.test(mod)) return 'reverse pop';
    if (mod.startsWith('skip')) return 'skip';

    const isTrans = /(pop|punch|hyper|vanish|reversal|redirect|carry-through)$/.test(mod);
    if (isTrans) return mod.split(' ').pop();
  }
  return undefined;
}
