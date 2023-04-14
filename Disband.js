"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disband = void 0;
const Action_1 = require("@civ-clone/core-unit/Action");
const Moved_1 = require("@civ-clone/core-unit/Rules/Moved");
class Disband extends Action_1.default {
    perform() {
        this.unit().destroy();
        this.ruleRegistry().process(Moved_1.default, this.unit(), this);
    }
}
exports.Disband = Disband;
exports.default = Disband;
//# sourceMappingURL=Disband.js.map