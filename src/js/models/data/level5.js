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
    name: '900 D-leg Twist',
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
];

export default level5;