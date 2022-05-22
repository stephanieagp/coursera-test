(function (window) {
var helloSpeaker = {};
helloSpeaker.speakWord = "Hello"
helloSpeaker.speak = function (names) {
  console.log(helloSpeaker.speakWord + " " + names);
}
window.helloSpeaker = helloSpeaker;
})(window);
