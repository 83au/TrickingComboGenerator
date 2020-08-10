import * as Model from './model';
import * as Data from './data/data';
import landingPositions from './data/landings';
import specialLandings from './data/specialLandings';


export default class Trick {
  generateLevel(max) {
    const random = Model.random(max) + 1;
    this.level = `level${random}`;
  }


  setLevel(num) {
    this.level = `level${num}`;
  }


  generateTrick(prevTrick, mode) {
    let possibleTricks;

    if (prevTrick) {
      const landing = Model.adjustForLandingMod(prevTrick, this);

      // Filter list for tricks that have at least one setup that matches prevTrick's landing
      possibleTricks = Model.filterTrickList(this.level, landing);

      // Make adjustment if no tricks on that list match
      // * Change this to alter last trick's landing?
      if (!possibleTricks.length) {
        if (mode === 'random') {
          console.log('REFILTERING');
          console.log(prevTrick.name);
          console.log(landing);
          possibleTricks = Model.searchLevels('level1', landing, prevTrick);
        } else {
          throw new Error('No matching trick');
        }
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
        .filter(setup => landingPositions.hook.includes(setup));
      this.takeoff = Model.chooseFromList(takeoffs, 'takeoffModifiers');
    }
  }


  handleTakeoff() {
    // Only starter tricks will have a takeoff already
    if (!this.takeoff) {
      if (this.name.includes('Wrap')) {
        this.takeoff = '';
        if (this.transition === 'skip round') {
          this.transition = 'skip';
        } else {
          this.transition = null;
        }
      } else if (this.name.includes('Swing') && this.transition.includes('swing') && !/^skip backswing$/.test(this.transition)) {
        this.takeoff = '';
        this.transition = null;
      } else if (this.name.includes('Swing') && /^skip backswing$/.test(this.transition)) {
        this.takeoff = '';
        this.transition = 'skip';
      } else if (Data.takeoffModifiers.includes(this.transition)) {
        this.takeoff = this.transition;
        this.transition = null;
      }
    } else if (Data.takeoffModifiers.includes(this.takeoff)) {
      if (this.takeoff === 'wrap' && !this.transition) {
        this.takeoff = 'cheat';
      } else if (this.name.includes('Swing')) {
        this.takeoff = '';
      } else {
        this.takeoff = Model.formatMod(this.takeoff);
      }
    }
  }


  generateLanding(diff, maxDiff) {
    console.log(diff, maxDiff);
    let filtered;
    const modCart = (maxDiff !== 'novice' && maxDiff) && (this.trickObj.name === 'Cartwheel' || this.trickObj.name === 'One-handed Cartwheel');

    const checkCartwheel = () => {
      if (modCart) {
        // Remove reverse vanish & inside pop Cart landings as they are not used above Novice
        // console.log('ENCOUNTERED CARTWHEEL!!!');
        filtered = this.trickObj.landings.filter(landing => landing !== 'reverse vanish' && landing !== 'inside pop');
        // console.log(filtered);
        this.landing = Model.randomMove(filtered);
        return true;
      }
      return false;
    };
    // If difficulty is greater than 1, no adjustments need to be made
    if (diff > 1) {
      if (checkCartwheel()) return;
      this.landing = Model.randomMove(this.trickObj.landings);
    } else {
      if (checkCartwheel()) return;
      // 1. Make new landings list excluding special landings
      filtered = this.trickObj.landings.filter(landing => !specialLandings.includes(landing));
      // 2. Set landing to a random landing from this new list
      this.landing = Model.randomMove(filtered);
    }
  }


  handleLandingMod() {
    if (Data.landingModifiers.includes(this.landing)) {
      this.landingMod = Model.formatMod(this.landing);
    } else {
      this.landingMod = null;
    }
  }
}
