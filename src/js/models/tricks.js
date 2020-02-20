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
  'right first reverse pop',
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
      setups: [
        'inside pop',
        'frontside pop',
        'inside punch',
        'frontside punch',
        'cheat',
        'right left redirect',
        'hook',
      ],
      landings: [
        'frontside',
        'frontside punch',
        'hook',
        'right first reverse pop',
        'turbo',
      ],
    },

    // {
    //   name: '360 Wheel Kick Hyper',
    //   setups: ['inside pop', 'frontside pop', 'frontside punch', 'inside punch'],
    //   landings: ['vanish', 'frontside', 'frontside pop', 'inside leg reversal'],
    // },

    {
      name: '540 Kick',
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
      setups: ['backside punch', 'backside'],
      landings: landingPositions.hook,
    },

    {
      name: 'Back Sweep',
      notFinisher: true,
      setups: ['frontside', 'hook'],
      landings: ['frontside', 'frontside pop'],
    },

    {
      name: 'Butterfly Kick',
      setups: ['turn step', 'hook', 'reverse vanish', 'right first reverse pop'],
      landings: ['reverse vanish', 'outside leg reversal', 'inside pop'],
    },

    {
      name: 'Compasso (td hook)',
      notFinisher: true,
      setups: ['inside', 'frontside', 'Tornado Kick'],
      landings: landingPositions.hook,
    },

    {
      name: 'Feilong',
      setups: [
        'inside pop',
        'frontside pop',
        'frontside punch',
        'inside punch',
        'cheat',
        'right left redirect',
        'reverse pop',
      ],
      landings: landingPositions.round,
    },

    {
      name: 'Front Sweep',
      notFinisher: true,
      setups: ['backside', 'inside leg reversal'],
      landings: ['backside', 'backside pop'],
    },

    // {
    //   name: 'hook',
    //   notFinisher: true,
    //   setups: ['inside', 'frontside', 'right left redirect', 'vanish'],
    //   landings: landingPositions.hook,
    // },

    // {
    //   name: 'Jump Round',
    //   notFinisher: true,
    //   setups: ['backside'], // pop is implied
    //   landings: landingPositions.round,
    // },

    {
      name: 'Narabong',
      setups: ['hook carry-through', 'outside leg reversal', 'right left redirect', 'reverse pop'],
      landings: landingPositions.hook,
    },

    {
      name: 'Palm Kick',
      notFinisher: true,
      setups: ['reverse vanish', 'missleg', 'hook'],
      landings: ['inside', 'inside pop', 'reverse vanish', 'outside leg reversal', 'right left redirect'],
    },

    {
      name: 'Round Kick',
      notFinisher: true,
      setups: ['backside', 'inside leg reversal'],
      landings: landingPositions.round,
    },

    {
      name: 'Tornado',
      notFinisher: true,
      setups: ['vanish', 'hook carry-through', 'right left redirect', 'reverse pop', 'frontside pop', 'hook'], // cheat is implied
      landings: landingPositions.round,
    },

    {
      name: 'Tsunami Kick',
      setups: [
        'back swing',
        'round carry-through',
        'inside leg reversal',
        'reverse pop',
      ],
      landings: landingPositions.hook,
    },

    // Flare Kick ?

    // TRANSITION TRICKS
    {
      name: 'Blaster Scoot',
      notFinisher: true,
      setups: ['reverse vanish', 'inside'],
      landings: ['back swing', 'backside', 'backside pop', 'invert backside pop', 'vanish'],
    },

    {
      name: 'Cartwheel',
      notFinisher: true,
      setups: takeoffs.cartwheel,
      landings: [
        'inside pop',
      ],
    },

    {
      name: 'Macaco',
      notFinisher: true,
      setups: ['backside'], // Pop is implied
      landings: landingPositions.eagle.concat(['reverse vanish', 'right left redirect']),
    },

    {
      name: 'Round Off',
      notFinisher: true,
      setups: takeoffs.cartwheel,
      landings: ['invert backside punch'],
    },

    {
      name: 'Scoot',
      notFinisher: true,
      setups: ['skip round', 'semi'],
      landings: landingPositions.eagle,
    },

    {
      name: 'Scoot Hyper',
      notFinisher: true,
      setups: ['skip round', 'inside leg hyper', 'semi'],
      landings: ['inside leg hyper', 'reverse vanish', 'right left redirect', 'skip hook'],
    },

    {
      name: 'Spyder',
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
    //   setups: ['invert frontside punch', 'invert backside punch'],
    //   landings: ['invert frontside punch', 'reverse vanish'],
    // },
  ],

  // *** BEGINNER ***
  level2: [
    // KICKS

    // {
    //   name: '360 Wheel Kick Gyro',
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
      setups: ['frontside pop', 'hook'],
      landings: landingPositions.hook,
    },

    {
      name: '720 Double',
      setups: ['cheat', 'right left redirect', 'vanish', 'hook', 'frontside pop'],
      landings: landingPositions.hook,
    },

    {
      name: '900 Kick',
      setups: ['cheat', 'vanish', 'right left redirect', 'skip round', 'hook', 'wrap'],
      landings: landingPositions.round,
    },

    {
      name: 'Backside 900',
      setups: ['backside', 'backside punch'], // pop is implied
      landings: landingPositions.round,
    },

    {
      name: 'Crowd Awakener',
      setups: ['right left redirect', 'cheat', 'vanish', 'hook'],
      landings: ['backside punch', 'hook'],
    },

    {
      name: 'E-kick',
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
      setups: ['frontside pop', 'frontside punch', 'cheat', 'right left redirect', 'hook'],
      landings: ['inside leg hyper', 'reverse vanish', 'right left redirect', 'skip hook'],
    },

    {
      name: 'Parafuso',
      setups: ['vanish', 'hook'], // cheat is implied
      landings: ['backside', 'backside punch'],
    },

    {
      name: 'Swing 360 Wheel Kick', // hyper and turbo variations are implied
      setups: [
        'back swing',
        'round carry-through',
        'inside leg reversal',
        'left right redirect',
        'skip hook',
        'outside leg hyper',
        'right first reverse pop',
      ],
      landings: [
        'outside leg hyper',
        'vanish',
        'frontside pop',
        'frontside punch',
        'hook',
        'right first reverse pop'],
    },

    {
      name: 'Swing 900 Kick',
      setups: [
        'back swing',
        'round carry-through',
        'inside leg reversal',
        'left right redirect',
        'outside leg hyper',
        'right first reverse pop',
      ],
      landings: landingPositions.round,
    },

    {
      name: 'Tai-fighter',
      setups: ['frontside pop', 'inside pop', 'frontside punch', 'inside punch'],
      landings: landingPositions.round,
    },

    // {
    //   name: 'Tornado Double',
    //   setups: ['vanish', 'hook carry-through', 'right left redirect'], // cheat is implied
    //   landings: landingPositions.round,
    // },
    {
      name: 'Triple Kick',
      setups: [
        'j step',
        'back swing',
        'round carry-through',
        'inside leg reversal',
        'left right redirect',
        'outside leg hyper',
        'right first reverse pop',
      ],
      landings: landingPositions.round,
    },

    {
      name: 'Wackknife',
      setups: ['cheat', 'frontside pop', 'frontside punch'],
      landings: landingPositions.hook.concat(['frontside punch']), // turbo variation is implied
    },

    // TRANSITION TRICKS

    // Master Swipe
    {
      name: 'Cartwheel Twist',
      setups: takeoffs.cartwheel,
      landings: ['backside punch', 'invert backside punch', 'reverse pop'],
    },

    {
      name: 'Coin Drop',
      starter: false,
      notFinisher: true,
      setups: [
        'vanish',
        'reverse pop',
        'inside leg hyper',
        'Butterfly Kick',
        'skip round',
      ],
      landings: ['cheat', 'hook'],
    },

    {
      name: 'Gumbi',
      notFinisher: true,
      setups: takeoffs.raiz,
      landings: landingPositions.eagle,
    },

    {
      name: 'Master Scoot',
      notFinisher: true,
      setups: ['hook', 'skip round', 'inside leg hyper', 'vanish'],
      landings: landingPositions.eagle,
    },

    {
      name: 'Raiz',
      notFinisher: true,
      setups: takeoffs.raiz,
      landings: landingPositions.eagle,
    },

    {
      name: 'Raiz Scissor',
      notFinisher: true,
      setups: takeoffs.raiz,
      landings: ['mega', 'backside pop', 'inside leg reversal'],
    },

    {
      name: 'Sailor Moon',
      notFinisher: true,
      setups: takeoffs.raiz,
      landings: landingPositions.eagle,
    },

    {
      name: 'Sailor Moon Scissor',
      notFinisher: true,
      setups: takeoffs.raiz,
      landings: ['mega', 'backside pop', 'inside leg reversal'],
    },

    {
      name: 'Sideswipe',
      setups: takeoffs.raiz,
      landings: ['inside leg hyper', 'reverse vanish', 'right left redirect', 'skip hook'],
    },

    {
      name: 'Suicide Kip Up',
      setups: ['backside', 'inside'],
      landings: ['backside punch', 'inside punch', 'hook'],
    },

    {
      name: 'Touch Down Raiz',
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
      setups: takeoffs.backFullTwist,
      landings: ['inside leg hyper', 'reverse vanish', 'right left redirect', 'inside pop'],
    },

    {
      name: 'Back Full Round',
      setups: takeoffs.backFullTwist,
      landings: landingPositions.round,
    },

    {
      name: 'Back Full Swipe',
      setups: takeoffs.backFullTwist,
      landings: ['inside leg hyper', 'reverse vanish', 'right left redirect'],
    },

    {
      name: 'Back Full Twist',
      setups: takeoffs.backFullTwist,
      landings: landingPositions.eagle,
    },

    // {
    //   name: 'Barani',
    //   setups: ['invert frontside punch'],
    //   landings: ['invert backside punch'],
    // },

    {
      name: 'Butterfly Twist',
      setups: ['hook', 'reverse vanish', 'missleg', 'turn step'],
      landings: landingPositions.eagle,
    },

    {
      name: 'Butterfly Twist Round',
      setups: ['hook', 'reverse vanish', 'hyper', 'turn step'],
      landings: landingPositions.round,
    },

    {
      name: 'Butterfly Switch',
      setups: ['hook', 'reverse vanish', 'hyper', 'missleg', 'turn step'],
      landings: landingPositions.eagle,
    },

    {
      name: 'Butter Knife',
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
    //   setups: takeoffs.cartwheel,
    //   landings: ['inside leg hyper', 'reverse vanish', 'right left redirect', 'inside pop'],
    // },

    // {
    //   name: 'Cart Full Round',
    //   setups: takeoffs.cartwheel,
    //   landings: landingPositions.round,
    // },

    // {
    //   name: 'Cart Full Twist',
    //   setups: takeoffs.cartwheel,
    //   landings: landingPositions.eagle,
    // },

    // {
    //   name: 'Cart Full Swipe',
    //   setups: takeoffs.cartwheel,
    //   landings: ['inside leg hyper', 'reverse vanish', 'right left redirect'],
    // },

    {
      name: 'Corkscrew',
      setups: takeoffs.swing,
      landings: landingPositions.eagle,
    },

    {
      name: 'Corkscrew Round',
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
      setups: takeoffs.swing,
      landings: ['invert frontside punch', 'reverse pop', 'frontside', 'hook'],
    },

    {
      name: 'Gainer Flash Kick',
      setups: takeoffs.swing,
      landings: ['inside pop', 'inside leg hyper', 'reverse vanish', 'right left redirect'],
    },

    // {
    //   name: 'Illusion Kick',
    //   setups: ['inside', 'reverse vanish', 'reverse pop'],
    //   landings: ['frontside pop', 'front swing', 'outside leg reversal', 'mega'],
    // },

    {
      name: 'Illusion Twist',
      setups: ['hook', 'reverse vanish', 'hyper'],
      landings: ['frontside', 'frontside punch', 'hook'],
    },

    {
      name: 'Loser',
      setups: ['Webster', 'backside', 'frontside'],
      landings: ['inside', 'inside pop', 'backside', 'backside pop', 'hook'],
    },

    {
      name: 'Moon Kick',
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
      setups: ['hook', 'reverse vanish', 'hyper'],
      landings: ['frontside', 'outside', 'vanish', 'hook'],
    },

    {
      name: 'Slant Gainer',
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
