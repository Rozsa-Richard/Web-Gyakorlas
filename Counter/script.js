const plusOne = document.getElementById("plusOne");
const minusOne = document.getElementById("minusOne");
const plusTen = document.getElementById("plusTen");
const minusTen = document.getElementById("minusTen");
const counter = document.getElementById("counter");

let count = 0;

plusOne.addEventListener("click", () => {
    count++;
    counter.textContent = count;
});

minusOne.addEventListener("click", () => {
    count--;
    counter.textContent = count;
});

plusTen.addEventListener("click", () => {
    count = count + 10;
    counter.textContent = count;
});

minusTen.addEventListener("click", () => {
    count = count - 10;
    counter.textContent = count;
});