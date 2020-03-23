import * as Model from './model';
import * as Data from './data';


export default class Trick {
  generateLevel(max) {
    const random = Model.random(max) + 1;
    this.level = `level${random}`;
  }


  setLevel(num) {
    this.level = `level${num}`;
  }


  generateTrick(prevTrick) {
    let possibleTricks;

    if (prevTrick) {
      const landing = Model.adjustForLandingMod(prevTrick, this);

      // Filter list for tricks that have at least one setup that matches prevTrick's landing
      possibleTricks = Model.filterTrickList(this.level, landing);

      // Make adjustment if no tricks on that list match
      if (!possibleTricks.length) {
        console.log('REFILTERING');
        possibleTricks = Model.searchLevels('level1', landing);
      }

      // Choose random trick from this list
      this.trickObj = Model.randomMove(possibleTricks);
    } else {
      // Choose random trick from list
      possibleTricks = Data.tricks[this.level].filter(trick => !trick.notStarter);
      this.trickObj = Model.randomMove(possibleTricks);
    }
  }


  setName() {
    this.name = this.trickObj.name;
  }


  generateTransition(prevTrickLanding) {
    const notLandingMod = !Data.landingModifiers.includes(prevTrickLanding);

    // If current trick already has a transition property
    if (this.transition) {
      // If the current transition property is not on the transitions list
      if (!Data.transitions.includes(this.transition)) {
        this.transition = null;
      }

      // Otherwise if current trick's setups doesn't contain prevTrickLanding
    } else if (!this.trickObj.setups.includes(prevTrickLanding)) {
      this.transition = null;
    } else if (Data.transitions.includes(prevTrickLanding) && notLandingMod) {
      this.transition = prevTrickLanding;
    } else {
      this.transition = null;
    }
  }


  handleHook() {
    if (this.transition === 'hook') {
      const takeoffs = this.trickObj
        .setups
        .filter(setup => Data.landingPositions.hook.includes(setup));
      this.takeoff = Model.chooseFromList(takeoffs, 'takeoffModifiers');
    }
  }


  handleTakeoff() {
    if (!this.takeoff) {
      if (Data.takeoffModifiers.includes(this.transition)) {
        this.takeoff = Model.formatMod(this.transition, this.name);
        this.transition = null;
      }
      if (this.transition === 'skip round' && this.name === '900 Kick') {
        this.takeoff = 'wrap';
        this.transition = 'skip';
      }
    } else if (Data.takeoffModifiers.includes(this.takeoff)) {
      if (this.takeoff === 'wrap' && !this.transition) {
        this.takeoff = 'cheat';
      } else {
        this.takeoff = Model.formatMod(this.takeoff, this.name);
      }
    }
  }


  generateLanding() {
    this.landing = Model.randomMove(this.trickObj.landings);
  }


  handleLandingMod() {
    if (Data.landingModifiers.includes(this.landing)) {
      this.landingMod = Model.formatMod(this.landing);
    } else {
      this.landingMod = null;
    }
  }
}
