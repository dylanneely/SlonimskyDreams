"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const tf = require("@tensorflow/tfjs-core");
const p5 = require("p5");
const Slonimsky_1 = require("./Slonimsky");
const Slonimsky_2 = require("./Slonimsky");
let newNote = [false, 0, 0];
const Piano = require('tone-piano').Piano;
let lstmKernel1;
let lstmBias1;
let lstmKernel2;
let lstmBias2;
let lstmKernel3;
let lstmBias3;
let c;
let h;
let fcB;
let fcW;
const forgetBias = tf.scalar(1.0);
const activeNotes = new Map();
let SloTotal = Slonimsky_1.SlonimskyHists.length;
let SlonimskyIndex = Slonimsky_2.daysIndexDuration(SloTotal)[0];
const STEPS_PER_GENERATE_CALL = 10;
const GENERATION_BUFFER_SECONDS = .5;
const MAX_GENERATION_LAG_SECONDS = 1;
const MAX_NOTE_DURATION_SECONDS = 3;
const NOTES_PER_OCTAVE = 12;
const DENSITY_BIN_RANGES = [1.0, 2.0, 4.0, 8.0, 16.0, 32.0, 64.0];
const PITCH_HISTOGRAM_SIZE = NOTES_PER_OCTAVE;
const RESET_RNN_FREQUENCY_MS = Slonimsky_2.daysIndexDuration(SloTotal)[1] * 2 * 1000;
let pitchHistogramEncoding;
let noteDensityEncoding;
let conditioned = true;
let currentPianoTimeSec = 0;
let pianoStartTimestampMs = 0;
let currentVelocity = 100;
const MIN_MIDI_PITCH = 0;
const MAX_MIDI_PITCH = 127;
const VELOCITY_BINS = 32;
const MAX_SHIFT_STEPS = 100;
const STEPS_PER_SECOND = 100;
const MIDI_EVENT_ON = 0x90;
const MIDI_EVENT_OFF = 0x80;
const MIDI_NO_OUTPUT_DEVICES_FOUND_MESSAGE = 'No midi output devices found.';
let currentLoopId = 0;
const EVENT_RANGES = [
    ['note_on', MIN_MIDI_PITCH, MAX_MIDI_PITCH],
    ['note_off', MIN_MIDI_PITCH, MAX_MIDI_PITCH],
    ['time_shift', 1, MAX_SHIFT_STEPS],
    ['velocity_change', 1, VELOCITY_BINS],
];
function calculateEventSize() {
    let eventOffset = 0;
    for (const eventRange of EVENT_RANGES) {
        const minValue = eventRange[1];
        const maxValue = eventRange[2];
        eventOffset += maxValue - minValue + 1;
    }
    return eventOffset;
}
const EVENT_SIZE = calculateEventSize();
const PRIMER_IDX = 355;
let lastSample = tf.scalar(PRIMER_IDX, 'int32');
const piano = new Piano({ velocities: 4 }).toMaster();
const SALAMANDER_URL = 'https://storage.googleapis.com/' +
    'download.magenta.tensorflow.org/demos/SalamanderPiano/';
const CHECKPOINT_URL = 'https://storage.googleapis.com/' +
    'download.magenta.tensorflow.org/models/performance_rnn/tfjs';
const isDeviceSupported = tf.ENV.get('WEBGL_VERSION') >= 1;
if (!isDeviceSupported) {
    document.querySelector('#status').innerHTML =
        'We do not yet support your device. Please try on a desktop ' +
            'computer with Chrome/Firefox, or an Android phone with WebGL support.';
}
else {
    start();
}
let modelReady = false;
function start() {
    piano.load(SALAMANDER_URL)
        .then(() => {
        return fetch(`${CHECKPOINT_URL}/weights_manifest.json`)
            .then((response) => response.json())
            .then((manifest) => tf.loadWeights(manifest, CHECKPOINT_URL));
    })
        .then((vars) => {
        lstmKernel1 =
            vars['rnn/multi_rnn_cell/cell_0/basic_lstm_cell/kernel'];
        lstmBias1 = vars['rnn/multi_rnn_cell/cell_0/basic_lstm_cell/bias'];
        lstmKernel2 =
            vars['rnn/multi_rnn_cell/cell_1/basic_lstm_cell/kernel'];
        lstmBias2 = vars['rnn/multi_rnn_cell/cell_1/basic_lstm_cell/bias'];
        lstmKernel3 =
            vars['rnn/multi_rnn_cell/cell_2/basic_lstm_cell/kernel'];
        lstmBias3 = vars['rnn/multi_rnn_cell/cell_2/basic_lstm_cell/bias'];
        fcB = vars['fully_connected/biases'];
        fcW = vars['fully_connected/weights'];
        modelReady = true;
        resetRnn();
    });
}
function resetRnn() {
    c = [
        tf.zeros([1, lstmBias1.shape[0] / 4]),
        tf.zeros([1, lstmBias2.shape[0] / 4]),
        tf.zeros([1, lstmBias3.shape[0] / 4]),
    ];
    h = [
        tf.zeros([1, lstmBias1.shape[0] / 4]),
        tf.zeros([1, lstmBias2.shape[0] / 4]),
        tf.zeros([1, lstmBias3.shape[0] / 4]),
    ];
    if (lastSample != null) {
        lastSample.dispose();
    }
    lastSample = tf.scalar(PRIMER_IDX, 'int32');
    currentPianoTimeSec = piano.now();
    pianoStartTimestampMs = performance.now() - currentPianoTimeSec * 1000;
    currentLoopId++;
    generateStep(currentLoopId);
}
const densityControl = document.getElementById('note-density');
const densityDisplay = document.getElementById('note-density-display');
const gainSliderElement = document.getElementById('gain');
let globalGain = +gainSliderElement.value;
const notes = ['c', 'cs', 'd', 'ds', 'e', 'f', 'fs', 'g', 'gs', 'a', 'as', 'b'];
const pitchHistogramElements = notes.map(note => document.getElementById('pitch-' + note));
function updateConditioningParams() {
    const pitchHistogram = pitchHistogramElements.map(e => {
        return parseInt(e.value, 10) || 0;
    });
    console.log('Scale ' + (SlonimskyIndex + 1) + ': ' + pitchHistogram);
    if (noteDensityEncoding != null) {
        noteDensityEncoding.dispose();
        noteDensityEncoding = null;
    }
    const noteDensityIdx = parseInt(densityControl.value, 10) || 0;
    const noteDensity = DENSITY_BIN_RANGES[noteDensityIdx];
    densityDisplay.innerHTML = noteDensity.toString();
    noteDensityEncoding =
        tf.oneHot(tf.tensor1d([noteDensityIdx + 1], 'int32'), DENSITY_BIN_RANGES.length + 1).as1D();
    if (pitchHistogramEncoding != null) {
        pitchHistogramEncoding.dispose();
        pitchHistogramEncoding = null;
    }
    const buffer = tf.buffer([PITCH_HISTOGRAM_SIZE], 'float32');
    const pitchHistogramTotal = pitchHistogram.reduce((prev, val) => {
        return prev + val;
    });
    for (let i = 0; i < PITCH_HISTOGRAM_SIZE; i++) {
        buffer.set(pitchHistogram[i] / pitchHistogramTotal, i);
    }
    pitchHistogramEncoding = buffer.toTensor();
}
function updatePitchHistogram(newHist) {
    let allZero = true;
    for (let i = 0; i < newHist.length; i++) {
        allZero = allZero && newHist[i] === 0;
    }
    if (allZero) {
        newHist = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    for (let i = 0; i < newHist.length; i++) {
        pitchHistogramElements[i].value = newHist[i].toString();
    }
    updateConditioningParams();
}
updatePitchHistogram(Slonimsky_1.SlonimskyHists[SlonimskyIndex]);
function getConditioning() {
    return tf.tidy(() => {
        if (!conditioned) {
            const size = 1 + noteDensityEncoding.shape[0] +
                pitchHistogramEncoding.shape[0];
            const conditioning = tf.oneHot(tf.tensor1d([0], 'int32'), size).as1D();
            return conditioning;
        }
        else {
            const axis = 0;
            const conditioningValues = noteDensityEncoding.concat(pitchHistogramEncoding, axis);
            return tf.tensor1d([0], 'int32').concat(conditioningValues, axis);
        }
    });
}
function generateStep(loopId) {
    return __awaiter(this, void 0, void 0, function* () {
        const lstm1 = (data, c, h) => tf.basicLSTMCell(forgetBias, lstmKernel1, lstmBias1, data, c, h);
        const lstm2 = (data, c, h) => tf.basicLSTMCell(forgetBias, lstmKernel2, lstmBias2, data, c, h);
        const lstm3 = (data, c, h) => tf.basicLSTMCell(forgetBias, lstmKernel3, lstmBias3, data, c, h);
        let outputs = [];
        [c, h, outputs] = tf.tidy(() => {
            const innerOuts = [];
            for (let i = 0; i < STEPS_PER_GENERATE_CALL; i++) {
                const eventInput = tf.oneHot(lastSample.as1D(), EVENT_SIZE).as1D();
                if (i === 0) {
                    lastSample.dispose();
                }
                const conditioning = getConditioning();
                const axis = 0;
                const input = conditioning.concat(eventInput, axis).toFloat();
                const output = tf.multiRNNCell([lstm1, lstm2, lstm3], input.as2D(1, -1), c, h);
                c.forEach(c => c.dispose());
                h.forEach(h => h.dispose());
                c = output[0];
                h = output[1];
                const outputH = h[2];
                const logits = outputH.matMul(fcW).add(fcB);
                const sampledOutput = tf.multinomial(logits.as1D(), 1).asScalar();
                innerOuts.push(sampledOutput);
                lastSample = sampledOutput;
            }
            return [c, h, innerOuts];
        });
        for (let i = 0; i < outputs.length; i++) {
            playOutput(outputs[i].dataSync()[0]);
        }
        if (piano.now() - currentPianoTimeSec > MAX_GENERATION_LAG_SECONDS) {
            console.warn(`Generation is ${piano.now() - currentPianoTimeSec} seconds behind, ` +
                `which is over ${MAX_NOTE_DURATION_SECONDS}. Resetting time!`);
            currentPianoTimeSec = piano.now();
        }
        const delta = Math.max(0, currentPianoTimeSec - piano.now() - GENERATION_BUFFER_SECONDS);
        setTimeout(() => generateStep(loopId), delta * 1000);
    });
}
let midi;
let activeMidiOutputDevice = null;
(() => __awaiter(this, void 0, void 0, function* () {
    const midiOutDropdownContainer = document.getElementById('midi-out-container');
    try {
        const navigator = window.navigator;
        midi = yield navigator.requestMIDIAccess();
        const midiOutDropdown = document.getElementById('midi-out');
        let outputDeviceCount = 0;
        const midiOutputDevices = [];
        midi.outputs.forEach((output) => {
            console.log(`
          Output midi device [type: '${output.type}']
          id: ${output.id}
          manufacturer: ${output.manufacturer}
          name:${output.name}
          version: ${output.version}`);
            midiOutputDevices.push(output);
            const option = document.createElement('option');
            option.innerText = output.name;
            midiOutDropdown.appendChild(option);
            outputDeviceCount++;
        });
        midiOutDropdown.addEventListener('change', () => {
            activeMidiOutputDevice =
                midiOutputDevices[midiOutDropdown.selectedIndex - 1];
        });
        if (outputDeviceCount === 0) {
            midiOutDropdownContainer.innerText = MIDI_NO_OUTPUT_DEVICES_FOUND_MESSAGE;
        }
    }
    catch (e) {
        midiOutDropdownContainer.innerText = MIDI_NO_OUTPUT_DEVICES_FOUND_MESSAGE;
        midi = null;
    }
}))();
function playOutput(index) {
    let offset = 0;
    for (const eventRange of EVENT_RANGES) {
        const eventType = eventRange[0];
        const minValue = eventRange[1];
        const maxValue = eventRange[2];
        if (offset <= index && index <= offset + maxValue - minValue) {
            if (eventType === 'note_on') {
                const noteNum = index - offset;
                newNote = [true, noteNum, currentVelocity];
                activeNotes.set(noteNum, currentPianoTimeSec);
                if (activeMidiOutputDevice != null) {
                    try {
                        activeMidiOutputDevice.send([
                            MIDI_EVENT_ON, noteNum,
                            Math.min(Math.floor(currentVelocity * globalGain), 127)
                        ], Math.floor(1000 * currentPianoTimeSec) - pianoStartTimestampMs);
                    }
                    catch (e) {
                        console.log('Error sending midi note on event to midi output device:');
                        console.log(e);
                    }
                }
                return piano.keyDown(noteNum, currentPianoTimeSec, currentVelocity * globalGain / 100);
            }
            else if (eventType === 'note_off') {
                const noteNum = index - offset;
                const activeNoteEndTimeSec = activeNotes.get(noteNum);
                if (activeNoteEndTimeSec == null) {
                    return;
                }
                const timeSec = Math.max(currentPianoTimeSec, activeNoteEndTimeSec + .5);
                if (activeMidiOutputDevice != null) {
                    activeMidiOutputDevice.send([
                        MIDI_EVENT_OFF, noteNum,
                        Math.min(Math.floor(currentVelocity * globalGain), 127)
                    ], Math.floor(timeSec * 1000) - pianoStartTimestampMs);
                }
                piano.keyUp(noteNum, timeSec);
                activeNotes.delete(noteNum);
                return;
            }
            else if (eventType === 'time_shift') {
                currentPianoTimeSec += (index - offset + 1) / STEPS_PER_SECOND;
                activeNotes.forEach((timeSec, noteNum) => {
                    if (currentPianoTimeSec - timeSec > MAX_NOTE_DURATION_SECONDS) {
                        console.info(`Note ${noteNum} has been active for ${currentPianoTimeSec - timeSec}, ` +
                            `seconds which is over ${MAX_NOTE_DURATION_SECONDS}, will ` +
                            `release.`);
                        if (activeMidiOutputDevice != null) {
                            activeMidiOutputDevice.send([
                                MIDI_EVENT_OFF, noteNum,
                                Math.min(Math.floor(currentVelocity * globalGain), 127)
                            ]);
                        }
                        piano.keyUp(noteNum, currentPianoTimeSec);
                        activeNotes.delete(noteNum);
                    }
                });
                return currentPianoTimeSec;
            }
            else if (eventType === 'velocity_change') {
                currentVelocity = (index - offset + 1) * Math.ceil(127 / VELOCITY_BINS);
                currentVelocity = currentVelocity / 127;
                return currentVelocity;
            }
            else {
                throw new Error('Could not decode eventType: ' + eventType);
            }
        }
        offset += maxValue - minValue + 1;
    }
    throw new Error(`Could not decode index: ${index}`);
}
function resetRnnRepeatedly() {
    if (modelReady) {
        resetRnn();
        SlonimskyIndex += 1 % SloTotal;
        updatePitchHistogram(Slonimsky_1.SlonimskyHists[SlonimskyIndex]);
    }
    setTimeout(resetRnnRepeatedly, RESET_RNN_FREQUENCY_MS);
}
setTimeout(resetRnnRepeatedly, RESET_RNN_FREQUENCY_MS);
let sketch = function (p) {
    let width = p.windowWidth;
    let height = p.windowHeight;
    p.setup = function () {
        p.createCanvas(width, height);
    };
    p.draw = function () {
        p.fill(0, 12);
        p.rect(0, 0, width, height);
        p.noStroke();
        if (newNote[0]) {
            let GoldenNote = newNote[1] * Math.E;
            p.fill(p.color(newNote[2] * 255, newNote[1] * 2, p.random(255)));
            p.ellipse(p.random(width), p.random(height), GoldenNote, newNote[1]);
            newNote[0] = false;
        }
    };
};
new p5(sketch);
