"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
var Radio = /** @class */ (function () {
    function Radio() {
        this.volume = 10;
        this.power = false;
        this.name = "Radio";
    }
    Radio.prototype.getName = function () {
        return this.name;
    };
    Radio.prototype.setPower = function (powerStatus) {
        this.power = powerStatus;
    };
    Radio.prototype.getPower = function () {
        return this.power;
    };
    Radio.prototype.setVolume = function (volume) {
        if (volume < 0)
            return;
        if (volume > 100)
            return;
        this.volume = volume;
    };
    Radio.prototype.getVolume = function () {
        return this.volume;
    };
    return Radio;
}());
exports.Radio = Radio;
