// ****************************************** DATA *****************************************
import level1 from './level1';
import level2 from './level2';
import level3 from './level3';
import level4 from './level4';
import level5 from './level5';
import level6 from './level6';


// *** TRANSITIONS AND MODIFIERS ***
export const takeoffModifiers = [ // if transition is a takeoff mod, prepend new trick with it
  'turn step',
  'step behind',
  'cheat',
  'frontside pop',
  'invert frontside pop',
  'inside pop',
  'invert inside pop',
  'outside pop',
  'backside pop',
  'invert backside pop',
  'back swing',
  'front swing',
  'master swing',
  'wrap',
];

export const landingModifiers = [
  'complete', // backside
  'hyper', // inside (mainstream: land on inside kicking leg)
  'inverted hyper',
  'mega', // frontside land left foot first - swings into Aerial
  'turbo', // outside kick landing frontside both feet at same time
  'semi', // frontside land right foot first, swings into Raiz
  'gyro frontside', // A vert twist in air after trick, landing frontside
  'gyro backside', // landing backside
  'half gyro frontside',
  'half gyro backside',
  'rapid round',
  'rapid hook',
  'broken',
];

export const transitions = [
  'back swing',
  'front swing',
  'scoot master swing',
  'master swing',
  'cart swing',
  'hook', // *
  'hook carry-through',
  'round carry-through',

  // Pops
  // TODO: Differentiate frontside vs backside reverse pops
  'reverse pop',
  'right first reverse pop',
  'frontside pop',
  'inside pop',
  'outside pop',
  'backside pop',
  'invert frontside pop', // for flips
  'invert inside pop',
  'invert backside pop',

  // Punches
  'outside punch',
  'backside punch',
  'frontside punch',
  'inside punch',
  'invert frontside punch',
  'invert backside punch',

  // Vanishes
  'vanish', // from round kick. Make invert and vert variations?
  'invert vanish', // for Tak Fulls & raizes *(perhaps make it for GMS as well?)
  'reverse vanish', // From outside leg.

  'wrap',

  'cheat',

  // Rapids
  'rapid round',
  'rapid hook',

  // Skips
  'skip round', // for wraps and scoot setups
  'skip backswing', // for back swing
  'skip frontswing', // for front swing
  'skip masterswing', // For master scoot and gms

  // Reversals
  'outside leg reversal',
  'inside leg reversal',

  // Redirects TODO: Remove references to right/left and replace with inside/outside
  'right left redirect', // will be: 'inside leg redirect
  'left right redirect', // will be: 'outside leg redirect

  'missleg',

  // Landing Mods
  'complete',
  'hyper',
  'mega',
  'turbo',
  'semi',
  'broken',
  'gyro frontside',
  'gyro backside',
  'half gyro frontside',
  'half gyro backside',
  'rapid round',
  'rapid hook',
];

export const difficultyLevels = {
  novice: 1,
  intermediate: 2,
  advanced: 3,
  expert: 4,
  elite: 5,
  goat: 6,
};

export const tricks = {
  // *** NOVICE ***
  level1,

  // *** INTERMEDIATE ***
  level2,

  // *** ADVANCE ***
  level3,

  // *** EXPERT ***
  level4,

  // *** ELITE ***
  level5,

  // *** GOAT ***
  level6,
};
