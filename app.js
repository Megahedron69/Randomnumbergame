const ebtn = document.getElementById("easy");
const mbtn = document.getElementById("medium");
const hbtn = document.getElementById("difficult");
let sbtn = document.getElementById("sobmit");
const gar = document.getElementById("guessarea");
const res = document.getElementById("decl");
let numz = document.getElementById("actguess");

let tries;
let usenumb = [];
let randomnumb;
let winstat = false;
let taunts = [
  "My granny with alzheimers could have guessed it!",
  "Sorry there was no difficulty level for losers",
  "You have failed Homosapiens",
  "Go play pubg",
];
let rantaut = Math.floor(Math.random() * taunts.length) + 1;

sbtn.addEventListener("click", function () {
  usenumb.push(numz);
  console.log(usenumb);
});

ebtn.addEventListener("click", function () {
  tries = 7;
  for (let i = 1; i <= 7; i++) {
    tries--;
    if (usenumb[i] === randomnumb) {
      winstat = true;
      break;
    } else {
      numz.innerText = "";
      res.innerText = taunts[rantaut];
      res.innerHTML = `<div class="triesrem> TRIES REMAINING:${tries}`;
    }
  }
  endit();
});

mbtn.addEventListener("click", function () {
  tries = 5;
  for (let i = 1; i <= 5; i++) {
    tries--;
    if (usenumb[i] === randomnumb) {
      winstat = true;
      break;
    } else {
      numz.innerText = "";
      res.innerText = taunts[rantaut];
      res.innerHTML = `<div class="triesrem> TRIES REMAINING:${tries}`;
    }
  }
  endit();
});

hbtn.addEventListener("click", function () {
  tries = 3;
  for (let i = 1; i <= 3; i++) {
    tries--;
    if (usenumb[i] === randomnumb) {
      winstat = true;
      break;
    } else {
      numz.innerText = "";
      res.innerText = taunts[rantaut];
      res.innerHTML = `<div class="triesrem> TRIES REMAINING:${tries}`;
    }
  }
  endit();
});

function endit() {
  if (winstat === true) res.innerText = "MEH!!Anyone could have done it";
  usenumb = [];
}
