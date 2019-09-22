/* Copyright 2017 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
==============================================================================*/
import * as tf from '@tensorflow/tfjs-core';
// import * as p5sound from 'p5/lib/addons/p5.sound';
// import * as p5dom from 'p5/lib/addons/p5.dom';
import * as p5 from 'p5';
let newNote: Array<any> = [false, 0, 0];



// tslint:disable-next-line:no-require-imports
const Piano = require('tone-piano').Piano;

//interpolation of one note - division of octave into 2 parts
const mel1 = [0, 1, 6, 7];
const mel2 = [0, 2, 6, 8];
const mel3 = [0, 4, 6, 10];
const mel4 = [0, 5, 6, 11];
//interpolation of two notes - division of octave into 2 parts
const mel5 = [0, 1, 2, 6, 7, 8];
const mel6 = [0, 1, 3, 6, 7, 9];
const mel7 = [0, 1, 4, 6, 7, 10];
const mel8 = [0, 1, 5, 6, 7, 11];
const mel9 = [0, 2, 3, 6, 8, 9];
const mel10 = [0, 2, 5, 6, 8, 11];
const mel11 = [0, 3, 4, 6, 9, 10];
const mel12 = [0, 3, 5, 6, 9, 11];
const mel13 = [0, 4, 5, 6, 10, 11];
//interpolation of three notes - division of octave into 2 parts
const mel14 = [0, 1, 2, 3, 6, 7, 8, 9];
const mel15 = [0, 1, 2, 4, 6, 7, 8, 10];
const mel16 = [0, 1, 2, 5, 6, 7, 8, 11];
const mel17 = [0, 1, 3, 5, 6, 7, 9, 11];
const mel18 = [0, 1, 4, 5, 6, 7, 10, 11];
const mel19 = [0, 2, 3, 4, 6, 8, 9, 10];
const mel20 = [0, 2, 3, 5, 6, 8, 9, 11];
const mel21 = [0, 2, 4, 5, 6, 8, 10, 11];
//interpolation of four notes - division of octave into 2 parts
const mel22 = [0, 1, 2, 3, 4, 6, 7, 8, 9, 10];
const mel23 = [0, 1, 2, 3, 5, 6, 7, 8, 9, 11];
const mel24 = [0, 1, 2, 4, 5, 6, 7, 8, 10, 11];
const mel25 = [0, 1, 3, 4, 5, 6, 7, 9, 10, 11];
const mel26 = [0, 2, 3, 4, 5, 6, 8, 9, 10, 11];
//symmetric interpolation of one note
const mel27 = [0, 1, 6, 11];
const mel28 = [0, 2, 6, 10];
const mel29 = [0, 3, 6, 9];
const mel30 = [0, 4, 6, 8];
const mel31 = [0, 5, 6, 7];
//symmetric interpolation of two notes
const mel32 = [0, 1, 2, 6, 10, 11];
const mel33 = [0, 1, 3, 6, 9, 11];
const mel34 = [0, 1, 4, 6, 8, 11];
const mel35 = [0, 2, 3, 6, 9, 10];
const mel36 = [0, 2, 4, 6, 8, 10]; //whole tone scale
const mel37 = [0, 2, 5, 6, 7, 10];
const mel38 = [0, 3, 4, 6, 8, 9];
const mel39 = [0, 3, 5, 6, 7, 9];
const mel40 = [0, 4, 5, 6, 7, 8];
//symmetric interpolation of three notes
const mel41 = [0, 1, 2, 3, 6, 9, 10, 11];
const mel42 = [0, 1, 2, 4, 6, 8, 10, 11];
const mel43 = [0, 1, 2, 5, 6, 7, 10, 11];
const mel44 = [0, 1, 3, 4, 6, 8, 9, 11];
const mel45 = [0, 1, 3, 5, 6, 7, 8, 11];
const mel46 = [0, 2, 3, 5, 6, 7, 9, 10];
const mel47 = [0, 2, 4, 5, 6, 7, 8, 10];
const mel48 = [0, 3, 4, 5, 6, 7, 8, 9];
//non-symmetric interpolation
const mel49 = [0, 1, 4, 6, 9, 10];
const mel50 = [0, 2, 4, 6, 9, 10];
const mel51 = [0, 1, 3, 5, 6, 8, 10, 11];
const mel52 = [0, 1, 3, 4, 5, 6, 8, 9, 10, 11];
//ultrapolation of one note
const mel53 = mel1;
const mel54 = mel2;
const mel55 = mel29;
const mel56 = mel3;
const mel57 = mel4;
const mel58 = mel27;
//ultrapolation of one note
const mel59 = mel5
const mel60 = mel6;
const mel61 = mel7;
const mel62 = mel8;
const mel63 = mel9;
const mel64 = mel36;
const mel65 = mel10;
const mel66 = mel11;
const mel67 = mel12;
const mel68 = mel13;
const mel69 = mel5;
const mel70 = mel6;
const mel71 = mel7;
//ultrapolation of three notes
const mel72 = [0, 1, 3, 4, 6, 7, 9, 10];
const mel73 = mel17;
const mel74 = mel18;
const mel75 = mel21;
const mel76 = mel5;
const mel77 = mel6;
const mel78 = mel7;
const mel79 = mel15;
//infrapolation of one note
const mel80 = mel4;
const mel81 = mel3;
const mel82 = mel29;
const mel83 = mel2;
const mel84 = mel1;
//infrapolation of two notes
const mel85 = mel13;
const mel86 = mel12;
const mel87 = mel10;
const mel88 = mel8;
const mel89 = mel11;
const mel90 = mel36;
const mel91 = mel7;
const mel92 = mel9;
const mel93 = mel6;
//infrapolation of three notes
const mel94 = mel12;
const mel95 = mel7;
const mel96 = mel9;
const mel97 = mel21;
const mel98 = mel72;
//infra-interpolation
const mel99 = mel10;
const mel100 = mel12;
const mel101 = mel7;
const mel102 = mel36;
const mel103 = mel11;
const mel104 = mel6;
const mel105 = mel9;
const mel106 = mel11;
const mel107 = mel6;
//infra-ultrapolation
const mel108 = mel8;
const mel109 = mel10;
const mel110 = mel12;
const mel111 = mel13;

let SlonimskyIndex = 0;


let emptyHist: number[] = new Array(12);
// emptyHist.fill(0); // this is giving me an error
emptyHist = [0,0,0,0,0,0,0,0,0,0,0,0];

function PitchSetToHistogram(melody: number[]) {
  let pitchSet: number[] = melody;
  //console.log(pitchSet)
  for (let pitches of pitchSet) {
    emptyHist[pitches] = 1 }
  let histogram = emptyHist;
  emptyHist = [0,0,0,0,0,0,0,0,0,0,0,0];
  //console.log(histogram);
  return histogram;
}

function OrdinalDataFill(array: Array<string>, prefix: string, length: number) {
  for (let i = 0; i < length; i++) {
    array.push(prefix + (i+1));
  }
  console.log(array)
}
let Slonimsky: Array<string> = [];
OrdinalDataFill(Slonimsky, 'mel', 13);

function AllPitchSetsToHistogram(melodies: string[]) {
  let SlonimskyHistograms: number[][] = [];
   for (let set of melodies) {
     let pitchSet: number[] = eval(set);
     let histogram: number[] = PitchSetToHistogram(pitchSet);
     SlonimskyHistograms.push(histogram);
   }
   console.log(SlonimskyHistograms);
   return SlonimskyHistograms;
 }

const SlonimskyHists: number[][] = AllPitchSetsToHistogram(Slonimsky);
const SloHistsLength: number = AllPitchSetsToHistogram(Slonimsky).length;

let lstmKernel1: tf.Tensor2D;
let lstmBias1: tf.Tensor1D;
let lstmKernel2: tf.Tensor2D;
let lstmBias2: tf.Tensor1D;
let lstmKernel3: tf.Tensor2D;
let lstmBias3: tf.Tensor1D;
let c: tf.Tensor2D[];
let h: tf.Tensor2D[];
let fcB: tf.Tensor1D;
let fcW: tf.Tensor2D;
const forgetBias = tf.scalar(1.0);
const activeNotes = new Map<number, number>();

// How many steps to generate per generateStep call.
// Generating more steps makes it less likely that we'll lag behind in note
// generation. Generating fewer steps makes it less likely that the browser UI
// thread will be starved for cycles.
const STEPS_PER_GENERATE_CALL = 10;
// How much time to try to generate ahead. More time means fewer buffer
// underruns, but also makes the lag from UI change to output larger.
const GENERATION_BUFFER_SECONDS = .5;
// If we're this far behind, reset currentTime time to piano.now().
const MAX_GENERATION_LAG_SECONDS = 1;
// If a note is held longer than this, release it.
const MAX_NOTE_DURATION_SECONDS = 3;

const NOTES_PER_OCTAVE = 12;
const DENSITY_BIN_RANGES = [1.0, 2.0, 4.0, 8.0, 16.0, 32.0, 64.0];
const PITCH_HISTOGRAM_SIZE = NOTES_PER_OCTAVE;

const RESET_RNN_FREQUENCY_MS = 30000;

let pitchHistogramEncoding: tf.Tensor1D;
let noteDensityEncoding: tf.Tensor1D;
let conditioned = true;

let currentPianoTimeSec = 0;
let newMelTimeOut = currentPianoTimeSec;
// When the piano roll starts in browser-time via performance.now().
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

// The unique id of the currently scheduled setTimeout loop.
let currentLoopId = 0;

const EVENT_RANGES = [
  ['note_on', MIN_MIDI_PITCH, MAX_MIDI_PITCH],
  ['note_off', MIN_MIDI_PITCH, MAX_MIDI_PITCH],
  ['time_shift', 1, MAX_SHIFT_STEPS],
  ['velocity_change', 1, VELOCITY_BINS],
];

function calculateEventSize(): number {
  let eventOffset = 0;
  for (const eventRange of EVENT_RANGES) {
    const minValue = eventRange[1] as number;
    const maxValue = eventRange[2] as number;
    eventOffset += maxValue - minValue + 1;
  }
  return eventOffset;
}

const EVENT_SIZE = calculateEventSize();
const PRIMER_IDX = 355;  // shift 1s.
let lastSample = tf.scalar(PRIMER_IDX, 'int32');

const piano = new Piano({velocities: 4}).toMaster();

const SALAMANDER_URL = 'https://storage.googleapis.com/' +
    'download.magenta.tensorflow.org/demos/SalamanderPiano/';
const CHECKPOINT_URL = 'https://storage.googleapis.com/' +
    'download.magenta.tensorflow.org/models/performance_rnn/tfjs';

const isDeviceSupported = tf.ENV.get('WEBGL_VERSION') >= 1;

if (!isDeviceSupported) {
  document.querySelector('#status').innerHTML =
      'We do not yet support your device. Please try on a desktop ' +
      'computer with Chrome/Firefox, or an Android phone with WebGL support.';
} else {
  start();
}

let modelReady = false;

function start() {
  piano.load(SALAMANDER_URL)
      .then(() => {
        return fetch(`${CHECKPOINT_URL}/weights_manifest.json`)
                     .then((response) => response.json())
                     .then(
                         (manifest: tf.WeightsManifestConfig) =>
                             tf.loadWeights(manifest, CHECKPOINT_URL));
      })
      .then((vars: {[varName: string]: tf.Tensor}) => {

        lstmKernel1 =
            vars['rnn/multi_rnn_cell/cell_0/basic_lstm_cell/kernel'] as
            tf.Tensor2D;
        lstmBias1 = vars['rnn/multi_rnn_cell/cell_0/basic_lstm_cell/bias'] as
            tf.Tensor1D;

        lstmKernel2 =
            vars['rnn/multi_rnn_cell/cell_1/basic_lstm_cell/kernel'] as
            tf.Tensor2D;
        lstmBias2 = vars['rnn/multi_rnn_cell/cell_1/basic_lstm_cell/bias'] as
            tf.Tensor1D;

        lstmKernel3 =
            vars['rnn/multi_rnn_cell/cell_2/basic_lstm_cell/kernel'] as
            tf.Tensor2D;
        lstmBias3 = vars['rnn/multi_rnn_cell/cell_2/basic_lstm_cell/bias'] as
            tf.Tensor1D;

        fcB = vars['fully_connected/biases'] as tf.Tensor1D;
        fcW = vars['fully_connected/weights'] as tf.Tensor2D;
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


const densityControl =
    document.getElementById('note-density') as HTMLInputElement;
const densityDisplay = document.getElementById('note-density-display');

const conditioningControlsElem =
    document.getElementById('conditioning-controls') as HTMLDivElement;

const gainSliderElement = document.getElementById('gain') as HTMLInputElement;
const gainDisplayElement =
    document.getElementById('gain-display') as HTMLSpanElement;
let globalGain = +gainSliderElement.value;
gainDisplayElement.innerText = globalGain.toString();
gainSliderElement.addEventListener('input', () => {
  globalGain = +gainSliderElement.value;
  gainDisplayElement.innerText = globalGain.toString();
});

const notes = ['c', 'cs', 'd', 'ds', 'e', 'f', 'fs', 'g', 'gs', 'a', 'as', 'b'];

const pitchHistogramElements = notes.map(
    note => document.getElementById('pitch-' + note) as HTMLInputElement);
const histogramDisplayElements = notes.map(
    note => document.getElementById('hist-' + note) as HTMLDivElement);

let Slonimsky1 = PitchSetToHistogram(mel1);
let Slonimsky2 = PitchSetToHistogram(mel2);
try {
  parseHash();
} catch (e) {
  // If we didn't successfully parse the hash, we can just use defaults.
  console.warn(e);
}

function parseHash() {
  if (!window.location.hash) {
    return;
  }
  const params = window.location.hash.substr(1).split('|');
  densityControl.value = params[0];
  const pitches = params[1].split(',');
  for (let i = 0; i < pitchHistogramElements.length; i++) {
    pitchHistogramElements[i].value = pitches[i];
  }
  const SlonimskyValues = params[2].split(',');
  for (let i = 0; i < Slonimsky1.length; i++) {
    Slonimsky1[i] = parseInt(SlonimskyValues[i], 10);
  }
  const Slonimsky2Values = params[3].split(',');
  for (let i = 0; i < Slonimsky2.length; i++) {
    Slonimsky2[i] = parseInt(Slonimsky2Values[i], 10);
  }
  if (params[4] === 'true') {
    enableConditioning();

  } else if (params[4] === 'false') {
    disableConditioning();
  }
}

function enableConditioning() {
  conditioned = true;

  conditioningControlsElem.classList.remove('inactive');
  conditioningControlsElem.classList.remove('midicondition');

  updateConditioningParams();
}
function disableConditioning() {
  conditioned = false;

  conditioningControlsElem.classList.add('inactive');
  conditioningControlsElem.classList.remove('midicondition');

  updateConditioningParams();
}

function updateConditioningParams() {
  const pitchHistogram = pitchHistogramElements.map(e => {
    return parseInt(e.value, 10) || 0;
  });
  updateDisplayHistogram(pitchHistogram);

  if (noteDensityEncoding != null) {
    noteDensityEncoding.dispose();
    noteDensityEncoding = null;
  }

  window.location.assign(
      '#' + densityControl.value + '|' + pitchHistogram.join(',') + '|' +
      Slonimsky1.join(',') + '|' + Slonimsky2.join(',') + '|' +
      (conditioned ? 'true' : 'false'));

  const noteDensityIdx = parseInt(densityControl.value, 10) || 0;
  const noteDensity = DENSITY_BIN_RANGES[noteDensityIdx];
  densityDisplay.innerHTML = noteDensity.toString();

  noteDensityEncoding =
      tf.oneHot(
          tf.tensor1d([noteDensityIdx + 1], 'int32'),
          DENSITY_BIN_RANGES.length + 1).as1D();

  if (pitchHistogramEncoding != null) {
    pitchHistogramEncoding.dispose();
    pitchHistogramEncoding = null;
  }
  const buffer = tf.buffer<tf.Rank.R1>([PITCH_HISTOGRAM_SIZE], 'float32');
  const pitchHistogramTotal = pitchHistogram.reduce((prev, val) => {
    return prev + val;
  });
  for (let i = 0; i < PITCH_HISTOGRAM_SIZE; i++) {
    buffer.set(pitchHistogram[i] / pitchHistogramTotal, i);
  }
  pitchHistogramEncoding = buffer.toTensor();
}

document.getElementById('note-density').oninput = updateConditioningParams;
pitchHistogramElements.forEach(e => {
  e.oninput = updateConditioningParams;
});
updateConditioningParams();

function updatePitchHistogram(newHist: number[]) {
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
function updateDisplayHistogram(hist: number[]) {
  let sum = 0;
  for (let i = 0; i < hist.length; i++) {
    sum += hist[i];
  }

  for (let i = 0; i < hist.length; i++) {
    histogramDisplayElements[i].style.height =
        (100 * (hist[i] / sum)).toString() + 'px';
  }
}

document.getElementById('newDream').onclick = () => {
  let randomScale = Math.floor(Math.random() * SloHistsLength);
  document.getElementById('fib-scale').innerHTML = Slonimsky[randomScale];
  updatePitchHistogram(SlonimskyHists[randomScale]);
};


document.getElementById('reset-rnn').onclick = () => {
  resetRnn();
};

document.getElementById('Slonimsky1').onclick = () => {
  updatePitchHistogram(Slonimsky1);
};

document.getElementById('Slonimsky2').onclick = () => {
  updatePitchHistogram(Slonimsky2);
};


function getConditioning(): tf.Tensor1D {
  return tf.tidy(() => {
    if (!conditioned) {
      // TODO(nsthorat): figure out why we have to cast these shapes to numbers.
      // The linter is complaining, though VSCode can infer the types.
      const size = 1 + (noteDensityEncoding.shape[0] as number) +
          (pitchHistogramEncoding.shape[0] as number);
      const conditioning: tf.Tensor1D =
          tf.oneHot(tf.tensor1d([0], 'int32'), size).as1D();
      return conditioning;
    } else {
      const axis = 0;
      const conditioningValues =
          noteDensityEncoding.concat(pitchHistogramEncoding, axis);
      return tf.tensor1d([0], 'int32').concat(conditioningValues, axis);
    }
  });
}

async function generateStep(loopId: number) {
  if (loopId < currentLoopId) {
    // Was part of an outdated generateStep() scheduled via setTimeout.
    return;
  }

  const lstm1 = (data: tf.Tensor2D, c: tf.Tensor2D, h: tf.Tensor2D) =>
      tf.basicLSTMCell(forgetBias, lstmKernel1, lstmBias1, data, c, h);
  const lstm2 = (data: tf.Tensor2D, c: tf.Tensor2D, h: tf.Tensor2D) =>
      tf.basicLSTMCell(forgetBias, lstmKernel2, lstmBias2, data, c, h);
  const lstm3 = (data: tf.Tensor2D, c: tf.Tensor2D, h: tf.Tensor2D) =>
      tf.basicLSTMCell(forgetBias, lstmKernel3, lstmBias3, data, c, h);

  let outputs: tf.Scalar[] = [];
  [c, h, outputs] = tf.tidy(() => {
    // Generate some notes.
    const innerOuts: tf.Scalar[] = [];
    for (let i = 0; i < STEPS_PER_GENERATE_CALL; i++) {
      // Use last sampled output as the next input.
      const eventInput = tf.oneHot(
        lastSample.as1D(), EVENT_SIZE).as1D();
      // Dispose the last sample from the previous generate call, since we
      // kept it.
      if (i === 0) {
        lastSample.dispose();
      }
      const conditioning = getConditioning();
      const axis = 0;
      const input = conditioning.concat(eventInput, axis).toFloat();
      const output =
          tf.multiRNNCell([lstm1, lstm2, lstm3], input.as2D(1, -1), c, h);
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
    return [c, h, innerOuts] as [tf.Tensor2D[], tf.Tensor2D[], tf.Scalar[]];
  });

  for (let i = 0; i < outputs.length; i++) {
    playOutput(outputs[i].dataSync()[0]);
  }

  if (piano.now() - currentPianoTimeSec > MAX_GENERATION_LAG_SECONDS) {
    console.warn(
        `Generation is ${piano.now() - currentPianoTimeSec} seconds behind, ` +
        `which is over ${MAX_NOTE_DURATION_SECONDS}. Resetting time!`);
    currentPianoTimeSec = piano.now();
  }
  const delta = Math.max(
      0, currentPianoTimeSec - piano.now() - GENERATION_BUFFER_SECONDS);
  setTimeout(() => generateStep(loopId), delta * 1000);
  if ((piano.now() - newMelTimeOut) > 30) {
    SlonimskyIndex += 1;
    updatePitchHistogram(SlonimskyHists[SlonimskyIndex]);
    console.log(SlonimskyHists[SlonimskyIndex]);
    console.log(newMelTimeOut);
    newMelTimeOut = currentPianoTimeSec;
    console.log(newMelTimeOut);
  }
}

let midi;
// tslint:disable-next-line:no-any
let activeMidiOutputDevice: any = null;

(async () => {
  const midiOutDropdownContainer =
      document.getElementById('midi-out-container');
  try {
    // tslint:disable-next-line:no-any
    const navigator: any = window.navigator;
    midi = await navigator.requestMIDIAccess();

    const midiOutDropdown =
        document.getElementById('midi-out') as HTMLSelectElement;

    let outputDeviceCount = 0;
    // tslint:disable-next-line:no-any
    const midiOutputDevices: any[] = [];
    // tslint:disable-next-line:no-any
    midi.outputs.forEach((output: any) => {
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
})();







/**
 * Decode the output index and play it on the piano.
 */
function playOutput(index: number) {
  let offset = 0;
  for (const eventRange of EVENT_RANGES) {
    const eventType = eventRange[0] as string;
    const minValue = eventRange[1] as number;
    const maxValue = eventRange[2] as number;
    if (offset <= index && index <= offset + maxValue - minValue) {
      if (eventType === 'note_on') {
        const noteNum = index - offset;
        //console.log(noteNum + ',' + currentVelocity);
        newNote = [true, noteNum, currentVelocity];
        activeNotes.set(noteNum, currentPianoTimeSec);

        if (activeMidiOutputDevice != null) {
          try {
            activeMidiOutputDevice.send(
                [
                  MIDI_EVENT_ON, noteNum,
                  Math.min(Math.floor(currentVelocity * globalGain), 127)
                ],
                Math.floor(1000 * currentPianoTimeSec) - pianoStartTimestampMs);
          } catch (e) {
            console.log(
                'Error sending midi note on event to midi output device:');
            console.log(e);
          }
        }

        return piano.keyDown(
            noteNum, currentPianoTimeSec, currentVelocity * globalGain / 100);
      } else if (eventType === 'note_off') {
        const noteNum = index - offset;

        const activeNoteEndTimeSec = activeNotes.get(noteNum);
        // If the note off event is generated for a note that hasn't been
        // pressed, just ignore it.
        if (activeNoteEndTimeSec == null) {
          return;
        }
        const timeSec =
            Math.max(currentPianoTimeSec, activeNoteEndTimeSec + .5);

        if (activeMidiOutputDevice != null) {
          activeMidiOutputDevice.send(
              [
                MIDI_EVENT_OFF, noteNum,
                Math.min(Math.floor(currentVelocity * globalGain), 127)
              ],
              Math.floor(timeSec * 1000) - pianoStartTimestampMs);
        }
        piano.keyUp(noteNum, timeSec);
        activeNotes.delete(noteNum);
        return;
      } else if (eventType === 'time_shift') {
        currentPianoTimeSec += (index - offset + 1) / STEPS_PER_SECOND;
        activeNotes.forEach((timeSec, noteNum) => {
          if (currentPianoTimeSec - timeSec > MAX_NOTE_DURATION_SECONDS) {
            console.info(
                `Note ${noteNum} has been active for ${
                    currentPianoTimeSec - timeSec}, ` +
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
      } else if (eventType === 'velocity_change') {
        currentVelocity = (index - offset + 1) * Math.ceil(127 / VELOCITY_BINS);
        currentVelocity = currentVelocity / 127;
        return currentVelocity;
      } else {
        throw new Error('Could not decode eventType: ' + eventType);
      }
    }
    offset += maxValue - minValue + 1;
  }
  throw new Error(`Could not decode index: ${index}`);
}

// Reset the RNN repeatedly so it doesn't trail off into incoherent musical
// babble.
const resettingText = document.getElementById('resettingText');
function resetRnnRepeatedly() {
  if (modelReady) {
    resetRnn();
    resettingText.style.opacity = '100';
  }

  setTimeout(() => {
    resettingText.style.opacity = '0';
  }, 1000);
  setTimeout(resetRnnRepeatedly, RESET_RNN_FREQUENCY_MS);
}
setTimeout(resetRnnRepeatedly, RESET_RNN_FREQUENCY_MS);

// let pg: p5;

let sketch = function (p: p5) {
  p.setup = function () {
  p.createCanvas(p.windowWidth, p.windowHeight);
  p.frameRate(50);
} // eliminated createGraphic as it was slowing the animation down.
  //Nice effect if the processor can handle it (or if it was coded better).
  p.draw = function () {
    p.fill(0, 12);
    p.rect(0, 0, p.windowWidth, p.windowHeight);
    p.fill(255); //in grayscale 0 = pure black & 255 = pure white;
    p.noStroke();
    if (newNote[0]) {
      let GoldenNote: number = newNote[1] * Math.E;
      p.fill(p.color(newNote[2] * 255, newNote[1], p.random(255)));
      p.ellipse(p.random(1000), p.random(1000), GoldenNote, newNote[1]);
      newNote[0] = false;
    }
  }
  // p.mousePressed = function() {
  //   let randomScale = Math.floor(Math.random() * SloHistsLength);
  //   updatePitchHistogram(SlonimskyHists[randomScale]);
  // }
}

new p5(sketch)
