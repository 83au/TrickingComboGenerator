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
    landings: ['backside punch', 'hook',],
  },

  {
    name: '900 Gyro',
    setups: ['cheat', 'vanish'],
    landings: ['backside punch', 'hook',],
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
    name: 'Full Feilong Double',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: landingPositions.round,
  },

  {
    name: 'Full Swipe Late Round',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: landingPositions.round,
  },

  {
    name: 'Back Full Tai-Fighter',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: landingPositions.round,
  },

  {
    name: 'Btwist Dleg Twist',
    setups: ['turn step'],
    landings: ['backside punch', 'hook',]
  },

  {
    name: 'Btwist Round Late Round',
    setups: ['turn step'],
    landings: landingPositions.round,
  },

  {
    name: 'Btwist Shuriken',
    setups: ['turn step'],
    landings: ['backside punch', 'hook',]
  },

  {
    name: 'Btwist Snapu',
    setups: ['turn step'],
    landings: ['backside punch', 'hook',]
  },

  {
    name: 'Crashmoon',
    setups: ['back swing'],
    landings: landingPositions.hook.concat(['turbo']),
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
    name: 'Dub Full Dleg',
    setups: takeoffs.backFullTwist.concat(takeoffs.insideFullTwist),
    landings: ['backside punch', 'hook',, 'hook',],
  },

  {
    name: 'Filipino',
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
    name: 'Full C.A. Snapu',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: [
      'backside punch',
      'hook',
    ],
  },

  {
    name: 'Full Dleg Hawkeye',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
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
    name: 'Full Dleg Twist Dleg',
    setups: takeoffs.backFullTwist.concat(takeoffs.insideFullTwist),
    landings: ['backside punch', 'hook',],
  },

  {
    name: 'Full Feilong Double',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.round,
  },

  {
    name: 'Full In',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: ['backside punch', 'hook',]
  },

  {
    name: 'Full Scissor',
    setups: takeoffs.insideFullTwist.concat(takeoffs.backFullTwist), // * NEED TO DO THIS FOR OTHERS
    landings:  ['vanish', 'skip round', 'frontside pop', 'hook'],
  },

  {
    name: 'Full Shuriken H.H. Scissor',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: ['vanish', 'skip round', 'frontside pop', 'hook'],
  },

  {
    name: 'Full Swipe Late Round',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.round,
  },

  {
    name: 'Full Tai-Fighter',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.round,
  },

  {
    name: 'Full Wackknife H.H.',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: ['backside punch', 'hook'],
  },

  {
    name: 'Full Wackknife Round',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.round,
  },

  {
    name: 'Gainer Late Round',
    setups: takeoffs.swing,
    landings: landingPositions.round,
  },

  {
    name: 'G-Switch Half',
    setups: takeoffs.swing,
    landings: ['invert frontside punch', 'hook'],
  },

  {
    name: 'Gainer Figure-4 Sidekick',
    setups: [
      'back swing',
      'left right redirect',
      'skip backswing',
    ],
    landings: landingPositions.round,
  },

  {
    name: 'Gainer Scissor Round',
    setups: takeoffs.swing,
    landings: landingPositions.round,
  },

  {
    name: 'Kick Full Dleg',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: ['backside punch', 'hook'],
  },

  {
    name: 'Rodeo Full Hyper Hook',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.hook,
  },

  {
    name: 'Rodeo Full Wack',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: ['backside punch', 'hook'],
  },

  {
    name: 'Terada Full',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: ['backside punch', 'hook'],
  },

  {
    name: 'Triple Kick Full',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: ['backside punch', 'hook'],
  },

  {
    name: 'X-Out Full',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: ['backside punch', 'hook']
  },
];

export default level5;