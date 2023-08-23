const form = document.querySelector(".form");
const input = document.querySelector(".form__input");
const body = document.querySelector("body");
const roundWrapper = document.querySelector(".round-wrapper");
const prewBtn = document.querySelector(".prew");
const nextBtn = document.querySelector(".next");

const rounds = [];
let count = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputVal = input.value.trim();
  count = rounds.length;

  body.style.background = inputVal;
  if (body.style.background == inputVal && rounds.at(-1) !== inputVal) {
    rounds.push(inputVal);
    createRound(inputVal);
  }

  input.value = "";
});

function createRound(color) {
  let round = document.createElement("div");
  round.classList.add("round");
  roundWrapper.append(round);
  round.style.background = color;
  roundWrapper.childNodes.forEach((element) => {
    element.classList.remove("round-toggle");
  });
  round.classList.add("round-toggle");
}

function roundFunc() {
  body.style.background = rounds[count];
  roundWrapper.childNodes.forEach((element) => {
    element.classList.remove("round-toggle");
  });
  roundWrapper.childNodes[count].classList.add("round-toggle");
}

nextBtn.addEventListener("click", () => {
  if (count < rounds.length - 1) {
    count++;
    roundFunc();
  }
});

prewBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    roundFunc();
  }
});
