const ebtn = document.getElementById("easy");
const mbtn = document.getElementById("medium");
const hbtn = document.getElementById("difficult");
const gar = document.getElementById("guessarea");
const res = document.getElementById("decl");
const ans = document.getElementById("correct");

let guess;
let randomnumb;
let winstat = false;
let taunts = [
  "My granny with alzheimers could have guessed it!",
  "Sorry there was no difficulty level for losers",
  "You have failed Homosapiens",
  "Go play pubg",
  "I think you have pooped out your brains",
];

ebtn.addEventListener("click", function () {
  randomnumb = Math.floor(Math.random() * 20) + 1;
  let rantaut = Math.floor(Math.random() * taunts.length);
  console.log(rantaut);
  res.innerText = "";
  guess = prompt(
    "I am thinking of a random number between 1 and 20. What is it?"
  );

  if (guess === randomnumb) {
    winstat = true;
    endit();
  } else {
    res.innerText = taunts[rantaut];
    ans.innerText = `ANSWER ${randomnumb}`;
  }
});

mbtn.addEventListener("click", function () {
  randomnumb = Math.floor(Math.random() * 50) + 1;
  let rantaut = Math.floor(Math.random() * taunts.length);
  console.log(rantaut);
  res.innerText = "";
  guess = prompt(
    "I am thinking of a random number between 1 and 50. What is it?"
  );
  if (guess === randomnumb) {
    winstat = true;
    endit();
  } else {
    res.innerText = taunts[rantaut];
    ans.innerText = `ANSWER ${randomnumb}`;
  }
});

hbtn.addEventListener("click", function () {
  randomnumb = Math.floor(Math.random() * 100) + 1;
  let rantaut = Math.floor(Math.random() * taunts.length);
  console.log(rantaut);
  res.innerText = "";
  guess = prompt(
    "I am thinking of a random number between 1 and 100. What is it?"
  );
  if (guess === randomnumb) {
    winstat = true;
    endit();
  } else {
    res.innerText = taunts[rantaut];
    ans.innerText = `ANSWER ${randomnumb}`;
  }
});

function endit() {
  if (winstat === true) res.innerText = "MEH!!Anyone could have done it";
}
