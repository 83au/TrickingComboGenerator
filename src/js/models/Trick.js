import * as Model from './model';
import * as Data from './tricks';


export default class Trick {
  generateLevel(max) {
    const random = Math.floor(Math.random() * max + 1);
    this.level = `level${random}`;
  }

  generateTrick(prevTrick) {
    let landing;
    let possibleTricks;

    if (prevTrick) {
      // Adjust if landing modifier
      if (Data.landingPositions[prevTrick.landing]) {
        landing = Model.randomMove(Data.landingPositions[prevTrick.landing]);
      } else {
        landing = prevTrick.landing;
      }

      console.log(landing);

      // Filter list for tricks that have at least one setup that matches prevTrick's landing
      possibleTricks = Data.tricks[this.level].filter(trick => {
        const match = trick.setups.includes(landing);
        return match || trick.setups.includes(prevTrick.trickObj.name);
      });

      console.log(possibleTricks);

      // Choose random trick from this list
      this.trickObj = Model.randomMove(possibleTricks);
    } else {
      // Choose random trick from list
      possibleTricks = Data.tricks[this.level].filter(trick => !trick.notStarter);
      this.trickObj = Model.randomMove(possibleTricks);
    }

    //   // Filter list for tricks that have a setup that matches at least one landing of prevTrick
    //   possibleTricks = Data.tricks[this.level].filter(trick => {
    //     const match = trick.setups.some(setup => prevTrick.landings.includes(setup));
    //     // Or if prevTrick itself is a setup for new trick
    //     return match || trick.setups.includes(prevTrick.name);
    //   });

    //   // If no matches check previous tricks landings for landing mods
    //   if (!possibleTricks.length) {
    //     this.prevLanding = Model.chooseLanding(prevTrick.landings);

    //     console.log(this.prevLanding);

    //     possibleTricks = Data.tricks[this.level].filter(trick => {
    //       const match = trick
    //         .setups
    //         .some(setup => Data.landingPositions[this.prevLanding].includes(setup));
    //       return match;
    //     });
    //   }
    //   // Pick random trick object from list
    //   this.trickObj = Model.randomMove(possibleTricks);
    // } else {
    //   possibleTricks = Data.tricks[this.level].filter(trick => !trick.notStarter);
    //   this.trickObj = Model.randomMove(possibleTricks);
    // }
  }


  generateLanding() {
    this.landing = Model.randomMove(this.trickObj.landings);
  }


  generateLastTrick(prevTrick) {
    const possibleTricks = Data.tricks[this.level].filter(trick => {
      const match = trick.setups.some(setup => prevTrick.landings.includes(setup));
      return (match && !trick.notFinisher)
        || (trick.setups.includes(prevTrick.name) && !trick.notFinisher);
    });

    // Pick random trick object from list
    this.trickObj = Model.randomMove(possibleTricks);
    if (!this.trickObj) this.trickObj = { name: 'Finishing Trick' };
  }


  setName() {
    this.name = this.trickObj.name;
  }


  generateTransition(prevTrickLandings, landingMod) {
    let matches;

    if (landingMod) {
      matches = this.trickObj
        .setups
        .filter(setup => Data.landingPositions[landingMod].includes(setup));
    } else {
      // Filter current trick's setups for ones that match previous trick's landings
      matches = this.trickObj.setups.filter(setup => prevTrickLandings.includes(setup));
    }

    console.log(matches);

    if (matches.length > 0) {
      // Cross check matches with transitions list
      const possibleTransitions = Data.transitions.filter(trans => matches.includes(trans));

      if (possibleTransitions.length > 1) {
        // Pick random transition from possible transition list
        this.transition = Model.randomMove(possibleTransitions);
      } else if (possibleTransitions.length === 0) {
        this.transition = undefined;
      } else {
        [this.transition] = possibleTransitions;
      }
    }
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
      }
      if (this.transition === 'skip round' && this.name === '900 Kick') {
        this.takeoff = 'wrap';
      }
    }
    if (Data.takeoffModifiers.includes(this.takeoff)) {
      this.takeoff = Model.formatMod(this.takeoff, this.name);
    }
  }

  handleLanding() {
    if (!this.prevLanding) {
      if (Data.landingModifiers.includes(this.transition)) {
        this.prevLanding = Model.formatMod(this.transition);
        // console.log(this.prevLanding);

        if (/$(complete|hyper|turbo)$/.test(this.prevLanding)) {
          this.transition = this.generateTransition(Data.landingPositions[this.prevLanding]);
        }
      }
    }
  }
}
