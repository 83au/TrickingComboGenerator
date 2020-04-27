import takeoffs from './takeoffs';
import landingPositions from './landings';


const level3 = [
  // KICKS
  {
    name: '1080',
    setups: [
      'cheat',
      // 'right left redirect', Redirect is implied
      'vanish',
      // 'hook carry-through',
      'backside pop',
      'inside pop',
      'hook',
    ],
    landings: landingPositions.hook.concat(['rapid round']),
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
    name: 'Back Handspring Twist',
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
    name: 'Gainer Scissor Swipe',
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
    name: 'Dragonfly Cork',
    setups: takeoffs.swing.concat([
      'reverse vanish',
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
    name: 'Handcuff Cork',
    setups: takeoffs.swing,
    landings: landingPositions.eagle,
  },

  {
    name: 'Cork D-leg',
    setups: takeoffs.swing,
    landings: ['backside punch', 'invert backside punch'],
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
    setups: ['turn step', 'wrap'],
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
    setups: takeoffs.backFullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Back Full Crowd Awakener',
    setups: takeoffs.backFullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Ironman Back Full',
    setups: takeoffs.backFullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Back Arabian Half',
    setups: takeoffs.backFullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Full Terada Grab',
    setups: takeoffs.insideFullTwist,
    landings: ['reverse vanish', 'right left redirect', 'hook', 'cheat'],
  },

  {
    name: 'Rodeo Back Full',
    setups: takeoffs.backFullTwist,
    landings: landingPositions.eagle,
  },

  {
    name: 'Rodeo Back Full Round',
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
    setups: takeoffs.backFullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Back Arabian Half',
    setups: takeoffs.insideFullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Full Double Leg',
    setups: takeoffs.insideFullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Full Pike',
    setups: takeoffs.insideFullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Ironman Full',
    setups: takeoffs.insideFullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Full Feilong',
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.round,
  },

  {
    name: 'Full Wackknife',
    setups: takeoffs.insideFullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },


  {
    name: 'Full Cobra',
    setups: takeoffs.insideFullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Full Crowd Awakener',
    setups: takeoffs.insideFullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Rodeo Full',
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.eagle,
  },

  {
    name: 'Rodeo Full Round',
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.round,
  },

  {
    name: 'Full Swipe',
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Full Hyper Hook',
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.hyper,
  },

  {
    name: 'Double Full',
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.eagle,
  },

  {
    name: 'Hyper Twist',
    setups: ['hook', 'reverse vanish', 'missleg', 'turn step'],
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Btwist Swipe',
    setups: ['hook', 'reverse vanish', 'turn step'],
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Btwist Hyper Hook',
    setups: ['hook', 'reverse vanish', 'turn step'],
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Btwist Double Leg',
    setups: ['hook', 'reverse vanish', 'turn step'],
    landings: ['backside punch', 'invert backside punch'],
  },

  {
    name: 'Rodeo',
    setups: ['Round Off'],
    landings: ['backside punch', 'invert backside punch'],
  },
];

export default level3;
