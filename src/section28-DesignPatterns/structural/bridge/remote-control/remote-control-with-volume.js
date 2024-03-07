"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteControlWithVolume = void 0;
var remote_control_1 = require("./remote-control");
var RemoteControlWithVolume = /** @class */ (function (_super) {
    __extends(RemoteControlWithVolume, _super);
    function RemoteControlWithVolume() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RemoteControlWithVolume.prototype.volumeUp = function () {
        var oldVolume = this.device.getVolume();
        this.device.setVolume(this.device.getVolume() + 10);
        console.log("".concat(this.device.getName(), " tinha o volume ").concat(oldVolume, " agora tem ").concat(this.device.getVolume()));
    };
    RemoteControlWithVolume.prototype.volumeDown = function () {
        var oldVolume = this.device.getVolume();
        this.device.setVolume(this.device.getVolume() - 10);
        console.log("".concat(this.device.getName(), " tinha o volume ").concat(oldVolume, " agora tem ").concat(this.device.getVolume()));
    };
    return RemoteControlWithVolume;
}(remote_control_1.RemoteControl));
exports.RemoteControlWithVolume = RemoteControlWithVolume;
