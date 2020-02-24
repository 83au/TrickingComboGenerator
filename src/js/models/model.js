// ****************** DATA CONTROLLER ********************

import {
  takeoffModifiers,
  landingModifiers,
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
