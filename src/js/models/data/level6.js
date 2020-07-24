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
    name: 'Double Gainer',
    setups: takeoffs.swing,
    landings: ['backside punch', 'hook'],
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
    landings: ['backside punch', 'hook'],
  },
];

export default level6;
