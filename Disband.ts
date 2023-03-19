import Action from '@civ-clone/core-unit/Action';

export class Disband extends Action {
  perform() {
    this.unit().destroy();
  }
}

export default Disband;
