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
      'hook',
    ],
    landings: landingPositions.round,
  },

  {
    name: '900 Double Leg',
    setups: ['cheat'],
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
    setups: [
      'vanish',
      'hook carry-through',
      'right left redirect',
      'frontside pop',
      'hook',
      'cheat',
    ],
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

  // Jackknife turbo and Hyper variations
  {
    name: 'Jackknife',
    setups: [
      'vanish',
      'right left redirect',
      'frontside pop',
      'hook',
      'cheat',
  ],
    landings: ['turbo', 'hyper'],
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

  {
    name: 'Wackest Knife',
    setups: [
      'cheat',
      'frontside pop',
      'frontside punch',
      'hook carry-through',
    ],
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

  {
    name: 'Spyder Twist Round',
    setups: [
      'vanish',
      'outside leg reversal',
      'hook carry-through',
      'semi',
      'skip frontswing',
    ],
    landings: landingPositions.round,
  },


  // FLIPS & TWISTS
  {
    name: '720 Twist (Barrel Roll)',
    setups: ['cheat', 'vanish'],
    landings: landingPositions.eagle,
  },

  {
    name: 'Back Full D-leg Hyper Hook',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Back Full D-leg Twist',
    setups: takeoffs.backFullTwist,
    landings: [
      'backside punch',
      'backside punch',
      'reverse pop',
    ],
  },

  {
    name: 'Back Full Kyro',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: [
      'backside punch',
      'reverse pop',
    ],
  },

  {
    name: 'Back Full Knife',
    setups: takeoffs.backFullTwist,
    landings: landingPositions.invertedHyper,
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
    name: 'B-kick Helicoptero',
    setups: takeoffs.btwist,
    landings: landingPositions.mega,
  },

  {
    name: 'Boneless Cork',
    notStarter: true,
    setups: ['Cartwheel'],
    landings: landingPositions.eagle,
  },

  {
    name: 'B-twist Double Round',
    setups: takeoffs.btwist,
    landings: landingPositions.round,
  },

  {
    name: 'B-twist Hawkeye',
    setups: takeoffs.btwist,
    landings: landingPositions.round,
  },

  {
    name: 'B-twist Shuriken Hyper Hook',
    setups: takeoffs.btwist,
    landings: landingPositions.hook,
  },

  {
    name: 'B-twist Twist Kick',
    setups: takeoffs.btwist,
    landings: landingPositions.mega,
  },

  {
    name: 'B-twist Wackknife',
    setups: takeoffs.btwist,
    landings: [
      'frontside punch',
      'reverse pop',
      'right first reverse pop',
    ],
  },

  {
    name: 'Double Back Tuck',
    notStarter: true,
    setups: ['invert backside punch'],
    landings: [
      'backside punch',
      'invert backside punch',
      'reverse pop',
    ],
  },

  {
    name: 'Double B-twist',
    setups: takeoffs.btwist,
    landings: landingPositions.eagle,
  },

  {
    name: 'Double Cork',
    setups: takeoffs.swing,
    landings: landingPositions.eagle,
  },

  {
    name: 'Full Dleg Hyper Hook',
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Full Dleg Twist',
    setups: takeoffs.insideFullTwist,
    landings: [
      'backside punch',
      'backside punch',
      'reverse pop',
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
    name: 'Full Swipe Knife',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.invertedHyper,
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
    name: 'Full Wackknife',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Gainer Triple',
    setups: takeoffs.swing,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Gainer Wackknife',
    setups: takeoffs.swing,
    landings: landingPositions.hook,
  },

  {
    name: 'G-Switch Hyper Hook',
    setups: takeoffs.swing,
    landings: landingPositions.hook,
  },

  {
    name: 'Janitor Twist',
    notStarter: true,
    setups: ['backside punch', 'backside pop'],
    landings: [
      'frontside pop', 
      'vanish', 
      'skip round',
      'left right redirect',
    ],
  },

  {
    name: 'Janitor Scissor Twist',
    notStarter: true,
    setups: ['backside punch', 'backside pop'],
    landings: [
      'frontside pop', 
      'vanish', 
      'skip round',
      'left right redirect',
    ],
  },

  {
    name: 'Popcorn',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: [
      'backside punch',
      'reverse pop',
      'hyper',
    ],
  },

  {
    name: 'Rodeo Janitor Twist',
    notStarter: true,
    setups: ['backside punch', 'backside pop'],
    landings: [
      'frontside pop', 
      'vanish', 
      'skip round',
      'left right redirect',
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
    name: 'Snapu',
    setups: takeoffs.raiz,
    landings: [ // hyper landing is implied
      'backside punch',
    ],
  },

  {
    name: 'Swipe Knife',
    setups: takeoffs.raiz,
    landings: landingPositions.hook.concat(['turbo']),
  },

  {
    name: 'Triple Full',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.eagle,
  },
];

export default level4;
