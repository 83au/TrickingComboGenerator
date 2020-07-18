const landingPositions = {
  eagle: [
    'invert backside pop',
    'missleg',
    'skip frontswing', // skip from eagle into mega for a front swing
    'vanish',
    // * Swings are more common and a staple of the sport, so they get higher precedence
    'back swing',
    'back swing',
    'back swing',
    'back swing',
    'back swing',
    'back swing',
    'back swing',
  ],

  round: [
    'inside leg reversal',
    'left right redirect',
    'round carry-through',
    'skip round', // skip from round kick into wrap or scoot
    'vanish',
    'hook',
    'outside pop', // for double leg
  ],

  hook: [
    'cheat',
    'right left redirect',
    'reverse vanish',
    'frontside pop',
    'hook carry-through',
    'outside leg reversal',
    'skip backswing', // skip from hook or round into jstep
    // 'hook to scoot', 
    'master swing', // * Special landing
  ],

  complete: [
    'invert backside pop',
    'missleg',
    'skip frontswing', // skip from eagle into mega for a front swing
    'vanish',
  ],

  hyper: [
    'reverse vanish',
    'right left redirect',
    'skip backswing',
    'cheat',
    'master swing', // * Special landing
    'wrap', // * Special landing
  ],

  invertedHyper: [
    'reverse vanish',
    'right left redirect',
    'skip backswing',
    'cheat',
    'master swing', // * Special landing
    'wrap', // * Special landing
    'broken',
    'broken',
  ],

  broken: [
    'reverse vanish',
    'right left redirect',
    'skip backswing',
    'cheat',
    'master swing', // * Special landing
  ],

  mega: [
    'vanish',
    'skip round',
    'mega',
    'left right redirect',
    'inside leg reversal',
  ],

  semi: [
    'reverse vanish',
    'skip backswing',
    'semi',
  ],

  turbo: [
    'frontside punch',
    'right first reverse pop',
    'hook',
  ],

  'gyro frontside': [
    'frontside punch',
    'hook',
  ],

  'gyro backside': [
    'backside punch',
    'hook',
  ],

  'half gyro frontside': [
    'frontside punch',
    'hook',
  ],

  'half gyro backside': [
    'backside punch',
    'hook',
  ],

  'rapid round': [
    'inside leg reversal',
    'left right redirect',
    'round carry-through',
    'skip round', // skip from round kick into wrap or scoot
    'vanish',
    'hook',
  ],

  'rapid hook': [
    'cheat',
    'right left redirect',
    'reverse vanish',
    'frontside pop',
    'hook carry-through',
    'outside leg reversal',
    'skip backswing', // skip from hook or round into jstep
    'hook to scoot',
  ],
};

export default landingPositions;
