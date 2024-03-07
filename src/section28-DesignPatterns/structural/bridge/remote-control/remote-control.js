"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteControl = void 0;
var RemoteControl = /** @class */ (function () {
    function RemoteControl(device) {
        this.device = device;
    }
    RemoteControl.prototype.togglePower = function () {
        this.device.setPower(!this.device.getPower());
        console.log("".concat(this.device.getName(), " power status: ").concat(this.device.getPower()));
    };
    return RemoteControl;
}());
exports.RemoteControl = RemoteControl;
