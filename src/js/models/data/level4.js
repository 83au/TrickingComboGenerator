import takeoffs from './takeoffs';
import landingPositions from './landings';

const level4 = [
  // KICKS
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
    name: 'Hurricane (1080 Triple)',
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
      'backside pop',
      'inside pop',
      'cheat',
      'vanish',
    ],
    landings: landingPositions.round.concat(['rapid hook']),
  },


  // FLIPS & TWISTS
  {
    name: 'Snapu Swipe',
    setups: takeoffs.raiz,
    landings: [ // hyper landing is implied
      'backside punch',
      'invert backside punch',
    ],
  },

  {
    name: '720 Twist (Barrel Roll)',
    setups: ['cheat', 'vanish'],
    landings: [landingPositions.eagle],
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
  // Dub Btwist
  // Full Snapu
  // Double Back Flip
];

export default level4;
