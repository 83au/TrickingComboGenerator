import takeoffs from './takeoffs';
import landingPositions from './landings';

// Tricks should not have transitions that only lead to tricks of a higher level

const level1 = [
  // VERT KICKS
  {
    name: '360',
    setups: [
      'inside pop',
      'frontside pop',
      'inside punch',
      'frontside punch',
      'cheat',
      'hook',
      // 'right left redirect', redirect is implied
    ],
    landings: [
      'hook',
      'frontside pop',
      'reverse pop',
      'right first reverse pop',
    ],
  },

  {
    name: '360 Hyper',
    setups: [
      'inside pop',
      'frontside pop',
      'inside punch',
      'frontside punch',
      'cheat',
      'hook',
      // 'right left redirect', redirect is implied
    ],
    landings: landingPositions.round,
  },

  {
    name: '540 Kick',
    setups: takeoffs.tornado, // redirect is implied
    landings: landingPositions.hyper,
  },

  {
    name: 'Auto-Bahn',
    setups: [
      'vanish',
      'hook carry-through',
      'right left redirect',
      'reverse pop',
      'hook',
      // 'cheat', - cheat is implied
    ],
    landings: landingPositions.hook,
  },

  {
    name: 'Backside 720 Kick',
    setups: ['backside punch', 'backside pop'],
    landings: landingPositions.hook,
  },

  {
    name: 'Back Sweep',
    notFinisher: true,
    setups: ['outside leg reversal', 'hook', 'reverse pop'],
    landings: [
      'frontside pop',
      'outside leg reversal',
      'hook carry-through',
      'scoot master swing',
    ],
  },

  {
    name: 'Butterfly Kick',
    setups: ['turn step', 'hook', 'reverse vanish', 'right first reverse pop'],
    landings: ['reverse vanish', 'outside leg reversal', 'inside pop'],
  },

  {
    name: 'Compasso (td hook)',
    notFinisher: true,
    setups: [
      'vanish',
      'Tornado Kick',
      'outside leg reversal',
    ],
    landings: landingPositions.hook,
  },

  {
    name: 'Double Hook',
    setups: [
      'vanish',
      'hook carry-through',
      'right left redirect',
      'reverse pop',
      'hook',
      'cheat',
    ],
    landings: landingPositions.hook,
  },

  {
    name: 'Feilong',
    setups: [
      'inside pop',
      'frontside pop',
      'frontside punch',
      'inside punch',
      'cheat',
      'reverse pop', // redirect is implied
    ],
    landings: landingPositions.round,
  },

  {
    name: 'Front Sweep',
    notFinisher: true,
    setups: ['inside leg reversal', 'right first reverse pop'],
    landings: ['backside pop', 'inside leg reversal'],
  },

  {
    name: 'Hawkeye',
    setups: ['inside leg reversal'],
    landings: landingPositions.round,
  },

  {
    name: 'Jump Round',
    setups: ['backside pop', 'backside punch'],
    landings: landingPositions.round,
  },

  {
    name: 'Narabong',
    setups: takeoffs.tornado,
    landings: landingPositions.hook,
  },

  {
    name: 'Palm Kick',
    notFinisher: true,
    setups: ['reverse vanish', 'missleg', 'hook', 'mega'],
    landings: ['reverse vanish', 'outside leg reversal', 'right left redirect'],
  },

  {
    name: 'Round Kick',
    notFinisher: true,
    setups: ['inside leg reversal'],
    landings: landingPositions.round,
  },

  {
    name: 'Tornado',
    notFinisher: true,
    setups: takeoffs.tornado,
    landings: landingPositions.round,
  },

  {
    name: 'Tsunami Kick',
    setups: [
      'back swing',
      'round carry-through',
      'inside leg reversal',
      'left right redirect',
      'reverse pop',
      'skip backswing',
    ],
    landings: landingPositions.hook,
  },

  {
    name: 'Wrap 900',
    notStarter: true,
    setups: ['skip round', 'wrap'],
    landings: landingPositions.round,
  },

  // TRANSITION TRICKS
  {
    name: 'Blaster Scoot',
    setups: takeoffs.cartwheel,
    landings: [
      // Swing get higher precedence
      'back swing',
      'back swing',
      'backside pop',
      // Invert pops are more common
      'invert backside pop',
      'invert backside pop',
      'vanish',
    ],
  },

  // Cartwheel is more common so it has more instances
  {
    name: 'Cartwheel',
    setups: takeoffs.cartwheel,
    landings: [
      'invert inside pop',
      'invert inside pop',
      'wrap',
      'inside pop',
      'reverse vanish',
    ],
  },
  {
    name: 'Cartwheel',
    setups: takeoffs.cartwheel,
    landings: [
      'invert inside pop',
      'invert inside pop',
      'wrap',
      'inside pop',
      'reverse vanish',
    ],
  },
  {
    name: 'Cartwheel',
    setups: takeoffs.cartwheel,
    landings: [
      'invert inside pop',
      'invert inside pop',
      'wrap',
      'inside pop',
      'reverse vanish',
    ],
  },
  {
    name: 'Cartwheel',
    setups: takeoffs.cartwheel,
    landings: [
      'invert inside pop',
      'invert inside pop',
      'wrap',
      'inside pop',
      'reverse vanish',
    ],
  },

  {
    name: 'One-handed Cartwheel',
    setups: takeoffs.cartwheel,
    landings: [
      'invert inside pop',
      'invert inside pop',
      'wrap',
      'inside pop',
      'reverse vanish',
    ],
  },

  {
    name: 'Kaydem',
    setups: ['reverse vanish'],
    landings: [
      // Swing gets higher precedence
      'back swing',
      'back swing',
      'backside pop',
      // Invert pops are more common
      'invert backside pop',
      'invert backside pop',
      'vanish',
    ],
  },

  {
    name: 'Macaco',
    setups: ['backside pop', 'invert backside pop'],
    landings: [
      'right left redirect',
      'outside leg reversal',
      'reverse vanish',
      'complete',
    ],
  },

  // Round is more common so it has more instances
  {
    name: 'Round Off',
    setups: takeoffs.cartwheel,
    landings: ['invert backside punch'],
  },
  {
    name: 'Round Off',
    setups: takeoffs.cartwheel,
    landings: ['invert backside punch'],
  },

  {
    name: 'Scoot',
    setups: [
      'skip masterswing',
      'semi',
      'hook',
      'scoot master swing',
    ],
    landings: landingPositions.eagle,
  },

  {
    name: 'Scoot Hyper',
    setups: ['skip masterswing', 'semi', 'hook', 'scoot master swing'],
    landings: landingPositions.hyper,
  },

  {
    name: 'Spyder',
    setups: [
      'vanish',
      'outside leg reversal',
      'hook carry-through',
      'front swing',
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
    name: 'Machine',
    setups: [
      'vanish',
      'outside leg reversal',
      'hook carry-through',
      'front swing',
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

  // Flips & Twists
  {
    name: 'Shant',
    setups: [
      'invert backside pop',
      'backside pop',
      'invert backside punch',
      'backside punch',
    ],
    landings: [
      'backside pop',
      'backside punch',
      'back swing',
      'vanish',
      'inside leg reversal',
      'left right redirect',
    ],
  },

  {
    name: 'Front Flip',
    setups: [
      'invert frontside pop',
      'invert frontside punch',
      'invert backside punch',
    ],
    landings: [
      'invert frontside punch',
      'reverse pop',
      'semi',
    ],
  },

  // {
  //   name: 'Webster',
  //   setups: [
  //     'reverse vanish',
  //     'mega',
  //   ],
  //   landings: [
  //     'reverse vanish',
  //     'invert frontside punch',
  //     'mega',
  //     'semi',
  //   ],
  // },
];

export default level1;
