"use strict";
const startBtn = document.querySelector(".start_quiz button");
const infoBox = document.querySelector(".info-box");
const exitBtn = document.querySelector(".exit-quiz");
const continueBtn = document.querySelector(".continue-quiz");
const quizBox = document.querySelector(".quiz-box");

startBtn.addEventListener("click", function () {
  infoBox.classList.add("active");
});

exitBtn.addEventListener("click", function () {
  infoBox.classList.remove("active");
});

continueBtn.addEventListener("click", function () {
  quizBox.classList.add("active");
  infoBox.classList.remove("active");
});
