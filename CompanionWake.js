// Run in html in conjunction with the following attribution:
// <script src="https://cdn.rawgit.com/richtr/NoSleep.js/0f4c87d0/dist/NoSleep.min.js">
//
// Major credit to github user  richtr who wrote NoSleep.js located here:
// https://github.com/richtr/NoSleep.js

var noSleep = new NoSleep();
var wakeLockEnabled = false;
var toggleEl = document.querySelector("#toggle");
toggleEl.addEventListener('click', function() {
  if (!wakeLockEnabled) {
    noSleep.enable(); // keep the screen on!
    wakeLockEnabled = true;
    toggleEl.value = "Enable device sleep (mobile)";
  } else {
    noSleep.disable(); // let the screen turn off.
    wakeLockEnabled = false;
    toggleEl.value = "Disable device sleep (mobile)";
    document.body.style.backgroundColor = "";
  }
}, false);
