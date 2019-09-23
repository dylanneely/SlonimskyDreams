Slonimsky Dreams on the <a href="https://en.wikipedia.org/wiki/Nicolas_Slonimsky#Writings_and_musical_criticism">"Thesaurus of Scales and Melodic Patterns."</a> <a href="https://magenta.tensorflow.org/performance-rnn">It is built on <a href="https://magenta.tensorflow.org/performance-rnn">Magenta's Performance RNN</a>, which was trained in TensorFlow on MIDI from piano performances. </a> It was then ported to run in the browser using only Javascript in the <a href="https://js.tensorflow.org/">TensorFlow.js</a> environment. Piano samples are from <a href="https://archive.org/details/SalamanderGrandPianoV3">Salamander Grand Piano.</a>

# Building

To build, execute `yarn bundle`. This will regenerate `bundle.js`, which is referenced by `index.html`.

To view, execute `yarn run-demo`, which will start a local webserver.
