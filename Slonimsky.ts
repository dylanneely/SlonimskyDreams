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
const mel112 = mel7;
const mel113 = mel36;
const mel114 = mel11;
const mel115 = mel6;
const mel116 = mel9;
const mel117 = mel5;
//inter-ultrapolation
const mel118 = mel1;
const mel119 = mel5;
const mel120 = mel6;
const mel121 = mel7;
const mel122 = mel8;
const mel123 = mel5;
const mel124 = mel9;
const mel125 = mel36;
const mel126 = mel10;
const mel127 = mel6;
const mel128 = mel9;
const mel129 = mel11;
const mel130 = mel12;
const mel131 = mel7;
const mel132 = mel36;
const mel133 = mel11;
const mel134 = mel3;
const mel135 = mel13;
const mel136 = mel8;
const mel137 = mel10;
const mel138 = mel12;
const mel139 = mel13;
const mel140 = mel4;
//infr-inter-ultrapolation
const mel141 = mel16;
const mel142 = mel10;
const mel143 = mel20;
const mel144 = mel21;
const mel145 = mel17;
const mel146 = mel20;
const mel147 = mel12;
const mel148 = [0, 3, 4, 5, 6, 9, 10, 11];
const mel149 = mel18;
const mel150 = mel21;
const mel151 = mel148;
const mel152 = mel13;
const mel153 = mel8;
const mel154 = mel10;
const mel155 = mel12;
const mel156 = mel13;
const mel157 = mel7;
const mel158 = mel15;
const mel159 = mel72;
const mel160 = mel15;
const mel161 = mel36;
const mel162 = mel19;
const mel163 = mel72;
const mel164 = mel19;
const mel165 = mel11;
const mel166 = mel7;
const mel167 = mel36;
const mel168 = mel11;
const mel169 = mel18;
const mel170 = mel21;
const mel171 = mel148;
const mel172 = mel6;
const mel173 = mel14;
const mel174 = mel14;
const mel175 = mel9;
const mel176 = mel6;
const mel177 = mel9;
const mel178 = mel72;
const mel179 = mel19;
const mel180 = mel20;
//Ditone Progression - Equal Division of One Octave into Three parts
//Interpolation of One Note
const mel181 = [0, 1, 4, 5, 8, 9];
const mel182 = [0, 3, 4, 7, 8, 11];
//Interpolation of Two Notes
const mel183 = [0, 1, 2, 4, 5, 6, 8, 9, 10];
const mel184 = [0, 1, 3, 4, 5, 7, 8, 9, 11];
const mel185 = [0, 2, 3, 4, 6, 7, 8, 10, 11];
//Ultrapolation of One Note
const mel186 = mel181;
const mel187 = mel36;
const mel188 = mel182;
const mel189 = [0, 4, 8];
const mel190 = mel181;
const mel191 = mel36;
const mel192 = mel182;
//Ultrapolation of Two Notes
const mel193 = mel183;
const mel194 = mel184;
const mel195 = mel181;
const mel196 = mel181;
const mel197 = mel183;
const mel198 = mel184;
const mel199 = mel185;
const mel200 = mel36;
const mel201 = mel183;
const mel202 = mel36;
const mel203 = mel185;
const mel204 = mel182;
const mel205 = mel184;
const mel206 = mel185;
const mel207 = mel182;
const mel208 = mel181;
const mel209 = mel36;
const mel210 = mel182;
const mel211 = mel183;
const mel212 = mel184;
const mel213 = mel185;
//Ultrapolation of Three Notes
const mel214 = mel184;
const mel215 = mel184;
const mel216 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const mel217 = mel184;
const mel218 = mel185;
const mel219 = mel185;
const mel220 = mel185;
const mel221 = mel216;
const mel222 = mel183;
const mel223 = mel183;
const mel224 = mel183;
const mel225 = mel36;
const mel226 = mel185;
const mel227 = mel185;
const mel228 = mel185;
const mel229 = mel185;
const mel230 = mel216;
//Infrapolation of one note
const mel231 = mel182;
const mel232 = mel36;
const mel233 = mel181;
const mel234 = mel182;
const mel235 = mel36;
const mel236 = mel181;
//Infrapolation of Two Notes
const mel237 = mel185;
const mel238 = mel184;
const mel239 = mel182;
const mel240 = mel182;
const mel241 = mel185;
const mel242 = mel184;
const mel243 = mel183;
const mel244 = mel36;
const mel245 = mel185;
const mel246 = mel36;
const mel247 = mel183;
const mel248 = mel181;
const mel249 = mel184;
const mel250 = mel183;
const mel251 = mel181;
const mel252 = mel181;
const mel253 = mel182;
const mel254 = mel182;
const mel255 = mel182;
const mel256 = mel185;
const mel257 = mel184;
//Infrapolation of Three Notes
const mel258 = mel216;
const mel259 = mel185;
const mel260 = mel185;
const mel261 = mel185;
const mel262 = mel216;
const mel263 = mel184;
const mel264 = mel184;
const mel265 = mel182;
const mel266 = mel185;
const mel267 = mel185;
const mel268 = mel184;
const mel269 = mel183;
const mel270 = mel216;
const mel271 = mel183;
const mel272 = mel183;
const mel273 = mel185;
const mel274 = mel36;
const mel275 = mel183;
const mel276 = mel185;
const mel277 = mel216;
const mel278 = mel183;
const mel279 = mel184;
const mel280 = mel183;
const mel281 = mel181;
//Infra-Interpolation
const mel282 = mel184;


let emptyHist: number[] = new Array(12);
// emptyHist.fill(0); // this is giving me an error
emptyHist = [0,0,0,0,0,0,0,0,0,0,0,0];


function OrdinalDataFill(array: Array<string>, prefix: string, length: number) {
  for (let i = 0; i < length; i++) {
    array.push(prefix + (i+1));
  }
  console.log(array)
}

function PitchSetToHistogram(melody: number[]) {
  let pitchSet: number[] = melody;
  for (let pitches of pitchSet) {
    emptyHist[pitches] = 1 }
  let histogram = emptyHist;
  emptyHist = [0,0,0,0,0,0,0,0,0,0,0,0];
  return histogram;
}

function AllPitchSetsToHistogram(melodies: string[]) {
  let HistogramArray: number[][] = [];
   for (let set of melodies) {
     let pitchSet: number[] = eval(set);
     let histogram: number[] = PitchSetToHistogram(pitchSet);
     HistogramArray.push(histogram);
   }
   console.log(HistogramArray);
   return HistogramArray;
 }

 function daysIndexDuration(length: number) {
  let time = new Date(Date.now());
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let currentSecondsInDay = (hours * 3600) + (minutes * 60) + seconds;
  let totalSecondsInDay = 86400;
  let duration = totalSecondsInDay / length;
  let index = Math.floor(currentSecondsInDay / duration);
  let indexDuration = [index, duration];
  return indexDuration
}

 let Slonimsky: Array<string> = [];
 OrdinalDataFill(Slonimsky, 'mel', 282);
 const SlonimskyHists = AllPitchSetsToHistogram(Slonimsky);
 const SloHistsLength: number = AllPitchSetsToHistogram(Slonimsky).length;
 export {SlonimskyHists}
 export {daysIndexDuration};
