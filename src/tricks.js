// DATA CONTROLLER

const takeoffs = {
  swing: ['back swing', 'j step', 'pivot step', 'skip hook', 'left right redirect'],
  raiz: [
    'right left redirect',
    'front swing',
    'semi',
    'Hook Kick',
    'outside leg reversal',
    'skip invert',
    'vanish',
  ],
  backFullTwist: [
    'Shosei step',
    'Front Sweep',
    'Tornado',
    'invert backside pop',
    'invert backside punch',
  ],
  insideFullTwist: [
    'Aerial',
    'Slant Gainer',
  ],
  cartwheel: ['reverse vanish'],
};

const landingPositions = {
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
  ],

  hook: [
    'reverse vanish',
    'right left redirect',
    'frontside pop',
    'hook carry-through',
    'inside leg hyper',
    'outside leg reversal',
    'skip hook', // skip from hook or round into jstep
  ],
};

const takeoffModifiers = [ // if transition is a takeoff mod, prepend the trick with it
  'cheat',
  'frontside pop',
  'inside pop',
  'j step',
  'pivot step',
  'Shosei step',
  'swing',
  'wrap',
  // "back swing",
  // "front swing",
];

// const landingModifiers = [ // if the transition is a landing, append previous trick with it?
//   'complete', // backside
//   'hyper', // inside (mainstream: land on kicking leg)
//   'mega', // frontside
//   'turbo', // outside kick landing frontside both feet at same time
//   'semi', // outside
//   'gyro'
// ];

const transitions = [
  'hook carry-through',
  'round carry-through',

  'reverse pop',
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

  'skip round', // for wraps and scoot setups
  'skip hook', // for back swing
  'skip invert', // for front swing

  'outside leg reversal',
  'inside leg reversal',
  'right left redirect',
  'left right redirect',

  'missleg',
];


const tricks = {

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
      ],
      landings: ['frontside', 'frontside punch'],
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
      setups: ['cheat', 'vanish', 'right left redirect', 'frontside pop', 'reverse pop'],
      landings: ['inside leg hyper', 'reverse vanish', 'right left redirect', 'skip hook'],
    },

    {
      name: 'Auto-Bahn',
      starter: true,
      setups: ['reverse pop', 'hook carry-through', 'outside leg reversal', 'right left redirect'],
      landings: landingPositions.hook,
    },

    {
      name: 'Backside 720 Kick',
      starter: true,
      setups: ['backside pop', 'backside punch'],
      landings: landingPositions.hook,
    },

    {
      name: 'Back Sweep',
      starter: true,
      notFinisher: true,
      setups: ['frontside', 'Hook Kick'],
      landings: ['frontside', 'frontside pop'],
    },

    {
      name: 'Butterfly Kick',
      starter: true,
      setups: ['turn step', 'Hook Kick', 'reverse vanish'],
      landings: ['reverse vanish', 'outside leg reversal', 'inside pop'],
    },

    {
      name: 'Compasso (td hook)',
      starter: true,
      notFinisher: true,
      setups: ['inside', 'frontside', 'Tornado Kick'],
      landings: landingPositions.hook.concat(['outside leg reversal']),
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

    {
      name: 'Hook Kick',
      starter: true,
      notFinisher: true,
      setups: ['inside', 'frontside', 'right left redirect', 'vanish'],
      landings: landingPositions.hook,
    },

    {
      name: 'Jump Round',
      starter: true,
      notFinisher: true,
      setups: ['backside'], // pop is implied
      landings: landingPositions.round,
    },

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
      setups: ['reverse vanish', 'missleg'],
      landings: ['inside', 'inside pop', 'reverse vanish', 'outside leg reversal', 'right left redirect'],
    },

    {
      name: 'Roundhouse Kick',
      starter: true,
      notFinisher: true,
      setups: ['backside', 'inside leg reversal'],
      landings: landingPositions.round,
    },

    {
      name: 'Tornado',
      starter: true,
      notFinisher: true,
      setups: ['vanish', 'hook carry-through', 'right left redirect', 'reverse pop', 'frontside pop'], // cheat is implied
      landings: landingPositions.round,
    },

    {
      name: 'Tsunami Kick',
      starter: true,
      setups: ['back swing', 'round carry-through', 'inside leg reversal', 'reverse pop'],
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
      setups: ['skip round', 'inside leg hyper', 'semi'],
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
      setups: ['Scoot', 'Aerial', 'invert backside pop', 'invert backside punch'],
      landings: ['invert frontside punch', 'semi'],
    },

    {
      name: 'Cart Arabian',
      starter: false,
      setups: takeoffs.cartwheel,
      landings: ['invert frontside punch', 'semi'],
    },

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
      setups: ['cheat', 'right left redirect', 'vanish', 'hook carry-through', 'reverse pop'],
      landings: landingPositions.hook,
    },

    {
      name: '720 Kick', // Pop variation
      starter: true,
      setups: ['frontside pop'],
      landings: landingPositions.hook,
    },

    {
      name: '720 Double',
      starter: true,
      setups: ['cheat', 'right left redirect', 'vanish'],
      landings: landingPositions.hook,
    },

    {
      name: '900 Kick',
      starter: true,
      setups: ['cheat', 'vanish', 'right left redirect', 'skip round'],
      landings: landingPositions.round,
    },

    {
      name: 'Backside 900',
      starter: true,
      setups: ['backside', 'backside pop', 'backside punch'],
      landings: landingPositions.round,
    },

    {
      name: 'Crowd Awakener',
      starter: true,
      setups: ['right left redirect', 'cheat', 'vanish'],
      landings: ['backside punch'],
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
      ],
      landings: landingPositions.hook.concat(['semi', 'reverse vanish']),
    },

    {
      name: 'Hyper Feilong',
      starter: true,
      setups: ['frontside pop', 'frontside punch', 'cheat', 'right left redirect'],
      landings: ['inside leg hyper', 'reverse vanish', 'right left redirect', 'skip hook'],
    },

    {
      name: 'Parafuso',
      starter: true,
      setups: ['vanish'], // cheat is implied
      landings: ['backside', 'backside punch'],
    },

    {
      name: 'Swing 360', // hyper and turbo variations are implied
      starter: true,
      setups: [
        'back swing',
        'round carry-through',
        'inside leg reversal',
        'left right redirect',
      ],
      landings: ['outside leg hyper', 'vanish', 'frontside pop', 'frontside punch'],
    },

    {
      name: 'Swing 900 Kick',
      starter: true,
      setups: ['back swing', 'round carry-through', 'inside leg reversal', 'left right redirect'],
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
      setups: ['j step', 'back swing', 'round carry-through', 'inside leg reversal', 'left right redirect'],
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
      landings: ['cheat', 'reverse pop'],
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
      setups: ['Back Sweep', 'Front Sweep', 'Hook Kick', 'skip round', 'inside leg hyper', 'vanish'],
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
      landings: ['mega', 'frontside pop', 'inside leg reversal'],
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
      landings: ['mega', 'frontside pop', 'inside leg reversal'],
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
      landings: ['backside punch', 'inside punch'],
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
      setups: ['inside', 'reverse vanish'],
      landings: ['inside', 'reverse vanish', 'right left redirect', 'outside leg reversal', 'semi', 'inside pop'],
    },

    {
      name: 'Arabian Scissor Swipe',
      starter: false,
      setups: ['invert backside pop', 'Aerial'],
      landings: ['frontside pop'],
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
      setups: ['Hook Kick', 'reverse vanish', 'missleg'],
      landings: landingPositions.eagle,
    },

    {
      name: 'Butterfly Twist Round',
      starter: true,
      setups: ['Hook Kick', 'reverse vanish', 'hyper'],
      landings: landingPositions.round,
    },

    {
      name: 'Butterfly Switch',
      starter: true,
      setups: ['Hook Kick', 'reverse vanish', 'hyper', 'missleg'],
      landings: landingPositions.eagle,
    },

    {
      name: 'Butter Knife',
      starter: true,
      setups: ['Hook Kick', 'reverse vanish', 'hyper', 'missleg'],
      landings: landingPositions.hook,
    },

    {
      name: 'Cart Arabian Scissor Swipe',
      starter: false,
      setups: takeoffs.cartwheel,
      landings: ['frontside', 'frontside pop'],
    },

    {
      name: 'Cart Full Hyper',
      starter: true,
      setups: takeoffs.cartwheel,
      landings: ['inside leg hyper', 'reverse vanish', 'right left redirect', 'inside pop'],
    },

    {
      name: 'Cart Full Round',
      starter: true,
      setups: takeoffs.cartwheel,
      landings: landingPositions.round,
    },

    {
      name: 'Cart Full Twist',
      starter: true,
      setups: takeoffs.cartwheel,
      landings: landingPositions.eagle,
    },

    {
      name: 'Cart Full Swipe',
      starter: true,
      setups: takeoffs.cartwheel,
      landings: ['inside leg hyper', 'reverse vanish', 'right left redirect'],
    },

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
      landings: ['frontside', 'frontside punch'],
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
      landings: ['inside pop'],
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
      landings: ['invert frontside punch', 'Back Sweep', 'reverse pop'],
    },

    {
      name: 'Gainer Flash Kick',
      starter: true,
      setups: takeoffs.swing,
      landings: ['inside leg hyper', 'reverse vanish', 'right left redirect'],
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
      setups: ['Hook Kick', 'reverse vanish', 'hyper'],
      landings: ['frontside', 'frontside punch'],
    },

    {
      name: 'Loser',
      starter: true,
      setups: ['Webster', 'backside', 'frontside'],
      landings: ['inside', 'inside pop', 'backside', 'backside pop'],
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
      setups: ['Hook Kick', 'reverse vanish', 'hyper'],
      landings: ['frontside', 'outside', 'vanish'],
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
      landings: ['reverse vanish', 'right left redirect'],
    },

    {
      name: 'X-Out',
      starter: true,
      setups: ['invert backside pop'],
      landings: ['backside punch', 'inside punch', 'invert backside punch', 'invert inside punch'],
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


// NEXT TODO: ADD LANDING MODIFIERS
// make landing modifiers like transitions?

// =========== EVENT LISTENERS ============
document.getElementById('generateRandomCombo').onclick = generateCombo;


// =============== FUNCTIONS ==================
// ============================================

// APP CONTROLLER
function generateCombo() {
  console.clear();
  let transition;

  // Clear container
  const comboContainer = document.getElementById('combo');
  while (comboContainer.firstChild) {
    comboContainer.firstChild.remove();
  }

  let randomLevel = generateLevel(2);
  const trick1 = generateFirstTrick(tricks[randomLevel]);
  createTrickElement(trick1, comboContainer, generateMod(trick1.setups));
  createConnector(comboContainer);

  console.log(trick1.name);

  randomLevel = generateLevel(2);
  const trick2 = generateTrick(tricks[randomLevel], trick1);
  transition = generateTransition(trick1, trick2);
  createTrickElement(trick2, comboContainer, transition);
  createConnector(comboContainer);

  console.log(trick2.name);

  randomLevel = generateLevel(2);
  const trick3 = generateTrick(tricks[randomLevel], trick2);
  transition = generateTransition(trick2, trick3);
  createTrickElement(trick3, comboContainer, transition);
  createConnector(comboContainer);

  console.log(trick3.name);

  randomLevel = generateLevel(2);
  const trick4 = generateLastTrick(tricks[randomLevel], trick3);
  transition = generateTransition(trick3, trick4);
  createTrickElement(trick4, comboContainer, transition);

  console.log(trick4.name);
}


// DATA CONTROLLER
function generateLevel(max) {
  const random = Math.floor(Math.random() * max + 1);
  return `level${random}`;
}


// DATA CONTROLLER
function randomMove(list) {
  const random = Math.floor(Math.random() * list.length);
  const move = list[random];
  return move;
}


// DATA CONTROLLER
function generateFirstTrick(level) {
  const starters = level.filter(trick => trick.starter === true);
  const trick = randomMove(starters);
  return trick;
}


// DATA CONTROLLER
function generateMod(setups) {
  if (setups) {
    const setupMods = setups.filter(setup => takeoffModifiers.includes(setup));
    return randomMove(setupMods);
  }
  return undefined;
}

// DATA CONTROLLER
function formatMod(mod, trickName) {
  if (mod) {
    if (/^(vanish|missleg|reverse pop|cheat)$/.test(mod)) return mod;
    if (mod.startsWith('skip')) return trickName === '900 Kick' ? 'skip wrap' : 'skip';

    const isTrans = /(pop|punch|hyper|vanish|reversal|redirect|carry-through|skip)$/.test(mod);
    if (isTrans) return mod.split(' ').pop();
  }
  return undefined;
}


// UI CONTROLLER
function createTrickElement(trick, container, mod) {
  const trickEl = document.createElement('div');
  trickEl.className = 'trick';

  let fixedMod;
  if (!mod) {
    fixedMod = formatMod(generateMod(trick.setups), trick.name);
  } else if (!(/cheat|j step|pivot step/.test(mod))) {
    fixedMod = formatMod(mod, trick.name);
  } else {
    fixedMod = mod;
  }

  if (fixedMod) {
    const transEl = document.createElement('div');
    transEl.className = 'transition';
    transEl.textContent = `- ${fixedMod} -`;
    container.append(transEl);
  }

  trickEl.textContent = trick.name;
  container.append(trickEl);
}


// UI CONTROLLER
function createConnector(container) {
  const connector = document.createElement('div');
  connector.className = 'connector';
  connector.innerHTML = '&darr;';
  container.append(connector);
}


// *** CORE ALGORITHM ***
// DATA CONTROLLER
function generateTrick(level, prevTrick) {
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


// DATA CONTROLLER
function generateTransition(prevTrick, current) {
  if (current.setups) {
    // Filter current tricks setups for ones that match previous trick's landings
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


// DATA CONTROLLER
function generateLastTrick(level, prevTrick) {
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


// document.getElementById('randomComboOption').addEventListener('click', () => {
//   document.querySelector('.start-screen').style.display = 'none';
//   document.querySelector('.randomComboBox').style.display = 'block';
// });

// document.getElementById('backToChoices').addEventListener('click', () => {
//   document.querySelector('.randomComboBox').style.display = 'none';
//   document.querySelector('.start-screen').style.display = 'block';
// });
