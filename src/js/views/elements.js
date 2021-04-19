const elements = {
  startScreen: document.querySelector('.start-screen'),
  buildComboLine: document.querySelector('buildComboBox hr'),
  trickElement: document.querySelector('.trick'),
  installBanner: document.querySelector('.install'),
  installBtn: document.querySelector('.install__btn'),
  installClose: document.querySelector('.install__close'),
  iosInstallPopup: document.querySelector('.ios-install'),
  iosInstallClose: document.querySelector('.ios-install__close'),

  // Info modal
  openModal: document.querySelector('.open-info'),
  closeModal: document.querySelector('.close-info'),
  modal: document.querySelector('.info-modal'),
  copy: document.querySelector('.copy'),
  year: document.querySelector('.year'),

  // Build Combo elements
  buildCmbBtn: document.getElementById('buildComboOption'),
  buildScreen: document.querySelector('.build-screen'),
  builtCmbContainer: document.getElementById('builtCombo'),
  buildDiffContainer: document.querySelector('.build-screen__choices-difficulty'),
  buildDiffSelection: document.getElementById('buildCmbDifficulty'),
  generateTrickBtn: document.getElementById('generateTrickBtn'),
  redoBtn: document.getElementById('redo'),
  nextTrickBtn: document.getElementById('next'),
  newCmbBtn: document.getElementById('new'),

  // Random combo elements
  randomCmbBtn: document.getElementById('randomComboOption'),
  randomScreen: document.querySelector('.random-screen'),
  randomCmbContainer: document.getElementById('randomCombo'),
  randomDiffSelection: document.getElementById('randomCmbDifficulty'),
  numTricksSelection: document.getElementById('numTricks'),
  generateCmbBtn: document.getElementById('generateRandomCombo'),

  // Back button
  backBtn: document.getElementById('backToChoices'),
};

export default elements;
