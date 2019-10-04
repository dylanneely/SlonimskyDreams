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
const mel283 = mel185;
const mel284 = mel182;
const mel285 = mel183;
const mel286 = mel185;
const mel287 = mel181;
const mel288 = mel183;
const mel289 = mel184;
const mel290 = mel181;
const mel291 = mel36;
const mel292 = mel182;
const mel293 = mel184;
const mel294 = mel185;
//Infra-ultrapolation
const mel295 = mel184;
const mel296 = mel185;
const mel297 = mel182;
const mel298 = mel182;
const mel299 = mel184;
const mel300 = mel185;
const mel301 = mel183;
const mel302 = mel36;
const mel303 = mel185;
const mel304 = mel36;
const mel305 = mel183;
const mel306 = mel181;
const mel307 = mel183;
const mel308 = mel184;
const mel309 = mel181;
const mel310 = mel181;
const mel311 = mel36;
const mel312 = mel182;
const mel313 = mel184;
const mel314 = mel185;
const mel315 = mel183;
//Inter-ultrapolation
const mel316 = mel181;
const mel317 = mel183;
const mel318 = mel184;
const mel319 = mel181;
const mel320 = mel181;
const mel321 = mel183;
const mel322 = mel184;
const mel323 = mel183;
const mel324 = mel36;
const mel325 = mel185;
const mel326 = mel36;
const mel327 = mel183;
const mel328 = mel36;
const mel329 = mel185;
const mel330 = mel184;
const mel331 = mel185;
const mel332 = mel182;
const mel333 = mel182;
const mel334 = mel184;
const mel335 = mel185;
const mel336 = mel182;
//Infra-Inter-Ultrapolation
const mel337 = mel185;
const mel338 = mel185;
const mel339 = mel185;
const mel340 = mel216;
const mel341 = mel185;
const mel342 = mel182;
const mel343 = mel182;
const mel344 = mel184;
const mel345 = mel185;
const mel346 = mel183;
const mel347 = mel183;
const mel348 = mel216;
const mel349 = mel183;
const mel350 = mel183;
const mel351 = mel183;
const mel352 = mel36;
const mel353 = mel185;
const mel354 = mel36;
const mel355 = mel183;
const mel356 = mel185;
const mel357 = mel185;
const mel358 = mel185;
const mel359 = mel216;
const mel360 = mel181;
const mel361 = mel183;
const mel362 = mel184;
const mel363 = mel181;
const mel364 = mel181;
const mel365 = mel183;
const mel366 = mel184;
const mel367 = mel36;
const mel368 = mel185;
const mel369 = mel184;
const mel370 = mel216;
const mel371 = mel216;
//Miscellaneous Patterns
const mel372 = mel183;
const mel373 = mel184;
const mel374 = mel185;
const mel375 = mel185;
const mel376 = mel185;
const mel377 = mel183;
const mel378 = mel184;
const mel379 = mel185;
const mel380 = mel185;
const mel381 = mel185;
const mel382 = mel183;
const mel383 = mel184;
const mel384 = mel184;
const mel385 = mel185;
const mel386 = mel185;
const mel387 = mel183;
const mel388 = mel216;
const mel389 = mel216;
const mel390 = mel216;
const mel391 = mel216;
//Sesquitone Progression - Equal Division of One Octave into Four Parts
//Interpolation of one note
const mel392 = mel72;
const mel393 = mel20;
const mel394 = mel72;
const mel395 = mel20;
const mel396 = mel72;
const mel397 = mel20;
const mel398 = mel72;
const mel399 = mel20;
const mel400 = mel72;
const mel401 = mel20;
//Ultrapolation of Two Notes
const mel402 = mel216;
const mel403 = mel72;
const mel404 = mel72;
const mel405 = mel216;
const mel406 = mel72;
const mel407 = mel216;
const mel408 = mel20;
const mel409 = mel20;
const mel410 = mel216;
const mel411 = mel72;
const mel412 = mel20;
const mel413 = mel72;
const mel414 = mel20;
const mel415 = mel216;
const mel416 = mel72;
const mel417 = mel216;
const mel418 = mel20;
const mel419 = mel20;
const mel420 = mel216;
//Ultrapolation of Three Notes
const mel421 = mel216;
const mel422 = mel216;
const mel423 = mel216;
const mel424 = mel72;
const mel425 = mel72;
const mel426 = mel216;
const mel427 = mel216;
const mel428 = mel20;
const mel429 = mel216;
const mel430 = mel216;
const mel431 = mel216;
const mel432 = mel216;
const mel433 = mel216;
const mel434 = mel216;
const mel435 = mel20;
const mel436 = mel216;
const mel437 = mel20;
const mel438 = mel20;
const mel439 = mel216;
const mel440 = mel216;
const mel441 = mel20;
const mel442 = mel20;
const mel443 = mel72;
const mel444 = mel72;
const mel445 = mel216;
const mel446 = mel20;
//Infrapolation of One Note
const mel447 = mel20;
const mel448 = mel72;
const mel449 = mel20;
const mel450 = mel72;
const mel451 = mel20;
const mel452 = mel72;
//Infrapolation of Two Notes
const mel453 = mel216;
const mel454 = mel20;
const mel455 = mel20;
const mel456 = mel216;
const mel457 = mel20;
const mel458 = mel72;
const mel459 = mel216;
const mel460 = mel72;
const mel461 = mel72;
const mel462 = mel20;
const mel463 = mel72;
const mel464 = mel20;
const mel465 = mel72;
const mel466 = mel216;
const mel467 = mel20;
const mel468 = mel20;
const mel469 = mel216;
const mel470 = mel20;
const mel471 = mel72;
const mel472 = mel72;
//Infrapolation of Three Notes
const mel473 = mel216;
const mel474 = mel216;
const mel475 = mel20;
const mel476 = mel216;
const mel477 = mel216;
const mel478 = mel216;
const mel479 = mel72;
const mel480 = mel216;
const mel481 = mel216;
//Infra-Interpolation
const mel482 = mel216;
const mel483 = mel20;
const mel484 = mel72;
const mel485 = mel216;
const mel486 = mel72;
const mel487 = mel20;
const mel488 = mel216;
const mel489 = mel20;
const mel490 = mel72;
const mel491 = mel216;
//Inter-Ultrapolation
const mel492 = mel72;
const mel493 = mel216;
const mel494 = mel72;
const mel495 = mel72;
const mel496 = mel216;
const mel497 = mel20;
const mel498 = mel20;
const mel499 = mel216;
//Infra-Ultrapolation
const mel500 = mel216;
const mel501 = mel20;
const mel502 = mel20;
const mel503 = mel216;
const mel504 = mel72;
const mel505 = mel216;
const mel506 = mel72;
const mel507 = mel72;
const mel508 = mel216;
const mel509 = mel72;
const mel510 = mel20;
const mel511 = mel72;
const mel512 = mel216;
const mel513 = mel20;
const mel514 = mel20;
const mel515 = mel216;
//Infra-Inter-Ultrapolation
const mel516 = mel216;
const mel517 = mel216;
const mel518 = mel216;
const mel519 = mel216;
const mel520 = mel20;
const mel521 = mel20;
const mel522 = mel216;
const mel523 = mel72;
const mel524 = mel216;
const mel525 = mel72;
const mel526 = mel72;
const mel527 = mel216;
const mel528 = mel72;
const mel529 = mel216;
const mel530 = mel216;
const mel531 = mel216;
const mel532 = mel216;
const mel533 = mel216;
const mel534 = mel72;
const mel535 = mel216;
const mel536 = mel72;
const mel537 = mel72;
const mel538 = mel216;
const mel539 = mel20;
const mel540 = mel20;
const mel541 = mel216;
const mel542 = mel20;
//Miscellaneous Patterns
const mel543 = mel72;
const mel544 = mel20;
const mel545 = mel216;
const mel546 = mel20;
const mel547 = mel20;
const mel548 = mel72;
const mel549 = mel216;
const mel550 = mel20;
const mel551 = mel20;
const mel552 = mel20;
const mel553 = mel72;
const mel554 = mel72;
const mel555 = mel20;
const mel556 = mel20;
const mel557 = mel20;
const mel558 = mel20;
const mel559 = mel72;
const mel560 = mel20;
const mel561 = mel20;
const mel562 = mel20;
const mel563 = mel20;
const mel564 = mel20;
const mel565 = mel216;
const mel566 = mel72;
const mel567 = mel216;
const mel568 = mel216;
//Whole-Tone Progression
//Equal Division of One Octave into Six Parts
const mel569 = mel36;
//Ultrapolation of One Note
const mel570 = mel216;
const mel571 = mel36;
const mel572 = mel216;
const mel573 = mel36;
const mel574 = mel216;
const mel575 = mel36;
const mel576 = mel216;
const mel577 = mel36;
const mel578 = mel216;
//Infrapolation of One Note
const mel579 = mel216;
const mel580 = mel36;
const mel581 = mel216;
const mel582 = mel36;
const mel583 = mel216;
const mel584 = mel36;
const mel585 = mel216;
const mel586 = mel36;
const mel587 = mel216;
//Infra-Interpolation
const mel588 = mel216;
const mel589 = mel216;
const mel590 = mel216;
const mel591 = mel216;
const mel592 = mel216;
const mel593 = mel216;
const mel594 = mel216;
const mel595 = mel216;
const mel596 = mel216;
//Infra-Ultrapolation
const mel597 = mel216;
const mel598 = mel216;
const mel599 = mel216;
const mel600 = mel216;
const mel601 = mel36;
const mel602 = mel216;
const mel603 = mel216;
const mel604 = mel216;
const mel605 = mel216;
const mel606 = mel216;
const mel607 = mel36;
const mel608 = mel216;
const mel609 = mel216;
const mel610 = mel216;
const mel611 = mel216;
const mel612 = mel216;
const mel613 = mel36;
const mel614 = mel216;
//Inter-Ultrapolation
const mel615 = mel216;
const mel616 = mel216;
const mel617 = mel216;
const mel618 = mel216;
const mel619 = mel216;
const mel620 = mel216;
const mel621 = mel216;
const mel622 = mel216;
const mel623 = mel216;
//Infra-Inter-Ultrapolation
const mel624 = mel216;
const mel625 = mel216;
const mel626 = mel216;
const mel627 = mel216;
const mel628 = mel216;
const mel629 = mel216;
const mel630 = mel216;
const mel631 = mel216;
const mel632 = mel216;
const mel633 = mel216;
const mel634 = mel216;
const mel635 = mel216;
const mel636 = mel216;
//Semitone Progression
//Equal Division of One Octave into Twelve parts
const mel637 = mel216;
const mel638 = mel216;
const mel639 = mel216;
const mel640 = mel216;
const mel641 = mel216;
const mel642 = mel216;
const mel643 = mel216;
const mel644 = mel216;
const mel645 = mel216;
const mel646 = mel216;
const mel647 = mel216;
const mel648 = mel216;
const mel649 = mel216;
const mel650 = mel216;
const mel651 = mel216;
const mel652 = mel216;
const mel653 = mel216;
const mel654 = mel216;
const mel655 = mel216;
const mel656 = mel216;
const mel657 = mel216;
//Quadritone Progression
//Equal Division of Two Octaves into Three Parts
const mel658 = mel181;




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
