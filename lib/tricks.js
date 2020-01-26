"use strict";

// DATA STRUCTURE OF TRICKS
// class trick {
//   constructor(name, abbreviation, starter, finisher, setups, endingPosition) {
//     this.name = name;
//     this.abbr = abbreviation;
//     this.starter = starter;
//     this.finisher = finisher;
//     this.setups = setups;
//     this.endingPosition = endingPosition;
//   }
// }
var takeoffs = {
  swing: ['back swing', 'j step', 'pivot step', 'skip hook'],
  raiz: ['boneless cheat', 'front swing', 'Hook Kick', 'outside leg reversal', 'skip invert', 'vanish'],
  backFullTwist: ['Shosei step', 'backside pop', 'backside punch', 'invert backside pop', 'invert backside punch'],
  insideFullTwist: ['Aerial', 'Slant Gainer'],
  cartwheel: ['boneless', 'Hook Kick', 'reverse pop']
};
var landingPositions = {
  eagle: ['invert backside pop', 'back swing', 'missleg', 'skip invert', // skip from eagle into mega for a front swing
  'vanish'],
  round: ['frontside pop', 'inside leg reversal', 'round carry-through', 'skip round', // skip from round kick into wrap or scoot
  'vanish'],
  hook: ['boneless cheat', 'frontside pop', 'hook carry-through', 'inside leg hyper', 'outside leg reversal', 'skip hook' // skip from hook or round into jstep
  ]
};
var takeoffModifiers = [// if transition is a takeoff mod, prepend the trick with it
'cheat', 'frontside pop', 'inside pop', 'j step', 'pivot step', 'Shosei step', 'swing', 'wrap' // "back swing",
// "front swing",
]; // const landingModifiers = [ // if the transition is a landing, append previous trick with it?
//   'complete', // backside
//   'hyper', // inside (mainstream: land on kicking leg)
//   'mega', // frontside
//   'turbo', // outside kick landing frontside both feet at same time
//   'semi', // outside
//   'gyro'
// ];

var transitions = ['hook carry-through', 'round carry-through', 'frontside pop', // TODO: Distinguish pops for vert kick and pops for inverts/flips
'inside pop', 'backside pop', 'invert frontside pop', // for flips
'invert inside pop', 'invert backside pop', 'frontside punch', 'backside punch', 'invert frontside punch', 'invert backside punch', 'vanish', // make invert and vert variations?
'wrap', 'boneless', 'boneless cheat', 'cheat', 'skip round', // for wraps and scoot setups
'skip hook', // for back swing
'skip invert', // for front swing
'outside leg reversal', 'inside leg reversal', 'redirect', 'missleg'];
var tricks = {
  // *** NOVICE ***
  level1: [// KICKS
  {
    name: '360 Wheel Kick',
    starter: true,
    setups: ['inside pop', 'frontside pop', 'inside punch', 'frontside punch', 'cheat', 'boneless cheat'],
    landings: ['frontside', 'frontside punch']
  }, // {
  //   name: '360 Wheel Kick Hyper',
  //   starter: true,
  //   setups: ['inside pop', 'frontside pop', 'frontside punch', 'inside punch'],
  //   landings: ['vanish', 'frontside', 'frontside pop', 'inside leg reversal'],
  // },
  {
    name: '540 Kick',
    starter: true,
    setups: ['cheat', 'vanish', 'boneless cheat', 'frontside pop', 'reverse pop'],
    landings: ['inside leg hyper', 'boneless', 'boneless cheat', 'skip hook']
  }, {
    name: 'Auto-Bahn',
    starter: true,
    setups: ['Tornado', 'Hook Kick', 'hook carry-through', 'outside leg reversal'],
    landings: landingPositions.hook
  }, {
    name: 'Backside 720 Kick',
    starter: true,
    setups: ['backside', 'backside pop', 'backside punch'],
    landings: landingPositions.hook
  }, {
    name: 'Back Sweep',
    starter: true,
    notFinisher: true,
    setups: ['frontside', 'Hook Kick'],
    landings: ['frontside', 'frontside pop']
  }, {
    name: 'Butterfly Kick',
    starter: true,
    setups: ['turn step', 'Hook Kick', 'boneless'],
    landings: ['boneless', 'outside leg reversal', 'inside pop']
  }, {
    name: 'Compasso (td hook)',
    starter: true,
    notFinisher: true,
    setups: ['inside', 'frontside', 'Tornado Kick'],
    landings: landingPositions.hook.concat(['outside leg reversal'])
  }, {
    name: 'Feilong',
    starter: true,
    setups: ['inside pop', 'frontside pop', 'frontside punch', 'inside punch', 'cheat', 'boneless cheat'],
    landings: landingPositions.round
  }, {
    name: 'Front Sweep',
    starter: true,
    notFinisher: true,
    setups: ['backside', 'inside leg reversal'],
    landings: ['backside', 'backside pop']
  }, {
    name: 'Hook Kick',
    starter: true,
    notFinisher: true,
    setups: ['inside', 'frontside', 'boneless cheat', 'vanish'],
    landings: landingPositions.hook
  }, {
    name: 'Jump Round',
    starter: true,
    notFinisher: true,
    setups: ['backside', 'inside leg reversal'],
    // pop is implied
    landings: landingPositions.round
  }, {
    name: 'Narabong',
    starter: true,
    setups: ['Hook Kick', 'hook carry-through', 'outside leg reversal', 'reverse pop'],
    landings: landingPositions.hook
  }, {
    name: 'Palm Kick',
    starter: true,
    notFinisher: true,
    setups: ['boneless', 'missleg', 'reverse pop'],
    landings: ['inside', 'inside pop', 'boneless', 'outside leg reversal', 'boneless cheat']
  }, {
    name: 'Roundhouse Kick',
    starter: true,
    notFinisher: true,
    setups: ['backside', 'inside leg reversal'],
    landings: landingPositions.round
  }, {
    name: 'Tornado',
    starter: true,
    notFinisher: true,
    setups: ['vanish', 'hook carry-through', 'boneless cheat', 'reverse pop', 'frontside pop'],
    // cheat is implied
    landings: landingPositions.round
  }, {
    name: 'Tsunami Kick',
    starter: true,
    setups: ['back swing', 'round carry-through', 'inside leg reversal'],
    landings: landingPositions.hook
  }, // Flare Kick ?
  // Setups
  {
    name: 'Blaster Scoot',
    starter: true,
    notFinisher: true,
    setups: ['boneless', 'inside'],
    landings: ['back swing', 'backside', 'backside pop', 'invert backside pop', 'vanish']
  }, {
    name: 'Round Off',
    starter: true,
    notFinisher: true,
    setups: takeoffs.cartwheel,
    landings: ['invert backside punch']
  }, {
    name: 'Scoot',
    starter: true,
    notFinisher: true,
    setups: ['skip round', 'inside leg hyper', 'semi'],
    landings: landingPositions.eagle
  }, {
    name: 'Scoot Hyper',
    starter: true,
    notFinisher: true,
    setups: ['skip round', 'inside leg hyper', 'semi'],
    landings: ['inside leg hyper', 'boneless', 'boneless cheat', 'skip hook']
  }, {
    name: 'Spyder',
    starter: true,
    notFinisher: true,
    setups: ['backside', 'frontside', 'vanish', 'outside leg reversal'],
    landings: ['backside', 'frontside', 'backside pop', 'frontside pop', 'vanish']
  }, {
    name: 'Transformer/Machine',
    starter: true,
    notFinisher: true,
    setups: ['backside', 'frontside', 'vanish', 'outside leg reversal'],
    landings: ['backside', 'frontside', 'backside pop', 'frontside pop', 'vanish']
  }, // Flips & Twists
  {
    name: 'Arabian',
    starter: false,
    setups: ['Scoot', 'Aerial', 'invert backside pop', 'invert backside punch'],
    landings: ['invert frontside punch', 'boneless']
  }, {
    name: 'Cart Arabian',
    starter: false,
    setups: takeoffs.cartwheel,
    landings: ['invert frontside punch', 'boneless']
  }, {
    name: 'Front Flip',
    starter: true,
    setups: ['invert frontside punch', 'invert backside punch'],
    landings: ['invert frontside punch', 'boneless']
  }],
  // *** BEGINNER ***
  level2: [// KICKS
  // {
  //   name: '360 Wheel Kick Gyro',
  //   starter: true,
  //   setups: ['frontside pop', 'inside pop', 'inside punch', 'frontside punch'],
  //   landings: ['backside', 'backside punch'],
  // },
  {
    name: '540 Gyro',
    starter: false,
    setups: ['cheat', 'vanish', 'boneless cheat'],
    landings: ['outside', 'backside punch']
  }, {
    name: '720 Kick',
    starter: true,
    setups: ['cheat', 'boneless cheat', 'vanish', 'hook carry-through', 'reverse pop'],
    landings: landingPositions.hook
  }, {
    name: '720 Kick',
    // Pop variation
    starter: true,
    setups: ['frontside pop'],
    landings: landingPositions.hook
  }, {
    name: '720 Double',
    starter: true,
    setups: ['cheat', 'boneless cheat', 'vanish'],
    landings: landingPositions.hook
  }, {
    name: '900 Kick',
    starter: true,
    setups: ['cheat', 'vanish', 'boneless cheat', 'skip round'],
    landings: landingPositions.round
  }, {
    name: 'Backside 900',
    starter: true,
    setups: ['inside leg reversal', 'backside', 'backside pop', 'backside punch'],
    landings: landingPositions.round
  }, {
    name: 'Crowd Awakener',
    starter: true,
    setups: ['boneless cheat', 'cheat', 'vanish'],
    landings: ['backside punch']
  }, {
    name: 'Hyper Feilong',
    starter: true,
    setups: ['frontside pop', 'frontside punch', 'cheat', 'boneless cheat'],
    landings: ['inside leg hyper', 'boneless', 'boneless cheat', 'skip hook']
  }, {
    name: 'Parafuso',
    starter: true,
    setups: ['vanish', 'boneless'],
    // cheat is implied
    landings: ['backside', 'backside punch']
  }, {
    name: 'Swing 360',
    // hyper and turbo variations are implied
    starter: true,
    setups: ['back swing', 'round carry-through'],
    landings: ['outside leg hyper', 'vanish', 'frontside pop', 'frontside punch']
  }, {
    name: 'Swing 900 Kick',
    starter: true,
    setups: ['back swing', 'round carry-through'],
    landings: landingPositions.round
  }, {
    name: 'Tai-fighter',
    starter: true,
    setups: ['frontside pop', 'inside pop', 'frontside punch', 'inside punch'],
    landings: landingPositions.round
  }, {
    name: 'Tornado Double',
    starter: true,
    setups: ['vanish', 'hook carry-through', 'boneless cheat'],
    // cheat is implied
    landings: landingPositions.round
  }, {
    name: 'Tornado Side Kick',
    starter: true,
    setups: ['vanish', 'hook carry-through', 'boneless cheat', 'reverse pop'],
    // cheat is implied
    landings: landingPositions.round
  }, {
    name: 'Triple Kick',
    starter: true,
    setups: ['j step', 'back swing', 'round carry-through'],
    landings: landingPositions.round
  }, {
    name: 'E-kick',
    starter: true,
    notFinisher: true,
    setups: ['backside', 'frontside', 'vanish', 'outside leg reversal'],
    landings: ['inside', 'Scoot', 'Scoot Hyper', 'boneless', 'boneless cheat', 'inside pop']
  }, {
    name: 'Wackknife',
    starter: true,
    setups: ['cheat', 'frontside pop', 'frontside punch'],
    landings: landingPositions.hook.concat(['frontside punch']) // turbo variation is implied

  }, // SETUPS
  // Master Swipe
  {
    name: 'Cartwheel Twist',
    starter: true,
    setups: takeoffs.cartwheel,
    landings: ['frontside punch', 'invert frontside punch', 'reverse pop']
  }, {
    name: 'Coin Drop',
    starter: false,
    notFinisher: true,
    setups: ['vanish', 'reverse pop', 'inside leg hyper', 'Butterfly Kick'],
    landings: ['cheat', 'reverse pop']
  }, {
    name: 'Gumbi',
    starter: true,
    notFinisher: true,
    setups: takeoffs.raiz,
    landings: landingPositions.eagle
  }, {
    name: 'Master Scoot',
    starter: true,
    notFinisher: true,
    setups: ['Back Sweep', 'Front Sweep', 'Hook Kick', 'skip round', 'inside leg hyper', 'vanish'],
    landings: landingPositions.eagle
  }, {
    name: 'Raiz',
    starter: true,
    notFinisher: true,
    setups: takeoffs.raiz,
    landings: landingPositions.eagle
  }, {
    name: 'Raiz Scissor',
    starter: true,
    notFinisher: true,
    setups: takeoffs.raiz,
    landings: ['mega', 'frontside pop', 'inside leg reversal']
  }, {
    name: 'Sailor Moon',
    starter: true,
    notFinisher: true,
    setups: takeoffs.raiz,
    landings: landingPositions.eagle
  }, {
    name: 'Sailor Moon Scissor',
    starter: true,
    notFinisher: true,
    setups: takeoffs.raiz,
    landings: ['mega', 'frontside pop', 'inside leg reversal']
  }, {
    name: 'Sideswipe',
    starter: true,
    setups: takeoffs.raiz,
    landings: ['inside leg hyper', 'boneless', 'boneless cheat', 'skip hook']
  }, {
    name: 'Suicide Kip Up',
    starter: true,
    setups: ['backside pop', 'inside pop', 'invert backside pop', 'invert inside pop'],
    landings: ['backside punch', 'inside punch', 'reverse pop']
  }, {
    name: 'Touch Down Raiz',
    starter: true,
    notFinisher: true,
    setups: takeoffs.raiz,
    landings: landingPositions.eagle
  }, {
    name: 'Valdez',
    starter: false,
    notFinisher: true,
    setups: ['backside', 'invert backside pop', 'invert backside punch', 'back swing'],
    landings: ['invert backside pop', 'invert backside punch', 'back swing']
  }, // FLIPS & TWISTS
  {
    name: 'Aerial',
    starter: true,
    setups: ['inside', 'boneless', 'reverse pop'],
    landings: ['inside', 'boneless', 'boneless cheat', 'outside leg reversal', 'inside pop', 'frontside pop']
  }, {
    name: 'Arabian Scissor Swipe',
    starter: false,
    setups: ['invert backside pop', 'Aerial'],
    landings: ['frontside pop']
  }, {
    name: 'Back Full Hyper',
    starter: true,
    setups: takeoffs.backFullTwist,
    landings: ['inside leg hyper', 'boneless', 'boneless cheat', 'inside pop']
  }, {
    name: 'Back Full Round',
    starter: true,
    setups: takeoffs.backFullTwist,
    landings: landingPositions.round
  }, {
    name: 'Back Full Swipe',
    starter: true,
    setups: takeoffs.backFullTwist,
    landings: ['inside leg hyper', 'boneless', 'boneless cheat']
  }, {
    name: 'Back Full Twist',
    starter: true,
    setups: takeoffs.backFullTwist,
    landings: landingPositions.eagle
  }, {
    name: 'Barani',
    starter: true,
    setups: ['invert frontside punch'],
    landings: ['invert backside punch']
  }, {
    name: 'Butterfly Twist',
    starter: true,
    setups: ['Hook Kick', 'boneless', 'missleg'],
    landings: landingPositions.eagle
  }, {
    name: 'Butterfly Twist Round',
    starter: true,
    setups: ['Hook Kick', 'boneless', 'hyper'],
    landings: landingPositions.round
  }, {
    name: 'Butterfly Switch',
    starter: true,
    setups: ['Hook Kick', 'boneless', 'hyper', 'missleg'],
    landings: landingPositions.eagle
  }, {
    name: 'Butter Knife',
    starter: true,
    setups: ['Hook Kick', 'boneless', 'hyper', 'missleg'],
    landings: landingPositions.hook
  }, {
    name: 'Cart Arabian Scissor Swipe',
    starter: false,
    setups: takeoffs.cartwheel,
    landings: ['frontside', 'frontside pop']
  }, {
    name: 'Cart Full Hyper',
    starter: true,
    setups: takeoffs.cartwheel,
    landings: ['inside leg hyper', 'boneless', 'boneless cheat', 'inside pop']
  }, {
    name: 'Cart Full Round',
    starter: true,
    setups: takeoffs.cartwheel,
    landings: landingPositions.round
  }, {
    name: 'Cart Full Twist',
    starter: true,
    setups: takeoffs.cartwheel,
    landings: landingPositions.eagle
  }, {
    name: 'Cart Full Swipe',
    starter: true,
    setups: takeoffs.cartwheel,
    landings: ['inside leg hyper', 'boneless', 'boneless cheat']
  }, {
    name: 'Corkscrew',
    starter: true,
    setups: takeoffs.swing,
    landings: landingPositions.eagle
  }, {
    name: 'Corkscrew Round',
    starter: true,
    setups: takeoffs.swing,
    landings: landingPositions.round
  }, {
    name: 'Donut Boy',
    starter: false,
    setups: ['back swing', 'skip hook', 'j step', 'pivot step'],
    landings: ['frontside', 'frontside punch']
  }, {
    name: 'Double Leg',
    starter: true,
    setups: ['Tornado', '900 Kick', '360 Wheel Kick'],
    landings: ['backside', 'backside punch']
  }, {
    name: 'Flash Kick',
    starter: false,
    setups: ['invert backside pop', 'invert backside punch'],
    landings: ['inside pop']
  }, {
    name: 'Full Hyper',
    starter: false,
    setups: takeoffs.insideFullTwist,
    landings: ['inside leg hyper', 'boneless', 'boneless cheat', 'inside pop']
  }, {
    name: 'Full Round',
    starter: false,
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.round
  }, {
    name: 'Full Swipe',
    starter: false,
    setups: takeoffs.insideFullTwist,
    landings: ['inside leg hyper', 'boneless', 'boneless cheat']
  }, {
    name: 'Full Twist',
    starter: false,
    setups: takeoffs.insideFullTwist,
    landings: landingPositions.eagle
  }, {
    name: 'Gainer Arabian',
    starter: true,
    setups: takeoffs.swing,
    landings: ['invert frontside punch']
  }, {
    name: 'Gainer Flash Kick',
    starter: true,
    setups: takeoffs.swing,
    landings: ['inside leg hyper', 'boneless', 'boneless cheat']
  }, {
    name: 'Illusion Kick',
    starter: true,
    setups: ['inside', 'boneless', 'reverse pop'],
    landings: ['frontside pop', 'front swing', 'outside leg reversal', 'mega']
  }, {
    name: 'Illusion Twist',
    starter: true,
    setups: ['Hook Kick', 'boneless', 'hyper', 'missleg'],
    landings: ['frontside', 'frontside punch']
  }, {
    name: 'Loser',
    starter: true,
    setups: ['Webster', 'backside', 'frontside'],
    landings: ['inside', 'inside pop', 'backside', 'backside pop']
  }, {
    name: 'Moon Kick',
    starter: true,
    setups: takeoffs.swing,
    landings: landingPositions.hook.concat(['front swing'])
  }, {
    name: 'Rocketboii',
    starter: false,
    setups: ['Round Off'],
    landings: ['backside', 'invert backside punch']
  }, {
    name: 'Shuriken Twist',
    starter: true,
    setups: ['Hook Kick', 'boneless', 'hyper'],
    landings: ['frontside', 'outside', 'vanish']
  }, {
    name: 'Slant Gainer',
    starter: true,
    setups: takeoffs.swing,
    landings: ['inside leg hyper', 'boneless', 'boneless cheat']
  }, {
    name: 'Terada Grab',
    starter: false,
    setups: ['invert backside pop', 'invert backside punch'],
    landings: ['boneless', 'boneless cheat']
  }, {
    name: 'X-Out',
    starter: true,
    setups: ['invert backside pop'],
    landings: ['backside punch', 'inside punch', 'invert backside punch', 'invert inside punch']
  }],
  // INTERMEDIATE
  level3: [// KICKS
  // Pop 720 Double
  // Cheat 9 Double
  // Cheat 1080
  // Backside 1080
  // SETUPS
  // Envergado
  // Td Raiz Swipe
  // Td Raiz Whip
  // FLIPS & TWISTS
  // Grand Master Swipe
  // Gainer Scissor Swipe
  // Snapu Swipe
  // Takuraba
  // Tak Full
  // Tak 9
  {
    name: 'Gainer Switch',
    starter: true,
    setups: takeoffs.swing,
    landings: landingPositions.eagle
  } // Shuriken Cork
  // Hyper Cork
  // Cork Swipe
  // Boxcutter
  // Wrap Full Twist
  // Tak Full Twist
  // Full Twist Double Leg
  // Full Twist Swipe
  // Full Twist Hyper Hook
  // Double Full Twist
  // Hyper Twist
  // Butterfly Twist Hyper Hook
  // Btwist dleg
  ],
  // ADVANCED
  level4: [// Kicks
    // Cheat 1260
    // Hurricane (cheat 1080 triple)
    // FLIPS & TWISTS
    // Cheat 720 Twist (Barrel Roll)
    // Dub Cork
    // Shuriken Cutter
    // Dub Btwist
    // Full Snapu
    // Double Back Flip
  ],
  // ELITE
  level5: [// KICK
    // Cheat 1440
    // FLIPS & TWISTS
    // Cali Roll
    // Triple Full Twist
    // Cork Snapu
    // Cork Dleg Twist
    // Triple Cork
    // Shurikane
  ],
  // WORLD CLASS
  level6: [// KICKS
  // Cheat 1620
  // FLIPS & TWISTS
  {
    name: 'Cork In Back Out (Snatch Cannon)',
    starter: true,
    finisherOnly: true,
    setups: ['back swing'],
    landings: ['backside']
  } // Quad Full
  // Quad Cork
  // Triple Btwist
  // Double Gainer
  ]
}; // NEXT TODO: ADD LANDING MODIFIERS
// make landing modifiers like transitions?
// =============== FUNCTIONS ==================
// ============================================
// DATA CONTROLLER

function generateLevel(max) {
  var random = Math.floor(Math.random() * max + 1);
  return "level".concat(random);
} // DATA CONTROLLER


function randomMove(list) {
  var random = Math.floor(Math.random() * list.length);
  var move = list[random];
  return move;
} // DATA CONTROLLER


function generateFirstTrick(level) {
  var starters = level.filter(function (trick) {
    return trick.starter === true;
  });
  var trick = randomMove(starters);
  return trick;
} // DATA CONTROLLER


function generateMod(setups) {
  if (setups) {
    var setupMods = setups.filter(function (setup) {
      return takeoffModifiers.includes(setup);
    });
    return randomMove(setupMods);
  }

  return undefined;
} // DATA CONTROLLER


function formatMod(mod, trickName) {
  if (mod) {
    // Use Regex here to avoid repetition
    if (/^(vanish|missleg|reverse pop|boneless|boneless cheat|cheat)$/.test(mod)) return mod;
    if (mod.endsWith('pop')) return 'pop';
    if (mod.endsWith('punch')) return 'punch';
    if (mod.endsWith('hyper')) return 'hyper';
    if (mod.endsWith('reversal')) return 'reversal';
    if (mod.endsWith('carry-through')) return 'carry-through';
    if (mod.startsWith('skip')) return trickName === '900 Kick' ? 'skip wrap' : 'skip';
  }

  return undefined;
} // UI CONTROLLER


function createTrickElement(trick, container, mod) {
  var trickEl = document.createElement('div');
  trickEl.className = 'trick';
  var fixedMod;

  if (!mod) {
    fixedMod = formatMod(generateMod(trick.setups), trick.name);
  } else if (!/cheat|j step|pivot step/.test(mod)) {
    fixedMod = formatMod(mod, trick.name);
  } else {
    fixedMod = mod;
  }

  if (fixedMod) {
    var transEl = document.createElement('div');
    transEl.className = 'transition';
    transEl.textContent = "- ".concat(fixedMod, " -");
    container.append(transEl);
  }

  trickEl.textContent = trick.name;
  container.append(trickEl);
} // UI CONTROLLER


function createConnector(container) {
  var connector = document.createElement('div');
  connector.className = 'connector';
  connector.innerHTML = '&darr;';
  container.append(connector);
} // DATA CONTROLLER


function generateTrick(level, prevTrick) {
  // Filter list of tricks for tricks that can be done from the last trick's landings/transitions
  var possibleTricks = level.filter(function (trick) {
    var match = trick.setups.some(function (setup) {
      return prevTrick.landings.includes(setup);
    });
    return match || trick.setups.includes(prevTrick.name);
  }); // Pick random trick object from list

  var trick = randomMove(possibleTricks);
  return trick;
} // DATA CONTROLLER


function generateTransition(prevTrick, current) {
  if (current.setups) {
    // filter current tricks setups for ones that match previous trick's landings
    var matches = current.setups.filter(function (setup) {
      return prevTrick.landings.includes(setup);
    });

    if (matches.length > 0) {
      // Cross check matches with transitions list
      var possibleTransitions = transitions.filter(function (trans) {
        return matches.includes(trans);
      });

      if (possibleTransitions.length > 1) {
        // Pick random transition from possible transition list
        return possibleTransitions[Math.floor(Math.random() * possibleTransitions.length)];
      }

      if (possibleTransitions.length === 0) {
        return undefined;
      }

      return possibleTransitions[0];
    }
  }

  return undefined;
} // DATA CONTROLLER


function generateLastTrick(level, prevTrick) {
  var possibleTricks = level.filter(function (trick) {
    var match = trick.setups.some(function (setup) {
      return prevTrick.landings.includes(setup);
    });
    return match && !trick.notFinisher || trick.setups.includes(prevTrick.name) && !trick.notFinisher;
  }); // Pick random trick object from list

  var trick = randomMove(possibleTricks);
  if (!trick) return {
    name: 'Finishing Trick'
  };
  return trick;
} // APP CONTROLLER


function generateCombo() {
  var transition;
  var comboContainer = document.getElementById('combo');

  while (comboContainer.firstChild) {
    comboContainer.firstChild.remove();
  }

  var randomLevel = generateLevel(1);
  var trick1 = generateFirstTrick(tricks[randomLevel]);
  createTrickElement(trick1, comboContainer, generateMod(trick1.setups));
  createConnector(comboContainer);
  console.log(trick1.name);
  randomLevel = generateLevel(2);
  var trick2 = generateTrick(tricks[randomLevel], trick1);
  transition = generateTransition(trick1, trick2);
  createTrickElement(trick2, comboContainer, transition);
  createConnector(comboContainer);
  console.log(trick2.name);
  randomLevel = generateLevel(2);
  var trick3 = generateTrick(tricks[randomLevel], trick2);
  transition = generateTransition(trick2, trick3);
  createTrickElement(trick3, comboContainer, transition);
  createConnector(comboContainer);
  console.log(trick3.name);
  randomLevel = generateLevel(2);
  var trick4 = generateLastTrick(tricks[randomLevel], trick3);
  transition = generateTransition(trick3, trick4);
  createTrickElement(trick4, comboContainer, transition);
  console.log(trick4.name);
} // EVENT LISTENERS


document.getElementById('generateRandomCombo').onclick = generateCombo; // document.getElementById('randomComboOption').addEventListener('click', () => {
//   document.querySelector('.start-screen').style.display = 'none';
//   document.querySelector('.randomComboBox').style.display = 'block';
// });
// document.getElementById('backToChoices').addEventListener('click', () => {
//   document.querySelector('.randomComboBox').style.display = 'none';
//   document.querySelector('.start-screen').style.display = 'block';
// });