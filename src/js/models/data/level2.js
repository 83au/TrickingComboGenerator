import takeoffs from './takeoffs';
import landingPositions from './landings';

const level2 = [
  // KICKS
  {
    // 360 Crescent variations
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
      'mega',
      'complete',
      'half gyro backside',
    ],
  },

  {
    name: '720 Kick',
    setups: [
      'cheat',
      // 'right left redirect', Redirect is implied
      'vanish',
      'hook carry-through',
      'reverse pop',
      'hook',
    ],
    landings: landingPositions.hook.concat(['rapid round']),
  },

  {
    name: '720 Kick', // Pop variation
    setups: ['frontside pop', 'hook'],
    landings: landingPositions.hook.concat(['rapid round']),
  },

  {
    name: '720 Double',
    setups: [
      'cheat',
      // 'right left redirect', redirect is implied
      'vanish',
      'hook',
      'frontside pop',
    ],
    landings: landingPositions.hook.concat(['turbo']),
  },

  {
    name: '900 Kick',
    setups: [
      'cheat',
      'vanish',
      // 'right left redirect', redirect is implied
      'skip round',
      'hook',
      'wrap',
    ],
    landings: landingPositions.round.concat(['rapid hook', 'hyper']),
  },

  {
    name: 'Backside 900',
    setups: ['backside punch', 'backside pop', 'inside pop'],
    landings: landingPositions.round.concat(['rapid hook', 'hyper']),
  },

  {
    name: 'Crowd Awakener',
    setups: [
      // 'right left redirect', // redirect is implied
      'cheat',
      'vanish',
      'hook',
    ],
    landings: ['backside punch', 'hook'],
  },

  {
    name: 'E-kick',
    notFinisher: true,
    setups: [
      'front swing',
      'reverse pop',
      'outside leg reversal',
      'semi',
      'hook carry-through',
      'hook',
    ],
    landings: landingPositions.hook,
  },

  { // Feilong variations
    name: 'Feilong',
    setups: [
      'inside pop',
      'frontside pop',
      'frontside punch',
      'inside punch',
      'cheat',
      'reverse pop', // redirect is implied
    ],
    landings: ['complete', 'half gyro frontside'],
  },

  {
    name: 'Hyper Feilong',
    setups: [
      'frontside pop',
      'frontside punch',
      'cheat', // because cheat, redirect is implied * easier for novices to understand
      'hook',
    ],
    landings: [
      'reverse vanish',
      'right left redirect',
      'skip backswing',
      'wrap',
      'cheat',
    ],
  },

  {
    name: 'Parafuso',
    setups: [
      'vanish',
      'hook',
      'hook carry-through',
      'right left redirect', // cheat is implied
    ],
    landings: [
      'backside punch',
    ],
  },

  {
    name: 'Swing 360 Crescent',
    setups: [
      'back swing',
      'reverse vanish',
      'round carry-through',
      'inside leg reversal',
      'left right redirect',
      'skip backswing',
      'right first reverse pop',
    ],
    landings: [
      'frontside pop',
      'hook',
      'turbo',
      'right left redirect',
      'outside leg reversal',
      'cheat',
    ],
  },

  {
    name: 'Swing 900 Kick',
    setups: [
      'back swing',
      'reverse vanish',
      'round carry-through',
      'inside leg reversal',
      'left right redirect',
      'right first reverse pop',
    ],
    landings: landingPositions.round,
  },

  {
    name: 'Tai-fighter',
    setups: ['frontside pop', 'inside pop', 'frontside punch', 'inside punch'],
    landings: landingPositions.round,
  },

  {
    name: 'Tornado Double',
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
    name: 'Tornado Sidekick',
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
    name: 'Triple Kick',
    setups: [
      'j step',
      'back swing',
      'round carry-through',
      'inside leg reversal',
      'left right redirect',
      'right first reverse pop',
    ],
    landings: landingPositions.round,
  },

  {
    name: 'Wackknife',
    setups: [
      'cheat',
      'frontside pop',
      'frontside punch',
      'hook carry-through',
    ],
    landings: landingPositions.hook.concat(['turbo']),
  },

  // TRANSITION TRICKS
  {
    name: 'Master Swipe',
    setups: ['master swing', 'right left redirect', 'skip masterswing', 'vanish'],
    landings: landingPositions.hyper,
  },

  {
    name: 'Cartwheel Twist',
    setups: takeoffs.cartwheel,
    landings: ['backside punch', 'invert backside punch', 'reverse pop'],
  },

  {
    name: 'Coin Drop',
    notStarter: true,
    setups: [
      'vanish',
      'reverse pop',
      'hook carry-through',
      'skip round',
    ],
    landings: ['cheat', 'hook'],
  },

  {
    name: 'Gumbi',
    setups: takeoffs.raiz,
    landings: landingPositions.eagle,
  },

  {
    name: 'Master Scoot',
    setups: ['master swing', 'skip masterswing', 'vanish'],
    landings: landingPositions.eagle,
  },

  {
    name: 'Raiz',
    setups: takeoffs.raiz,
    landings: landingPositions.eagle.concat(['inverted hyper']),
  },

  {
    name: 'Raiz Scissor',
    setups: takeoffs.raiz,
    landings: landingPositions.round,
  },

  {
    name: 'Sailor Moon',
    setups: takeoffs.raiz,
    landings: landingPositions.eagle,
  },

  {
    name: 'Sailor Moon Scissor',
    setups: takeoffs.raiz,
    landings: landingPositions.round,
  },

  {
    name: 'Suicide Kip Up',
    setups: ['backside pop'],
    landings: [
      'backside punch',
      'inside punch',
    ],
  },

  {
    name: 'Super Monkey Scoot',
    setups: takeoffs.cartwheel,
    landings: landingPositions.eagle,
  },

  {
    name: 'Touch Down Raiz',
    setups: takeoffs.raiz,
    landings: landingPositions.eagle,
  },

  {
    name: 'Valdez',
    notStarter: true,
    setups: ['invert backside pop', 'invert backside punch', 'back swing'],
    landings: ['invert backside pop', 'invert backside punch', 'back swing', 'hyper'],
  },

  // FLIPS & TWISTS
  {
    name: 'Aerial',
    setups: [
      'reverse vanish',
      'inside leg reversal',
      'hook',
      'mega',
    ],
    landings: [
      'inside pop',
      'invert inside pop',
      'reverse vanish',
      'right left redirect',
      'cheat',
      'outside leg reversal',
      'hook carry-through',
    ],
  },

  {
    name: 'Arabian Scissor Swipe',
    notStarter: true,
    setups: ['invert backside pop', 'invert backside punch'],
    landings: ['vanish', 'skip round', 'frontside pop', 'hook'],
  },

  {
    name: 'Back Full Round',
    setups: takeoffs.backFullTwist,
    landings: landingPositions.round,
  },

  {
    name: 'Back Full Twist',
    setups: takeoffs.backFullTwist,
    landings: landingPositions.eagle,
  },

  {
    name: 'Butterfly Twist',
    setups: takeoffs.btwist.concat(['missleg', 'inside leg reversal']),
    landings: landingPositions.eagle,
  },

  {
    name: 'Butterfly Twist Round',
    setups: takeoffs.btwist.concat(['missleg', 'inside leg reversal']),
    landings: landingPositions.round,
  },

  {
    name: 'Butterfly Switch',
    setups: takeoffs.btwist.concat(['missleg', 'inside leg reversal']),
    landings: [
      'invert backside pop',
      'back swing',
      'missleg',
      'skip frontswing', // skip from eagle into mega for a front swing
      'vanish',
    ],
  },

  {
    name: 'Butter Knife',
    setups: takeoffs.btwist.concat(['missleg', 'inside leg reversal']),
    landings: landingPositions.hook,
  },

  {
    name: 'Corkscrew',
    setups: takeoffs.swing.concat([
      'reverse vanish',
      'skip backswing',
      'skip backswing',
    ]),
    landings: landingPositions.eagle,
  },

  {
    name: 'Corkscrew Round',
    setups: takeoffs.swing.concat([
      'reverse vanish',
      'skip backswing',
      'skip backswing',
    ]),
    landings: landingPositions.round,
  },

  {
    name: 'Donut Boy',
    notStarter: true,
    setups: [
      'invert backside pop',
      'backside pop',
      'invert backside punch',
      'backside punch',
      'back swing',
      'skip backswing',
      'j step',
      'pivot step',
      'reverse vanish',
      'skip backswing',
      'skip backswing',
    ],
    landings: ['frontside punch', 'hook'],
  },

  {
    name: 'Donut Boy Hook',
    notStarter: true,
    setups: [
      'invert backside pop',
      'backside pop',
      'invert backside punch',
      'backside punch',
      'back swing',
      'skip backswing',
      'j step',
      'pivot step',
      'reverse vanish',
      'skip backswing',
      'skip backswing',
    ],
    landings: landingPositions.hyper,
  },

  {
    name: 'Double Leg',
    setups: ['outside pop', 'outside punch', 'frontside punch', 'invert frontside punch'],
    landings: ['backside punch', 'invert backside punch', 'hyper'],
  },

  {
    name: 'Flash Kick',
    setups: ['backside pop', 'invert backside pop', 'invert backside punch'], // Pop is implied
    landings: [ // Hyper is implied
      'inside pop',
      'reverse vanish',
      'right left redirect',
      'cheat',
    ],
  },

  {
    name: 'Full Round',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.round,
  },

  {
    name: 'Full Twist',
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.eagle,
  },

  {
    name: 'Gainer Arabian',
    setups: takeoffs.swing.concat([
      'reverse vanish',
      'skip backswing',
      'skip backswing',
    ]),
    landings: [
      'invert frontside punch',
      'reverse pop',
      'hook',
    ],
  },

  {
    name: 'Gainer Flash Kick',
    setups: takeoffs.swing.concat([
      'reverse vanish',
      'skip backswing',
      'skip backswing',
    ]),
    landings: [ // Hyper is implied
      'inside pop',
      'invert inside pop',
      'reverse vanish',
      'right left redirect',
      'cheat',
    ],
  },

  {
    name: 'Illusion Twist',
    setups: ['hook', 'reverse vanish', 'hyper'],
    landings: [
      'reverse pop',
      'right first reverse pop',
      'frontside punch',
      'hook',
    ],
  },

  {
    name: 'Loser',
    setups: ['Webster', 'skip frontswing'],
    landings: [
      'inside',
      'inside pop',
      'backside pop',
      'hook',
    ],
  },

  {
    name: 'Moonkick',
    setups: takeoffs.swing.concat([
      'reverse vanish',
      'skip backswing',
      'skip backswing',
    ]),
    landings: landingPositions.hook.concat(['turbo']),
  },

  {
    name: 'Rocketboii',
    notStarter: true,
    setups: ['invert backside punch'],
    landings: ['invert backside punch'],
  },

  {
    name: 'Lonestar',
    notStarter: true,
    setups: ['invert backside punch'],
    landings: [
      'invert frontside punch',
      'mega',
      'semi',
    ],
  },

  {
    name: 'Shuriken Twist',
    setups: ['hook', 'reverse vanish', 'turn step', 'mega'],
    landings: ['vanish', 'hook'],
  },

  {
    name: 'Terada Grab',
    setups: ['invert backside pop', 'invert backside punch'],
    landings: ['reverse vanish', 'right left redirect', 'hook', 'cheat'],
  },

  {
    name: 'X-Out',
    setups: ['invert backside pop'],
    landings: ['backside punch', 'invert backside punch', 'hook'],
  },
];

export default level2;
