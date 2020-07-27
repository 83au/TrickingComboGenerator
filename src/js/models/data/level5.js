import takeoffs from './takeoffs';
import landingPositions from './landings';

// =======================================
//            *** ELITE ***
// =======================================

const level5 = [
  // Kicks
  {
    name: '360 Crescent Kyro Dleg',
    setups: [
      'inside pop',
      'frontside pop',
      'inside punch',
      'frontside punch',
    ],
    landings: ['backside punch', 'hook'],
  },

  {
    name: '540 Gyro Knife',
    setups: [
      'right left redirect',
      'hook',
      'cheat',
    ], // redirect is implied
    landings: landingPositions.hook,
  },

  {
    name: 'Backside 1260 Knife',
    setups: ['backside pop', 'backside punch'],
    landings: landingPositions.hook,
  },

  {
    name: 'Backside 1440',
    setups: [
      'backside pop',
      'backside punch',
    ],
    landings: landingPositions.hook.concat(['rapid round']),
  },

  {
    name: '900 CA Knife',
    setups: [
      'vanish',
      'cheat',
    ],
    landings: landingPositions.hook,
  },

  {
    name: '900 Dleg Twist',
    setups: ['cheat', 'vanish'],
    landings: ['backside punch', 'hook'],
  },

  {
    name: '900 Gyro',
    setups: ['cheat', 'vanish'],
    landings: ['backside punch', 'hook'],
  },

  {
    name: '900 Paraknife',
    setups: [
      'vanish',
      'cheat',
    ],
    landings: landingPositions.hook,
  },

  {
    name: '900 Double Hyper',
    setups: [
      'vanish',
      'cheat',
    ],
    landings: landingPositions.hyper,
  },

  {
    name: '1260 Hyper',
    setups: [
      'cheat',
      'vanish',
    ],
    landings: landingPositions.hyper,
  },

  {
    name: '1440',
    setups: [
      'cheat',
      'vanish',
      'hook',
    ],
    landings: landingPositions.hook.concat(['rapid round']),
  },

  {
    name: 'Bkick Heli Round',
    setups: takeoffs.btwist,
    landings: landingPositions.round,
  },

  {
    name: 'Swing 1260',
    setups: [
      'back swing',
      'round carry-through',
      'left right redirect',
    ],
    landings: landingPositions.round,
  },

  // FLIPS/TWISTS
  {
    name: '720 Twist H.H.',
    setups: ['cheat'],
    landings: landingPositions.hook,
  },

  {
    name: '720 Twist Round',
    setups: ['cheat'],
    landings: landingPositions.round,
  },

  {
    name: '720 Twist Illusion',
    setups: ['cheat'],
    landings: [
      'reverse pop',
      'right first reverse pop',
      'frontside punch',
      'hook',
    ],
  },

  {
    name: '720 Twist Shuriken',
    setups: ['cheat'],
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
    name: 'Btwist Dleg Twist',
    setups: ['turn step'],
    landings: ['backside punch', 'hook'],
  },

  {
    name: 'Btwist Round Late Round',
    setups: ['turn step'],
    landings: landingPositions.round,
  },

  {
    name: 'Btwist Shuriken Twist',
    setups: ['turn step'],
    landings: ['backside punch', 'hook'],
  },

  {
    name: 'Btwist Snapu',
    setups: ['turn step'],
    landings: ['backside punch', 'hook'],
  },

  {
    name: 'Cork C.A. Hyper',
    notStarter: true,
    setups: takeoffs.swing,
    landings: landingPositions.hyper,
  },

  {
    name: 'Cork C.A. Knife',
    notStarter: true,
    setups: takeoffs.swing,
    landings: landingPositions.hook,
  },

  {
    name: 'Cork C.A. Round',
    setups: takeoffs.swing,
    landings: landingPositions.round,
  },

  {
    name: 'Cork Dleg Twist',
    setups: takeoffs.swing,
    landings: [
      'backside punch',
      'hook',
    ],
  },

  {
    name: 'Cork Feilong Knife',
    notStarter: true,
    setups: takeoffs.swing,
    landings: landingPositions.hook,
  },

  {
    name: 'Cork Kyro',
    setups: takeoffs.swing,
    landings: ['backside punch', 'hook'],
  },

  {
    name: 'Cork McDirty',
    notStarter: true,
    setups: takeoffs.swing,
    landings: [
      'backside punch',
      'hook',
    ],
  },

  {
    name: 'Cork Snapu',
    notStarter: true,
    setups: takeoffs.swing,
    landings: [
      'backside punch',
      'hook',
      'hyper',
    ],
  },

  {
    name: 'Cork Swipeknife',
    notStarter: true,
    setups: takeoffs.swing,
    landings: landingPositions.hook,
  },

  {
    name: 'Cork Swipe Late Round',
    notStarter: true,
    setups: takeoffs.swing,
    landings: landingPositions.round,
  },

  {
    name: 'Cork Wackknife',
    setups: takeoffs.swing,
    landings: [
      'invert backside punch',
      'hook',
      'reverse pop',
      'right first reverse pop',
    ],
  },

  {
    name: 'Crashmoon',
    setups: ['back swing'],
    landings: landingPositions.hook.concat(['turbo']),
  },

  {
    name: 'Dleg Twist Round',
    setups: ['outside pop', 'outside punch'],
    landings: landingPositions.round,
  },

  {
    name: 'Dragonfly Dub Cork',
    notStarter: true,
    setups: takeoffs.swing,
    landings: [
      'backside punch',
      'hook',
    ],
  },

  {
    name: 'Dragonfly Dub Cork Round',
    notStarter: true,
    setups: takeoffs.swing,
    landings: landingPositions.round,
  },

  {
    name: 'Double Atwist',
    setups: ['turn step'],
    landings: landingPositions.eagle,
  },

  {
    name: 'Dub Btwist Hyper',
    setups: ['turn step'],
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Dub Btwist Peter Pan',
    setups: ['turn step'],
    landings: landingPositions.eagle,
  },

  {
    name: 'Dub Btwist Round',
    setups: ['turn step'],
    landings: landingPositions.round,
  },

  {
    name: 'Dub Cork Dleg',
    notStarter: true,
    setups: takeoffs.swing,
    landings: [
      'backside punch',
      'hook',
    ],
  },

  {
    name: 'Dub Cork Round',
    setups: takeoffs.swing,
    landings: landingPositions.round,
  },

  {
    name: 'Dub Cork Shuriken',
    setups: takeoffs.swing,
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
    name: 'Dub Full C.A.',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: ['backside punch', 'hook'],
  },

  {
    name: 'Dub Full Dleg',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: ['backside punch', 'hook'],
  },

  {
    name: 'Dub Full Dleg Twist',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: ['backside punch', 'hook'],
  },

  {
    name: 'Dub Full Shuriken',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: landingPositions.round,
  },

  {
    name: 'Dub Full Snapu',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: [
      'backside punch',
      'hook',
    ],
  },

  {
    name: 'Dub Full Swipe Knife',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: landingPositions.hyper,
  },

  {
    name: 'Envergado Twist',
    setups: takeoffs.raiz,
    landings: [
      'backside punch',
      'hook',
    ],
  },

  {
    name: 'Feilong Snapu',
    setups: ['cheat'],
    landings: [
      'backside punch',
      'hook',
    ],
  },

  {
    name: 'Filipino',
    notStarter: true,
    setups: [
      'invert inside pop',
      'invert backside punch',
      'invert backside pop',
    ],
    landings: [
      'invert frontside punch',
      'hook',
    ],
  },

  {
    name: 'Full C.A. Snapu',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: [
      'backside punch',
      'hook',
    ],
  },

  {
    name: 'Full Cobra Twist',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: ['backside punch', 'hook'],
  },

  {
    name: 'Full Dleg Hawkeye',
    notStarter: true,
    setups: takeoffs.fullTwist,
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
    name: 'Full Dleg Dub Twist',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: ['backside punch', 'hook'],
  },

  {
    name: 'Full Dleg Twist Dleg',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: ['backside punch', 'hook'],
  },

  {
    name: 'Full Feilong Double',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: landingPositions.round,
  },

  {
    name: 'Full-In Back-Out',
    notStarter: true,
    setups: [
      'invert backside pop',
      'invert backside punch',
    ],
    landings: ['backside punch', 'hook', 'right first reverse pop'],
  },

  {
    name: 'Full McDirty',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: [
      'backside punch',
      'hook',
    ],
  },

  {
    name: 'Full Scissor',
    setups: takeoffs.fullTwist,
    landings: ['vanish', 'skip round', 'frontside pop', 'hook'],
  },

  {
    name: 'Full Scissor Round',
    setups: takeoffs.fullTwist,
    landings: landingPositions.round,
  },

  {
    name: 'Full Scissor Twist',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: [
      'backside punch',
      'hook',
    ],
  },

  {
    name: 'Full Shuriken H.H. Scissor',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: ['vanish', 'skip round', 'frontside pop', 'hook'],
  },

  {
    name: 'Full Snapu Dleg',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: [
      'backside punch',
      'hook',
    ],
  },

  {
    name: 'Full Snapu Hyper',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Full Snapu H.H.',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: landingPositions.hyper,
  },

  {
    name: 'Full Snapu Round',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: landingPositions.round,
  },

  {
    name: 'Full Snapu Swipe',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: landingPositions.hyper,
  },

  {
    name: 'Full Snapu Twist',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: [
      'backside punch',
      'hook',
    ],
  },

  {
    name: 'Full Swipe Late Round',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: landingPositions.round,
  },

  {
    name: 'Full Tai-Fighter',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: landingPositions.round,
  },

  {
    name: 'Full Up Twist',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: [
      'backside punch',
      'hook',
    ],
  },

  {
    name: 'Full Wackknife H.H.',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: landingPositions.hook,
  },

  {
    name: 'Full Wackknife Round',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: landingPositions.round,
  },

  {
    name: 'Gainer Arabian Grab C.A.',
    setups: takeoffs.swing,
    landings: [
      'invert backside punch', 'hook',
      'reverse pop',
      'right first reverse pop',
    ],
  },

  {
    name: 'Gainer Late Round',
    setups: takeoffs.swing,
    landings: landingPositions.round,
  },

  {
    name: 'G-Switch Half',
    setups: takeoffs.swing,
    landings: ['invert frontside punch', 'hook'],
  },

  {
    name: 'Gainer Figure-4 Sidekick',
    setups: [
      'back swing',
      'left right redirect',
      'skip backswing',
    ],
    landings: landingPositions.round,
  },

  {
    name: 'Gainer Scissor Round',
    notStarter: true,
    setups: takeoffs.swing,
    landings: landingPositions.round,
  },

  {
    name: 'GM Twist',
    notStarter: true,
    setups: ['master swing'],
    landings: ['backside punch', 'hook'],
  },

  {
    name: 'GMT Dleg',
    notStarter: true,
    setups: ['master swing'],
    landings: ['backside punch', 'hook'],
  },

  {
    name: 'Ironman Full Rocketboi Twist',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: ['backside punch', 'hook'],
  },

  {
    name: 'Kick Double Full',
    notStarter: true,
    setups: [
      'invert backside pop',
      'invert backside punch',
    ],
    landings: ['backside punch', 'hook'],
  },

  {
    name: 'Kick Full Dleg',
    notStarter: true,
    setups: [
      'invert backside pop',
      'invert backside punch',
    ],
    landings: ['backside punch', 'hook'],
  },

  {
    name: 'Lotus Dleg H.H',
    setups: takeoffs.swing,
    landings: landingPositions.hook,
  },

  {
    name: 'Lotus Late Round',
    setups: takeoffs.swing,
    landings: landingPositions.round,
  },

  {
    name: 'Macaron',
    setups: ['turn step'],
    landings: landingPositions.hook,
  },

  {
    name: 'Outstretched Boxcutter',
    notStarter: true,
    setups: takeoffs.swing,
    landings: landingPositions.hook,
  },

  {
    name: 'Peter Pan Dub Cork',
    notStarter: true,
    setups: takeoffs.swing,
    landings: [
      'backside punch', 'hook',
    ],
  },

  {
    name: 'Rodeo Boxcutter',
    notStarter: true,
    setups: takeoffs.swing,
    landings: landingPositions.hook,
  },

  {
    name: 'Rodeo Cork Snapu',
    notStarter: true,
    setups: takeoffs.swing,
    landings: [
      'backside punch',
      'hook',
    ],
  },

  {
    name: 'Rodeo Cork Twist',
    notStarter: true,
    setups: takeoffs.swing,
    landings: [
      'backside punch', 'hook',
    ],
  },

  {
    name: 'Rodeo Full H.H.',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: landingPositions.hook,
  },

  {
    name: 'Rodeo Full Snapu',
    setups: takeoffs.fullTwist,
    landings: [
      'backside punch',
      'hook',
    ],
  },

  {
    name: 'Rodeo Full Wack',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: ['backside punch', 'hook'],
  },

  {
    name: 'Rodeo Snapu',
    setups: [
      'right left redirect',
      'front swing',
      'semi',
      'hook',
      'turn step',
      'step behind',
      'skip frontswing',
      'vanish',
    ],
    landings: [ // hyper landing is implied
      'backside punch',
      'hook',
    ],
  },

  {
    name: 'Rodeo Tak Full',
    setups: ['turn step', 'invert vanish'],
    landings: ['backside punch', 'backside pop', 'hook'],
  },

  {
    name: 'Sailor Moon Dleg Twist',
    setups: takeoffs.raiz,
    landings: [
      'backside punch',
      'hook',
    ],
  },

  {
    name: 'Sailor Moon Late Round',
    setups: takeoffs.raiz,
    landings: landingPositions.round,
  },

  {
    name: 'Sailor Moon Twist',
    setups: takeoffs.raiz,
    landings: ['backside punch', 'hook'],
  },

  {
    name: 'Sheep Shearer',
    notStarter: true,
    setups: takeoffs.swing,
    landings: landingPositions.hook,
  },

  {
    name: 'Sideswipe Late Round',
    setups: takeoffs.raiz,
    landings: landingPositions.round,
  },

  {
    name: 'Shurikane',
    notStarter: true,
    setups: takeoffs.swing,
    landings: landingPositions.hook,
  },

  {
    name: 'Skull Snapper',
    notStarter: true,
    setups: takeoffs.swing,
    landings: [
      'backside punch', 'hook',
    ],
  },

  {
    name: 'Snapu Hyper',
    setups: [
      'front swing',
      'hook',
      'turn step',
      'step behind',
      'frontside pop', 'outside pop', 'frontside punch', 'outside punch',
    ],
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Snapu Hyper Hook',
    setups: [
      'front swing',
      'hook',
      'turn step',
      'step behind',
    ],
    landings: landingPositions.hook,
  },

  {
    name: 'Snapu Round',
    setups: [
      'front swing',
      'hook',
      'turn step',
      'step behind',
    ],
    landings: landingPositions.round,
  },

  {
    name: 'Tak Dub Full',
    notStarter: true,
    setups: ['turn step', 'invert vanish'],
    landings: ['backside punch', 'hook'],
  },

  {
    name: 'Tak Dub Full Round',
    notStarter: true,
    setups: ['turn step', 'invert vanish'],
    landings: landingPositions.round,
  },

  {
    name: 'Tak Dub Full Hyper',
    notStarter: true,
    setups: ['turn step', 'invert vanish'],
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Tak Dub Full H.H.',
    notStarter: true,
    setups: ['turn step', 'invert vanish'],
    landings: landingPositions.hook,
  },

  {
    name: 'Tak Full Wackknife',
    notStarter: true,
    setups: ['turn step', 'invert vanish'],
    landings: [
      'frontside punch', 'reverse pop', 'right first reverse pop',
      'hook',
    ],
  },

  {
    name: 'Terada Full',
    notStarter: true,
    setups: [
      'invert backside pop',
      'invert backside punch',
    ],
    landings: ['backside punch', 'hook'],
  },

  {
    name: 'Triple Cork',
    setups: takeoffs.swing,
    landings: landingPositions.eagle,
  },

  {
    name: 'Triple Full Hyper',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: landingPositions.invertedHyper,
  },

  {
    name: 'Triple Full Round',
    notStarter: true,
    setups: takeoffs.fullTwist,
    landings: landingPositions.round,
  },

  {
    name: 'Triple Kick Full',
    notStarter: true,
    setups: [
      'invert backside pop',
      'invert backside punch',
    ],
    landings: ['backside punch', 'hook'],
  },

  {
    name: 'Wrap Dub Full',
    notStarter: true,
    setups: ['wrap'],
    landings: ['backside punch', 'hook'],
  },

  {
    name: 'Wrap Full Snapu',
    notStarter: true,
    setups: ['wrap'],
    landings: ['backside punch', 'hook', 'right first reverse pop'],
  },

  {
    name: 'Wrap Full Swipe Knife',
    notStarter: true,
    setups: ['wrap'],
    landings: landingPositions.hook,
  },

  {
    name: 'X-Out Full',
    notStarter: true,
    setups: [
      'invert backside pop',
      'invert backside punch',
    ],
    landings: ['backside punch', 'hook'],

  },
];

export default level5;
