/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!*****************************************************!*\
  !*** ./src/section20-POO/Aula35-exercicio/index.ts ***!
  \*****************************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
class VideoPlayer {
    constructor(videoPlayerElements) {
        this.videoPlayer = videoPlayerElements.videoPlayer;
        this.playButton = videoPlayerElements.playButton;
        this.stopButton = videoPlayerElements.stopButton;
    }
    iniciarEventos() {
        this.playButton.addEventListener("click", () => {
            this.playToggle();
        });
        this.stopButton.addEventListener("click", () => {
            this.videoPlayer.pause();
            this.videoPlayer.currentTime = 0;
            this.playButton.innerText = "Play";
        });
    }
    playToggle() {
        if (this.videoPlayer.paused) {
            this.videoPlayer.play();
            this.playButton.innerText = "Pause";
        }
        else {
            this.videoPlayer.pause();
            this.playButton.innerText = "Play";
        }
    }
    stop() {
    }
}
exports["default"] = VideoPlayer;
const videoPlayer = new VideoPlayer({
    videoPlayer: document.querySelector(".video"),
    playButton: document.querySelector(".play"),
    stopButton: document.querySelector(".stop"),
});
videoPlayer.iniciarEventos();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map