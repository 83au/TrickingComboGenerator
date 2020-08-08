import takeoffs from './takeoffs';
import landingPositions from './landings';

// =======================================
//            *** GOD ***
// =======================================

const level6 = [
  // KICKS
  {
    name: 'Backside 1620',
    setups: ['backside punch', 'backside pop', 'inside pop'],
    landings: landingPositions.round,
  },

  {
    name: '900 Double Knife',
    setups: [
      'vanish',
      'cheat',
    ],
    landings: landingPositions.hook,
  },

  {
    name: '1260 Double',
    setups: [
      'cheat',
      'vanish',
    ],
    landings: landingPositions.round,
  },

  {
    name: '1620',
    setups: [
      'cheat',
      'vanish',
    ],
    landings: landingPositions.round,
  },
  // OTHER

  // FLIPS/TWISTS
  {
    name: 'Btwist-In',
    setups: ['turn step'],
    landings: [
      'backside punch',
      'hook',
      'right first reverse pop',
    ],
  },

  {
    name: 'Cali Roll',
    setups: ['Run in'],
    landings: [
      'backside punch',
      'hook',
    ],
  },

  {
    name: 'Dleg Dub Twist',
    setups: ['outside pop', 'outside punch'],
    landings: ['backside punch', 'hook'],
  },

  {
    name: 'Double Gainer',
    setups: takeoffs.swing,
    landings: ['backside punch', 'hook'],
  },

  {
    name: 'Dub Cork Snapu',
    notStarter: true,
    setups: takeoffs.swing,
    landings: [
      'backside punch',
      'hook',
    ],
  },

  {
    name: 'Dub Cork Wackknife',
    setups: takeoffs.swing,
    landings: [
      'backside punch',
      'hook',
      'right first reverse pop',
    ],
  },

  {
    name: 'Dub Full Dleg Dub Twist',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: [
      'backside punch',
      'hook',
    ],
  },

  {
    name: 'Dub Full-In',
    notStarter: true,
    setups: [
      'invert backside pop',
      'invert backside punch',
    ],
    landings: [
      'backside punch',
      'hook',
      'right first reverse pop',
    ],
  },

  {
    name: 'Dub Full Shuriken H.H.',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: landingPositions.hook.concat(['turbo']),
  },

  {
    name: 'Dub Full Snapu Twist',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: [
      'backside punch',
      'hook',
    ],
  },

  {
    name: 'Frappe',
    notStarter: true,
    setups: ['invert backside punch'],
    landings: landingPositions['inverted hyper'],
  },

  {
    name: 'Full-In Full-Out',
    notStarter: true,
    setups: [
      'invert backside pop',
      'invert backside punch',
    ],
    landings: [
      'backside punch',
      'hook',
      'right first reverse pop',
    ],
  },

  {
    name: 'Full Snapu Snapu',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: [
      'backside punch',
      'hook',
    ],
  },

  {
    name: 'Quad Cork',
    notStarter: true,
    setups: takeoffs.swing,
    landings: landingPositions.eagle,
  },

  {
    name: 'Quad Full',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: landingPositions.eagle,
  },

  {
    name: 'Raiz-In',
    setups: [
      'turn step',
      'step behind',
      'hook',
    ],
    landings: [
      'backside punch',
      'hook',
      'right first reverse pop',
    ],
  },

  {
    name: 'Rocketboi Full Rocketboi',
    notStarter: true,
    setups: ['invert backside punch'],
    landings: [
      'backside punch',
      'hook',
    ],
  },

  {
    name: 'Sailor Moon Snapu',
    setups: takeoffs.raiz,
    landings: [
      'backside punch',
      'hook',
      'right first reverse pop',
    ],
  },

  {
    name: 'Snapu Twist',
    setups: [
      'turn step',
      'step behind',
    ],
    landings: [
      'backside punch',
      'hook',
      'right first reverse pop',
    ],
  },

  {
    name: 'Snatchcannon',
    notStarter: true,
    setups: takeoffs.swing,
    landings: [
      'backside punch',
      'hook',
      'right first reverse pop',
    ],
  },

  {
    name: 'Tak Triple Full',
    notStarter: true,
    setups: ['turn step', 'invert vanish'],
    landings: [
      'backside punch',
      'hook',
      'right first reverse pop',
    ],
  },

  {
    name: 'Triple Atwist',
    setups: ['turn step'],
    landings: [
      'backside punch',
      'hook',
      'right first reverse pop',
    ],
  },

  {
    name: 'Triple Btwist',
    setups: ['turn step'],
    landings: landingPositions.eagle,
  },

  {
    name: 'Terada Grab-In Shant-Out',
    notStarter: true,
    setups: ['invert backside punch'],
    landings: [
      'backside punch',
      'hook',
      'right first reverse pop',
    ],
  },

  {
    name: 'Wrap Triple Full',
    notStarter: true,
    setups: ['wrap'],
    landings: [
      'backside punch',
      'hook',
      'right first reverse pop',
    ],
  },
];

export default level6;
