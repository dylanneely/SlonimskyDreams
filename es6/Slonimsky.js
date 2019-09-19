"use strict";
const mel1 = [0, 1, 6, 7];
const mel2 = [0, 2, 6, 8];
const mel3 = [0, 4, 6, 10];
const mel4 = [0, 5, 6, 11];
const mel5 = [0, 1, 2, 6, 7, 9];
const mel6 = [0, 1, 3, 6, 7, 9];
const mel7 = [0, 1, 4, 6, 7, 10];
const mel8 = [0, 1, 5, 6, 7, 11];
const mel9 = [0, 2, 3, 6, 8, 10];
const mel10 = [0, 2, 5, 6, 8, 11];
const mel11 = [0, 3, 4, 6, 9, 10];
const mel12 = [0, 3, 5, 6, 9, 11];
const mel13 = [0, 4, 5, 6, 10, 11];
let emptyHist = new Array(12);
emptyHist = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function PitchSetToHistogram(melody) {
    let pitchSet = melody;
    console.log(pitchSet);
    for (let pitches of pitchSet) {
        emptyHist[pitches] = 1;
    }
    let histogram = emptyHist;
    emptyHist = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    console.log(histogram);
    return histogram;
}
PitchSetToHistogram(mel1);
function OrdinalDataFill(array, prefix, length) {
    for (let i = 0; i < length; i++) {
        array.push(prefix + (i + 1));
    }
    console.log(array);
}
let Slonimsky = [];
OrdinalDataFill(Slonimsky, 'mel', 13);
function AllPitchSetsToHistogram(melodies) {
    let SlonimskyHistograms = [];
    for (let set of melodies) {
        let pitchSet = eval(set);
        let histogram = PitchSetToHistogram(pitchSet);
        SlonimskyHistograms.push(histogram);
    }
    console.log(SlonimskyHistograms);
    return SlonimskyHistograms;
}
AllPitchSetsToHistogram(Slonimsky);
