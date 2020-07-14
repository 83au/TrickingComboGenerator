// ****************************************** DATA *****************************************
import level1 from './level1';
import level2 from './level2';
import level3 from './level3';
import level4 from './level4';
import level5 from './level5';


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
  'master swing',
  'hook', // *
  'hook carry-through',
  'round carry-through',

  // Pops
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
  'reverse vanish', // From outside leg. Was boneless before

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

  // Redirects
  'right left redirect',
  'left right redirect',

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
  easy: 2,
  intermediate: 3,
  advanced: 4,
  elite: 5,
  god: 6,
};

// TODO: Add properties for whether trick is a kick or a flip?
// TODO: Every trick has some form of transition between it
export const tricks = {

  // *** NOVICE ***
  level1,

  // *** BEGINNER ***
  level2,

  // *** INTERMEDIATE ***
  level3,

  // *** ADVANCE ***
  level4,

  // *** ELITE ***
  level5,

  // // ELITE
  // level5: [
  //   // KICKS
  //   // Cheat 1440

  //   // FLIPS & TWISTS
  //   // Cali Roll
  //   // Triple Full Twist
  //   // Cork Snapu
  //   // Cork Dleg Twist
  //   // Triple Cork
  //   // Shurikane
  // ],

  // // WORLD CLASS
  // level6: [
  //   // KICKS
  //   // Cheat 1620

  //   // FLIPS & TWISTS
  //   {
  //     name: 'Cork In Back Out (Snatch Cannon)',
  //     finisherOnly: true,
  //     setups: ['back swing'],
  //     landings: ['backside'],
  //   },
  //   // Quad Full
  //   // Quad Cork
  //   // Triple Btwist
  //   // Double Gainer
  // ],
};
