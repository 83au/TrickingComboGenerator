const landingPositions = {
  broken: [
    'right left redirect',
    'right left redirect',
    'right left redirect',
    'right left redirect',
    'cheat',
    'cheat',
    'master swing', // * Special landing
    'reverse vanish',
    'skip backswing',
  ],

  cartwheel: [
    'invert inside pop',
    'invert inside pop',
    'inside pop',
    'wrap',
    'reverse vanish',
  ],

  complete: [
    'invert backside pop',
    'missleg',
    'skip frontswing', // skip from eagle into mega for a front swing
    'back swing',
    'vanish',
    'inside leg reversal',
    'left right redirect',
  ],

  eagle: [
    // * Swings are most common transition from eagle
    'back swing',
    'back swing',
    'back swing',
    'back swing',
    'back swing',
    'back swing',
    'back swing',
    // Vanish is second most common
    'vanish',
    'vanish',
    'vanish',
    'vanish',
    'vanish',
    'invert vanish',
    // Pop is third most common
    'invert backside pop',
    'invert backside pop',
    'invert backside pop',
    // Less common transitions
    'inside leg reversal',
    'inside leg reversal',
    'missleg',
    'skip frontswing', // skip from eagle into mega for a front swing
    // 'mega', ?
    // 'semi' ?
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

  hook: [
    // Redirect is most common out of hook
    'right left redirect',
    'right left redirect',
    'right left redirect',
    'right left redirect',
    'right left redirect',
    'right left redirect',
    // Vanish is 2nd most common
    'reverse vanish',
    'reverse vanish',
    'reverse vanish',
    'reverse vanish',
    // Master swing & cheat are 3rd most common
    'master swing',
    'master swing',
    'cheat',
    'cheat',
    // Less common transitions
    'scoot master swing',
    'outside leg reversal',
    'frontside pop',
    'hook carry-through',
    'skip backswing',
  ],

  hyper: [
    'right left redirect',
    'right left redirect',
    'right left redirect',
    'right left redirect',
    'right left redirect',
    'reverse vanish',
    'reverse vanish',
    'reverse vanish',
    'reverse vanish',
    'cheat',
    'cheat',
    'cheat',
    'master swing', // * Special landing
    'master swing',
    'wrap', // * Special landing
    'wrap',
    'skip backswing',
  ],

  'inverted hyper': [
    'right left redirect',
    'right left redirect',
    'right left redirect',
    'right left redirect',
    'right left redirect',
    'right left redirect',
    'reverse vanish',
    'reverse vanish',
    'reverse vanish',
    'reverse vanish',
    'reverse vanish',
    'cheat',
    'cheat',
    'cheat',
    'master swing', // * Special landing
    'master swing',
    'wrap', // * Special landing
    'wrap',
    'broken',
    'broken',
    'skip backswing',
  ],

  mega: [
    'mega',
    'vanish',
    'invert vanish',
    'round carry-through',
    'hook',
    'cart swing',
    // 'left right redirect',
    // 'inside leg reversal',
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
  ],

  round: [
    // * Hooks are most common transition from round
    'hook',
    'hook',
    'hook',
    'hook',
    'hook',
    'hook',
    'hook',
    'hook',
    // Vanish is 2nd most common
    'vanish',
    'vanish',
    'vanish',
    'vanish',
    'vanish',
    'vanish',
    // Skip is 3rd most common
    'skip round', // skip from round kick into wrap or scoot
    'skip round',
    'skip round',
    'skip round',
    // Reversal is 4th most common
    'inside leg reversal',
    'inside leg reversal',
    'inside leg reversal',
    // Carry-through is 5th most common
    'round carry-through',
    'round carry-through',
    // Less common transitions
    'left right redirect',
    'outside pop', // for double leg
  ],

  semi: [
    'semi',
    'reverse vanish',
    'skip backswing',
    'front swing',
    // 'outside leg reversal',
  ],

  turbo: [
    'frontside punch',
    'right first reverse pop',
    'hook',
  ],
};

export default landingPositions;
