//interpolation of one note - division of octave into 2 parts
var mel1 = [0, 1, 6, 7];
var mel2 = [0, 2, 6, 8];
var mel3 = [0, 4, 6, 10];
var mel4 = [0, 5, 6, 11];
//interpolation of two notes - division of octave into 2 parts
var mel5 = [0, 1, 2, 6, 7, 9];
var mel6 = [0, 1, 3, 6, 7, 9];
var mel7 = [0, 1, 4, 6, 7, 10];
var mel8 = [0, 1, 5, 6, 7, 11];
var mel9 = [0, 2, 3, 6, 8, 10];
var mel10 = [0, 2, 5, 6, 8, 11];
var mel11 = [0, 3, 4, 6, 9, 10];
var mel12 = [0, 3, 5, 6, 9, 11];
var mel13 = [0, 4, 5, 6, 10, 11];
var emptyHist = new Array(12);
// emptyHist.fill(0); // this is giving me an error
emptyHist = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function PitchSetToHistogram(melody) {
    var pitchSet = melody;
    console.log(pitchSet);
    for (var _i = 0, pitchSet_1 = pitchSet; _i < pitchSet_1.length; _i++) {
        var pitches = pitchSet_1[_i];
        emptyHist[pitches] = 1;
    }
    var histogram = emptyHist;
    emptyHist = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    console.log(histogram);
    return histogram;
}
PitchSetToHistogram(mel1);
// below this isn't useful right now, but maybe at some points
function OrdinalDataFill(array, prefix, length) {
    for (var i = 0; i < length; i++) {
        array.push(prefix + (i + 1));
    }
    console.log(array);
}
var Slonimsky = [];
OrdinalDataFill(Slonimsky, 'mel', 13);
function AllPitchSetsToHistogram(melodies) {
    var SlonimskyHistograms = [];
    for (var _i = 0, melodies_1 = melodies; _i < melodies_1.length; _i++) {
        var set = melodies_1[_i];
        var pitchSet = eval(set);
        var histogram = PitchSetToHistogram(pitchSet);
        SlonimskyHistograms.push(histogram);
    }
    console.log(SlonimskyHistograms);
}
AllPitchSetsToHistogram(Slonimsky);
