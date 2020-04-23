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
      'hook to scoot', // To account for no scoots on this level
      'skip masterswing',
      'vanish'],
    landings: landingPositions.hyper,
  },

  {
    name: 'Boneless Gainer',
    setups: takeoffs.swing.concat([
      'reverse vanish',
    ]),
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
    ],
  },

  {
    name: 'Sideswipe',
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
    name: 'Tak Full',
    setups: ['turn step', 'vanish'],
    landings: landingPositions.eagle,
  },

  {
    name: 'Tak 9',
    setups: ['turn step', 'vanish'],
    landings: landingPositions.round,
  },

  {
    name: 'Tak Full Twist',
    setups: ['turn step', 'vanish'],
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
    name: 'Cork Swipe',
    setups: takeoffs.swing,
    landings: landingPositions.hyper,
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
    name: 'Back Full Twist Double Leg',
    setups: takeoffs.backFullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Back Full Twist Swipe',
    setups: takeoffs.backFullTwist,
    landings: landingPositions.hyper,
  },

  {
    name: 'Back Full Twist Hyper Hook',
    setups: takeoffs.backFullTwist,
    landings: landingPositions.hyper,
  },

  {
    name: 'Back Double Full Twist',
    setups: takeoffs.backFullTwist,
    landings: landingPositions.eagle,
  },

  {
    name: 'Flik Flak',
    setups: takeoffs.swing,
    landings: landingPositions.round,
  },

  {
    name: 'Full Twist Double Leg',
    setups: takeoffs.insideFullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Full Twist Swipe',
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.hyper,
  },

  {
    name: 'Full Twist Hyper Hook',
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.hyper,
  },

  {
    name: 'Double Full Twist',
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.eagle,
  },

  {
    name: 'Hyper Twist',
    setups: ['hook', 'reverse vanish', 'missleg', 'turn step'],
    landings: landingPositions.hyper,
  },

  {
    name: 'Butterfly Twist Swipe',
    setups: ['hook', 'reverse vanish', 'turn step'],
    landings: landingPositions.hyper,
  },

  {
    name: 'Butterfly Twist Hyper Hook',
    setups: ['hook', 'reverse vanish', 'turn step'],
    landings: landingPositions.hyper,
  },

  {
    name: 'Butterfly Twist Double Leg',
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
