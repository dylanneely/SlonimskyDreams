"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("p5/lib/addons/p5.sound");
const p5 = require("p5");
var sketch = function (p) {
    let ding;
    p.preload = () => {
        const DING_FILE = require("./ding.mp3").default;
        ding = new p5.SoundFile(DING_FILE);
    };
    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
        ding.playMode('restart');
    };
    p.draw = function () {
        if (p.mouseIsPressed) {
            p.fill(0, 0, 0);
            if (ding.isLoaded()) {
                ding.play();
            }
        }
        else {
            p.fill(255, 0, 0);
        }
        p.ellipse(p.mouseX, p.mouseY, 80, 80);
    };
};
new p5(sketch);
