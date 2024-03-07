"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientCode = void 0;
var remote_control_1 = require("./remote-control/remote-control");
var remote_control_with_volume_1 = require("./remote-control/remote-control-with-volume");
var tv_1 = require("./device/tv");
var radio_1 = require("./device/radio");
function clientCode(abstraction) {
    abstraction.togglePower(); // true
    // Type Guard
    if (!("volumeUp" in abstraction))
        return;
    abstraction.volumeUp(); // 20
    abstraction.volumeUp(); // 30
    abstraction.volumeDown(); // 20
}
exports.clientCode = clientCode;
var tv = new tv_1.Tv();
var radio = new radio_1.Radio();
var radioRemoteControl = new remote_control_1.RemoteControl(radio);
clientCode(radioRemoteControl);
var tvRemoteControl = new remote_control_with_volume_1.RemoteControlWithVolume(tv);
clientCode(tvRemoteControl);
