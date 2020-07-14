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

  // 540 Gyro variation
  { 
    name: '540',
    setups: takeoffs.tornado, // redirect is implied
    landings: ['gyro backside'],
  },

  {
    name: '900',
    setups: ['frontside punch', 'frontside pop'],
    landings: landingPositions.round.concat(['hyper', 'rapid hook']),
  },

  {
    name: '900 Crowd Awakener',
    setups: [
      'cheat',
      'vanish',
      'right left redirect',
      'hook',
    ],
    landings: ['backside punch', 'hook'],
  },

  {
    name: '900 Double',
    setups: [
      'cheat',
      'vanish',
      'right left redirect',
      'hook',
    ],
    landings: landingPositions.round,
  },

  {
    name: '900 Feilong',
    setups: [
      'cheat',
      'vanish',
      'backside pop',
      'backside punch'
    ],
    landings: landingPositions.round,
  },

  {
    name: '900 Rodeo',
    setups: [
      'cheat', 
      'right left redirect', 
      'hook',
      'vanish'
    ],
    landings: landingPositions.round,
  },

  {
    name: '1080',
    setups: [
      'cheat',
      'vanish',
      'hook',
      'frontside pop',
      'frontside punch'
    ],
    landings: landingPositions.hook.concat(['rapid round']),
  },

  {
    name: 'Backside 9 Feilong',
    setups: ['backside punch', 'backside pop', 'inside pop'],
    landings: landingPositions.round,
  },

  {
    name: 'Backside 900 Sidekick',
    setups: [
      'backside pop',
      'backside punch',
    ],
    landings: landingPositions.round,
  },

  {
    name: 'Backside 1080',
    setups: [
      'backside pop',
      'backside punch',
      'inside pop',
    ],
    landings: landingPositions.hook.concat(['rapid round']),
  },

  {
    name: 'Bkick Switch Hyper Hook',
    setups: takeoffs.btwist.concat(['inside leg reversal']),
    landings: landingPositions.hook,
  },

  {
    name: 'Bkick Terada Grab',
    setups: takeoffs.btwist.concat(['inside leg reversal']),
    landings: landingPositions.hook,
  },

  {
    name: 'Feilong Hyper',
    setups: [
      'frontside pop',
      'frontside punch',
      'cheat', // because cheat, redirect is implied * easier for novices to understand
      'hook',
    ],
    landings: [
      'reverse vanish',
      'right left redirect',
      'skip backswing',
      'wrap',
      'cheat',
    ],
  },

  {
    name: 'Jackknife',
    setups: [
      'vanish',
      'right left redirect',
      'frontside pop',
      'hook',
      'cheat',
  ],
    landings: landingPositions.hook,
  },

  {
    name: 'Palm Kick Kyro',
    notFinisher: true,
    setups: ['reverse vanish', 'hook', 'mega'],
    landings: ['backside punch'],
  },

  {
    name: 'Parafuso Hawkeye',
    setups: [
      'cheat', 
      'vanish', 
      'hook carry-through',
      'right left redirect',
      'hook'
    ],
    landings: [
      'inside leg reversal',
      'left right redirect',
      'skip round',
      'hook',
    ],
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
    name: 'Swing 1080',
    setups: takeoffs.swing,
    landings: landingPositions.hook.concat(['rapid round']),
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

  // Aerial Mega variation
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
    name: 'Scrubba',
    setups: takeoffs.raiz,
    landings: ['broken'],
  },

  {
    name: 'Td Raiz',
    setups: takeoffs.raiz,
    landings: ['broken'],
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
    name: 'Full Gumbi',
    setups: ['invert backside pop', 'invert backside punch'],
    landings: landingPositions.eagle,
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
    name: 'Raiz Hyper Hook',
    setups: takeoffs.raiz,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Raiz Reversao',
    setups: takeoffs.raiz,
    landings: landingPositions.round,
  },

  {
    name: 'Sailor Gumbi',
    setups: takeoffs.raiz,
    landings: landingPositions.eagle,
  },

  {
    name: 'Sailor Moon Hawkeye',
    setups: takeoffs.raiz,
    landings: landingPositions.round,
  },

  {
    name: 'Sailor Moon Hyper Hook',
    setups: takeoffs.raiz,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Sailor Moon Reversao',
    setups: takeoffs.raiz,
    landings: landingPositions.round,
  },

  {
    name: 'Spyder Twist',
    setups: [
      'vanish',
      'outside leg reversal',
      'hook carry-through',
      'semi',
      'skip frontswing',
    ],
    landings: [
      'backside pop',
      'frontside pop',
      'vanish',
      'skip round',
      'skip frontswing',
    ],
  },

  {
    name: 'Td Swipe',
    setups: takeoffs.raiz,
    landings: landingPositions.hyper,
  },

  {
    name: 'Td Envergado',
    setups: takeoffs.raiz,
    landings: [
      'invert backside punch',
    ],
  },

  // FLIPS & TWISTS
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
    name: 'A-twist',
    setups: takeoffs.btwist.concat(['inside leg reversal', 'mega']),
    landings: landingPositions.eagle,
  },

  {
    name: 'A-twist Gumbi',
    setups: takeoffs.btwist.concat(['inside leg reversal', 'mega']),
    landings: landingPositions.eagle,
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
    name: 'Back Double Full',
    setups: takeoffs.backFullTwist,
    landings: landingPositions.eagle,
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
    name: 'Back Full D-leg',
    setups: takeoffs.backFullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Back Full Hyper',
    setups: takeoffs.backFullTwist,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Back Full Hyper Hook',
    setups: takeoffs.backFullTwist,
    landings: landingPositions.hyper.concat(['turbo']),
  },

  {
    name: 'Back Full Feilong',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: landingPositions.round,
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
    name: 'Back Full Shuriken',
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
    name: 'Back Full Terada Grab',
    setups: takeoffs.backFullTwist,
    landings: ['reverse vanish', 'right left redirect', 'hook', 'cheat'],
  },

  {
    name: 'Back TD Full',
    setups: takeoffs.backFullTwist,
    landings: landingPositions.eagle,
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
    name: 'Boxcutter',
    setups: takeoffs.swing,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'B-twist Axe',
    setups: takeoffs.btwist,
    landings: landingPositions.mega,
  },

  {
    name: 'B-twist DLeg',
    setups: takeoffs.btwist,
    landings: ['backside punch', 'invert backside punch'],
  },

  {
    name: 'B-twist Hyper',
    setups: takeoffs.btwist,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'B-twist Hyper Hook',
    setups: takeoffs.btwist,
    landings: landingPositions.hook,
  },

  {
    name: 'B-twist Shuriken',
    setups: takeoffs.btwist,
    landings: landingPositions.mega.concat('complete'),
  },

  {
    name: 'B-twist Swipe',
    setups: takeoffs.btwist,
    landings: landingPositions.invertedHyper,
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
    name: 'Cork Shuriken',
    setups: takeoffs.swing,
    landings: landingPositions.mega.concat('complete'),
  },

  {
    name: 'Cork Swipe',
    setups: takeoffs.swing,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Double Flash Kick',
    setups: [
      'backside pop',
      'invert backside pop',
      'backside punch',
      'invert backside punch',
    ], // Pop is implied
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Double Full',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.eagle,
  },

  {
    name: 'Double Leg Hyper Hook',
    setups: ['outside pop', 'outside punch', 'frontside punch', 'invert frontside punch'],
    landings: landingPositions.hook,
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
    name: 'Dragonfly Cork Round',
    setups: takeoffs.swing.concat([
      'skip backswing',
      'skip backswing',
    ]),
    landings: landingPositions.round,
  },

  {
    name: 'Dragonfly Moonkick',
    setups: [
      'back swing',
      'left right redirect',
      'round carry-through',
      'reverse vanish',
      'skip backswing',
      'skip backswing',
    ],
    landings: landingPositions.hook.concat(['turbo']),
  },

  {
    name: 'Flash Knife',
    setups: [
      'backside pop',
      'invert backside pop',
      'backside punch',
      'invert backside punch',
    ], // Pop is implied
    landings: landingPositions.hook,
  },

  {
    name: 'Flik Flak',
    setups: takeoffs.swing,
    landings: landingPositions.round,
  },

  {
    name: 'Full Terada Grab',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: ['reverse vanish', 'right left redirect', 'hook', 'cheat'],
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
    name: 'Full Feilong',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.round,
  },

  {
    name: 'Full Hyper',
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Full Hyper Hook',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.invertedHyper.concat(['turbo']),
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
    name: 'Full Shuriken',
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
    name: 'Gainer Figure-4',
    setups: [
      'back swing',
      'left right redirect',
      'skip backswing',
    ],
    landings: [ // Hyper is implied
      'backside punch',
      'invert backside punch',
      'complete',
      'hyper'
    ],
  },

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
      'skip backswing',
      'skip backswing',
    ]),
    landings: landingPositions.eagle,
  },

  {
    name: 'Gainer X-out',
    setups: takeoffs.swing.concat([
      'skip backswing',
      'skip backswing',
    ]),
    landings: ['backside punch'],
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
    name: 'Illusion Twist Feilong',
    setups: takeoffs.btwist,
    landings: landingPositions.round,
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
    name: 'Janitor Flip',
    notStarter: true,
    setups: ['backside punch'],
    landings: [
      'frontside pop', 
      'vanish', 
      'skip round',
      'left right redirect',
    ],
  },

  {
    name: 'Lonestar Hyper Hook',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: landingPositions.hook,
  },

  {
    name: 'Lonestar Scissor',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: landingPositions.mega,
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
    name: 'Lotus Double Leg',
    setups: takeoffs.swing,
    landings: ['backside punch', 'invert backside punch', 'hyper'],
  },

  {
    name: 'Rodeo',
    setups: ['invert backside punch'],
    landings: ['backside punch', 'invert backside punch'],
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
    name: 'Rodeo Cork',
    setups: takeoffs.swing,
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
    name: 'Swipe',
    setups: ['frontside pop', 'frontside punch'],
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
    name: 'Td A-twist',
    setups: takeoffs.btwist.concat(['inside leg reversal', 'mega']),
    landings: landingPositions.eagle,
  },

  {
    name: 'TD B-twist',
    setups: takeoffs.btwist.concat(['inside leg reversal', 'mega']),
    landings: landingPositions.eagle,
  },

  {
    name: 'Td Cork',
    setups: [
      'back swing',
      'left right redirect',
      'round carry-through',
      'skip backswing',
      'skip backswing',
    ],
    landings: landingPositions.eagle,
  },

  {
    name: 'Td Full',
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.eagle,
  },

  {
    name: 'Triple Flash Kick',
    setups: [
      'backside pop',
      'invert backside pop',
      'backside punch',
      'invert backside punch',
    ], // Pop is implied
    landings: landingPositions.invetedHyper,
  },

  {
    name: 'Wrap Front',
    notStarter: true,
    setups: ['turn step', 'wrap'],
    landings: ['frontside punch', 'mega', 'semi'],
  },

  {
    name: 'Wrap Full Twist',
    notStarter: true,
    setups: ['turn step', 'wrap'],
    landings: landingPositions.eagle,
  },

  {
    name: 'Webster Half',
    setups: [
      'reverse vanish',
      'mega',
    ],
    landings: [
      'backside punch',
    ],
  },
];

export default level3;
