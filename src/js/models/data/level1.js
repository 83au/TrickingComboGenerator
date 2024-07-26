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
    name: '360 Shuriken',
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
      'hook',
      'cheat'
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
      'scoot master swing',
      'hook',
    ],
  },

  {
    name: 'Butterfly Kick',
    setups: ['turn step', 'hook', 'reverse vanish', 'right first reverse pop'],
    landings: [
      'reverse vanish',
      'outside leg reversal',
      'inside pop',
      'invert inside pop',
    ],
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
    name: 'Skip Hook (Tsunami)',
    setups: [
      'back swing',
      'round carry-through',
      'inside leg reversal',
      'skip backswing',
      'left right redirect',
    ],
    landings: landingPositions.hook,
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
    landings: landingPositions.cartwheel,
  },
  {
    name: 'Cartwheel',
    setups: takeoffs.cartwheel,
    landings: landingPositions.cartwheel,
  },
  {
    name: 'Cartwheel',
    setups: takeoffs.cartwheel,
    landings: landingPositions.cartwheel,
  },
  {
    name: 'Cartwheel',
    setups: takeoffs.cartwheel,
    landings: landingPositions.cartwheel,
  },

  {
    name: 'One-handed Cartwheel',
    setups: takeoffs.cartwheel,
    landings: landingPositions.cartwheel,
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

  // ======== SCOOT GETS HIGH PRIORITY =========
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
      'reverse pop',
    ],
    landings: [
      'backside pop',
      'frontside pop',
      'vanish',
      'skip round',
      'skip frontswing',
      'hook',
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
      'reverse pop',
    ],
    landings: [
      'backside pop',
      'frontside pop',
      'vanish',
      'skip round',
      'skip frontswing',
      'hook',
    ],
  },

  // Flips & Twists
  {
    name: 'Back Tuck',
    setups: [
      'invert backside pop',
      'invert backside punch',
    ],
    landings: [
      'backside punch',
      'right first reverse pop',
    ],
  },

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
      'complete',
    ],
  },
];

export default level1;
