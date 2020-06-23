import takeoffs from './takeoffs';
import landingPositions from './landings';

const level4 = [
  // KICKS
  {
    // 360 Crescent variations
    name: '360 Gyro Round',
    setups: [
      'inside pop',
      'frontside pop',
      'inside punch',
      'frontside punch',
    ],
    landings: landingPositions.round,
  },

  {
    name: '900 Double Tai-fighter',
    setups: [
      'cheat',
      'vanish',
      'skip round',
      'hook',
      'wrap',
    ],
    landings: landingPositions.round,
  },

  {
    name: '900 Double Leg',
    setups: takeoffs.tornado,
    landings: ['backside punch'],
  },

  {
    name: '900 Knife',
    setups: takeoffs.tornado,
    landings: landingPositions.hook,
  },

  {
    name: '1080 Double',
    setups: [
      'cheat',
      'vanish',
      'hook',
    ],
    landings: landingPositions.hook.concat(['rapid round']),
  },

  {
    name: '1260',
    setups: [
      'cheat',
      'vanish',
      'frontside pop',
      'frontside punch',
    ],
    landings: landingPositions.round.concat(['rapid hook']),
  },

  {
    name: 'Backside 9 Gyro',
    setups: ['backside punch', 'backside pop', 'inside pop'],
    landings: ['backside punch'],
  },

  {
    name: 'Backside 9 Knife',
    setups: ['backside punch', 'backside pop', 'inside pop'],
    landings: landingPositions.hyper,
  },

  // EXPERT
  // {
  //   name: 'Backside 1080 Jackknife',
  //   setups: ['backside pop', 'backside punch'],
  //   landings: 
  // },
  // Backside 1260 Knife

  {
    name: 'Backside 1260',
    setups: [
      'backside pop',
      'inside pop',
      'backside punch',
      'inside punch',
    ],
    landings: landingPositions.round.concat(['rapid hook']),
  },

  {
    name: 'Bkick Late Hook',
    setups: takeoffs.btwist,
    landings: landingPositions.hook,
  },

  {
    name: 'Bkick Helicoptero',
    setups: takeoffs.btwist,
    landings: landingPositions.round,
  },

  {
    name: 'Crowd Awakener Knife',
    setups: takeoffs.tornado,
    landings: landingPositions.hook,
  },

  {
    name: 'Hurricane Kick',
    setups: [
      'cheat',
      'vanish',
      'hook',
    ],
    landings: landingPositions.hook.concat(['rapid round']),
  },

  {
    name: 'Paraknife (Switchblade)',
    setups: [
      'vanish',
      'hook',
      'hook carry-through',
      'right left redirect', // cheat is implied
    ],
    landings: landingPositions.hook,
  },

  {
    name: 'Parafuso Gyro',
    setups: [
      'vanish',
      'hook',
      'hook carry-through',
      'right left redirect',
    ],
    landings: [
      'backside punch',
    ],
  },

  {
    name: 'Swing 1080',
    setups: [
      'back swing',
      'reverse vanish',
      'round carry-through',
      'inside leg reversal',
      'left right redirect',
      'right first reverse pop',
    ],
    landings: landingPositions.hook,
  },

  {
    name: 'Swipeknife',
    setups: takeoffs.raiz,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Twist Knife',
    setups: takeoffs.tornado,
    landings: landingPositions.hook,
  },

  // OTHER
  {
    name: 'Flare',
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


  // FLIPS & TWISTS
  {
    name: '720 Twist (Barrel Roll)',
    setups: ['cheat', 'vanish'],
    landings: landingPositions.eagle,
  },

  {
    name: 'Back Full Snapu',
    setups: takeoffs.backFullTwist,
    landings: [
      'backside punch',
      'reverse pop',
      'right first reverse pop',
    ],
  },

  {
    name: 'Back Triple Full',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: landingPositions.eagle,
  },

  {
    name: 'Boneless Cork',
    notStarter: true,
    setups: ['Cartwheel'],
    landings: landingPositions.eagle,
  },

  {
    name: 'Btwist Wackknife',
    setups: takeoffs.btwist,
    landings: [
      'frontside punch',
      'reverse pop',
      'right first reverse pop',
    ],
  },

  {
    name: 'Double Back Flip',
    notStarter: true,
    setups: ['invert backside punch'],
    landings: [
      'backside punch',
      'invert backside punch',
      'reverse pop',
    ],
  },

  {
    name: 'Dub Btwist',
    setups: takeoffs.btwist,
    landings: landingPositions.eagle,
  },

  {
    name: 'Dub Cork',
    setups: takeoffs.swing,
    landings: landingPositions.eagle,
  },

  {
    name: 'Full Snapu',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: [
      'backside punch',
      'reverse pop',
    ],
  },

  {
    name: 'Full Kyro',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: [
      'backside punch',
      'reverse pop',
    ],
  },

  {
    name: 'Popcorn',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: [
      'backside punch',
      'reverse pop',
    ],
  },

  {
    name: 'Shuriken Cutter',
    notStarter: true,
    setups: takeoffs.swing,
    landings: landingPositions.hyper,
  },

  {
    name: 'Sidewinder',
    setups: takeoffs.btwist,
    landings: ['backside pop'],
  },

  {
    name: 'Snapu Swipe',
    setups: takeoffs.raiz,
    landings: [ // hyper landing is implied
      'backside punch',
    ],
  },

  {
    name: 'Triple Full',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.eagle,
  },
];

export default level4;
