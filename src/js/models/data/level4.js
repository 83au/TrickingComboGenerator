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
    name: '900 Dleg',
    setups: ['cheat'],
    landings: ['backside punch'],
  },

  {
    name: '900 Knife',
    setups: [
      'vanish',
      'hook',
      'cheat',
    ],
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

  {
    name: 'Backside 1080 Hyper',
    setups: [
      'backside pop',
      'backside punch',
      'inside pop',
    ],
    landings: [
      'vanish',
      'skip round',
      'left right redirect',
      'inside leg reversal',
    ],
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

  // Jackknife turbo and hyper variations
  {
    name: 'Jackknife',
    setups: [
      'vanish',
      'right left redirect',
      'frontside pop',
      'hook',
      'cheat',
    ],
    landings: ['turbo'],
  },

  {
    name: 'Jackknife Hyper',
    setups: [
      'vanish',
      'right left redirect',
      'hook',
      'cheat',
    ],
    landings: [
      'vanish',
      'skip round',
      'hook',
      'left right redirect',
      'inside leg reversal',
    ],
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
    landings: landingPositions['inverted hyper'],
  },

  {
    name: 'Switchblade',
    setups: [
      'vanish',
      'hook',
      'hook carry-through',
      'right left redirect', // cheat is implied
    ],
    landings: landingPositions.hook,
  },

  {
    name: 'Twist Knife',
    setups: [
      'vanish',
      'right left redirect',
      'cheat',
    ],
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
    name: 'Master Swipe Helicoptero',
    setups: [
      'master swing',
      'skip masterswing',
      'vanish',
    ],
    landings: [
      'inside leg reversal',
      'left right redirect',
      'skip round',
      'hook',
    ],
  },

  {
    name: 'Sailor Moon Wackknife',
    setups: takeoffs.raiz,
    landings: [
      'frontside punch',
      'reverse pop',
      'right first reverse pop',
      'hook',
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

  {
    name: 'Td Raiz Twist',
    setups: takeoffs.raiz,
    landings: ['backside punch', 'invert backside punch', 'reverse pop'],
  },

  // FLIPS & TWISTS
  {
    name: '720 Twist',
    setups: ['cheat', 'right left redirect'],
    landings: landingPositions.eagle,
  },

  {
    name: 'Aerial Scissor',
    setups: [
      'reverse vanish',
      'inside leg reversal',
      'hook',
      'mega',
    ],
    landings: ['vanish', 'skip round', 'frontside pop', 'hook'],
  },

  {
    name: 'Atwist Dleg',
    setups: takeoffs.btwist,
    landings: ['backside punch', 'invert backside punch', 'hyper'],
  },

  {
    name: 'B-kick Helicoptero',
    setups: takeoffs.btwist,
    landings: [
      'vanish',
      'skip round',
      'left right redirect',
      'inside leg reversal',
    ],
  },

  {
    name: 'Boneless Cork',
    notStarter: true,
    setups: ['reverse vanish'],
    landings: landingPositions.eagle,
  },

  {
    name: 'Boxcutter Turbo',
    setups: takeoffs.swing,
    landings: landingPositions.turbo,
  },

  {
    name: 'Btwist Double Round',
    setups: ['turn step'],
    landings: landingPositions.round,
  },

  {
    name: 'Btwist Hawkeye',
    setups: takeoffs.btwist,
    landings: landingPositions.round,
  },

  {
    name: 'Btwist Shuriken Hyper Hook',
    setups: ['turn step'],
    landings: landingPositions.hook,
  },

  {
    name: 'Btwist Twist Kick',
    setups: takeoffs.btwist,
    landings: landingPositions.mega,
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
    name: 'Cork Crowd Awakener',
    setups: takeoffs.swing,
    landings: [
      'backside punch',
      'hook',
      'complete',
      'reverse pop',
      'right first reverse pop',
    ],
  },

  {
    name: 'Cork Dleg H.H.',
    setups: takeoffs.swing,
    landings: landingPositions.hyper,
  },

  {
    name: 'Cork Feilong',
    setups: takeoffs.swing,
    landings: landingPositions.round,
  },

  {
    name: 'Cork Sidewinder',
    setups: takeoffs.swing,
    landings: landingPositions.eagle,
  },

  {
    name: 'Crack Knife',
    setups: takeoffs.raiz,
    landings: landingPositions.hook.concat(['turbo']),
  },

  {
    name: 'Dleg Twist',
    setups: ['outside pop', 'outside punch'],
    landings: ['backside punch', 'hook'],
  },

  {
    name: 'Double Back Tuck',
    notStarter: true,
    setups: ['invert backside punch', 'invert backside pop'],
    landings: [
      'backside punch',
      'invert backside punch',
      'reverse pop',
    ],
  },

  {
    name: 'Double Btwist',
    setups: takeoffs.btwist,
    landings: landingPositions.eagle,
  },

  {
    name: 'Double Cork',
    setups: takeoffs.swing,
    landings: landingPositions.eagle,
  },

  {
    name: 'Dragonfly Boxcutter',
    setups: takeoffs.swing,
    landings: landingPositions.hook,
  },

  {
    name: 'Dragonfly Cork Dleg',
    setups: takeoffs.swing,
    landings: ['backside punch', 'hook'],
  },

  {
    name: 'Dub Full Hyper',
    setups: takeoffs.fullTwist,
    landings: landingPositions['inverted hyper'],
  },

  {
    name: 'Dub Full Round',
    setups: takeoffs.fullTwist,
    landings: landingPositions.round,
  },

  {
    name: 'Dub Full Swipe',
    setups: takeoffs.fullTwist,
    landings: landingPositions.hyper,
  },

  {
    name: 'Dub Full H.H.',
    setups: takeoffs.fullTwist,
    landings: landingPositions.hook,
  },

  {
    name: 'Full Dleg H.H.',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: landingPositions.hook,
  },

  {
    name: 'Full Dleg Twist',
    setups: takeoffs.fullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'hook',
    ],
  },

  {
    name: 'Full Kyro',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'hook,',
    ],
  },

  {
    name: 'Full Late Round',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: landingPositions.round,
  },

  {
    name: 'Full Pike Round',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: landingPositions.round,
  },

  {
    name: 'Full Rocketboii',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'hook',
    ],
  },

  {
    name: 'Full Shuriken H.H.',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: landingPositions.hook,
  },

  {
    name: 'Full Swipeknife',
    setups: takeoffs.fullTwist,
    landings: landingPositions.hook,
  },

  {
    name: 'Full Snapu',
    setups: takeoffs.fullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'hook',
    ],
  },

  {
    name: 'Full Tai-Fighter',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: landingPositions.round,
  },

  {
    name: 'Full Up',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: [
      'backside punch',
      'hook',
    ],
  },

  {
    name: 'Full Wackknife',
    notStarter: true,
    setups: ['invert inside pop'],
    landings: ['backside punch'],
  },

  {
    name: 'Gainer Kyro',
    setups: takeoffs.swing,
    landings: ['backside punch', 'hook'],
  },

  {
    name: 'Gainer Triple',
    setups: takeoffs.swing,
    landings: landingPositions.hyper,
  },

  {
    name: 'Gainer Wackknife',
    setups: takeoffs.swing,
    landings: landingPositions.hook,
  },

  {
    name: 'GMS Knife',
    notStarter: true,
    setups: ['master swing'],
    landings: landingPositions.hyper,
  },

  {
    name: 'GMS Rocketboi',
    notStarter: true,
    setups: ['master swing'],
    landings: ['backside punch', 'hook'],
  },

  {
    name: 'GM Front',
    notStarter: true,
    setups: ['master swing'],
    landings: [
      'invert frontside punch',
      'hook',
    ],
  },

  {
    name: 'GM Scissor',
    notStarter: true,
    setups: ['master swing'],
    landings: ['vanish', 'skip round', 'frontside pop', 'hook'],
  },

  {
    name: 'Grand Master Scoot',
    notStarter: true,
    setups: ['master swing'],
    landings: landingPositions.eagle,
  },

  {
    name: 'G-Switch Hyper Hook',
    setups: takeoffs.swing,
    landings: landingPositions.hyper,
  },

  {
    name: 'Ironman Full C.A.',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'hook',
    ],
  },

  {
    name: 'Ironman Full Dleg',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'hook',
    ],
  },

  {
    name: 'Ironman Full H.H.',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: landingPositions.hook,
  },

  {
    name: 'Janitor Twist',
    notStarter: true,
    setups: ['invert backside punch'],
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
    setups: ['invert backside punch'],
    landings: [
      'frontside pop',
      'vanish',
      'skip round',
      'left right redirect',
    ],
  },

  {
    name: 'Kick Full',
    notStarter: true,
    setups: [
      'invert backside pop',
      'invert backside punch',
    ],
    landings: landingPositions.eagle,
  },

  {
    name: 'Lotus Crowd Awakener',
    setups: takeoffs.swing,
    landings: landingPositions.mega.concat('complete'),
  },

  {
    name: 'Lotus Rodeo',
    setups: takeoffs.swing,
    landings: landingPositions.eagle,
  },

  {
    name: 'Lotus Shuriken',
    setups: takeoffs.swing,
    landings: landingPositions.mega.concat('complete'),
  },

  {
    name: 'Outstretched Cork',
    setups: takeoffs.swing,
    landings: landingPositions.eagle,
  },

  {
    name: 'Popcorn',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: [
      'backside punch',
      'reverse pop',
      'hyper',
    ],
  },

  {
    name: 'Rodeo Full Dleg',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Rodeo Full Shuriken',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: landingPositions.round,
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
    name: 'Sailor Moon Dleg',
    setups: takeoffs.raiz,
    landings: [
      'backside punch',
      'hook',
    ],
  },

  {
    name: 'Shuriken Cutter',
    notStarter: true,
    setups: takeoffs.swing,
    landings: landingPositions.hook,
  },

  {
    name: 'Sidewinder',
    setups: takeoffs.btwist,
    landings: ['backside pop', 'vanish'],
  },

  {
    name: 'Snapu',
    setups: takeoffs.raiz.concat([
      'frontside pop',
      'outside pop',
      'frontside punch',
      'outside punch',
    ]),
    landings: [
      'backside punch',
      'hook',
    ],
  },

  {
    name: 'Swipe Knife',
    setups: takeoffs.raiz,
    landings: landingPositions.hook,
  },

  // Pop swipe knife variation
  {
    name: 'Swipe Knife',
    setups: ['frontside pop', 'frontside punch'],
    landings: landingPositions.hook,
  },

  {
    name: 'Tak Full Swipe',
    setups: ['turn step', 'invert vanish'],
    landings: landingPositions.hyper,
  },

  {
    name: 'TD Tak Full',
    setups: ['turn step', 'invert vanish'],
    landings: landingPositions.eagle,
  },

  {
    name: 'TD Wrap Full',
    notStarter: true,
    setups: ['turn step', 'wrap'],
    landings: landingPositions.eagle,
  },

  {
    name: 'Triple Full',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: landingPositions.eagle,
  },

  {
    name: 'Wrap Front Scissor',
    notStarter: true,
    setups: ['wrap'],
    landings: ['vanish', 'skip round', 'frontside pop', 'hook'],
  },

  {
    name: 'Wrap Full Dleg',
    notStarter: true,
    setups: ['wrap'],
    landings: ['backside punch'],
  },

  {
    name: 'Wrap Full Hyper',
    notStarter: true,
    setups: ['turn step', 'wrap'],
    landings: landingPositions['inverted hyper'],
  },

  {
    name: 'Wrap Full Hyper Hook',
    notStarter: true,
    setups: ['wrap'],
    landings: landingPositions.hook,
  },

  {
    name: 'Wrap Full Round',
    notStarter: true,
    setups: ['wrap'],
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
    name: 'Wrap Full Swipe',
    notStarter: true,
    setups: ['turn step', 'wrap'],
    landings: landingPositions.hyper,
  },
];

export default level4;
