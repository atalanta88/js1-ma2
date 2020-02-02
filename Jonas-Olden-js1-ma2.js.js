// question 1

const myFunctionExpression = function() {
  console.log("Jonas");
};
myFunctionExpression();

//question 2

function respondToClick() {
  console.log("I was clicked");
}

// question 3

const textInput = document.querySelector("#firstName");

textInput.addEventListener("keydown", callAfterAKeyIsReleased);

function callAfterAKeyIsReleased(event) {
  console.dir(event);
  console.log(event);
}

// question 4

const hoverOver = document.querySelector(".btn1");

function callOnHover(event) {
  console.log("hover over");
  event.target.classList.add("hover");
}
hoverOver.addEventListener("mouseover", callOnHover);

// question 5 data attribute sellector lesson 3 under Adding and removing an active class

const doggerStyle = document.querySelector("[data-animal='dog']");

function callOnHover(event) {
  event.target.classlist.remove("hover");
}

doggerStyle.addEventListener("mouseout", callOnHover);

console.dir(doggerStyle.classList);

// question 6

const liTagg = document.querySelectorAll("li");

function callOnHover2(event) {
  console.log("hover over");
}

for (let i = 0; i < liTagg.length; i++) {
  liTagg[i].addEventListener("mouseover", callOnHover2);
}

console.log(liTagg);

// question 7

const animal = "cow";

switch (animal) {
  case "cat":
    console.log("Meow");
    break;

  case "cow":
    console.log("Moo");
    break;

  case "bird":
    console.log("Tweet");
    break;

  default:
    console.log("Harrumph");
}

// question 8

const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(sheep) {
  console.log(sheep);
});

// question 9

function logTime() {
  console.log("Hello");

  if (counter === 5) {
    clearInterval(intervalTime);
  }

  counter++;
}

let counter = 0;

const intervalTime = setInterval(logTime, 500);

// question 10

const afterTwoSeconds = document.querySelector(".container");

// the function to run after the delay
function twoSeconds() {
  afterTwoSeconds.innerHTML = "Text updated";
}

setTimeout(twoSeconds, 2000);
