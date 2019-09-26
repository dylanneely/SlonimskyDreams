"use strict";
exports.__esModule = true;
//interpolation of one note - division of octave into 2 parts
var mel1 = [0, 1, 6, 7];
var mel2 = [0, 2, 6, 8];
var mel3 = [0, 4, 6, 10];
var mel4 = [0, 5, 6, 11];
//interpolation of two notes - division of octave into 2 parts
var mel5 = [0, 1, 2, 6, 7, 8];
var mel6 = [0, 1, 3, 6, 7, 9];
var mel7 = [0, 1, 4, 6, 7, 10];
var mel8 = [0, 1, 5, 6, 7, 11];
var mel9 = [0, 2, 3, 6, 8, 9];
var mel10 = [0, 2, 5, 6, 8, 11];
var mel11 = [0, 3, 4, 6, 9, 10];
var mel12 = [0, 3, 5, 6, 9, 11];
var mel13 = [0, 4, 5, 6, 10, 11];
//interpolation of three notes - division of octave into 2 parts
var mel14 = [0, 1, 2, 3, 6, 7, 8, 9];
var mel15 = [0, 1, 2, 4, 6, 7, 8, 10];
var mel16 = [0, 1, 2, 5, 6, 7, 8, 11];
var mel17 = [0, 1, 3, 5, 6, 7, 9, 11];
var mel18 = [0, 1, 4, 5, 6, 7, 10, 11];
var mel19 = [0, 2, 3, 4, 6, 8, 9, 10];
var mel20 = [0, 2, 3, 5, 6, 8, 9, 11];
var mel21 = [0, 2, 4, 5, 6, 8, 10, 11];
//interpolation of four notes - division of octave into 2 parts
var mel22 = [0, 1, 2, 3, 4, 6, 7, 8, 9, 10];
var mel23 = [0, 1, 2, 3, 5, 6, 7, 8, 9, 11];
var mel24 = [0, 1, 2, 4, 5, 6, 7, 8, 10, 11];
var mel25 = [0, 1, 3, 4, 5, 6, 7, 9, 10, 11];
var mel26 = [0, 2, 3, 4, 5, 6, 8, 9, 10, 11];
//symmetric interpolation of one note
var mel27 = [0, 1, 6, 11];
var mel28 = [0, 2, 6, 10];
var mel29 = [0, 3, 6, 9];
var mel30 = [0, 4, 6, 8];
var mel31 = [0, 5, 6, 7];
//symmetric interpolation of two notes
var mel32 = [0, 1, 2, 6, 10, 11];
var mel33 = [0, 1, 3, 6, 9, 11];
var mel34 = [0, 1, 4, 6, 8, 11];
var mel35 = [0, 2, 3, 6, 9, 10];
var mel36 = [0, 2, 4, 6, 8, 10]; //whole tone scale
var mel37 = [0, 2, 5, 6, 7, 10];
var mel38 = [0, 3, 4, 6, 8, 9];
var mel39 = [0, 3, 5, 6, 7, 9];
var mel40 = [0, 4, 5, 6, 7, 8];
//symmetric interpolation of three notes
var mel41 = [0, 1, 2, 3, 6, 9, 10, 11];
var mel42 = [0, 1, 2, 4, 6, 8, 10, 11];
var mel43 = [0, 1, 2, 5, 6, 7, 10, 11];
var mel44 = [0, 1, 3, 4, 6, 8, 9, 11];
var mel45 = [0, 1, 3, 5, 6, 7, 8, 11];
var mel46 = [0, 2, 3, 5, 6, 7, 9, 10];
var mel47 = [0, 2, 4, 5, 6, 7, 8, 10];
var mel48 = [0, 3, 4, 5, 6, 7, 8, 9];
//non-symmetric interpolation
var mel49 = [0, 1, 4, 6, 9, 10];
var mel50 = [0, 2, 4, 6, 9, 10];
var mel51 = [0, 1, 3, 5, 6, 8, 10, 11];
var mel52 = [0, 1, 3, 4, 5, 6, 8, 9, 10, 11];
//ultrapolation of one note
var mel53 = mel1;
var mel54 = mel2;
var mel55 = mel29;
var mel56 = mel3;
var mel57 = mel4;
var mel58 = mel27;
//ultrapolation of one note
var mel59 = mel5;
var mel60 = mel6;
var mel61 = mel7;
var mel62 = mel8;
var mel63 = mel9;
var mel64 = mel36;
var mel65 = mel10;
var mel66 = mel11;
var mel67 = mel12;
var mel68 = mel13;
var mel69 = mel5;
var mel70 = mel6;
var mel71 = mel7;
//ultrapolation of three notes
var mel72 = [0, 1, 3, 4, 6, 7, 9, 10];
var mel73 = mel17;
var mel74 = mel18;
var mel75 = mel21;
var mel76 = mel5;
var mel77 = mel6;
var mel78 = mel7;
var mel79 = mel15;
//infrapolation of one note
var mel80 = mel4;
var mel81 = mel3;
var mel82 = mel29;
var mel83 = mel2;
var mel84 = mel1;
//infrapolation of two notes
var mel85 = mel13;
var mel86 = mel12;
var mel87 = mel10;
var mel88 = mel8;
var mel89 = mel11;
var mel90 = mel36;
var mel91 = mel7;
var mel92 = mel9;
var mel93 = mel6;
//infrapolation of three notes
var mel94 = mel12;
var mel95 = mel7;
var mel96 = mel9;
var mel97 = mel21;
var mel98 = mel72;
//infra-interpolation
var mel99 = mel10;
var mel100 = mel12;
var mel101 = mel7;
var mel102 = mel36;
var mel103 = mel11;
var mel104 = mel6;
var mel105 = mel9;
var mel106 = mel11;
var mel107 = mel6;
//infra-ultrapolation
var mel108 = mel8;
var mel109 = mel10;
var mel110 = mel12;
var mel111 = mel13;
var mel112 = mel7;
var mel113 = mel36;
var mel114 = mel11;
var mel115 = mel6;
var mel116 = mel9;
var mel117 = mel5;
//inter-ultrapolation
var mel118 = mel1;
var mel119 = mel5;
var mel120 = mel6;
var mel121 = mel7;
var mel122 = mel8;
var mel123 = mel5;
var mel124 = mel9;
var mel125 = mel36;
var mel126 = mel10;
var mel127 = mel6;
var mel128 = mel9;
var mel129 = mel11;
var mel130 = mel12;
var mel131 = mel7;
var mel132 = mel36;
var mel133 = mel11;
var mel134 = mel3;
var mel135 = mel13;
var mel136 = mel8;
var mel137 = mel10;
var mel138 = mel12;
var mel139 = mel13;
var mel140 = mel4;
//infr-inter-ultrapolation
var mel141 = mel16;
var mel142 = mel10;
var mel143 = mel20;
var mel144 = mel21;
var mel145 = mel17;
var mel146 = mel20;
var mel147 = mel12;
var mel148 = [0, 3, 4, 5, 6, 9, 10, 11];
var mel149 = mel18;
var mel150 = mel21;
var mel151 = mel148;
var mel152 = mel13;
var mel153 = mel8;
var mel154 = mel10;
var mel155 = mel12;
var mel156 = mel13;
var mel157 = mel7;
var mel158 = mel15;
var mel159 = mel72;
var mel160 = mel15;
var mel161 = mel36;
var mel162 = mel19;
var mel163 = mel72;
var mel164 = mel19;
var mel165 = mel11;
var mel166 = mel7;
var mel167 = mel36;
var mel168 = mel11;
var mel169 = mel18;
var mel170 = mel21;
var mel171 = mel148;
var mel172 = mel6;
var mel173 = mel14;
var mel174 = mel14;
var mel175 = mel9;
var mel176 = mel6;
var mel177 = mel9;
var mel178 = mel72;
var mel179 = mel19;
var mel180 = mel20;
//Ditone Progression - Equal Division of One Octave into Three parts
//Interpolation of One Note
var mel181 = [0, 1, 4, 5, 8, 9];
var mel182 = [0, 3, 4, 7, 8, 11];
//Interpolation of Two Notes
var mel183 = [0, 1, 2, 4, 5, 6, 8, 9, 10];
var mel184 = [0, 1, 3, 4, 5, 7, 8, 9, 11];
var mel185 = [0, 2, 3, 4, 6, 7, 8, 10, 11];
//Ultrapolation of One Note
var mel186 = mel181;
var mel187 = mel36;
var mel188 = mel182;
var mel189 = [0, 4, 8];
var mel190 = mel181;
var mel191 = mel36;
var mel192 = mel182;
//Ultrapolation of Two Notes
var mel193 = mel183;
var mel194 = mel184;
var mel195 = mel181;
var mel196 = mel181;
var mel197 = mel183;
var mel198 = mel184;
var mel199 = mel185;
var mel200 = mel36;
var mel201 = mel183;
var mel202 = mel36;
var mel203 = mel185;
var mel204 = mel182;
var mel205 = mel184;
var mel206 = mel185;
var mel207 = mel182;
var mel208 = mel181;
var mel209 = mel36;
var mel210 = mel182;
var mel211 = mel183;
var mel212 = mel184;
var mel213 = mel185;
//Ultrapolation of Three Notes
var mel214 = mel184;
var mel215 = mel184;
var mel216 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var mel217 = mel184;
var mel218 = mel185;
var mel219 = mel185;
var mel220 = mel185;
var mel221 = mel216;
var mel222 = mel183;
var mel223 = mel183;
var mel224 = mel183;
var mel225 = mel36;
var mel226 = mel185;
var mel227 = mel185;
var mel228 = mel185;
var mel229 = mel185;
var mel230 = mel216;
//Infrapolation of one note
var mel231 = mel182;
var mel232 = mel36;
var mel233 = mel181;
var mel234 = mel182;
var mel235 = mel36;
var mel236 = mel181;
//Infrapolation of Two Notes
var mel237 = mel185;
var mel238 = mel184;
var mel239 = mel182;
var mel240 = mel182;
var mel241 = mel185;
var mel242 = mel184;
var mel243 = mel183;
var mel244 = mel36;
var mel245 = mel185;
var mel246 = mel36;
var mel247 = mel183;
var mel248 = mel181;
var mel249 = mel184;
var mel250 = mel183;
var mel251 = mel181;
var mel252 = mel181;
var mel253 = mel182;
var mel254 = mel182;
var mel255 = mel182;
var mel256 = mel185;
var mel257 = mel184;
//Infrapolation of Three Notes
var mel258 = mel216;
var mel259 = mel185;
var mel260 = mel185;
var mel261 = mel185;
var mel262 = mel216;
var mel263 = mel184;
var mel264 = mel184;
var mel265 = mel182;
var mel266 = mel185;
var mel267 = mel185;
var mel268 = mel184;
var mel269 = mel183;
var mel270 = mel216;
var mel271 = mel183;
var mel272 = mel183;
var mel273 = mel185;
var mel274 = mel36;
var mel275 = mel183;
var mel276 = mel185;
var mel277 = mel216;
var mel278 = mel183;
var mel279 = mel184;
var mel280 = mel183;
var mel281 = mel181;
//Infra-Interpolation
var mel282 = mel184;
var emptyHist = new Array(12);
// emptyHist.fill(0); // this is giving me an error
emptyHist = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function OrdinalDataFill(array, prefix, length) {
    for (var i = 0; i < length; i++) {
        array.push(prefix + (i + 1));
    }
    console.log(array);
}
function PitchSetToHistogram(melody) {
    var pitchSet = melody;
    for (var _i = 0, pitchSet_1 = pitchSet; _i < pitchSet_1.length; _i++) {
        var pitches = pitchSet_1[_i];
        emptyHist[pitches] = 1;
    }
    var histogram = emptyHist;
    emptyHist = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    return histogram;
}
function AllPitchSetsToHistogram(melodies) {
    var HistogramArray = [];
    for (var _i = 0, melodies_1 = melodies; _i < melodies_1.length; _i++) {
        var set = melodies_1[_i];
        var pitchSet = eval(set);
        var histogram = PitchSetToHistogram(pitchSet);
        HistogramArray.push(histogram);
    }
    console.log(HistogramArray);
    return HistogramArray;
}
function daysIndexDuration(length) {
    var time = new Date(Date.now());
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var currentSecondsInDay = (hours * 3600) + (minutes * 60) + seconds;
    var totalSecondsInDay = 86400;
    var duration = totalSecondsInDay / length;
    var index = Math.floor(currentSecondsInDay / duration);
    var indexDuration = [index, duration];
    return indexDuration;
}
exports.daysIndexDuration = daysIndexDuration;
var Slonimsky = [];
OrdinalDataFill(Slonimsky, 'mel', 282);
var SlonimskyHists = AllPitchSetsToHistogram(Slonimsky);
exports.SlonimskyHists = SlonimskyHists;
var SloHistsLength = AllPitchSetsToHistogram(Slonimsky).length;
