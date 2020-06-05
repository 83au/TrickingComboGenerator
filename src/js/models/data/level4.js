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
    name: 'Backside 9 Gyro',
    setups: ['backside punch', 'backside pop', 'inside pop'],
    landings: ['backside punch'],
  },


  {
    name: '900 Double',
    setups: [
      'cheat',
      'vanish',
      'skip round',
      'hook',
      'wrap',
    ],
    landings: landingPositions.round.concat(['rapid hook']),
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
    name: 'Hurricane',
    setups: [
      'cheat',
      'vanish',
      'hook',
    ],
    landings: landingPositions.hook.concat(['rapid round']),
  },

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
    name: 'Paraknife (Switchblade)',
    setups: [
      'vanish',
      'hook',
      'hook carry-through',
      'right left redirect', // cheat is implied
    ],
    landings: landingPositions.round,
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
    name: 'Palm Kick Kyro',
    notFinisher: true,
    setups: ['reverse vanish', 'missleg', 'hook', 'mega'],
    landings: ['backside punch'],
  },

  // Setups/Transitions
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
    name: 'Snapu Swipe',
    setups: takeoffs.raiz,
    landings: [ // hyper landing is implied
      'backside punch',
    ],
  },

  {
    name: '720 Twist (Barrel Roll)',
    setups: ['cheat', 'vanish'],
    landings: landingPositions.eagle,
  },

  {
    name: 'Dub Cork',
    setups: takeoffs.swing,
    landings: landingPositions.eagle,
  },

  {
    name: 'Shuriken Cutter',
    notStarter: true,
    setups: takeoffs.swing,
    landings: landingPositions.hyper,
  },

  {
    name: 'Dub Btwist',
    setups: takeoffs.btwist,
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
    name: 'Back Full Snapu',
    setups: takeoffs.backFullTwist,
    landings: [
      'backside punch',
      'reverse pop',
      'right first reverse pop',
    ],
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
    name: 'Back Triple Full',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: landingPositions.eagle,
  },

  {
    name: 'Triple Full',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.eagle,
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
    name: 'Sidewinder',
    setups: takeoffs.btwist,
    landings: ['backside pop'],
  },
];

export default level4;
