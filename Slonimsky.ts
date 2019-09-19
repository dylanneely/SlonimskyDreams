//interpolation of one note - division of octave into 2 parts
const mel1 = [0, 1, 6, 7];
const mel2 = [0, 2, 6, 8];
const mel3 = [0, 4, 6, 10];
const mel4 = [0, 5, 6, 11];
//interpolation of two notes - division of octave into 2 parts
const mel5 = [0, 1, 2, 6, 7, 9];
const mel6 = [0, 1, 3, 6, 7, 9];
const mel7 = [0, 1, 4, 6, 7, 10];
const mel8 = [0, 1, 5, 6, 7, 11];
const mel9 = [0, 2, 3, 6, 8, 10];
const mel10 = [0, 2, 5, 6, 8, 11];
const mel11 = [0, 3, 4, 6, 9, 10];
const mel12 = [0, 3, 5, 6, 9, 11];
const mel13 = [0, 4, 5, 6, 10, 11];


let emptyHist: number[] = new Array(12);
// emptyHist.fill(0); // this is giving me an error
emptyHist = [0,0,0,0,0,0,0,0,0,0,0,0];

function PitchSetToHistogram(melody: number[]) {
  let pitchSet: number[] = melody;
  console.log(pitchSet)
  for (let pitches of pitchSet) {
    emptyHist[pitches] = 1 }
  let histogram = emptyHist;
  emptyHist = [0,0,0,0,0,0,0,0,0,0,0,0];
  console.log(histogram);
  return histogram;
}

PitchSetToHistogram(mel1);

// below this isn't useful right now, but maybe at some points

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

AllPitchSetsToHistogram(Slonimsky);
