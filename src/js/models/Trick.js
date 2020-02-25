import * as Model from './model';
import * as Data from './tricks';


export default class Trick {
  generateLevel(max) {
    const random = Math.floor(Math.random() * max + 1);
    this.level = `level${random}`;
  }

  generateTrick(prevTrick) {
    let possibleTricks;

    if (prevTrick) {
      const landing = Model.adjustForLandingMod(prevTrick, this);
      // const isLandingMod = Data.landingModifiers.includes(prevTrick.landing);
      // // Adjust if landing modifier
      // if (isLandingMod && Data.landingPositions[prevTrick.landing]) {
      //   landing = Model.randomMove(Data.landingPositions[prevTrick.landing]);
      //   this.transition = landing;
      // } else {
      //   landing = prevTrick.landing;
      // }

      console.log(landing);

      // Filter list for tricks that have at least one setup that matches prevTrick's landing
      possibleTricks = Model.filterTrickList(this, landing, prevTrick);

      console.log(possibleTricks);

      // Make adjustment if no tricks on that list match
      if (!possibleTricks.length) {
        this.level = 'level2';
        possibleTricks = Model.filterTrickList(this, landing, prevTrick);
      }

      // Choose random trick from this list
      this.trickObj = Model.randomMove(possibleTricks);
    } else {
      // Choose random trick from list
      possibleTricks = Data.tricks[this.level].filter(trick => !trick.notStarter);
      this.trickObj = Model.randomMove(possibleTricks);
    }
  }


  generateLanding() {
    this.landing = Model.randomMove(this.trickObj.landings);
  }


  // generateLastTrick(prevTrick) {
  //   let possibleTricks;

  //   const landing = Model.adjustForLandingMod(prevTrick, this);
  //   // const isLandingMod = Data.landingModifiers.includes(prevTrick.landing);
  //   // // Adjust if landing modifier
  //   // if (isLandingMod && Data.landingPositions[prevTrick.landing]) {
  //   //   landing = Model.randomMove(Data.landingPositions[prevTrick.landing]);
  //   //   this.transition = landing;
  //   // } else {
  //   //   landing = prevTrick.landing;
  //   // }

  //   console.log(landing);

  //   possibleTricks = Data.tricks[this.level].filter(trick => {
  //     const match = trick.setups.some(setup => setup === landing);
  //     // Does it match and can be a finisher?
  //     if (match && !trick.notFinisher) {
  //       return true;
  //     } if ((trick.setups.includes(prevTrick.name) && !trick.notFinisher)) {
  //       this.transition = null;
  //       return true;
  //     }
  //     return undefined;
  //   });

  //   console.log(possibleTricks);

  //   // Make adjustment if no tricks on that list match
  //   if (!possibleTricks.length) {
  //     this.level = this.level === 'level1' ? 'level2' : 'level1';
  //     possibleTricks = Data.tricks[this.level].filter(trick => {
  //       const match = trick.setups.some(setup => setup === landing);
  //       // Does it match and can be a finisher?
  //       if (match && !trick.notFinisher) {
  //         return true;
  //       } if ((trick.setups.includes(prevTrick.name) && !trick.notFinisher)) {
  //         this.transition = null;
  //         return true;
  //       }
  //       return false;
  //     });
  //   }

  //   // CAREFUL, THIS CAN CAUSE MAXIMUM CALL STACK EXCEEDING IF NO MATCHES IN ANY LEVEL
  //   // if (!possibleTricks.length) {
  //   //   possibleTricks = Model.reFilter(possibleTricks, this, landing, prevTrick);
  //   //   console.log('REFILTERED POSSIBLE TRICKS');
  //   // }


  //   // Choose random trick from this list
  //   this.trickObj = Model.randomMove(possibleTricks);
  //   if (!this.trickObj) {
  //     this.trickObj = {
  //       name: 'No matching trick',
  //       setups: ['backside', 'inside', 'frontside'],
  //     };
  //   }
  // }


  setName() {
    this.name = this.trickObj.name;
  }


  generateTransition(prevTrickLanding) {
    const notLandingMod = !Data.landingModifiers.includes(prevTrickLanding);
    console.log(notLandingMod);

    // If current trick already has a transition property
    if (this.transition) {
      // If the current transition property is not on the transitions list
      if (!Data.transitions.includes(this.transition)) {
        // Then it is not a transition
        this.transition = null;
      }
    } else if (!this.trickObj.setups.includes(prevTrickLanding)) {
      this.transition = null;
    } else if (Data.transitions.includes(prevTrickLanding) && notLandingMod) {
      this.transition = prevTrickLanding;
    } else {
      this.transition = null;
    }
    console.log(this.transition);
  }


  handleHook() {
    if (this.transition === 'hook') {
      const takeoffs = this.trickObj
        .setups
        .filter(setup => Data.landingPositions.hook.includes(setup));
      this.takeoff = Model.generateTakeoff(takeoffs);
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
    }
    if (Data.takeoffModifiers.includes(this.takeoff)) {
      this.takeoff = Model.formatMod(this.takeoff, this.name);
    }
  }

  handleLandingMod() {
    if (Data.landingModifiers.includes(this.landing)) {
      this.landingMod = Model.formatMod(this.landing);
    }
  }
}
