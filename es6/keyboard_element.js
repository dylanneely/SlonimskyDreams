"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const offsets = [0, 0.5, 1, 1.5, 2, 3, 3.5, 4, 4.5, 5, 5.5, 6];
const minNote = 21;
const maxNote = 108;
class KeyboardElement {
    constructor(container) {
        this.container = container;
        this.keys = {};
        this.resize();
        this.notes = {};
    }
    resize() {
        this.keys = {};
        this.container.innerHTML = '';
        const keyWidth = 1 / 52;
        for (let i = minNote; i <= maxNote; i++) {
            const key = document.createElement('div');
            key.classList.add('key');
            const isSharp = ([1, 3, 6, 8, 10].indexOf(i % 12) !== -1);
            key.classList.add(isSharp ? 'black' : 'white');
            this.container.appendChild(key);
            const noteOctave = Math.floor(i / 12) - Math.floor(minNote / 12);
            const offset = offsets[i % 12] + noteOctave * 7 - 5;
            key.style.width = `${keyWidth * 100}%`;
            key.style.left = `${offset * keyWidth * 100}%`;
            key.id = i.toString();
            const fill = document.createElement('div');
            fill.classList.add('fill');
            key.appendChild(fill);
            this.keys[i] = key;
        }
    }
    keyDown(noteNum) {
        if (noteNum in this.keys) {
            const key = this.keys[noteNum];
            const note = new Note(key.querySelector('.fill'));
            if (!this.notes[noteNum]) {
                this.notes[noteNum] = [];
            }
            this.notes[noteNum].push(note);
        }
    }
    keyUp(noteNum) {
        if (noteNum in this.keys) {
            if (!(this.notes[noteNum] && this.notes[noteNum].length)) {
                console.warn('note off before note on');
            }
            else {
                this.notes[noteNum].shift().noteOff();
            }
        }
    }
}
exports.KeyboardElement = KeyboardElement;
class Note {
    constructor(element) {
        this.element = element;
        this.element.classList.add('active');
    }
    noteOff() {
        this.element.classList.remove('active');
    }
}
