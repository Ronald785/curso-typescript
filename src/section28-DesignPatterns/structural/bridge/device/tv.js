"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tv = void 0;
var Tv = /** @class */ (function () {
    function Tv() {
        this.volume = 10;
        this.power = false;
        this.name = "TV";
    }
    Tv.prototype.getName = function () {
        return this.name;
    };
    Tv.prototype.setPower = function (powerStatus) {
        this.power = powerStatus;
    };
    Tv.prototype.getPower = function () {
        return this.power;
    };
    Tv.prototype.setVolume = function (volume) {
        if (volume < 0)
            return;
        if (volume > 100)
            return;
        this.volume = volume;
    };
    Tv.prototype.getVolume = function () {
        return this.volume;
    };
    return Tv;
}());
exports.Tv = Tv;
