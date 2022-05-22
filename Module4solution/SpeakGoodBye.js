(function (window) {
var byeSpeaker = {};
byeSpeaker.speakWord = "Goodbye"
byeSpeaker.speak = function (names) {
  console.log(byeSpeaker.speakWord + " " + names);
}
window.byeSpeaker = byeSpeaker;
})(window);
