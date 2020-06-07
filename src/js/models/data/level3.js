import takeoffs from './takeoffs';
import landingPositions from './landings';


const level3 = [
  // KICKS
  {
    // 360 Crescent variations
    name: '360 Crescent',
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
      'gyro frontside',
    ],
  },
  {
    name: '1080',
    setups: [
      'cheat',
      'vanish',
      'hook',
    ],
    landings: landingPositions.hook.concat(['rapid round']),
  },

  {
    name: 'Swing 1080',
    setups: takeoffs.swing,
    landings: landingPositions.hook.concat(['rapid round']),
  },

  {
    name: 'Backside 1080',
    setups: [
      'backside pop',
      'inside pop',
    ],
    landings: landingPositions.hook.concat(['rapid round']),
  },

  {
    name: 'Pop 900',
    setups: ['frontside punch', 'frontside pop'],
    landings: landingPositions.round,
  },

  {
    name: 'Backside 9 Feilong',
    setups: ['backside punch', 'backside pop', 'inside pop'],
    landings: landingPositions.round,
  },

  {
    name: 'Backside 9 Knife',
    setups: ['backside punch', 'backside pop', 'inside pop'],
    landings: landingPositions.hyper,
  },

  {
    name: 'Parafuso Twist Kick',
    setups: [
      'vanish',
      'hook',
      'hook carry-through',
      'right left redirect', // cheat is implied
    ],
    landings: [
      'inside leg reversal',
      'left right redirect',
      'skip round',
      'hook',
    ],
  },

  {
    name: 'Wackknife Round',
    setups: [
      'cheat',
      'frontside pop',
      'frontside punch',
      'hook carry-through',
    ],
    landings: landingPositions.round,
  },

  // TRANSITION TRICKS
  {
    name: 'Aerial',
    setups: [
      'reverse vanish',
      'inside leg reversal',
      'hook',
      'mega',
    ],
    landings: [
      'mega',
    ],
  },

  {
    name: 'Atwist',
    setups: takeoffs.btwist.concat(['inside leg reversal', 'mega']),
    landings: landingPositions.eagle,
  },

  {
    name: 'TD Atwist',
    setups: takeoffs.btwist.concat(['inside leg reversal', 'mega']),
    landings: landingPositions.eagle,
  },

  {
    name: 'Full Gumbi',
    setups: ['invert backside pop', 'invert backside punch'],
    landings: landingPositions.eagle,
  },

  {
    name: 'Envergado',
    setups: takeoffs.raiz,
    landings: [
      'backside punch',
      'invert backside punch',
    ],
  },

  {
    name: 'Helicoptero',
    setups: takeoffs.cartwheel,
    landings: [
      'inside leg reversal',
      'left right redirect',
      'skip round',
      'hook',
    ],
  },

  {
    name: 'Td Raiz Swipe',
    setups: takeoffs.raiz,
    landings: landingPositions.hyper,
  },

  {
    name: 'Td Raiz Whip',
    setups: takeoffs.raiz,
    landings: [
      'invert backside punch',
    ],
  },

  // FLIPS & TWISTS
  {
    name: 'Grand Master Swipe',
    notStarter: true,
    setups: [
      'master swing',
      'hook',
      'skip masterswing',
      'vanish'],
    landings: landingPositions.hyper,
  },

  {
    name: 'Boneless Gainer',
    notStarter: true,
    setups: ['reverse vanish'],
    landings: [ // Hyper is implied
      'inside pop',
      'invert inside pop',
      'reverse vanish',
      'right left redirect',
      'cheat',
    ],
  },

  {
    name: 'Gainer Rocketboii',
    notStarter: true,
    setups: takeoffs.swing,
    landings: ['invert backside punch'],
  },

  {
    name: 'Gainer Scissor',
    setups: takeoffs.swing,
    landings: ['vanish', 'skip round'],
  },

  {
    name: 'Gainer Switch',
    setups: takeoffs.swing.concat([
      'reverse vanish',
      'skip backswing',
      'skip backswing',
    ]),
    landings: landingPositions.eagle,
  },

  {
    name: 'Sailor Moon Swipe',
    setups: takeoffs.raiz,
    landings: [ // hyper landing is implied
      'reverse vanish',
      'right left redirect',
      'cheat',
      'skip backswing',
      'wrap',
      'broken',
    ],
  },

  {
    name: 'Sideswipe',
    setups: takeoffs.raiz,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Takuraba',
    setups: ['turn step', 'vanish'],
    landings: [
      'frontside punch',
      'invert frontside punch',
      'mega',
      'semi',
    ],
  },

  {
    name: 'Tak Full Round',
    setups: ['turn step', 'vanish'],
    landings: landingPositions.round,
  },

  {
    name: 'Tak Full Twist',
    setups: ['turn step', 'vanish'],
    landings: landingPositions.eagle,
  },

  {
    name: 'Boneless Cork',
    notStarter: true,
    setups: ['cartwheel'],
    landings: landingPositions.eagle,
  },

  {
    name: 'Dragonfly Cork',
    setups: takeoffs.swing.concat([
      'skip backswing',
      'skip backswing',
    ]),
    landings: landingPositions.eagle,
  },

  {
    name: 'Shuriken Cork',
    setups: takeoffs.swing,
    landings: landingPositions.mega.concat('complete'),
  },

  {
    name: 'Rodeo Cork',
    setups: takeoffs.swing,
    landings: landingPositions.eagle,
  },

  {
    name: 'Cork D-leg',
    setups: takeoffs.swing,
    landings: ['backside punch', 'invert backside punch'],
  },

  {
    name: 'Cork Hyper',
    setups: takeoffs.swing,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Cork Swipe',
    setups: takeoffs.swing,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Boxcutter',
    setups: takeoffs.swing,
    landings: landingPositions.hyper,
  },

  {
    name: 'Wrap Full Twist',
    notStarter: true,
    setups: ['turn step', 'wrap'],
    landings: landingPositions.eagle,
  },

  {
    name: 'Back TD Full',
    setups: takeoffs.backFullTwist,
    landings: landingPositions.eagle,
  },

  {
    name: 'Back Full D-leg',
    setups: takeoffs.backFullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Back Full Pike',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Back Full Terada Grab',
    setups: takeoffs.backFullTwist,
    landings: ['reverse vanish', 'right left redirect', 'hook', 'cheat'],
  },

  {
    name: 'Back Full Cobra',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Back Full Crowd Awakener',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Ironman Back Full',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Back Arabian Half',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Arabian Half',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'TD Full',
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.eagle,
  },

  {
    name: 'Full Terada Grab',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: ['reverse vanish', 'right left redirect', 'hook', 'cheat'],
  },

  {
    name: 'Rodeo Back Full',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: landingPositions.eagle,
  },

  {
    name: 'Rodeo Back Full Round',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: landingPositions.round,
  },

  {
    name: 'Back Full Swipe',
    setups: takeoffs.backFullTwist,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Back Full Hyper Hook',
    setups: takeoffs.backFullTwist,
    landings: landingPositions.hyper,
  },

  {
    name: 'Back Double Full',
    setups: takeoffs.backFullTwist,
    landings: landingPositions.eagle,
  },

  {
    name: 'Flik Flak',
    setups: takeoffs.swing,
    landings: landingPositions.round,
  },

  {
    name: 'Kick Full',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Lonestar Twist',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Full Double Leg',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Full Pike',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Ironman Full',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Full Feilong',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.round,
  },

  {
    name: 'Full Wackknife',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Full Cobra',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Full Crowd Awakener',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Rodeo Full',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.eagle,
  },

  {
    name: 'Rodeo Full Round',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.round,
  },

  {
    name: 'Full Swipe',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Full Hyper Hook',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.hyper,
  },

  {
    name: 'Double Full',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.eagle,
  },

  {
    name: 'Illusion Twist Feilong',
    setups: takeoffs.btwist,
    landings: landingPositions.round,
  },

  {
    name: 'TD Btwist',
    setups: takeoffs.btwist.concat(['inside leg reversal', 'mega']),
    landings: landingPositions.eagle,
  },

  {
    name: 'Btwist Hyper',
    setups: takeoffs.btwist,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Btwist Swipe',
    setups: takeoffs.btwist,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Btwist Hyper Hook',
    setups: takeoffs.btwist,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Btwist Double Leg',
    setups: takeoffs.btwist,
    landings: ['backside punch', 'invert backside punch'],
  },

  {
    name: 'Rodeo',
    setups: ['invert backside punch'],
    landings: ['backside punch', 'invert backside punch'],
  },

  // {
  //   name: 'Double Flash Kick',
  //   setups: [
  //     'backside pop',
  //     'invert backside pop',
  //     'backside punch',
  //     'invert backside punch',
  //   ], // Pop is implied
  //   landings: landingPositions.hyper,
  // },

  {
    name: 'Triple Flash Kick',
    setups: [
      'backside pop',
      'invert backside pop',
      'backside punch',
      'invert backside punch',
    ], // Pop is implied
    landings: landingPositions.hyper,
  },
];

export default level3;
