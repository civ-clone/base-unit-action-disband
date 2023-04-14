import Action from '@civ-clone/core-unit/Action';
import Moved from '@civ-clone/core-unit/Rules/Moved';

export class Disband extends Action {
  perform() {
    this.unit().destroy();

    this.ruleRegistry().process(Moved, this.unit(), this);
  }
}

export default Disband;
