// ****************************************** DATA *****************************************
import level1 from './level1';
import level2 from './level2';
import level3 from './level3';


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
  pro: 5,
  'world class': 6,
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

  // FLIPS & TWISTS
  // Shuriken Cork
  // Hyper Cork
  // Cork Swipe
  // Boxcutter
  // Wrap Full Twist
  // Tak Full Twist
  // Full Twist Double Leg
  // Full Twist Swipe
  // Full Twist Hyper Hook
  // Double Full Twist
  // Hyper Twist
  // Butterfly Twist Hyper Hook
  // Btwist dleg
  // ],

  // // ADVANCED
  // level4: [
  //   // KICKS
  //     {
  // name: '900 Double',
  //   setups: [
  //     'cheat',
  //     'vanish',
  //     'skip round',
  //     'hook',
  //     'wrap',
  //   ],
  //     landings: landingPositions.round.concat(['rapid hook']),
  // },
  //   // Cheat 1260
  //   // Hurricane (cheat 1080 triple)

  //   // FLIPS & TWISTS
  // {
  // name: 'Snapu Swipe',
  //   setups: takeoffs.raiz,
  //     landings: [ // hyper landing is implied
  //       'backside punch',
  //       'invert backside punch',
  //     ],
  // },
  //   // Cheat 720 Twist (Barrel Roll)
  //   // Dub Cork
  //   // Shuriken Cutter
  //   // Dub Btwist
  //   // Full Snapu
  //   // Double Back Flip
  // ],

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
