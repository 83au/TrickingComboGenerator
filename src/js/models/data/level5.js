import takeoffs from './takeoffs';
import landingPositions from './landings';

// =======================================
//            *** ELITE ***            
// =======================================

const level5 = [
  // Kicks
  {
    name: '360 Crescent Kyro D-leg',
    setups: [
      'inside pop',
      'frontside pop',
      'inside punch',
      'frontside punch',
    ],
    landings: ['backside punch'],
  },

  {
    name: 'Backside 1260 Knife',
    setups: ['backside pop', 'backside punch'],
    landings: landingPositions.hook,
  },

  {
    name: 'Backside 1440',
    setups: [
      'backside pop',
      'backside punch'
    ],
    landings: landingPositions.hook.concat(['rapid round']),
  },

  {
    name: '900 CA Knife',
    setups: [
      'vanish',
      'cheat',
    ],
    landings: landingPositions.hook,
  },

  {
    name: '900 Dleg Twist',
    setups: ['cheat', 'vanish'],
    landings: ['backside punch'],
  },

  {
    name: '900 Gyro',
    setups: ['cheat', 'vanish'],
    landings: ['backside punch'],
  },

  {
    name: '900 Paraknife',
    setups: [
      'vanish',
      'cheat',
    ],
    landings: landingPositions.hook,
  },

  {
    name: '900 Double Hyper',
    setups: [
      'vanish',
      'cheat',
    ],
    landings: landingPositions.hyper,
  },

  // GOD
  // {
  //   name: '900 Double Knife',
  //   setups: [
  //     'vanish',
  //     'cheat',
  //   ],
  //   landings: landingPositions.hyper,
  // },

  {
    name: '1260',
    setups: [
      'cheat',
      'vanish',
    ],
    landings: landingPositions.hyper,
  },

  {
    name: '1440',
    setups: [
      'cheat',
      'vanish',
      'hook',
    ],
    landings: landingPositions.hook.concat(['rapid round']),
  },

  {
    name: 'Bkick Heli Round',
    setups: takeoffs.btwist,
    landings: landingPositions.round,
  },

  {
    name: 'Swing 1260',
    setups: [
      'back swing',
      'round carry-through',
      'left right redirect',
    ],
    landings: landingPositions.round,
  },

  // FLIPS/TWISTS
  {
    name: 'Btwist Dleg Twist',
    setups: ['turn step'],
    landings: ['backside punch']
  },

  {
    name: 'Btwist Round Late Round',
    setups: ['turn step'],
    landings: landingPositions.round,
  },

  {
    name: 'Btwist Shuriken',
    setups: ['turn step'],
    landings: ['backside punch']
  },

  {
    name: 'Btwist Snapu',
    setups: ['turn step'],
    landings: ['backside punch']
  },

  {
    name: 'Dub Btwist Hyper',
    setups: takeoffs.btwist,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Dub Btwist Peter Pan',
    setups: takeoffs.btwist,
    landings: landingPositions.eagle,
  },

  {
    name: 'Dub Btwist Round',
    setups: ['turn step'],
    landings: landingPositions.round,
  },

  {
    name: 'Full In',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: ['backside punch']
  },
];

export default level5;