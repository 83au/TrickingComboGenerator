// ****************************************** DATA *****************************************

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
    'invert inside pop',
  ],
  cartwheel: [
    'reverse vanish',
    'inside leg reversal',
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
    // * Swings are more common and a staple of the sport, so they get higher precedence
    'back swing',
    'back swing',
    'back swing',
    'back swing',
    'back swing',
    'back swing',
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
    'outside pop', // for double leg
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
    'hook to scoot',
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
    'cheat',
  ],

  mega: [
    'vanish',
    'skip round',
    'mega',
  ],

  semi: [
    'reverse vanish',
    'skip hook',
    'semi',
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

  'half gyro frontside': [
    'frontside',
    'frontside punch',
  ],

  'half gyro backside': [
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
    'hook to scoot',
  ],
};


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
  'half gyro frontside',
  'half gyro backside',
  'rapid round',
  'rapid hook',
];

export const transitions = [
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
  'frontside punch',

  // Punches
  'outside punch',
  'backside punch',
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
  'skip hook', // for back swing
  'skip invert', // for front swing

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
  'gyro frontside',
  'gyro backside',
  'half gyro frontside',
  'half gyro backside',
  'rapid round',
  'rapid hook',
];


export const tricks = {

  // *** NOVICE ***
  level1: [
    // KICKS
    {
      name: '360 Crescent Kick',
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
        'mega',
        'outside leg reversal',
        'right left redirect',
        'hook carry-through',
        'cheat',
      ],
    },

    {
      name: '540 Kick',
      setups: ['cheat', 'vanish', 'frontside pop'], // redirect is implied
      landings: landingPositions.hyper,
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
      setups: ['inside leg reversal'],
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
      setups: ['reverse vanish', 'inside'],
      landings: [
        // Swing get higher precedence
        'back swing',
        'back swing',
        'backside',
        'backside pop',
        // Invert pops are more common
        'invert backside pop',
        'invert backside pop',
        'vanish',
      ],
    },

    {
      name: 'Cartwheel',
      setups: takeoffs.cartwheel,
      landings: ['inside', 'invert inside pop'],
    },

    {
      name: 'Kaydem',
      setups: ['reverse vanish', 'inside'],
      landings: [
        // Swing get higher precedence
        'back swing',
        'back swing',
        'backside',
        'backside pop',
        // Invert pops are more common
        'invert backside pop',
        'invert backside pop',
        'vanish',
      ],
    },

    {
      name: 'Macaco',
      setups: ['backside'], // Pop is implied
      landings: ['frontside', 'right left redirect', 'outside leg reversal', 'reverse vanish'],
    },

    {
      name: 'Round Off',
      setups: takeoffs.cartwheel,
      landings: ['invert backside punch'],
    },

    {
      name: 'Scoot',
      setups: ['skip round', 'semi', 'hook', 'hook to scoot'],
      landings: landingPositions.eagle.concat(['hyper']),
    },

    {
      name: 'Spyder',
      setups: [
        'backside',
        'frontside',
        'vanish',
        'outside leg reversal',
        'hook carry-through',
        'semi',
        'skip invert',
      ],
      landings: [
        'backside',
        'frontside',
        'backside pop',
        'frontside pop',
        'vanish',
        'skip round',
        'skip invert',
      ],
    },

    {
      name: 'Transformer/Machine',
      setups: [
        'backside',
        'frontside',
        'vanish',
        'outside leg reversal',
        'hook carry-through',
        'semi',
        'skip invert',
      ],
      landings: [
        'backside',
        'frontside',
        'backside pop',
        'frontside pop',
        'vanish',
        'skip round',
        'skip invert',
      ],
    },

    // Flips & Twists
    {
      name: 'Arabian',
      setups: [
        'invert inside pop',
        'invert backside punch',
        'invert backside pop',
      ],
      landings: [
        'invert frontside punch',
        'hook',
      ],
    },

    {
      name: 'Front Flip',
      setups: ['invert frontside pop', 'invert frontside punch'],
      landings: [
        'frontside',
        'invert frontside punch',
      ],
    },

    {
      name: 'Webster',
      setups: [
        'reverse vanish',
        'mega',
      ],
      landings: [
        'frontside',
        'reverse vanish',
        'invert frontside punch',
      ],
    },
  ],

  // *** BEGINNER ***
  level2: [
    // KICKS
    {
      // 360 Crescent variations
      name: '360 Crescent Kick',
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
        'mega',
        'complete',
        'half gyro backside',
      ],
    },

    { // 540 variations
      name: '540 Kick',
      setups: ['cheat', 'vanish', 'frontside pop'], // redirect is implied
      landings: ['wrap'],
    },

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
      landings: landingPositions.hook.concat(['rapid round']),
    },

    {
      name: '720 Kick', // Pop variation
      setups: ['frontside pop', 'hook'],
      landings: landingPositions.hook.concat(['rapid round']),
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
      landings: landingPositions.hook.concat(['turbo']),
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
      landings: landingPositions.hook,
    },

    { // Feilong variations
      name: 'Feilong',
      setups: [
        'inside pop',
        'frontside pop',
        'frontside punch',
        'inside punch',
        'cheat',
        'reverse pop', // redirect is implied
      ],
      landings: ['complete', 'half gyro frontside'],
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
        'reverse vanish',
        'right left redirect',
        'skip hook',
        'wrap',
        'cheat',
      ],
    },

    {
      name: 'Parafuso',
      setups: ['vanish', 'hook', 'right left redirect'], // cheat is implied
      landings: [
        'backside',
        'backside punch',
      ],
    },

    {
      name: 'Swing 360 Crescent Kick',
      setups: [
        'back swing',
        'round carry-through',
        'inside leg reversal',
        'left right redirect',
        'skip hook',
        'right first reverse pop',
      ],
      landings: [
        'frontside pop',
        'hook',
        'turbo',
        'right left redirect',
        'outside leg reversal',
        'cheat',
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
      landings: landingPositions.round,
    },

    {
      name: 'Tai-fighter',
      setups: ['frontside pop', 'inside pop', 'frontside punch', 'inside punch'],
      landings: landingPositions.round,
    },

    {
      name: 'Tornado Double',
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
      name: 'Triple Kick',
      setups: [
        'j step',
        'back swing',
        'round carry-through',
        'inside leg reversal',
        'left right redirect',
        'right first reverse pop',
      ],
      landings: landingPositions.round,
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
      setups: ['hook', 'hook to scoot', 'skip round', 'vanish'],
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
      landings: landingPositions.round,
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
      landings: landingPositions.round,
    },

    {
      name: 'Sideswipe',
      setups: takeoffs.raiz,
      landings: [ // hyper landing is implied
        'reverse vanish',
        'right left redirect',
        'cheat',
        'skip hook',
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
      name: 'Super Monkey Scoot',
      setups: takeoffs.cartwheel,
      landings: landingPositions.eagle,
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
        'invert inside pop',
        'reverse vanish',
        'right left redirect',
        'cheat',
        'outside leg reversal',
        'hook carry-through',
      ],
    },

    { // Arabian variations
      name: 'Arabian',
      setups: [
        'invert inside pop',
        'invert backside punch',
        'invert backside pop',
      ],
      landings: [
        'mega',
        'semi',
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
      landings: [ // Hyper is implied
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

    {
      name: 'Butterfly Twist',
      setups: ['hook', 'reverse vanish', 'missleg', 'turn step', 'mega'],
      landings: landingPositions.eagle,
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
      landings: landingPositions.eagle,
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
      setups: ['outside pop', 'outside punch', 'frontside punch', 'invert frontside punch'],
      landings: ['backside', 'backside punch', 'invert backside punch'],
    },

    {
      name: 'Flash Kick',
      setups: ['backside pop', 'invert backside pop', 'invert backside punch'], // Pop is implied
      landings: [ // Hyper is implied
        'inside pop',
        'reverse vanish',
        'right left redirect',
        'cheat',
      ],
    },

    { // Front Flip variations
      name: 'Front Flip',
      setups: ['invert frontside pop', 'invert frontside punch', 'invert backside punch'],
      landings: [
        'mega',
      ],
    },

    {
      name: 'Full Round',
      notStarter: true,
      setups: takeoffs.insideFullTwist,
      landings: landingPositions.round,
    },

    {
      name: 'Full Swipe',
      notStarter: true,
      setups: takeoffs.insideFullTwist,
      landings: [
        'reverse vanish',
        'right left redirect',
        'cheat',
      ],
    },

    {
      name: 'Full Twist',
      notStarter: true,
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
      ],
    },

    {
      name: 'Gainer Flash Kick',
      setups: takeoffs.swing,
      landings: [ // Hyper is implied
        'inside pop',
        'invert inside pop',
        'reverse vanish',
        'right left redirect',
        'cheat',
      ],
    },

    {
      name: 'Gainer Switch',
      setups: takeoffs.swing,
      landings: landingPositions.eagle,
    },

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
      ],
    },

    {
      name: 'Moon Kick',
      setups: takeoffs.swing,
      landings: landingPositions.hook.concat(['turbo']),
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

    {
      name: 'Terada Grab',
      notStarter: true,
      starter: false,
      setups: ['invert backside pop', 'invert backside punch'],
      landings: ['reverse vanish', 'right left redirect', 'hook', 'cheat'],
    },

    { // Webster variations
      name: 'Webster',
      setups: [
        'reverse vanish',
        'mega',
      ],
      landings: [
        'mega',
      ],
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
