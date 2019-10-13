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
const mel659 = mel36;
const mel660 = mel182;
const mel661 = mel181;
const mel662 = mel36;
const mel663 = mel182;
//Interpolation of Two Notes
const mel664 = mel184;
const mel665 = mel181;
const mel666 = mel181;
const mel667 = mel183;
const mel668 = mel184;
const mel669 = mel185;
const mel670 = mel36;
const mel671 = mel183;
const mel672 = mel36;
const mel673 = mel185;
const mel674 = mel182;
const mel675 = mel184;
const mel676 = mel185;
const mel677 = mel182;
const mel678 = mel181;
const mel679 = mel36;
const mel680 = mel182;
const mel681 = mel183;
const mel682 = mel184;
//Interpolation of Three Notes
const mel683 = mel184;
const mel684 = mel184;
const mel685 = mel216;
const mel686 = mel184;
const mel687 = mel183;
const mel688 = mel184;
const mel689 = mel183;
const mel690 = mel184;
const mel691 = mel185;
const mel692 = mel216;
const mel693 = mel185;
const mel694 = mel185;
const mel695 = mel183;
const mel696 = mel185;
const mel697 = mel183;
const mel698 = mel216;
const mel699 = mel185;
//Interpolation of Four Notes
const mel700 = mel184;
const mel701 = mel184;
const mel702 = mel216;
const mel703 = mel184;
const mel704 = mel216;
const mel705 = mel216;
const mel706 = mel185;
const mel707 = mel216;
const mel708 = mel185;
const mel709 = mel216;
const mel710 = mel185;
const mel711 = mel216;
//Ultrapolation of One Note
const mel712 = mel181;
const mel713 = mel36;
const mel714 = mel182;
const mel715 = mel181;
const mel716 = mel36;
const mel717 = mel182;
//Infrapolation of One Note
const mel718 = mel182;
const mel719 = mel36;
const mel720 = mel181;
const mel721 = mel182;
const mel722 = mel36;
const mel723 = mel181;
//Inter-Infrapolation
const mel724 = mel182;
const mel725 = mel185;
const mel726 = mel181;
const mel727 = mel181;
//Ultra-Interpolation
const mel728 = mel181;
const mel729 = mel181;
const mel730 = mel183;
const mel731 = mel184;
const mel732 = mel181;
//Inter-Infra-Ultrapolation
const mel733 = mel184;
const mel734 = mel216;
const mel735 = mel216;
const mel736 = mel216;
//Sesquiquadritone Progression
//Equal Division of Three Octaves into Four Parts
const mel737 = mel72;
const mel738 = mel20;
const mel739 = mel29;
const mel740 = mel72;
const mel741 = mel20;
const mel742 = mel29;
const mel743 = mel72;
const mel744 = mel20;
//Interpolation of Two Notes
const mel745 = mel72;
const mel746 = mel216;
const mel747 = mel72;
const mel748 = mel20;
const mel749 = mel216;
const mel750 = mel20;
const mel751 = mel72;
const mel752 = mel72;
const mel753 = mel216;
const mel754 = mel216;
//Interpolation of Three Notes
const mel755 = mel72;
const mel756 = mel20;
const mel757 = mel216;
const mel758 = mel216;
const mel759 = mel216;
const mel760 = mel216;
const mel761 = mel72;
const mel762 = mel216;
const mel763 = mel216;
const mel764 = mel20;
const mel765 = mel20;
const mel766 = mel216;
const mel767 = mel216;
const mel768 = mel216;
const mel769 = mel216;
const mel770 = mel216;
const mel771 = mel20;
//Interpolation of Four Notes
const mel772 = mel72;
const mel773 = mel216;
const mel774 = mel72;
const mel775 = mel216;
const mel776 = mel72;
const mel777 = mel216;
const mel778 = mel216;
const mel779 = mel216;
const mel780 = mel216;
const mel781 = mel216;
const mel782 = mel216;
const mel783 = mel216;
//Ultrapolation of One Note
const mel784 = mel72;
const mel785 = mel20;
const mel786 = [0, 1, 3, 4, 6, 7, 9, 10, 11];
const mel787 = mel20;
const mel788 = mel72;
//Infraolation of One Note
const mel789 = mel20;
const mel790 = mel72;
const mel791 = mel20;
const mel792 = mel72;
//Infra-Ultrapolation
const mel793 = mel216;
const mel794 = mel216;
const mel795 = mel216;
//Inter-Infrapolation
const mel796 = mel216;
const mel797 = mel72;
const mel798 = mel20;
const mel799 = mel216;
//Inter-Infra-Interpolation
const mel800 = mel72;
const mel801 = mel216;
const mel802 = mel72;
const mel803 = mel20;
//Ultra-Infra-Interpolation
const mel804 = mel216;
//Inter-Ultrapolation
const mel805 = mel72;
//Quinquetone Progression
//Equal Division of Five Octaves into Six parts
//Interpolation of Two Notes
const mel806 = mel216;
const mel807 = mel216;
const mel808 = mel216;
const mel809 = mel36;
const mel810 = mel216;
const mel811 = mel216;
const mel812 = mel216;
//Interpolation of Three Notes
const mel813 = mel216;
const mel814 = mel216;
const mel815 = mel216;
const mel816 = mel216;
const mel817 = mel216;
const mel818 = mel216;
const mel819 = mel216;
const mel820 = mel216;
const mel821 = mel216;
//Ultrapolation of One Note
const mel822 = mel216;
const mel823 = mel216;
//Infrapolation of One Note
const mel824 = mel216;
const mel825 = mel216;
//Diatessaron Progression
//Equal Division of Five Octaves into Twelve Parts
//Interpolation of One Note
const mel826 = mel216;
const mel827 = mel216;
const mel828 = mel216;
const mel829 = mel216;
//Interpolation of Two Notes
const mel830 = mel216;
const mel831 = mel216;
const mel832 = mel216;
const mel833 = mel216;
const mel834 = mel216;
const mel835 = mel216;
const mel836 = mel216;
const mel837 = mel216;
//Ultrapolation of One Note
const mel838 = mel216;
const mel839 = mel216;
const mel840 = mel216;
const mel841 = mel216;
const mel842 = mel216;
const mel843 = mel216;
//Ultrapolation of Two Notes
const mel844 = mel216;
const mel845 = mel216;
const mel846 = mel216;
const mel847 = mel216;
const mel848 = mel216;
const mel849 = mel216;
const mel850 = mel216;
const mel851 = mel216;
//Ultrapolation of Three Notes
const mel852 = mel216;
const mel853 = mel216;
const mel854 = mel216;
const mel855 = mel216;
const mel856 = mel216;
const mel857 = mel216;
const mel858 = mel216;
const mel859 = mel216;
const mel860 = mel216;
const mel861 = mel216;
const mel862 = mel216;
const mel863 = mel216;
const mel864 = mel216;
const mel865 = mel216;
const mel866 = mel216;
const mel867 = mel216;
const mel868 = mel216;
const mel869 = mel216;
const mel870 = mel216;
//Infrapolation of One Note
const mel871 = mel216;
const mel872 = mel216;
const mel873 = mel216;
const mel874 = mel216;
const mel875 = mel216;
//Infrapolation of Two Notes
const mel876 = mel216;
const mel877 = mel216;
const mel878 = mel216;
const mel879 = mel216;
const mel880 = mel216;
//Infrapolation of Three Notes
const mel881 = mel216;
const mel882 = mel216;
const mel883 = mel216;
const mel884 = mel216;
const mel885 = mel216;
const mel886 = mel216;
const mel887 = mel216;
const mel888 = mel216;
const mel889 = mel216;
//Infra-Interpolation
const mel890 = mel216;
const mel891 = mel216;
const mel892 = mel216;
const mel893 = mel216;
const mel894 = mel216;
const mel895 = mel216;
const mel896 = mel216;
const mel897 = mel216;
const mel898 = mel216;
//Infra-Ultrapolation
const mel899 = mel216;
const mel900 = mel216;
const mel901 = mel216;
//Inter-Ultrapolation
const mel902 = mel216;
const mel903 = mel216;
//Infra-Inter-Ultrapolation
const mel904 = mel216;
const mel905 = mel216;
const mel906 = mel216;
const mel907 = mel216;
const mel908 = mel216;
const mel909 = mel216;
const mel910 = mel216;
const mel911 = mel216;
const mel912 = mel216;
//Miscellaneous Patterns
const mel913 = mel216;
const mel914 = mel216;
const mel915 = mel216;
const mel916 = mel216;
const mel917 = mel216;
const mel918 = mel216;
const mel919 = mel216;
const mel920 = mel216;
//Septitone Progression
//Equal Division of Seven Octaves into Six Parts
//Interpolation of Two Notes
const mel921 = mel216;
const mel922 = mel216;
//Interpolation of Three Notes
const mel923 = mel216;
const mel924 = mel216;
const mel925 = mel216;
//Diapente Progression
//Equal Division of Seven Octaves into Twelve Parts
//Interpolation of One Note
const mel926 = mel216;
const mel927 = mel216;
const mel928 = mel216;
const mel929 = mel216;
const mel930 = mel216;
const mel931 = mel216;
//Interpolation of Two Notes
const mel932 = mel216;
const mel933 = mel216;
const mel934 = mel216;
const mel935 = mel216;
const mel936 = mel216;
const mel937 = mel216;
const mel938 = mel216;
const mel939 = mel216;
const mel940 = mel216;
const mel941 = mel216;
const mel942 = mel216;
const mel943 = mel216;
const mel944 = mel216;
const mel945 = mel216;
//Interpolation of Three Notes
const mel946 = mel216;
const mel947 = mel216;
const mel948 = mel216;
const mel949 = mel216;
const mel950 = mel216;
const mel951 = mel216;
const mel952 = mel216;
const mel953 = mel216;
const mel954 = mel216;
const mel955 = mel216;
const mel956 = mel216;
const mel957 = mel216;
const mel958 = mel216;
const mel959 = mel216;
const mel960 = mel216;
const mel961 = mel216;
const mel962 = mel216;
const mel963 = mel216;
const mel964 = mel216;
//Ultrapolation of One Note
const mel965 = mel216;
const mel966 = mel216;
const mel967 = mel216;
const mel968 = mel216;
const mel969 = mel216;
//Ultrapolation of Two Notes
const mel970 = mel216;
const mel971 = mel216;
const mel972 = mel216;
const mel973 = mel216;
const mel974 = mel216;
const mel975 = mel216;
//Infrapolation of One Note
const mel976 = mel216;
const mel977 = mel216;
const mel978 = mel216;
const mel979 = mel216;
//Infrapolation of Two Notes
const mel980 = mel216;
const mel981 = mel216;
const mel982 = mel216;
const mel983 = mel216;
const mel984 = mel216;
const mel985 = mel216;
const mel986 = mel216;
//Infra-Interpolation
const mel987 = mel216;
const mel988 = mel216;
const mel989 = mel216;
const mel990 = mel216;
const mel991 = mel216;
const mel992 = mel216;
const mel993 = mel216;
const mel994 = mel216;
const mel995 = mel216;
const mel996 = mel216;
const mel997 = mel216;
//Infra-Ultrapolation
const mel998 = mel216;
const mel999 = mel216;
const mel1000 = mel216;
const mel1001 = mel216;
const mel1002 = mel216;
const mel1003 = mel216;
//Inter-Ultrapolation
const mel1004 = mel216;
const mel1005 = mel216;
const mel1006 = mel216;
const mel1007 = mel216;
const mel1008 = mel216;
const mel1009 = mel216;
const mel1010 = mel216;
const mel1011 = mel216;
const mel1012 = mel216;
const mel1013 = mel216;
const mel1014 = mel216;
const mel1015 = mel216;
//Infra-Inter-Ultrapolation
const mel1016 = mel216;
const mel1017 = mel216;
const mel1018 = mel216;
const mel1019 = mel216;
const mel1020 = mel216;
const mel1021 = mel216;
const mel1022 = mel216;
const mel1023 = mel216;
const mel1024 = mel216;
const mel1025 = mel216;
//Sesquiquinquetone Progression
//Equal Division of Eleven Octaves into Twelve Parts
//Interpolation of One Note
const mel1026 = mel216;
const mel1027 = mel216;
//Interpolation of Two Notes
const mel1028 = mel216;
const mel1029 = mel216;
const mel1030 = mel216;
const mel1031 = mel216;
const mel1032 = mel216;
const mel1033 = mel216;
//Heptatonic Scales
const mel1034 = [0, 1, 3, 4, 6, 8, 10];
const mel1035 = [0, 1, 3, 5, 6, 8, 10];
const mel1036 = [0, 1, 3, 5, 7, 8, 10];
const mel1037 = [0, 1, 3, 5, 7, 9, 10];
const mel1038 = [0, 1, 3, 5, 7, 9, 11];
const mel1039 = [0, 2, 3, 5, 6, 8, 10];
const mel1040 = [0, 2, 3, 5, 7, 8, 10];
const mel1041 = [0, 2, 3, 5, 7, 9, 10];
const mel1042 = [0, 2, 3, 5, 7, 9, 11];
const mel1043 = [0, 2, 4, 5, 7, 8, 10];
const mel1044 = [0, 2, 4, 5, 7, 9, 10];
const mel1045 = [0, 2, 4, 5, 7, 9, 11];
const mel1046 = [0, 2, 4, 6, 7, 9, 10];
const mel1047 = [0, 2, 4, 6, 7, 9, 11];
const mel1048 = [0, 2, 4, 6, 8, 9, 11];
const mel1049 = [0, 2, 4, 6, 8, 10, 11];
//Heptatonic Scales with Augmented Second
const mel1050 = [0, 3, 4, 5, 7, 8, 10];
const mel1051 = [0, 3, 4, 5, 7, 9, 10];
const mel1052 = [0, 3, 4, 5, 7, 9, 11];
const mel1053 = [0, 1, 4, 5, 7, 8, 10];
const mel1054 = [0, 1, 4, 5, 7, 9, 10];
const mel1055 = [0, 1, 4, 5, 7, 9, 11];
const mel1056 = [0, 1, 4, 6, 7, 8, 10];
const mel1057 = [0, 1, 4, 6, 7, 9, 10];
const mel1058 = [0, 1, 4, 6, 7, 9, 11];
const mel1059 = [0, 1, 4, 6, 8, 10, 11];
const mel1060 = [0, 1, 3, 6, 7, 8, 10];
const mel1061 = [0, 1, 3, 6, 7, 9, 10];
const mel1062 = [0, 1, 3, 6, 7, 9, 11];
const mel1063 = [0, 2, 3, 6, 7, 8, 10];
const mel1064 = [0, 2, 3, 6, 7, 9, 10];
const mel1065 = [0, 2, 3, 6, 7, 9, 11];
const mel1066 = [0, 1, 3, 4, 7, 8, 10];
const mel1067 = [0, 1, 3, 4, 7, 9, 10];
const mel1068 = [0, 1, 3, 4, 7, 9, 11];
const mel1069 = [0, 1, 3, 4, 6, 9, 10];
const mel1070 = [0, 1, 3, 5, 6, 9, 10];
const mel1071 = [0, 1, 3, 5, 6, 9, 11];
const mel1072 = [0, 2, 3, 5, 6, 9, 10];
const mel1073 = [0, 2, 4, 5, 6, 9, 10];
const mel1074 = [0, 2, 4, 5, 6, 9, 11];
const mel1075 = [0, 1, 3, 4, 6, 8, 11];
const mel1076 = [0, 1, 3, 5, 6, 8, 11];
const mel1077 = [0, 2, 3, 5, 6, 8, 11];
const mel1078 = [0, 2, 3, 5, 7, 8, 11];
const mel1079 = [0, 2, 4, 5, 7, 8, 11];
//Heptatonic Scales with Two Augmented Seconds
const mel1080 = [0, 1, 4, 5, 8, 9, 10];
const mel1081 = [0, 1, 4, 5, 8, 9, 11];
const mel1082 = [0, 1, 4, 5, 7, 8, 11];
const mel1083 = [0, 1, 4, 6, 7, 8, 11];
const mel1084 = [0, 1, 3, 6, 7, 8, 11];
const mel1085 = [0, 2, 3, 6, 7, 8, 11];
const mel1086 = [0, 1, 3, 4, 7, 8, 11];
const mel1087 = [0, 2, 3, 4, 7, 8, 11];
//Heptatonic Arpeggios
const mel1088 = mel1034;
const mel1089 = mel1035;
const mel1090 = mel1036;
const mel1091 = mel1037;
const mel1092 = mel1038;
const mel1093 = mel1039;
const mel1094 = mel1040;
const mel1095 = mel1041;
const mel1096 = mel1042;
const mel1097 = mel1043;
const mel1098 = mel1044;
const mel1099 = mel1045;
const mel1100 = mel1046;
const mel1101 = mel1047;
const mel1102 = mel1048;
const mel1103 = mel1049;
const mel1104 = mel1050;
const mel1105 = mel1051;
const mel1106 = mel1052;
const mel1107 = mel1053;
const mel1108 = mel1054;
const mel1110 = mel1056;
const mel1111 = mel1057;
const mel1112 = mel1058;
const mel1113 = mel1059;
const mel1114 = mel1060;
const mel1115 = mel1061;
const mel1116 = mel1062;
const mel1117 = mel1063;
const mel1118 = mel1064;
const mel1119 = mel1065;
const mel1120 = mel1066;
const mel1121 = mel1067;
const mel1122 = mel1068;
const mel1123 = mel1069;
const mel1124 = mel1070;
const mel1125 = mel1071;
const mel1126 = mel1072;
const mel1127 = mel1073;
const mel1128 = mel1074;
const mel1129 = mel1075;
const mel1130 = mel1076;
const mel1131 = mel1077;
const mel1132 = mel1078;
const mel1133 = mel1079;
const mel1134 = mel1080;
const mel1135 = mel1081;
const mel1136 = mel1082;
const mel1137 = mel1083;
const mel1138 = mel1084;
const mel1139 = mel1085;
const mel1140 = mel1086;
const mel1141 = mel1087;
//Pentatonic Scales
const mel1142 = [0, 1, 3, 5, 8];
const mel1143 = [0, 1, 3, 5, 9];
const mel1144 = [0, 1, 3, 7, 8];
const mel1145 = [0, 1, 4, 5, 8];
const mel1146 = [0, 1, 4, 5, 9];
const mel1147 = [0, 1, 4, 6, 8];
const mel1148 = [0, 1, 4, 6, 9];
const mel1149 = [0, 1, 4, 7, 8];
const mel1150 = [0, 1, 4, 7, 9];
const mel1151 = [0, 1, 4, 7, 10];
const mel1152 = [0, 1, 5, 6, 9];
const mel1153 = [0, 1, 5, 6, 10];
const mel1154 = [0, 1, 5, 7, 8];
const mel1155 = [0, 1, 5, 7, 10];
const mel1156 = [0, 1, 5, 7, 11];
const mel1157 = [0, 2, 3, 7, 8];
const mel1158 = [0, 2, 3, 7, 9];
const mel1159 = [0, 2, 3, 7, 10];
const mel1160 = [0, 2, 4, 5, 8];
const mel1161 = [0, 2, 4, 7, 8];
const mel1162 = [0, 2, 4, 7, 9];
const mel1163 = [0, 2, 4, 8, 11];
const mel1164 = [0, 2, 5, 7, 8];
const mel1165 = [0, 2, 5, 7, 9];
const mel1166 = [0, 2, 5, 8, 10];
const mel1167 = [0, 2, 5, 9, 10];
const mel1168 = [0, 2, 5, 8, 11];
const mel1169 = [0, 2, 6, 7, 9];
const mel1170 = [0, 2, 6, 8, 11];
const mel1171 = [0, 2, 6, 9, 10];
const mel1172 = [0, 2, 6, 9, 11];
const mel1173 = [0, 3, 5, 7, 8];
const mel1174 = [0, 3, 5, 7, 9];
const mel1175 = [0, 3, 5, 7, 10];
const mel1176 = [0, 3, 5, 7, 11];
const mel1177 = [0, 3, 5, 8, 10];
const mel1178 = [0, 3, 5, 9, 11];
const mel1179 = [0, 3, 7, 8, 10];
const mel1180 = [0, 3, 7, 9, 10];
const mel1181 = [0, 4, 5, 7, 8];
const mel1182 = [0, 4, 5, 7, 9];
const mel1183 = [0, 4, 5, 8, 10];
const mel1184 = [0, 4, 5, 8, 11];
const mel1185 = [0, 4, 5, 9, 10];
const mel1186 = [0, 4, 5, 9, 11];
const mel1187 = [0, 4, 6, 7, 9];
const mel1188 = [0, 4, 6, 9, 10];
const mel1189 = [0, 4, 7, 9, 10];
const mel1190 = [0, 4, 7, 9, 11];
//Bitonal Arpeggios
const mel1191 = [0, 3, 4, 7];
const mel1192 = [0, 1, 4, 5, 7, 8];
const mel1193 = mel1149;
const mel1194 = [0, 2, 4, 6, 7, 9];
const mel1195 = [0, 2, 4, 5, 7, 9];
const mel1196 = [0, 3, 4, 7, 10];
const mel1197 = [0, 3, 4, 6, 7, 10];
const mel1198 = [0, 4, 7, 8, 11];
const mel1199 = [0, 4, 7, 11];
const mel1200 = mel1182;
const mel1201 = mel1181;
const mel1202 = mel7;
const mel1203 = [0, 1, 4, 6, 7, 9];
const mel1204 = [0, 2, 4, 7, 11];
const mel1205 = [0, 2, 4, 7, 10];
const mel1206 = [0, 3, 4, 7, 8];
const mel1207 = mel182;
const mel1208 = mel1150;
const mel1209 = [0, 4, 7, 9];
const mel1210 = [0, 2, 4, 5, 7, 10];
const mel1211 = [0, 1, 4, 5, 7, 10];
const mel1212 = [0, 3, 4, 6, 7, 11];
const mel1213 = [0, 2, 4, 6, 7, 11];
//Twelve Tone Patterns
//Dodecaphonic
const mel1214 = mel216;
const mel1215 = mel216;
const mel1216 = mel216;
const mel1217 = mel216;
const mel1218 = mel216;
const mel1219 = mel216;
const mel1220 = mel216;
const mel1221 = mel216;
const mel1222 = mel216;
const mel1223 = mel216;
const mel1224 = mel216;
const mel1225 = mel216;
const mel1226 = mel216;
const mel1227 = mel216;
const mel1228 = mel216;
const mel1229 = mel216;
const mel1230 = mel216;
const mel1231 = mel216;
//Twelve-Tone Spirals
const mel1232 = mel216;
const mel1233 = mel216;
const mel1234 = mel216;
const mel1235 = mel216;
const mel1236 = mel216;
const mel1237 = mel216;
const mel1238 = mel216;
const mel1239 = mel216;
const mel1240 = mel216;
const mel1241 = mel216;
const mel1242 = mel216;
//Crossing Intervals
const mel1243 = mel216;
const mel1244 = mel216;
const mel1245 = mel216;
const mel1246 = mel216;
const mel1247 = mel216;
const mel1248 = mel216;
const mel1249 = mel216;
const mel1250 = mel216;
//Quadritonal arpeggios
const mel1251 = mel216;
const mel1252 = mel216;
const mel1253 = mel216;
const mel1254 = mel216;
const mel1255 = mel216;
const mel1256 = mel216;
const mel1257 = mel216;
const mel1258 = mel216;
const mel1259 = mel216;
const mel1260 = mel216;
const mel1261 = mel216;
const mel1262 = mel216;
const mel1263 = mel216;
const mel1264 = mel216;
const mel1265 = mel216;
const mel1266 = mel216;
const mel1267 = mel216;
const mel1268 = mel216;
const mel1269 = mel216;
const mel1270 = mel216;
const mel1271 = mel216;
//Inversions
const mel1272 = mel216;
const mel1273 = mel216;
const mel1274 = mel216;
const mel1275 = mel216;
const mel1276 = mel216;
const mel1277 = mel216;
const mel1278 = mel216;
const mel1279 = mel216;
const mel1280 = mel216;
const mel1281 = mel216;
const mel1282 = mel216;
const mel1283 = mel216;
const mel1284 = mel216;
const mel1285 = mel216;
const mel1286 = mel216;
const mel1287 = mel216;
const mel1288 = mel216;
const mel1289 = mel216;
const mel1290 = mel216;
const mel1291 = mel216;
const mel1292 = mel216;
//Miscellaneous Dodecaphonic Patterns
const mel1293 = mel216;
const mel1294 = mel216;
const mel1295 = mel216;
const mel1296 = mel216;
const mel1297 = mel216;
const mel1298 = mel216;
const mel1299 = mel216;
const mel1300 = mel216;
//Invertible Dodecaphonie Progressions
//With All Different Intervals
const mel1301 = mel216;
const mel1302 = mel216;
const mel1303 = mel216;
const mel1304 = mel216;
const mel1305 = mel216;
const mel1306 = mel216;
const mel1307 = mel216;
const mel1308 = mel216;
const mel1309 = mel216;
const mel1310 = mel216;
const mel1311 = mel216;
const mel1312 = mel216;
const mel1313 = mel216;
const mel1314 = mel216;
const mel1315 = mel216;
const mel1316 = mel216;
const mel1317 = mel216;
const mel1318 = mel216;
//Intervallic Series
const mel1319 = mel52;
const mel1320 = mel20;
const mel1321 = mel17;
const mel1322 = mel148;
const mel1323 = [0, 2, 5, 6, 9, 11];
const mel1324 = mel1152;
const mel1325 = mel52;
const mel1326 = mel20;
const mel1327 = mel17;
const mel1328 = mel148;
const mel1329 = mel1323;
const mel1330 = mel1152;



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
 OrdinalDataFill(Slonimsky, 'mel', 1330);
 const SlonimskyHists = AllPitchSetsToHistogram(Slonimsky);
 const SloHistsLength: number = AllPitchSetsToHistogram(Slonimsky).length;
 export {SlonimskyHists}
 export {daysIndexDuration};
