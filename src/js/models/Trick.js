import * as Model from './model';
import * as Data from './tricks';


export default class Trick {
  generateLevel(max) {
    const random = Math.floor(Math.random() * max + 1);
    this.level = `level${random}`;
  }


  generateTrick(prevTrick) {
    if (prevTrick) {
      // Filter list for tricks that have a setup that matches at least one landing of prevTrick
      const possibleTricks = Data.tricks[this.level].filter(trick => {
        const match = trick.setups.some(setup => prevTrick.landings.includes(setup));
        // Or if prevTrick itself is a setup for new trick
        return match || trick.setups.includes(prevTrick.name);
      });
      // Pick random trick object from list
      this.trickObj = Model.randomMove(possibleTricks);
    } else {
      this.trickObj = Model.randomMove(Data.tricks[this.level]);
    }
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


  generateTransition(prevTrickLandings) {
    if (this.trickObj.setups) {
      // Filter current trick's setups for ones that match previous trick's landings
      const matches = this.trickObj.setups.filter(setup => prevTrickLandings.includes(setup));

      if (matches.length > 0) {
        // Cross check matches with transitions list
        const possibleTransitions = Data.transitions.filter(trans => matches.includes(trans));
        if (possibleTransitions.length > 1) {
          // Pick random transition from possible transition list
          this.transition = Model.randomMove(possibleTransitions);
        }
        if (possibleTransitions.length === 0) {
          this.transition = undefined;
        } else {
          [this.transition] = possibleTransitions;
        }
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
    }
    if (Data.takeoffModifiers.includes(this.takeoff)) {
      this.takeoff = Model.formatMod(this.takeoff, this.name);
    }
  }
}
