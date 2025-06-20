import takeoffs from './takeoffs';
import landingPositions from './landings';

const level3 = [
  // KICKS
  {
    // 360 Crescent variations
    name: '360',
    setups: [
      'inside pop',
      'frontside pop',
      'inside punch',
      'frontside punch',
      'cheat',
      'hook',
    ],
    landings: [
      'gyro frontside',
    ],
  },

  // 540 Gyro variation
  {
    name: '540',
    setups: [
      'vanish',
      'right left redirect',
      'frontside pop',
      'hook',
      'cheat',
    ],
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
      'backside punch',
      'right left redirect',
    ],
    landings: landingPositions.round,
  },

  {
    name: '720 Double Feilong', // Whirlwind
    setups: ['cheat', 'right left redirect'],
    landings: landingPositions.round,
  },

  {
    name: '900 Rodeo',
    setups: [
      'cheat',
      'right left redirect',
      'vanish',
    ],
    landings: landingPositions.round,
  },

  {
    name: '1080',
    setups: [
      'cheat',
      'vanish',
      'frontside pop',
      'frontside punch',
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
    name: 'Bkick Switch H.H.',
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
      // 'cheat', cheat is implied
      'vanish',
      'hook carry-through',
      'right left redirect',
      'hook',
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

  { // Swing 360 variation
    name: 'Swing 360',
    setups: [
      'back swing',
      'round carry-through',
      'inside leg reversal',
      'left right redirect',
      'skip backswing',
      'right first reverse pop',
    ],
    landings: [
      'half gyro backside',
    ],
  },

  { 
    name: 'Tsunami Double',
    alternameName: 'Swing 360 Double',
    setups: [
      'back swing',
      'round carry-through',
      'inside leg reversal',
      'left right redirect',
      'skip backswing',
      'right first reverse pop',
    ],
    landings: [
      landingPositions.hook.concat(['turbo']),
    ],
  },

  {
    name: 'Swing 1080',
    setups: takeoffs.swing,
    landings: landingPositions.hook,
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
    ],
    landings: [
      'mega',
    ],
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
    landings: landingPositions.hook,
  },

  { // Raiz Semi & Mega variations
    name: 'Raiz',
    setups: takeoffs.raiz.concat(['vanish']),
    landings: ['semi', 'mega'],
  },

  {
    name: 'Raiz Reversao',
    setups: takeoffs.raiz,
    landings: landingPositions.round,
  },

  {
    name: 'Raiz Wheel',
    setups: takeoffs.raiz,
    landings: landingPositions.cartwheel,
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
    name: 'Sailor Moon H.H.',
    setups: takeoffs.raiz,
    landings: landingPositions['inverted hyper'],
  },

  {
    name: 'Sailor Moon Reversao',
    setups: takeoffs.raiz,
    landings: landingPositions.round,
  },

  // Broken variation
  {
    name: 'Scrubba',
    setups: takeoffs.raiz,
    landings: ['broken'],
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

  // Broken variation
  {
    name: 'Td Raiz',
    setups: takeoffs.raiz,
    landings: ['broken'],
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
  { // Arial Semi & Mega variations
    name: 'Aerial',
    setups: [
      'reverse vanish',
      'inside leg reversal',
      'hook',
      'cart swing',
      'right first reverse pop',
    ],
    landings: ['semi', 'mega'],
  },

  {
    name: 'Arabian Half',
    setups: takeoffs.fullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Arabian Scissor',
    notStarter: true,
    setups: ['invert backside pop', 'invert backside punch'],
    landings: ['vanish', 'skip round', 'frontside pop', 'hook'],
  },

  {
    name: 'Atwist',
    setups: takeoffs.btwist.concat(['inside leg reversal', 'mega']),
    landings: landingPositions.eagle,
  },

  {
    name: 'Atwist Gumbi',
    setups: takeoffs.btwist.concat(['inside leg reversal', 'mega']),
    landings: landingPositions.eagle,
  },

  {
    name: 'Boneless Gainer',
    notStarter: true,
    setups: ['boneless'],
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
    landings: landingPositions.hook,
  },

  {
    name: 'Btwist Axe',
    setups: takeoffs.btwist,
    landings: landingPositions.round,
  },

  {
    name: 'Btwist Dleg',
    setups: takeoffs.btwist,
    landings: ['backside punch', 'invert backside punch'],
  },

  {
    name: 'Btwist Hyper',
    setups: takeoffs.btwist.concat(['cart swing']),
    landings: landingPositions['inverted hyper'],
  },

  // Btwist Semi & Mega variations
  {
    name: 'Btwist',
    setups: takeoffs.btwist,
    landings: ['semi', 'mega'],
  },

  {
    name: 'Btwist Hyper Hook',
    setups: takeoffs.btwist,
    landings: landingPositions.hook,
  },

  {
    name: 'Btwist Illusion',
    setups: ['hook', 'reverse vanish', 'hyper'],
    landings: [
      'reverse pop',
      'right first reverse pop',
      'frontside punch',
      'hook',
    ],
  },

  {
    name: 'Btwist Shuriken',
    setups: takeoffs.btwist,
    landings: [
      'inside leg reversal',
      'left right redirect',
      'skip round',
      'vanish',
      'hook',
      'outside pop',
    ],
  },

  {
    name: 'Btwist Swipe',
    setups: takeoffs.btwist.concat(['cart swing']),
    landings: landingPositions.hyper,
  },

  {
    name: 'Cork Dleg',
    setups: takeoffs.swing,
    landings: [
      'backside punch',
      'hook',
    ],
  },

  {
    name: 'Cork Hyper',
    setups: takeoffs.swing,
    landings: landingPositions['inverted hyper'],
  },

  // Mega and semi variations of cork
  {
    name: 'Cork',
    setups: takeoffs.swing,
    landings: ['mega', 'semi'],
  },

  {
    name: 'Cork Shuriken',
    setups: takeoffs.swing,
    landings: [
      'inside leg reversal',
      'left right redirect',
      'skip round',
      'vanish',
      'hook',
      'outside pop',
    ],
  },

  {
    name: 'Cork Swipe',
    setups: takeoffs.swing,
    landings: landingPositions.hyper,
  },

  // HIGHER PRIORITY
  {
    name: 'Double Full',
    setups: takeoffs.fullTwist,
    landings: landingPositions.eagle,
  },
  {
    name: 'Double Full',
    setups: takeoffs.fullTwist,
    landings: landingPositions.eagle,
  },
  {
    name: 'Double Full',
    setups: takeoffs.fullTwist,
    landings: landingPositions.eagle,
  },
  {
    name: 'Double Full',
    setups: takeoffs.fullTwist,
    landings: landingPositions.eagle,
  },

  {
    name: 'Double Flash Kick',
    setups: [
      'backside pop',
      'invert backside pop',
      'backside punch',
      'invert backside punch',
    ], // Pop is implied
    landings: landingPositions.hyper,
  },

  {
    name: 'Dleg Hyper Hook',
    setups: [
      'outside pop',
      'outside punch',
      'frontside punch',
      'invert frontside puch',
    ],
    landings: landingPositions.hook,
  },

  {
    name: 'Dragonfly Cork',
    setups: takeoffs.swing.concat([
      'skip backswing',
    ]),
    landings: landingPositions.eagle,
  },

  {
    name: 'Dragonfly Cork Round',
    setups: takeoffs.swing.concat([
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
    name: 'Full Cobra',
    setups: takeoffs.fullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Full Crowd Awakener',
    setups: takeoffs.fullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Full Dleg',
    setups: takeoffs.fullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Full Feilong',
    setups: takeoffs.fullTwist,
    landings: landingPositions.round,
  },

  {
    name: 'Full Hyper',
    setups: takeoffs.fullTwist,
    landings: landingPositions['inverted hyper'],
  },

  // Full Semi & Mega variations
  {
    name: 'Full',
    setups: takeoffs.fullTwist,
    landings: ['semi', 'mega'],
  },

  {
    name: 'Full Hyper Hook',
    setups: takeoffs.fullTwist,
    landings: landingPositions.hook.concat(['turbo']),
  },

  {
    name: 'Full Pike',
    setups: takeoffs.fullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Full Shuriken',
    setups: takeoffs.fullTwist,
    landings: landingPositions.round,
  },

  {
    name: 'Full Swipe',
    setups: takeoffs.fullTwist,
    landings: landingPositions.hyper,
  },

  {
    name: 'Full Terada Grab',
    setups: takeoffs.fullTwist,
    landings: ['reverse vanish', 'right left redirect', 'hook', 'cheat'],
  },

  {
    // Gainer semi variation
    name: 'Gainer',
    setups: [
      'back swing',
      'left right redirect',
      'round carry-through',
      'skip backswing',
      'skip backswing',
    ],
    landings: [
      'semi',
    ],
  },

  {
    name: 'Gainer Figure-4',
    setups: [
      'back swing',
      'left right redirect',
      'skip backswing',
    ],
    landings: [
      'backside punch',
      'invert backside punch',
      'backside pop',
      'invert backside pop',
      'back swing',
      'vanish',
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
      'skip backswing',
      'skip backswing',
    ]),
    landings: landingPositions.eagle.concat('invert backside punch'),
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
    name: 'Handcuff Cork',
    notStarter: true,
    setups: takeoffs.swing,
    landings: landingPositions.eagle,
  },

  {
    name: 'Illusion Twist Feilong',
    setups: takeoffs.btwist,
    landings: landingPositions.round,
  },

  {
    name: 'Ironman Full',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Janitor Flip',
    notStarter: true,
    setups: ['invert backside punch'],
    landings: [
      'frontside pop',
      'vanish',
      'skp round',
      'left right redirect',
    ],
  },

  {
    name: 'Lonestar Hyper Hook',
    notStarter: true,
    setups: [
      'invert backside pop',
      'invert backside punch',
    ],
    landings: landingPositions.hook,
  },

  {
    name: 'Lonestar Scissor',
    notStarter: true,
    setups: [
      'invert backside pop',
      'invert backside punch',
    ],
    landings: landingPositions.mega,
  },

  {
    name: 'Lonestar Twist',
    notStarter: true,
    setups: [
      'invert backside pop',
      'invert backside punch',
    ],
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Lotus Dleg',
    setups: takeoffs.swing,
    landings: ['backside punch', 'invert backside punch', 'hyper'],
  },

  {
    name: 'Peter Pan Cork',
    notStarter: true,
    setups: takeoffs.swing,
    landings: landingPositions.eagle,
  },

  {
    name: 'Rodeo',
    setups: ['invert backside punch'],
    landings: ['backside punch', 'invert backside punch'],
  },

  {
    name: 'Rodeo Full',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: landingPositions.eagle,
  },

  {
    name: 'Rodeo Full Round',
    notStarter: true,
    setups: takeoffs.fullTwist,
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
    ],
  },

  {
    name: 'Sideswipe',
    setups: takeoffs.raiz,
    landings: landingPositions['inverted hyper'].concat('inside pop'),
  },

  {
    name: 'Swipe',
    setups: ['frontside pop', 'frontside punch'],
    landings: landingPositions.hyper,
  },

  {
    name: 'Takuraba',
    setups: ['turn step', 'invert vanish'],
    landings: [
      'frontside punch',
      'invert frontside punch',
      'mega',
      'semi',
    ],
  },

  {
    name: 'Tak Full Round',
    setups: ['turn step', 'invert vanish'],
    landings: landingPositions.round,
  },

  {
    name: 'Tak Full Twist',
    setups: ['turn step', 'invert vanish'],
    landings: landingPositions.eagle,
  },

  {
    name: 'Td Atwist',
    setups: takeoffs.btwist.concat(['inside leg reversal', 'mega']),
    landings: landingPositions.eagle,
  },

  {
    name: 'TD Btwist',
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
    setups: takeoffs.fullTwist,
    landings: landingPositions.eagle,
  },

  {
    name: 'Triple Flash Kick',
    setups: [
      'backside pop',
      'invert backside pop',
      'backside punch',
      'invert backside punch',
    ],
    landings: landingPositions.hyper,
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
