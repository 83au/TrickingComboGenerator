import takeoffs from './takeoffs';
import landingPositions from './landings';

// Tricks should not have transitions that only lead to tricks of a higher level

const level1 = [
  // KICKS
  {
    name: '360 Crescent',
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
      'turbo',
      'mega',
      'outside leg reversal',
      'right left redirect',
      'hook carry-through',
      'cheat',
    ],
  },

  {
    name: '540 Kick',
    setups: ['cheat', 'vanish', 'frontside pop'], // redirect is implied
    landings: landingPositions.hyper,
  },

  {
    name: 'Auto-Bahn',
    setups: [
      'reverse pop',
      'hook carry-through',
      'outside leg reversal',
      'right left redirect',
      'hook',
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
    landings: ['frontside pop', 'outside leg reversal'],
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
    name: 'Narabong',
    setups: ['hook carry-through', 'outside leg reversal', 'right left redirect', 'reverse pop'],
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
    setups: [
      'vanish',
      'hook carry-through',
      'right left redirect',
      'reverse pop',
      'frontside pop',
      'hook',
      'cheat',
    ],
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

  // Cartwheel has more instances to reflect how often it is used in combos
  {
    name: 'Cartwheel',
    setups: takeoffs.cartwheel,
    landings: ['invert inside pop', 'wrap'],
  },
  {
    name: 'Cartwheel',
    setups: takeoffs.cartwheel,
    landings: ['invert inside pop', 'wrap'],
  },
  {
    name: 'Cartwheel',
    setups: takeoffs.cartwheel,
    landings: ['invert inside pop', 'wrap'],
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

  {
    name: 'Round Off',
    setups: takeoffs.cartwheel,
    landings: ['invert backside punch'],
  },

  {
    name: 'Scoot',
    setups: ['skip round', 'semi', 'hook', 'hook to scoot'],
    landings: landingPositions.eagle,
  },

  {
    name: 'Scoot Hyper',
    setups: ['skip round', 'semi', 'hook', 'hook to scoot'],
    landings: landingPositions.hyper,
  },

  {
    name: 'Spyder',
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
    name: 'Transformer/Machine',
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

  // Flips & Twists
  {
    name: 'Arabian',
    setups: [
      'invert inside pop',
      'invert backside punch',
      'invert backside pop',
    ],
    landings: [
      'invert frontside punch',
      'hook',
      'semi',
      'mega',
    ],
  },

  {
    name: 'Front Flip',
    setups: ['invert frontside pop', 'invert frontside punch'],
    landings: [
      'invert frontside punch',
      'semi',
      'mega',
    ],
  },

  {
    name: 'Webster',
    setups: [
      'reverse vanish',
      'mega',
    ],
    landings: [
      'reverse vanish',
      'invert frontside punch',
      'mega',
      'semi',
    ],
  },
];

export default level1;
