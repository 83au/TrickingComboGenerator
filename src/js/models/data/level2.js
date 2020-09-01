import takeoffs from './takeoffs';
import landingPositions from './landings';

const level2 = [
  // VERT KICKS
  {
    // 360 variations
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
      'complete',
      'half gyro backside',
    ],
  },

  {
    name: '720',
    setups: takeoffs.tornado,
    landings: landingPositions.hook.concat(['rapid round']),
  },

  {
    name: '720 Double',
    setups: takeoffs.tornado,
    landings: landingPositions.hook.concat(['turbo']),
  },

  {
    name: '900',
    setups: [
      'vanish',
      'wrap',
      'right left redirect',
      'frontside pop',
      'hook',
      'cheat',
    ],
    landings: landingPositions.round.concat(['rapid hook', 'hyper']),
  },

  {
    name: 'Backside 900',
    setups: ['backside punch', 'backside pop'],
    landings: landingPositions.round.concat(['rapid hook', 'hyper']),
  },

  {
    name: 'Bkick Switch',
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
    name: 'Crowd Awakener',
    setups: [
      'vanish',
      'hook carry-through',
      'right left redirect',
      'hook',
      'cheat',
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
    name: 'Parafuso',
    setups: [
      // 'cheat', cheat is implied
      'vanish',
      'hook carry-through',
      'right left redirect',
      'hook',
    ],
    landings: [
      'backside punch',
    ],
  },

  {
    name: 'Swing 360',
    setups: [
      'back swing',
      'round carry-through',
      'inside leg reversal',
      'left right redirect',
      'skip backswing',
      'right first reverse pop',
    ],
    landings: [
      'frontside pop',
      'hook',
      'reverse pop',
      'right first reverse pop',
    ],
  },

  {
    name: 'Swing 360 Hyper',
    setups: [
      'back swing',
      'round carry-through',
      'inside leg reversal',
      'left right redirect',
      'skip backswing',
      'right first reverse pop',
    ],
    landings: landingPositions.round,
  },

  {
    name: 'Swing 900 Kick',
    setups: [
      'back swing',
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
    name: 'Tornado Hawkeye',
    setups: takeoffs.tornado,
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
    name: 'Cartwheel Twist',
    setups: takeoffs.cartwheel,
    landings: ['backside punch', 'invert backside punch', 'reverse pop'],
  },

  {
    name: 'One-handed Cart Twist',
    setups: takeoffs.cartwheel,
    landings: ['backside punch', 'invert backside punch', 'reverse pop'],
  },

  {
    name: 'Coin Drop',
    notStarter: true,
    setups: [
      'vanish',
      'reverse pop',
      'outside leg reversal',
      'hook carry-through',
      'skip frontswing',
    ],
    landings: ['cheat', 'hook'],
  },


  // ==== HIGH PRIORITY ====
  {
    name: 'Gumbi',
    setups: takeoffs.raiz,
    landings: landingPositions.eagle,
  },
  {
    name: 'Gumbi',
    setups: takeoffs.raiz,
    landings: landingPositions.eagle,
  },
  {
    name: 'Gumbi',
    setups: takeoffs.raiz,
    landings: landingPositions.eagle,
  },


  // ==== HIGH PRIORITY ====
  {
    name: 'Master Scoot',
    setups: ['master swing', 'skip masterswing', 'vanish'],
    landings: landingPositions.eagle,
  },
  {
    name: 'Master Scoot',
    setups: ['master swing', 'skip masterswing', 'vanish'],
    landings: landingPositions.eagle,
  },
  {
    name: 'Master Scoot',
    setups: ['master swing', 'skip masterswing', 'vanish'],
    landings: landingPositions.eagle,
  },

  {
    name: 'Master Swipe',
    setups: [
      'master swing',
      'skip masterswing',
      'vanish',
    ],
    landings: landingPositions.hyper,
  },

  // ==== HIGH PRIORITY ====
  {
    name: 'Raiz',
    setups: takeoffs.raiz.concat(['invert vanish']),
    landings: landingPositions.eagle.concat(['inverted hyper']),
  },
  {
    name: 'Raiz',
    setups: takeoffs.raiz.concat(['invert vanish']),
    landings: landingPositions.eagle.concat(['inverted hyper']),
  },
  {
    name: 'Raiz',
    setups: takeoffs.raiz.concat(['invert vanish']),
    landings: landingPositions.eagle.concat(['inverted hyper']),
  },
  {
    name: 'Raiz',
    setups: takeoffs.raiz.concat(['invert vanish']),
    landings: landingPositions.eagle.concat(['inverted hyper']),
  },

  {
    name: 'Reversao',
    setups: takeoffs.raiz,
    landings: [
      'inside leg reversal',
      'left right redirect',
      'skip round',
      'hook',
    ],
  },

  // === HIGH PRIORITY ===
  {
    name: 'Sailor Moon',
    setups: takeoffs.raiz,
    landings: landingPositions.eagle,
  },
  {
    name: 'Sailor Moon',
    setups: takeoffs.raiz,
    landings: landingPositions.eagle,
  },

  {
    name: 'Sailor Moon Round',
    setups: takeoffs.raiz,
    landings: landingPositions.round,
  },

  {
    name: 'Scrubba',
    setups: takeoffs.raiz,
    landings: landingPositions.eagle,
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
    landings: landingPositions.eagle.concat('vanish', 'vanish', 'vanish', 'vanish', 'vanish'),
  },


  // ==== HIGH PRIORITY ====
  {
    name: 'Touch Down Raiz',
    setups: takeoffs.raiz,
    landings: landingPositions.eagle,
  },
  {
    name: 'Touch Down Raiz',
    setups: takeoffs.raiz,
    landings: landingPositions.eagle,
  },
  {
    name: 'Touch Down Raiz',
    setups: takeoffs.raiz,
    landings: landingPositions.eagle,
  },
  {
    name: 'Touch Down Raiz',
    setups: takeoffs.raiz,
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


  // ========== FLIPS & TWISTS ===========

  // ==== HIGH PRIORITY ====
  {
    name: 'Aerial',
    setups: [
      'reverse vanish',
      'inside leg reversal',
      'hook',
      'cart swing',
      'right first reverse pop',
    ],
    landings: [
      'inside pop',
      'invert inside pop',
      'reverse vanish',
      'right left redirect',
      'cheat',
    ],
  },
  {
    name: 'Aerial',
    setups: [
      'reverse vanish',
      'inside leg reversal',
      'hook',
      'cart swing',
      'right first reverse pop',
    ],
    landings: [
      'inside pop',
      'invert inside pop',
      'reverse vanish',
      'right left redirect',
      'cheat',
    ],
  },

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
    ],
  },

  {
    name: 'Full Round',
    setups: takeoffs.fullTwist.concat(['backside pop', 'backside punch', 'inside pop']),
    landings: landingPositions.round,
  },

  // ==== HIGH PRIORITY ====
  {
    name: 'Full Twist',
    setups: takeoffs.fullTwist.concat(['backside pop', 'backside punch', 'inside pop']),
    landings: landingPositions.eagle,
  },
  {
    name: 'Full Twist',
    setups: takeoffs.fullTwist.concat(['backside pop', 'backside punch', 'inside pop']),
    landings: landingPositions.eagle,
  },

  // ==== HIGH PRIORITY ====
  {
    name: 'Butterfly Twist',
    setups: takeoffs.btwist.concat(['missleg', 'inside leg reversal', 'cart swing']),
    landings: landingPositions.eagle,
  },
  {
    name: 'Butterfly Twist',
    setups: takeoffs.btwist.concat(['missleg', 'inside leg reversal', 'cart swing']),
    landings: landingPositions.eagle,
  },

  {
    name: 'Butterfly Twist Round',
    setups: takeoffs.btwist.concat(['inside leg reversal']),
    landings: landingPositions.round,
  },

  {
    name: 'Btwist Shuriken',
    setups: ['hook', 'reverse vanish', 'turn step', 'mega'],
    landings: ['vanish', 'hook'],
  },


  {
    name: 'Butter Knife',
    setups: takeoffs.btwist.concat(['missleg', 'inside leg reversal']),
    landings: landingPositions.hook,
  },


  // ==== HIGH PRIORITY ====
  {
    name: 'Corkscrew',
    setups: [
      'back swing',
      'left right redirect',
      'round carry-through',
      'skip backswing',
      'skip backswing',
    ],
    landings: landingPositions.eagle,
  },
  {
    name: 'Corkscrew',
    setups: [
      'back swing',
      'left right redirect',
      'round carry-through',
      'skip backswing',
      'skip backswing',
    ],
    landings: landingPositions.eagle,
  },
  {
    name: 'Corkscrew',
    setups: [
      'back swing',
      'left right redirect',
      'round carry-through',
      'skip backswing',
      'skip backswing',
    ],
    landings: landingPositions.eagle,
  },
  {
    name: 'Corkscrew',
    setups: [
      'back swing',
      'left right redirect',
      'round carry-through',
      'skip backswing',
      'skip backswing',
    ],
    landings: landingPositions.eagle,
  },

  {
    name: 'Corkscrew Round',
    setups: [
      'back swing',
      'left right redirect',
      'round carry-through',
      'skip backswing',
      'skip backswing',
    ],
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
    ],
    landings: ['backside punch', 'hook'],
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
    ],
    landings: landingPositions.hyper,
  },

  {
    name: 'Donut Boy Round',
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
    ],
    landings: landingPositions.round,
  },

  {
    name: 'Double Leg',
    setups: ['outside pop', 'outside punch', 'frontside punch', 'invert frontside punch'],
    landings: ['backside punch', 'invert backside punch', 'hyper'],
  },

  {
    name: 'Flash Kick',
    setups: [
      'backside pop',
      'invert backside pop',
      'backside punch',
      'invert backside punch',
    ], // Pop is implied
    landings: [ // Hyper is implied
      'inside pop',
      'reverse vanish',
      'right left redirect',
      'cheat',
    ],
  },

  {
    name: 'Gainer Arabian',
    setups: [
      'back swing',
      'left right redirect',
      'round carry-through',
      'skip backswing',
      'skip backswing',
    ],
    landings: [
      'invert frontside punch',
      'hook',
      'semi',
    ],
  },

  // ==== HIGH PRIORITY ====
  {
    name: 'Gainer Flash',
    setups: [
      'back swing',
      'left right redirect',
      'round carry-through',
      'skip backswing',
      'skip backswing',
    ],
    landings: [ // Hyper is implied
      'inside pop',
      'invert inside pop',
      'reverse vanish',
      'right left redirect',
    ],
  },
  {
    name: 'Gainer Flash',
    setups: [
      'back swing',
      'left right redirect',
      'round carry-through',
      'skip backswing',
      'skip backswing',
    ],
    landings: [ // Hyper is implied
      'inside pop',
      'invert inside pop',
      'reverse vanish',
      'right left redirect',
    ],
  },

  {
    name: 'Lonestar',
    notStarter: true,
    setups: [
      'invert backside pop',
      'invert backside punch',
    ],
    landings: [
      'invert frontside punch',
      'mega',
      'semi',
    ],
  },

  {
    name: 'Loser',
    setups: ['skip frontswing'],
    landings: [
      'inside pop',
      'backside pop',
      'hook',
    ],
  },

  {
    name: 'Moonkick',
    setups: [
      'back swing',
      'left right redirect',
      'round carry-through',
      'reverse vanish',
      'skip backswing',
      'skip backswing',
    ],
    landings: landingPositions.hook.concat(['turbo']),
  },

  {
    name: 'Rocketboii',
    notStarter: true,
    setups: ['invert backside punch'],
    landings: ['backside punch', 'invert backside punch', 'hook'],
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
