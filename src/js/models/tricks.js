// To reduce repetition
export const takeoffs = {
  swing: ['back swing', 'skip hook', 'left right redirect', 'round carry-through'],
  raiz: [
    'right left redirect',
    'hook carry-through',
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
    'backside pop',
    'invert backside pop',
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
    'hook',
    'turn step',
    'step behind',
  ],
};

export const landingPositions = {
  eagle: [
    'invert backside pop',
    'missleg',
    'skip invert', // skip from eagle into mega for a front swing
    'vanish',
    'backside',
    'hyper',
    'back swing',
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
    'right left redirect',
    'reverse vanish',
    'frontside pop',
    'frontside',
    'hook carry-through',
    'outside leg reversal',
    'skip hook', // skip from hook or round into jstep
  ],

  complete: [
    'invert backside pop',
    'missleg',
    'skip invert', // skip from eagle into mega for a front swing
    'vanish',
    'backside',
  ],

  hyper: [
    'reverse vanish',
    'right left redirect',
    'skip hook',
    'wrap',
    'cheat',
  ],

  turbo: [
    'frontside punch',
    'right first reverse pop',
  ],

  'gyro frontside': [
    'frontside',
    'frontside punch',
  ],

  'gyro backside': [
    'backside',
    'backside punch',
  ],

  'rapid round': [
    'backside',
    'inside leg reversal',
    'left right redirect',
    'round carry-through',
    'skip round', // skip from round kick into wrap or scoot
    'vanish',
    'hook',
  ],

  'rapid hook': [
    'cheat',
    'right left redirect',
    'reverse vanish',
    'frontside pop',
    'frontside',
    'hook carry-through',
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
  'backside pop',
  'invert backside pop',
  'swing',
  'wrap',
];

export const landingModifiers = [ // if the transition is a landing, append previous trick with it?
  'complete', // backside
  'hyper', // inside (mainstream: land on inside kicking leg)
  'mega', // frontside land left foot first - swings into Aerial
  'turbo', // outside kick landing frontside both feet at same time
  'semi', // frontside land right foot first, swings into Raiz
  'gyro frontside', // A vert twist in air after trick, landing frontside
  'gyro backside', // landing backside
  'rapid round',
  'rapid hook',
];

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
  'inside punch',
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

  // Landing Mods
  'complete',
  'hyper',
  'mega',
  'turbo',
  'semi',
  'gyro frontside',
  'gyro backside',
  'rapid round',
  'rapid hook',
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
        'hook',
        // 'right left redirect', redirect is implied
      ],
      landings: [
        'frontside',
        'hook',
        'turbo',
        'complete',
        'gyro backside', // Not sure if this should be backside or front
      ],
    },

    {
      name: '540 Kick',
      setups: ['cheat', 'vanish', 'frontside pop'], // redirect is implied
      landings: landingPositions.hyper.concat(['complete', 'gyro backside']),
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
      setups: ['backside punch', 'backside', 'backside pop'],
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
      setups: [
        'inside',
        'frontside',
        'Tornado Kick',
        'outside leg reversal',
      ],
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
        'reverse pop', // redirect is implied
      ],
      landings: landingPositions.round,
    },

    {
      name: 'Front Sweep',
      notFinisher: true,
      setups: ['backside', 'inside leg reversal'],
      landings: ['backside', 'backside pop'],
    },

    {
      name: 'Narabong',
      setups: ['hook carry-through', 'outside leg reversal', 'right left redirect', 'reverse pop'],
      landings: landingPositions.hook,
    },

    {
      name: 'Palm Kick',
      notFinisher: true,
      setups: ['reverse vanish', 'missleg', 'hook', 'mega'],
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
      setups: [
        'vanish',
        'hook carry-through',
        'right left redirect',
        'reverse pop',
        'frontside pop',
        'hook',
        'cheat',
      ],
      landings: landingPositions.round,
    },

    {
      name: 'Tsunami Kick',
      setups: [
        'back swing',
        'round carry-through',
        'inside leg reversal',
        'left right redirect',
        'reverse pop',
        'skip hook',
      ],
      landings: landingPositions.hook,
    },

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
      landings: ['inside'],
    },

    {
      name: 'Macaco',
      notFinisher: true,
      setups: ['backside'], // Pop is implied
      landings: ['frontside', 'right left redirect', 'outside leg reversal', 'reverse vanish'],
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

    // NOW A LANDING MOD
    // {
    //   name: 'Scoot Hyper',
    //   notFinisher: true,
    //   setups: ['skip round 'hyper', 'semi'],
    //   landings: ['reverse vanish', 'right left redirect', 'skip hook'],
    // },

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
        'skip invert',
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
        'skip invert',
      ],
      landings: ['backside', 'frontside', 'backside pop', 'frontside pop', 'vanish'],
    },

    // Flips & Twists
    {
      name: 'Arabian',
      notStarter: true,
      setups: [
        'Aerial',
        'Cartwheel',
        'invert backside punch',
        'invert backside pop',
      ],
      landings: [
        'invert frontside punch',
        'hook',
        'semi',
        'mega',
      ],
    },

    {
      name: 'Webster',
      setups: [
        'reverse vanish',
        'semi',
        'mega',
        'skip invert',
      ],
      landings: [
        'frontside',
        'frontside punch',
        'reverse vanish',
        'semi',
        'mega',
      ],
    },
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
    //   notStarter: true,
    //   setups: ['cheat', 'vanish', 'right left redirect'],
    //   landings: ['outside', 'backside punch'],
    // },

    {
      name: '720 Kick',
      setups: [
        'cheat',
        // 'right left redirect', Redirect is implied
        'vanish',
        'hook carry-through',
        'reverse pop',
        'hook',
      ],
      landings: landingPositions.hook.concat('rapid round'),
    },

    {
      name: '720 Kick', // Pop variation
      setups: ['frontside pop', 'hook'],
      landings: landingPositions.hook.concat('rapid round'),
    },

    {
      name: '720 Double',
      setups: [
        'cheat',
        // 'right left redirect', redirect is implied
        'vanish',
        'hook',
        'frontside pop',
      ],
      landings: landingPositions.hook,
    },

    {
      name: '900 Kick',
      setups: [
        'cheat',
        'vanish',
        // 'right left redirect', redirect is implied
        'skip round',
        'hook',
        'wrap',
      ],
      landings: landingPositions.round.concat(['rapid hook']),
    },

    {
      name: 'Backside 900',
      setups: ['backside punch', 'backside pop'],
      landings: landingPositions.round.concat(['rapid hook']),
    },

    {
      name: 'Crowd Awakener',
      setups: [
        // 'right left redirect', // redirect is implied
        'cheat',
        'vanish',
        'hook',
      ],
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
      landings: landingPositions.hook.concat(['reverse vanish']),
    },

    {
      name: 'Hyper Feilong',
      setups: [
        'frontside pop',
        'frontside punch',
        'cheat',
        // 'right left redirect', redirect is implied
        'hook',
      ],
      landings: [
        'hyper',
        'reverse vanish',
        'right left redirect',
        'skip hook',
      ],
    },

    {
      name: 'Parafuso',
      setups: ['vanish', 'hook', 'right left redirect'], // cheat is implied
      landings: ['backside', 'backside punch'],
    },

    {
      name: 'Swing 360 Wheel Kick',
      setups: [
        'back swing',
        'round carry-through',
        'inside leg reversal',
        'left right redirect',
        'skip hook',
        'right first reverse pop',
      ],
      landings: [
        'vanish',
        'frontside pop',
        'hook',
        'turbo',
        'gyro backside',
      ],
    },

    {
      name: 'Swing 900 Kick',
      setups: [
        'back swing',
        'round carry-through',
        'inside leg reversal',
        'left right redirect',
        'right first reverse pop',
      ],
      landings: landingPositions.round.concat(['hyper', 'complete']),
    },

    {
      name: 'Tai-fighter',
      setups: ['frontside pop', 'inside pop', 'frontside punch', 'inside punch'],
      landings: landingPositions.round.concat(['hyper']),
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
        'right first reverse pop',
      ],
      landings: landingPositions.round.concat(['complete']),
    },

    {
      name: 'Wackknife',
      setups: [
        'cheat',
        'frontside pop',
        'frontside punch',
      ],
      landings: landingPositions.hook.concat(['turbo']),
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
      notStarter: true,
      notFinisher: true,
      setups: [
        'vanish',
        'reverse pop',
        'hook carry-through',
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
      setups: ['hook', 'skip round', 'vanish'],
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
      landings: landingPositions.round, // Mega is implied
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
      landings: landingPositions.round, // Mega is implied
    },

    {
      name: 'Sideswipe',
      setups: takeoffs.raiz,
      landings: [ // hyper landing is implied
        'reverse vanish',
        'right left redirect',
        'cheat',
        'skip hook',
        'semi',
        'wrap',
      ],
    },

    {
      name: 'Suicide Kip Up',
      setups: ['backside'],
      landings: [
        // 'backside punch',
        'inside punch',
        // 'hook'
      ],
    },

    {
      name: 'Touch Down Raiz',
      notFinisher: true,
      setups: takeoffs.raiz,
      landings: landingPositions.eagle,
    },

    {
      name: 'Valdez',
      notStarter: true,
      notFinisher: true,
      setups: ['invert backside pop', 'invert backside punch', 'back swing'],
      landings: ['invert backside pop', 'invert backside punch', 'back swing', 'hyper'],
    },

    // FLIPS & TWISTS
    {
      name: 'Aerial',
      setups: [
        'inside',
        'reverse vanish',
        'inside leg reversal',
        'hook',
        'mega',
      ],
      landings: [
        'inside',
        'inside pop',
        'reverse vanish',
        'right left redirect',
        'cheat',
        'outside leg reversal',
        'hook carry-through',
        'semi',
        'mega',
      ],
    },

    {
      name: 'Arabian Scissor Swipe',
      notStarter: true,
      setups: ['invert backside pop', 'invert backside punch', 'Aerial', 'Cartwheel'],
      landings: ['frontside pop', 'hook'],
    },

    {
      name: 'Back Full Round',
      setups: takeoffs.backFullTwist,
      landings: landingPositions.round,
    },

    {
      name: 'Back Full Swipe',
      setups: takeoffs.backFullTwist,
      landings: [
        'hyper',
        'reverse vanish',
        'right left redirect',
        'cheat',
      ],
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
      setups: ['hook', 'reverse vanish', 'missleg', 'turn step', 'mega'],
      landings: landingPositions.eagle.concat(['mega', 'semi']),
    },

    {
      name: 'Butterfly Twist Round',
      setups: ['hook', 'reverse vanish', 'turn step', 'mega'],
      landings: landingPositions.round,
    },

    {
      name: 'Butterfly Switch',
      setups: ['hook', 'reverse vanish', 'missleg', 'turn step'],
      landings: [
        'invert backside pop',
        'back swing',
        'missleg',
        'skip invert', // skip from eagle into mega for a front swing
        'vanish',
        'backside',
      ],
    },

    {
      name: 'Butter Knife',
      setups: ['hook', 'reverse vanish', 'missleg', 'turn step'],
      landings: landingPositions.hook,
    },

    {
      name: 'Corkscrew',
      setups: takeoffs.swing,
      landings: landingPositions.eagle.concat(['mega', 'semi']),
    },

    {
      name: 'Corkscrew Round',
      setups: takeoffs.swing,
      landings: landingPositions.round,
    },

    {
      name: 'Donut Boy',
      notStarter: true,
      setups: ['back swing', 'skip hook', 'j step', 'pivot step'],
      landings: ['frontside', 'frontside punch', 'hook'],
    },

    {
      name: 'Double Leg',
      setups: ['Tornado', '900 Kick', 'frontside punch', 'invert frontside punch'],
      landings: ['backside', 'backside punch', 'invert backside punch'],
    },

    {
      name: 'Flash Kick',
      setups: ['backside', 'invert backside punch'], // Pop is implied
      landings: [ // Hyper is implied
        'inside pop',
        'reverse vanish',
        'right left redirect',
        'cheat',
      ],
    },

    {
      name: 'Full Round',
      setups: takeoffs.insideFullTwist,
      landings: landingPositions.round,
    },

    {
      name: 'Full Swipe',
      setups: takeoffs.insideFullTwist,
      landings: [
        'hyper',
        'reverse vanish',
        'right left redirect',
        'cheat',
      ],
    },

    {
      name: 'Full Twist',
      setups: takeoffs.insideFullTwist,
      landings: landingPositions.eagle,
    },

    {
      name: 'Gainer Arabian',
      setups: takeoffs.swing,
      landings: [
        'invert frontside punch',
        'reverse pop',
        'frontside',
        'hook',
        'semi',
        'mega',
      ],
    },

    {
      name: 'Gainer Flash Kick',
      setups: takeoffs.swing,
      landings: [
        'inside pop',
        'hyper',
        'reverse vanish',
        'right left redirect',
        'cheat',
      ],
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
      setups: ['Webster', 'backside', 'skip invert'],
      landings: [
        'inside',
        'inside pop',
        'backside',
        'backside pop',
        'hook',
        'semi',
        'mega',
      ],
    },

    {
      name: 'Moon Kick',
      setups: takeoffs.swing,
      landings: landingPositions.hook,
    },

    {
      name: 'Rocketboii',
      notStarter: true,
      setups: ['Round Off'],
      landings: ['backside', 'invert backside punch'],
    },

    {
      name: 'Shuriken Twist',
      setups: ['hook', 'reverse vanish', 'turn step', 'mega'],
      landings: ['frontside', 'vanish', 'hook'],
    },

    // {
    //   name: 'Slant Gainer',
    //   setups: takeoffs.swing,
    //   landings 'hyper', 'reverse vanish', 'right left redirect'],
    // },

    {
      name: 'Terada Grab',
      notStarter: true,
      starter: false,
      setups: ['invert backside pop', 'invert backside punch'],
      landings: ['reverse vanish', 'right left redirect', 'hook', 'cheat'],
    },

    {
      name: 'X-Out',
      setups: ['invert backside pop'],
      landings: ['backside punch', 'invert backside punch', 'hook'],
    },
  ],

  // INTERMEDIATE
  // level3: [
  //   // KICKS
  //   // Pop 720 Double
  //   // Cheat 9 Double
  //   // Cheat 1080
  //   // Backside 1080

  //   // TRANSITION TRICKS
  //   // Envergado
  //   // Td Raiz Swipe
  //   // Td Raiz Whip

  //   // FLIPS & TWISTS
  //   // Grand Master Swipe
  //   // Gainer Scissor Swipe
  //   // Snapu Swipe
  //   // Takuraba
  //   // Tak Full
  //   // Tak 9
  //   {
  //     name: 'Gainer Switch',
  //     setups: takeoffs.swing,
  //     landings: landingPositions.eagle,
  //   },
  //   // Shuriken Cork
  //   // Hyper Cork
  //   // Cork Swipe
  //   // Boxcutter
  //   // Wrap Full Twist
  //   // Tak Full Twist
  //   // Full Twist Double Leg
  //   // Full Twist Swipe
  //   // Full Twist Hyper Hook
  //   // Double Full Twist
  //   // Hyper Twist
  //   // Butterfly Twist Hyper Hook
  //   // Btwist dleg
  // ],

  // // ADVANCED
  // level4: [
  //   // KICKS
  //   // Cheat 1260
  //   // Hurricane (cheat 1080 triple)

  //   // FLIPS & TWISTS
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
