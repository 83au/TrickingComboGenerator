// *********************************************** DATA CONTROLLER **********************************************

// To reduce repetition
export const takeoffs = {
  swing: ['back swing', 'skip hook', 'left right redirect'],
  raiz: [
    'right left redirect',
    'front swing',
    'semi',
    'hook',
    'turn step',
    'step behind',
    'outside leg reversal',
    'skip invert',
    'vanish',
  ],
  backFullTwist: [
    'invert backside pop', // pop is implied so need to fix this somehow
    'invert backside punch',
  ],
  insideFullTwist: [
    'Aerial',
    'Slant Gainer',
    'Cartwheel',
  ],
  cartwheel: [
    'reverse vanish',
    'inside leg reversal',
    'Arabian',
    'Cart Arabian',
    'hook',
    'turn step',
    'step behind',
  ],
};

export const landingPositions = {
  eagle: [
    'invert backside pop',
    'back swing',
    'missleg',
    'skip invert', // skip from eagle into mega for a front swing
    'vanish',
  ],

  round: [
    'backside',
    'inside leg reversal',
    'left right redirect',
    'round carry-through',
    'skip round', // skip from round kick into wrap or scoot
    'vanish',
    'hook',
  ],

  hook: [
    'cheat',
    'reverse vanish',
    'frontside pop',
    'hook carry-through',
    'inside leg hyper',
    'outside leg reversal',
    'skip hook', // skip from hook or round into jstep
  ],
};


// *** TRANSITIONS AND MODIFIERS ***
export const takeoffModifiers = [ // if transition is a takeoff mod, prepend new trick with it
  'turn step',
  'step behind',
  'cheat',
  'frontside pop',
  'inside pop',
  'swing',
  // "back swing",
  // "front swing",
];

// const landingModifiers = [ // if the transition is a landing, append previous trick with it?
//   'complete', // backside
//   'hyper', // inside (mainstream: land on kicking leg)
//   'mega', // frontside land left foot first - transitions into Aerial
//   'turbo', // outside kick landing frontside both feet at same time
//   'semi', // frontside land right foot first, transitions into Raiz
//   'gyro', // A vert twist, usually 180 degrees
//   'rapid round',
//   'rapid hook',
// ];

export const transitions = [
  'hook', // *
  'hook carry-through',
  'round carry-through',

  'reverse pop',
  'irregular swing reverse pop',
  'frontside pop',
  'inside pop',
  'backside pop',
  'invert frontside pop', // for flips
  'invert inside pop',
  'invert backside pop',
  'frontside punch',
  'backside punch',
  'invert frontside punch',
  'invert backside punch',

  'vanish', // from round kick. Make invert and vert variations?
  'reverse vanish', // From outside leg. Was boneless before

  'wrap',

  'cheat',

  'rapid round',
  'rapid hook',

  'skip round', // for wraps and scoot setups
  'skip hook', // for back swing
  'skip invert', // for front swing

  'outside leg reversal',
  'inside leg reversal',
  'right left redirect',
  'left right redirect',

  'missleg',
];


export const tricks = {

  // *** NOVICE ***
  level1: [
    // KICKS
    {
      name: '360 Wheel Kick',
      starter: true,
      setups: [
        'inside pop',
        'frontside pop',
        'inside punch',
        'frontside punch',
        'cheat',
        'right left redirect',
        'hook',
      ],
      landings: ['frontside', 'frontside punch', 'hook', 'irregular swing reverse pop'],
    },

    // {
    //   name: '360 Wheel Kick Hyper',
    //   starter: true,
    //   setups: ['inside pop', 'frontside pop', 'frontside punch', 'inside punch'],
    //   landings: ['vanish', 'frontside', 'frontside pop', 'inside leg reversal'],
    // },

    {
      name: '540 Kick',
      starter: true,
      setups: ['cheat', 'vanish', 'right left redirect', 'frontside pop'],
      landings: [
        'inside leg hyper',
        'reverse vanish',
        'right left redirect',
        'skip hook',
        'wrap',
      ],
    },

    {
      name: 'Auto-Bahn',
      starter: true,
      setups: [
        'reverse pop',
        'hook carry-through',
        'outside leg reversal',
        'right left redirect',
        'hook',
      ],
      landings: landingPositions.hook,
    },

    {
      name: 'Backside 720 Kick',
      starter: true,
      setups: ['backside punch', 'backside'],
      landings: landingPositions.hook,
    },

    {
      name: 'Back Sweep',
      starter: true,
      notFinisher: true,
      setups: ['frontside', 'hook'],
      landings: ['frontside', 'frontside pop'],
    },

    {
      name: 'Butterfly Kick',
      starter: true,
      setups: ['turn step', 'hook', 'reverse vanish'],
      landings: ['reverse vanish', 'outside leg reversal', 'inside pop'],
    },

    {
      name: 'Compasso (td hook)',
      starter: true,
      notFinisher: true,
      setups: ['inside', 'frontside', 'Tornado Kick'],
      landings: landingPositions.hook,
    },

    {
      name: 'Feilong',
      starter: true,
      setups: [
        'inside pop',
        'frontside pop',
        'frontside punch',
        'inside punch',
        'cheat',
        'right left redirect',
      ],
      landings: landingPositions.round,
    },

    {
      name: 'Front Sweep',
      starter: true,
      notFinisher: true,
      setups: ['backside', 'inside leg reversal'],
      landings: ['backside', 'backside pop'],
    },

    // {
    //   name: 'hook',
    //   starter: true,
    //   notFinisher: true,
    //   setups: ['inside', 'frontside', 'right left redirect', 'vanish'],
    //   landings: landingPositions.hook,
    // },

    // {
    //   name: 'Jump Round',
    //   starter: true,
    //   notFinisher: true,
    //   setups: ['backside'], // pop is implied
    //   landings: landingPositions.round,
    // },

    {
      name: 'Narabong',
      starter: true,
      setups: ['hook carry-through', 'outside leg reversal', 'right left redirect', 'reverse pop'],
      landings: landingPositions.hook,
    },

    {
      name: 'Palm Kick',
      starter: true,
      notFinisher: true,
      setups: ['reverse vanish', 'missleg', 'hook'],
      landings: ['inside', 'inside pop', 'reverse vanish', 'outside leg reversal', 'right left redirect'],
    },

    {
      name: 'Round Kick',
      starter: true,
      notFinisher: true,
      setups: ['backside', 'inside leg reversal'],
      landings: landingPositions.round,
    },

    {
      name: 'Tornado',
      starter: true,
      notFinisher: true,
      setups: ['vanish', 'hook carry-through', 'right left redirect', 'reverse pop', 'frontside pop', 'hook'], // cheat is implied
      landings: landingPositions.round,
    },

    {
      name: 'Tsunami Kick',
      starter: true,
      setups: [
        'back swing',
        'round carry-through',
        'inside leg reversal',
        'irregular swing reverse pop',
      ],
      landings: landingPositions.hook,
    },

    // Flare Kick ?

    // TRANSITION TRICKS
    {
      name: 'Blaster Scoot',
      starter: true,
      notFinisher: true,
      setups: ['reverse vanish', 'inside'],
      landings: ['back swing', 'backside', 'backside pop', 'invert backside pop', 'vanish'],
    },

    {
      name: 'Cartwheel',
      starter: true,
      notFinisher: true,
      setups: takeoffs.cartwheel,
      landings: [
        'inside pop',
      ],
    },

    {
      name: 'Macaco',
      starter: true,
      notFinisher: true,
      setups: ['backside'], // Pop is implied
      landings: landingPositions.eagle.concat(['reverse vanish', 'right left redirect']),
    },

    {
      name: 'Round Off',
      starter: true,
      notFinisher: true,
      setups: takeoffs.cartwheel,
      landings: ['invert backside punch'],
    },

    {
      name: 'Scoot',
      starter: true,
      notFinisher: true,
      setups: ['skip round', 'semi'],
      landings: landingPositions.eagle,
    },

    {
      name: 'Scoot Hyper',
      starter: true,
      notFinisher: true,
      setups: ['skip round', 'inside leg hyper', 'semi'],
      landings: ['inside leg hyper', 'reverse vanish', 'right left redirect', 'skip hook'],
    },

    {
      name: 'Spyder',
      starter: true,
      notFinisher: true,
      setups: [
        'backside',
        'frontside',
        'vanish',
        'outside leg reversal',
        'hook carry-through',
        'semi',
      ],
      landings: ['backside', 'frontside', 'backside pop', 'frontside pop', 'vanish'],
    },

    {
      name: 'Transformer/Machine',
      starter: true,
      notFinisher: true,
      setups: [
        'backside',
        'frontside',
        'vanish',
        'outside leg reversal',
        'hook carry-through',
        'semi',
      ],
      landings: ['backside', 'frontside', 'backside pop', 'frontside pop', 'vanish'],
    },

    // Flips & Twists
    {
      name: 'Arabian',
      starter: false,
      setups: ['Aerial', 'Cartwheel', 'invert backside pop', 'invert backside punch'],
      landings: ['invert frontside punch', 'hook'],
    },

    // {
    //   name: 'Cart Arabian',
    //   starter: false,
    //   setups: takeoffs.cartwheel,
    //   landings: ['invert frontside punch', 'hook'],
    // },

    // {
    //   name: 'Front Flip',
    //   starter: true,
    //   setups: ['invert frontside punch', 'invert backside punch'],
    //   landings: ['invert frontside punch', 'reverse vanish'],
    // },
  ],

  // *** BEGINNER ***
  level2: [
    // KICKS

    // {
    //   name: '360 Wheel Kick Gyro',
    //   starter: true,
    //   setups: ['frontside pop', 'inside pop', 'inside punch', 'frontside punch'],
    //   landings: ['backside', 'backside punch'],
    // },

    // {
    //   name: '540 Gyro',
    //   starter: false,
    //   setups: ['cheat', 'vanish', 'right left redirect'],
    //   landings: ['outside', 'backside punch'],
    // },

    {
      name: '720 Kick',
      starter: true,
      setups: [
        'cheat',
        'right left redirect',
        'vanish',
        'hook carry-through',
        'reverse pop',
        'hook',
      ],
      landings: landingPositions.hook,
    },

    {
      name: '720 Kick', // Pop variation
      starter: true,
      setups: ['frontside pop', 'hook'],
      landings: landingPositions.hook,
    },

    {
      name: '720 Double',
      starter: true,
      setups: ['cheat', 'right left redirect', 'vanish', 'hook', 'frontside pop'],
      landings: landingPositions.hook,
    },

    {
      name: '900 Kick',
      starter: true,
      setups: ['cheat', 'vanish', 'right left redirect', 'skip round', 'hook', 'wrap'],
      landings: landingPositions.round,
    },

    {
      name: 'Backside 900',
      starter: true,
      setups: ['backside', 'backside punch'], // pop is implied
      landings: landingPositions.round,
    },

    {
      name: 'Crowd Awakener',
      starter: true,
      setups: ['right left redirect', 'cheat', 'vanish', 'hook'],
      landings: ['backside punch', 'hook'],
    },

    {
      name: 'E-kick',
      starter: true,
      notFinisher: true,
      setups: [
        'frontside',
        'outside leg reversal',
        'semi',
        'hook carry-through',
        'hook',
      ],
      landings: landingPositions.hook.concat(['semi', 'reverse vanish']),
    },

    {
      name: 'Hyper Feilong',
      starter: true,
      setups: ['frontside pop', 'frontside punch', 'cheat', 'right left redirect', 'hook'],
      landings: ['inside leg hyper', 'reverse vanish', 'right left redirect', 'skip hook'],
    },

    {
      name: 'Parafuso',
      starter: true,
      setups: ['vanish', 'hook'], // cheat is implied
      landings: ['backside', 'backside punch'],
    },

    {
      name: 'Swing 360 Wheel Kick', // hyper and turbo variations are implied
      starter: true,
      setups: [
        'back swing',
        'round carry-through',
        'inside leg reversal',
        'left right redirect',
        'skip hook',
        'outside leg hyper',
        'irregular swing reverse pop',
      ],
      landings: [
        'outside leg hyper',
        'vanish',
        'frontside pop',
        'frontside punch',
        'hook',
        'irregular swing reverse pop'],
    },

    {
      name: 'Swing 900 Kick',
      starter: true,
      setups: [
        'back swing',
        'round carry-through',
        'inside leg reversal',
        'left right redirect',
        'outside leg hyper',
        'irregular swing reverse pop',
      ],
      landings: landingPositions.round,
    },

    {
      name: 'Tai-fighter',
      starter: true,
      setups: ['frontside pop', 'inside pop', 'frontside punch', 'inside punch'],
      landings: landingPositions.round,
    },

    // {
    //   name: 'Tornado Double',
    //   starter: true,
    //   setups: ['vanish', 'hook carry-through', 'right left redirect'], // cheat is implied
    //   landings: landingPositions.round,
    // },

    // {
    //   name: 'Tornado Side Kick',
    //   starter: true,
    //   setups: ['vanish', 'hook carry-through', 'right left redirect', 'reverse pop'], // cheat is implied
    //   landings: landingPositions.round,
    // },

    {
      name: 'Triple Kick',
      starter: true,
      setups: [
        'j step',
        'back swing',
        'round carry-through',
        'inside leg reversal',
        'left right redirect',
        'outside leg hyper',
        'irregular swing reverse pop',
      ],
      landings: landingPositions.round,
    },

    {
      name: 'Wackknife',
      starter: true,
      setups: ['cheat', 'frontside pop', 'frontside punch'],
      landings: landingPositions.hook.concat(['frontside punch']), // turbo variation is implied
    },

    // TRANSITION TRICKS

    // Master Swipe
    {
      name: 'Cartwheel Twist',
      starter: true,
      setups: takeoffs.cartwheel,
      landings: ['backside punch', 'invert backside punch', 'reverse pop'],
    },

    {
      name: 'Coin Drop',
      starter: false,
      notFinisher: true,
      setups: ['vanish', 'reverse pop', 'inside leg hyper', 'Butterfly Kick'],
      landings: ['cheat', 'reverse pop', 'hook'],
    },

    {
      name: 'Gumbi',
      starter: true,
      notFinisher: true,
      setups: takeoffs.raiz,
      landings: landingPositions.eagle,
    },

    {
      name: 'Master Scoot',
      starter: true,
      notFinisher: true,
      setups: ['hook', 'skip round', 'inside leg hyper', 'vanish'],
      landings: landingPositions.eagle,
    },

    {
      name: 'Raiz',
      starter: true,
      notFinisher: true,
      setups: takeoffs.raiz,
      landings: landingPositions.eagle,
    },

    {
      name: 'Raiz Scissor',
      starter: true,
      notFinisher: true,
      setups: takeoffs.raiz,
      landings: ['mega', 'backside pop', 'inside leg reversal'],
    },

    {
      name: 'Sailor Moon',
      starter: true,
      notFinisher: true,
      setups: takeoffs.raiz,
      landings: landingPositions.eagle,
    },

    {
      name: 'Sailor Moon Scissor',
      starter: true,
      notFinisher: true,
      setups: takeoffs.raiz,
      landings: ['mega', 'backside pop', 'inside leg reversal'],
    },

    {
      name: 'Sideswipe',
      starter: true,
      setups: takeoffs.raiz,
      landings: ['inside leg hyper', 'reverse vanish', 'right left redirect', 'skip hook'],
    },

    {
      name: 'Suicide Kip Up',
      starter: true,
      setups: ['backside', 'inside'],
      landings: ['backside punch', 'inside punch', 'hook'],
    },

    {
      name: 'Touch Down Raiz',
      starter: true,
      notFinisher: true,
      setups: takeoffs.raiz,
      landings: landingPositions.eagle,
    },

    {
      name: 'Valdez',
      starter: false,
      notFinisher: true,
      setups: ['invert backside pop', 'invert backside punch', 'back swing'],
      landings: ['invert backside pop', 'invert backside punch', 'back swing'],
    },

    // FLIPS & TWISTS
    {
      name: 'Aerial',
      starter: true,
      setups: ['inside', 'reverse vanish', 'inside leg reversal', 'hook'],
      landings: [
        'inside',
        'inside pop',
        'reverse vanish',
        'right left redirect',
        'outside leg reversal',
        'semi',
      ],
    },

    {
      name: 'Arabian Scissor Swipe',
      starter: false,
      setups: ['invert backside pop', 'Aerial', 'Cartwheel'],
      landings: ['frontside pop', 'hook'],
    },

    {
      name: 'Back Full Hyper',
      starter: true,
      setups: takeoffs.backFullTwist,
      landings: ['inside leg hyper', 'reverse vanish', 'right left redirect', 'inside pop'],
    },

    {
      name: 'Back Full Round',
      starter: true,
      setups: takeoffs.backFullTwist,
      landings: landingPositions.round,
    },

    {
      name: 'Back Full Swipe',
      starter: true,
      setups: takeoffs.backFullTwist,
      landings: ['inside leg hyper', 'reverse vanish', 'right left redirect'],
    },

    {
      name: 'Back Full Twist',
      starter: true,
      setups: takeoffs.backFullTwist,
      landings: landingPositions.eagle,
    },

    // {
    //   name: 'Barani',
    //   starter: true,
    //   setups: ['invert frontside punch'],
    //   landings: ['invert backside punch'],
    // },

    {
      name: 'Butterfly Twist',
      starter: true,
      setups: ['hook', 'reverse vanish', 'missleg', 'turn step'],
      landings: landingPositions.eagle,
    },

    {
      name: 'Butterfly Twist Round',
      starter: true,
      setups: ['hook', 'reverse vanish', 'hyper', 'turn step'],
      landings: landingPositions.round,
    },

    {
      name: 'Butterfly Switch',
      starter: true,
      setups: ['hook', 'reverse vanish', 'hyper', 'missleg', 'turn step'],
      landings: landingPositions.eagle,
    },

    {
      name: 'Butter Knife',
      starter: true,
      setups: ['hook', 'reverse vanish', 'hyper', 'missleg', 'turn step'],
      landings: landingPositions.hook,
    },

    // {
    //   name: 'Cart Arabian Scissor Swipe',
    //   starter: false,
    //   setups: takeoffs.cartwheel,
    //   landings: ['frontside', 'frontside pop', 'hook'],
    // },

    // {
    //   name: 'Cart Full Hyper',
    //   starter: true,
    //   setups: takeoffs.cartwheel,
    //   landings: ['inside leg hyper', 'reverse vanish', 'right left redirect', 'inside pop'],
    // },

    // {
    //   name: 'Cart Full Round',
    //   starter: true,
    //   setups: takeoffs.cartwheel,
    //   landings: landingPositions.round,
    // },

    // {
    //   name: 'Cart Full Twist',
    //   starter: true,
    //   setups: takeoffs.cartwheel,
    //   landings: landingPositions.eagle,
    // },

    // {
    //   name: 'Cart Full Swipe',
    //   starter: true,
    //   setups: takeoffs.cartwheel,
    //   landings: ['inside leg hyper', 'reverse vanish', 'right left redirect'],
    // },

    {
      name: 'Corkscrew',
      starter: true,
      setups: takeoffs.swing,
      landings: landingPositions.eagle,
    },

    {
      name: 'Corkscrew Round',
      starter: true,
      setups: takeoffs.swing,
      landings: landingPositions.round,
    },

    {
      name: 'Donut Boy',
      starter: false,
      setups: ['back swing', 'skip hook', 'j step', 'pivot step'],
      landings: ['frontside', 'frontside punch', 'hook'],
    },

    {
      name: 'Double Leg',
      starter: true,
      setups: ['Tornado', '900 Kick', '360 Wheel Kick'],
      landings: ['backside', 'backside punch'],
    },

    {
      name: 'Flash Kick',
      starter: false,
      setups: ['invert backside pop', 'invert backside punch'],
      landings: ['inside pop', 'inside leg hyper', 'reverse vanish', 'right left redirect'],
    },

    {
      name: 'Full Hyper',
      starter: false,
      setups: takeoffs.insideFullTwist,
      landings: ['inside leg hyper', 'reverse vanish', 'right left redirect', 'inside pop'],
    },

    {
      name: 'Full Round',
      starter: false,
      setups: takeoffs.insideFullTwist,
      landings: landingPositions.round,
    },

    {
      name: 'Full Swipe',
      starter: false,
      setups: takeoffs.insideFullTwist,
      landings: ['inside leg hyper', 'reverse vanish', 'right left redirect'],
    },

    {
      name: 'Full Twist',
      starter: false,
      setups: takeoffs.insideFullTwist,
      landings: landingPositions.eagle,
    },

    {
      name: 'Gainer Arabian',
      starter: true,
      setups: takeoffs.swing,
      landings: ['invert frontside punch', 'reverse pop', 'frontside', 'hook'],
    },

    {
      name: 'Gainer Flash Kick',
      starter: true,
      setups: takeoffs.swing,
      landings: ['inside pop', 'inside leg hyper', 'reverse vanish', 'right left redirect'],
    },

    // {
    //   name: 'Illusion Kick',
    //   starter: true,
    //   setups: ['inside', 'reverse vanish', 'reverse pop'],
    //   landings: ['frontside pop', 'front swing', 'outside leg reversal', 'mega'],
    // },

    {
      name: 'Illusion Twist',
      starter: true,
      setups: ['hook', 'reverse vanish', 'hyper'],
      landings: ['frontside', 'frontside punch', 'hook'],
    },

    {
      name: 'Loser',
      starter: true,
      setups: ['Webster', 'backside', 'frontside'],
      landings: ['inside', 'inside pop', 'backside', 'backside pop', 'hook'],
    },

    {
      name: 'Moon Kick',
      starter: true,
      setups: takeoffs.swing,
      landings: landingPositions.hook.concat(['front swing']),
    },

    {
      name: 'Rocketboii',
      starter: false,
      setups: ['Round Off'],
      landings: ['backside', 'invert backside punch'],
    },

    {
      name: 'Shuriken Twist',
      starter: true,
      setups: ['hook', 'reverse vanish', 'hyper'],
      landings: ['frontside', 'outside', 'vanish', 'hook'],
    },

    {
      name: 'Slant Gainer',
      starter: true,
      setups: takeoffs.swing,
      landings: ['inside leg hyper', 'reverse vanish', 'right left redirect'],
    },

    {
      name: 'Terada Grab',
      starter: false,
      setups: ['invert backside pop', 'invert backside punch'],
      landings: ['reverse vanish', 'right left redirect', 'hook'],
    },

    {
      name: 'X-Out',
      starter: true,
      setups: ['invert backside pop'],
      landings: ['backside punch', 'inside punch', 'invert backside punch', 'invert inside punch', 'hook'],
    },
  ],

  // INTERMEDIATE
  level3: [
    // KICKS
    // Pop 720 Double
    // Cheat 9 Double
    // Cheat 1080
    // Backside 1080

    // TRANSITION TRICKS
    // Envergado
    // Td Raiz Swipe
    // Td Raiz Whip

    // FLIPS & TWISTS
    // Grand Master Swipe
    // Gainer Scissor Swipe
    // Snapu Swipe
    // Takuraba
    // Tak Full
    // Tak 9
    {
      name: 'Gainer Switch',
      starter: true,
      setups: takeoffs.swing,
      landings: landingPositions.eagle,
    },
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
  ],

  // ADVANCED
  level4: [
    // KICKS
    // Cheat 1260
    // Hurricane (cheat 1080 triple)

    // FLIPS & TWISTS
    // Cheat 720 Twist (Barrel Roll)
    // Dub Cork
    // Shuriken Cutter
    // Dub Btwist
    // Full Snapu
    // Double Back Flip
  ],

  // ELITE
  level5: [
    // KICKS
    // Cheat 1440

    // FLIPS & TWISTS
    // Cali Roll
    // Triple Full Twist
    // Cork Snapu
    // Cork Dleg Twist
    // Triple Cork
    // Shurikane
  ],

  // WORLD CLASS
  level6: [
    // KICKS
    // Cheat 1620

    // FLIPS & TWISTS
    {
      name: 'Cork In Back Out (Snatch Cannon)',
      starter: true,
      finisherOnly: true,
      setups: ['back swing'],
      landings: ['backside'],
    },
    // Quad Full
    // Quad Cork
    // Triple Btwist
    // Double Gainer
  ],
};


// ========================= FUNCTIONS ==========================
// ==============================================================

export function generateLevel(max) {
  const random = Math.floor(Math.random() * max + 1);
  return `level${random}`;
}


export function generateFirstTrick(level) {
  const starters = level.filter(trick => trick.starter === true);
  const trick = randomMove(starters);
  return trick;
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
  // Filter list for tricks that have a setup that matches at least one landing of prevTrick
  const possibleTricks = level.filter(trick => {
    const match = trick.setups.some(setup => prevTrick.landings.includes(setup));
    // Or if prevTrick itself is a setup for new trick
    return match || trick.setups.includes(prevTrick.name);
  });

  // Pick random trick object from list
  const trick = randomMove(possibleTricks);
  return trick;
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
