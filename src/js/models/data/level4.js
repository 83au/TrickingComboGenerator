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

  {
    name: 'Backside 1080 Hyper',
    setups: [
      'backside pop',
      'inside pop',
    ],
    landings: [
      'vanish',
      'skip round',
      'left right redirect',
      'inside leg reversal',
    ],
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
    name: 'Master Swipe Helicoptero',
    setups: [
      'master swing',  
      'skip masterswing', 
      'vanish'
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
    name: '720 Twist (Barrel Roll)',
    setups: ['cheat', 'vanish'],
    landings: landingPositions.eagle,
  },

  // PRO
  // {
  //   name: 'Aerial Scissor',
  //   setups: [
  //     'reverse vanish',
  //     'inside leg reversal',
  //     'hook',
  //     'mega',
  //   ],
  //   landings: ['vanish', 'skip round', 'frontside pop', 'hook'],
  // },

  {
    name: 'A-twist D-leg',
    setups: takeoffs.btwist,
    landings: ['backside punch', 'invert backside punch', 'hyper'],
  },

  {
    name: 'Back Dub Full Hyper',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Back Dub Full Swipe',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Back Dub Full Hyper Hook',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Back Double Full Round',
    setups: takeoffs.backFullTwist,
    landings: landingPositions.round,
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
    name: 'Back Full Late Round',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: landingPositions.round,
  },

  {
    name: 'Back Full Pike Round',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: landingPositions.round,
  },

  {
    name: 'Back Full Rocketboii',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'hook',
    ],
  },

  {
    name: 'Back Full Snapu',
    setups: takeoffs.backFullTwist,
    landings: [
      'backside punch',
      'hook',
    ],
  },

  {
    name: 'Back Full Shuriken Hyper Hook',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Back Full Swipeknife',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Back Full Up',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: [
      'backside punch',
      'hook',
    ],
  },

  {
    name: 'Back Ironman Full D-leg',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: [
      'backside punch',
      'hook',
    ],
  },

  {
    name: 'Back Ironman Full H.H.',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Back Ironman Full C.A.',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: [
      'backside punch',
      'hook',
    ],
  },

  {
    name: 'Back Rodeo Full D-leg',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: [
      'backside punch',
      'complete',
      'hook',
    ],
  },

  {
    name: 'Back Rodeo Full Shuriken',
    notStarter: true,
    setups: takeoffs.backFullTwist,
    landings: landingPositions.round,
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
    name: 'Cork Crowd Awakener',
    setups: takeoffs.swing,
    landings: ['backside punch', 'hook', 'complete'],
  },

  {
    name: 'Cork D-leg Hyper Hook',
    setups: takeoffs.swing,
    landings: landingPositions.invertedHyper,
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
    name: 'Double Full Hyper',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Double Full Swipe',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Dragonfly Boxcutter',
    setups: takeoffs.swing,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Dragonfly Cork D-leg',
    setups: takeoffs.swing,
    landings: ['backside punch', 'hook'],
  },

  {
    name: 'Dub Full Hyper Hook',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Double Full Round',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.round,
  },

  {
    name: 'Full Dleg Hyper Hook',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Full Dleg Twist',
    setups: takeoffs.insideFullTwist,
    landings: [
      'backside punch',
      'hook',
    ],
  },

  {
    name: 'Full Late Round',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.round,
  },

  {
    name: 'Full Pike Round',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.round,
  },

  {
    name: 'Full Rocketboii',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'hook',
    ],
  },

  {
    name: 'Full Shuriken Hyper Hook',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Full Swipeknife',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Ironman Full D-leg',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: [
      'backside punch',
      'hook',
    ],
  },

  {
    name: 'Ironman Full Hyper Hook',
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
      'hook'
    ],
  },

  {
    name: 'Full Snapu',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: [
      'backside punch',
      'hook',
    ],
  },

  {
    name: 'Full Swipe Knife',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Full Up',
    setups: takeoffs.insideFullTwist,
    landings: [
      'backside punch',
      'hook',
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
    name: 'GMS Knife',
    notStarter: true,
    setups: [
      'master swing',
      'hook',
      'skip masterswing',
      'vanish'],
    landings: landingPositions.hyper,
  },

  {
    name: 'Grand Master Scoot',
    notStarter: true,
    setups: [
      'master swing',
      'hook',
      'skip masterswing',
      'vanish'],
    landings: landingPositions.eagle,
  },

  {
    name: 'Grand Master Twist',
    notStarter: true,
    setups: [
      'master swing',
      'hook',
      'skip masterswing',
      'vanish'],
    landings: ['backside punch'],
  },

  {
    name: 'G-Switch Hyper Hook',
    setups: takeoffs.swing,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Ironman Full Crowd Awakener',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
    landings: [
      'backside punch',
      'hook',
    ],
  },

  {
    name: 'Janitor Twist',
    notStarter: true,
    setups: ['backside punch'],
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
    setups: ['backside punch'],
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
    setups: takeoffs.backFullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
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
    setups: takeoffs.backFullTwist,
    landings: [
      'backside punch',
      'reverse pop',
      'hyper',
    ],
  },

  {
    name: 'Rodeo Full D-leg',
    setups: takeoffs.insideFullTwist,
    landings: [
      'backside punch',
      'invert backside punch',
      'complete',
    ],
  },

  {
    name: 'Rodeo Full Shuriken',
    notStarter: true,
    setups: takeoffs.insideFullTwist,
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
    landings: landingPositions.invertedHyper,
  },

  // Pop swipe knife variation
  {
    name: 'Swipe Knife',
    setups: ['frontside pop', 'frontside punch'],
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Tak Full Swipe',
    setups: ['turn step', 'vanish'],
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'TD Tak Full',
    setups: ['turn step', 'vanish'],
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
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.eagle,
  },

  {
    name: 'Wrap Full D-leg',
    notStarter: true,
    setups: ['turn step', 'wrap'],
    landings: ['backside punch'],
  },

  {
    name: 'Wrap Full Hyper',
    notStarter: true,
    setups: ['turn step', 'wrap'],
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Wrap Full Hyper Hook',
    notStarter: true,
    setups: ['turn step', 'wrap'],
    landings: landingPositions.hyper,
  },

  {
    name: 'Wrap Full Round',
    notStarter: true,
    setups: ['turn step', 'wrap'],
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
    landings: landingPositions.invertedHyper,
  },
];

export default level4;
