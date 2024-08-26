"use strict";

const questionsArr = [
  {
    number: 1,
    question: "What is JavaScript?",
    options: [
      "An application",
      "An international language",
      "A programming language",
      "A Novel",
    ],
    correctAnswer: "A programming language",
  },
  {
    number: 2,
    question: "Which of the following is a JavaScript data type?",
    options: ["Number", "Character", "Float", "None of the above"],
    correctAnswer: "Number",
  },
  {
    number: 3,
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Sun Microsystems", "Netscape", "Oracle"],
    correctAnswer: "Netscape",
  },
  // {
  //   number: 4,
  //   question: "Which symbol is used for single-line comments in JavaScript?",
  //   options: ["//", "/*", "#", "<!--"],
  //   correctAnswer: "//",
  // },
  // {
  //   number: 5,
  //   question: "What is the output of 'typeof null' in JavaScript?",
  //   options: ["'null'", "'undefined'", "'object'", "'string'"],
  //   correctAnswer: "'object'",
  // },
  // {
  //   number: 6,
  //   question:
  //     "Which method can be used to select an element by its ID in JavaScript?",
  //   options: [
  //     "getElementById()",
  //     "querySelector()",
  //     "getElementsByClassName()",
  //     "getElementByName()",
  //   ],
  //   correctAnswer: "getElementById()",
  // },
  // {
  //   number: 7,
  //   question: "Which of the following is a looping structure in JavaScript?",
  //   options: ["for", "if", "switch", "case"],
  //   correctAnswer: "for",
  // },
  // {
  //   number: 8,
  //   question: "What is the result of '2' + 2 in JavaScript?",
  //   options: ["4", "'22'", "NaN", "'4'"],
  //   correctAnswer: "'22'",
  // },
  // {
  //   number: 9,
  //   question:
  //     "Which method is used to convert a JSON string into a JavaScript object?",
  //   options: [
  //     "JSON.parse()",
  //     "JSON.stringify()",
  //     "JSON.object()",
  //     "JSON.toObject()",
  //   ],
  //   correctAnswer: "JSON.parse()",
  // },
  // {
  //   number: 10,
  //   question: "What is the correct way to declare a JavaScript variable?",
  //   options: ["var myVar;", "variable myVar;", "v myVar;", "myVar = var;"],
  //   correctAnswer: "var myVar;",
  // },
  // {
  //   number: 11,
  //   question: "Which operator is used to assign a value to a variable?",
  //   options: ["=", "-", "*", "/"],
  //   correctAnswer: "=",
  // },
  // {
  //   number: 12,
  //   question: "Which method adds an element to the end of an array?",
  //   options: ["pop()", "push()", "shift()", "unshift()"],
  //   correctAnswer: "push()",
  // },
  // {
  //   number: 13,
  //   question: "Which JavaScript method is used to find the length of a string?",
  //   options: ["length()", "size()", "index()", "len()"],
  //   correctAnswer: "length()",
  // },
  // {
  //   number: 14,
  //   question:
  //     "Which function is used to convert a string to an integer in JavaScript?",
  //   options: ["parseInt()", "parseFloat()", "Number()", "toString()"],
  //   correctAnswer: "parseInt()",
  // },
  // {
  //   number: 15,
  //   question: "Which of the following is a JavaScript framework?",
  //   options: ["Django", "React", "Laravel", "Ruby on Rails"],
  //   correctAnswer: "React",
  // },
  // {
  //   number: 16,
  //   question: "Which keyword is used to define a constant in JavaScript?",
  //   options: ["let", "const", "var", "constant"],
  //   correctAnswer: "const",
  // },
  // {
  //   number: 17,
  //   question:
  //     "Which method can be used to remove the last element from an array?",
  //   options: ["pop()", "push()", "shift()", "splice()"],
  //   correctAnswer: "pop()",
  // },
  // {
  //   number: 18,
  //   question:
  //     "Which JavaScript event occurs when the user clicks on an HTML element?",
  //   options: ["onmouseover", "onchange", "onmouseclick", "onclick"],
  //   correctAnswer: "onclick",
  // },
  // {
  //   number: 19,
  //   question: "Which method is used to access the first element in an array?",
  //   options: ["shift()", "first()", "pop()", "unshift()"],
  //   correctAnswer: "shift()",
  // },
  // {
  //   number: 20,
  //   question: "Which operator is used to compare both value and type?",
  //   options: ["==", "===", "=", "!="],
  //   correctAnswer: "===",
  // },
  // {
  //   number: 21,
  //   question:
  //     "Which method is used to convert a JavaScript object into a JSON string?",
  //   options: [
  //     "JSON.parse()",
  //     "JSON.stringify()",
  //     "JSON.convert()",
  //     "JSON.toString()",
  //   ],
  //   correctAnswer: "JSON.stringify()",
  // },
  // {
  //   number: 22,
  //   question: "Which keyword is used to create a class in JavaScript?",
  //   options: ["function", "class", "object", "prototype"],
  //   correctAnswer: "class",
  // },
  // {
  //   number: 23,
  //   question:
  //     "Which method returns the position of the first occurrence of a value in a string?",
  //   options: ["substr()", "indexOf()", "search()", "find()"],
  //   correctAnswer: "indexOf()",
  // },
  // {
  //   number: 24,
  //   question: "Which operator is used to concatenate strings in JavaScript?",
  //   options: ["+", "&", "*", "%"],
  //   correctAnswer: "+",
  // },
  // {
  //   number: 25,
  //   question:
  //     "Which method can be used to remove whitespace from both ends of a string?",
  //   options: ["trim()", "strip()", "cut()", "slice()"],
  //   correctAnswer: "trim()",
  // },
  // {
  //   number: 26,
  //   question:
  //     "Which keyword is used to declare a block-scoped variable in JavaScript?",
  //   options: ["var", "let", "const", "block"],
  //   correctAnswer: "let",
  // },
  // {
  //   number: 27,
  //   question:
  //     "Which method is used to add new elements to the beginning of an array?",
  //   options: ["push()", "unshift()", "shift()", "splice()"],
  //   correctAnswer: "unshift()",
  // },
  // {
  //   number: 28,
  //   question:
  //     "Which function is used to execute a function after a specified time interval?",
  //   options: [
  //     "setInterval()",
  //     "setTimeout()",
  //     "clearInterval()",
  //     "clearTimeout()",
  //   ],
  //   correctAnswer: "setTimeout()",
  // },
  // {
  //   number: 29,
  //   question: "Which keyword is used to define a function in JavaScript?",
  //   options: ["function", "def", "func", "method"],
  //   correctAnswer: "function",
  // },
  // {
  //   number: 30,
  //   question:
  //     "Which method is used to reverse the order of elements in an array?",
  //   options: ["reverse()", "sort()", "slice()", "splice()"],
  //   correctAnswer: "reverse()",
  // },
  // {
  //   number: 31,
  //   question: "What is the correct syntax for an arrow function in JavaScript?",
  //   options: ["() => {}", "function => {}", "() -> {}", "=> () {}"],
  //   correctAnswer: "() => {}",
  // },
  // {
  //   number: 32,
  //   question: "Which of the following is not a JavaScript loop?",
  //   options: ["for", "while", "do-while", "repeat"],
  //   correctAnswer: "repeat",
  // },
  // {
  //   number: 33,
  //   question: "Which JavaScript function is used to parse a JSON string?",
  //   options: [
  //     "JSON.stringify()",
  //     "JSON.parse()",
  //     "JSON.object()",
  //     "JSON.read()",
  //   ],
  //   correctAnswer: "JSON.parse()",
  // },
  // {
  //   number: 34,
  //   question: "Which keyword is used to exit a loop prematurely?",
  //   options: ["continue", "return", "break", "stop"],
  //   correctAnswer: "break",
  // },
  // {
  //   number: 35,
  //   question: "Which method is used to join two or more arrays?",
  //   options: ["concat()", "merge()", "join()", "append()"],
  //   correctAnswer: "concat()",
  // },
  // {
  //   number: 36,
  //   question: "Which statement is used to handle exceptions in JavaScript?",
  //   options: ["try-catch", "handle-error", "throw-catch", "catch-finally"],
  //   correctAnswer: "try-catch",
  // },
  // {
  //   number: 37,
  //   question: "Which method is used to convert an array into a string?",
  //   options: ["toString()", "join()", "concat()", "split()"],
  //   correctAnswer: "toString()",
  // },
  // {
  //   number: 38,
  //   question: "Which operator is used for logical AND in JavaScript?",
  //   options: ["&&", "||", "&", "&&="],
  //   correctAnswer: "&&",
  // },
  // {
  //   number: 39,
  //   question:
  //     "Which function is used to delay the execution of a function by a specified number of milliseconds?",
  //   options: [
  //     "setTimeout()",
  //     "setInterval()",
  //     "setDelay()",
  //     "delayExecution()",
  //   ],
  //   correctAnswer: "setTimeout()",
  // },
  // {
  //   number: 40,
  //   question: "Which method is used to sort the elements of an array?",
  //   options: ["sort()", "order()", "arrange()", "organize()"],
  //   correctAnswer: "sort()",
  // },
  // {
  //   number: 41,
  //   question:
  //     "Which JavaScript method is used to remove the first element from an array?",
  //   options: ["shift()", "pop()", "unshift()", "splice()"],
  //   correctAnswer: "shift()",
  // },
  // {
  //   number: 42,
  //   question: "Which method is used to get the length of an array?",
  //   options: ["size()", "count()", "length()", "index()"],
  //   correctAnswer: "length()",
  // },
  // {
  //   number: 43,
  //   question:
  //     "Which JavaScript method is used to add a new element to the beginning of an array?",
  //   options: ["unshift()", "push()", "shift()", "append()"],
  //   correctAnswer: "unshift()",
  // },
  // {
  //   number: 44,
  //   question:
  //     "Which JavaScript method is used to find the index of an element in an array?",
  //   options: ["indexOf()", "findIndex()", "search()", "getIndex()"],
  //   correctAnswer: "indexOf()",
  // },
  // {
  //   number: 45,
  //   question:
  //     "Which method can be used to combine the elements of an array into a single string?",
  //   options: ["join()", "concat()", "merge()", "splice()"],
  //   correctAnswer: "join()",
  // },
  // {
  //   number: 46,
  //   question:
  //     "Which operator is used to check if two values are equal in JavaScript?",
  //   options: ["=", "==", "===", "!=="],
  //   correctAnswer: "==",
  // },
  // {
  //   number: 47,
  //   question:
  //     "Which method is used to filter elements in an array based on a condition?",
  //   options: ["filter()", "map()", "reduce()", "slice()"],
  //   correctAnswer: "filter()",
  // },
  // {
  //   number: 48,
  //   question:
  //     "Which function is used to check if a value is NaN (Not-a-Number) in JavaScript?",
  //   options: ["isNaN()", "checkNaN()", "Number.isNaN()", "isNotNumber()"],
  //   correctAnswer: "isNaN()",
  // },
  // {
  //   number: 49,
  //   question:
  //     "Which JavaScript method is used to add an event listener to an element?",
  //   options: [
  //     "addEventListener()",
  //     "attachEvent()",
  //     "bindEvent()",
  //     "setListener()",
  //   ],
  //   correctAnswer: "addEventListener()",
  // },
  // {
  //   number: 50,
  //   question: "Which method is used to remove an event listener in JavaScript?",
  //   options: [
  //     "removeEventListener()",
  //     "detachEvent()",
  //     "unbindEvent()",
  //     "clearListener()",
  //   ],
  //   correctAnswer: "removeEventListener()",
  // },
];

const nextBtn = document.querySelector(".next_btn");
const restartQuiz = document.querySelector(".restart-quiz");
const quitQuiz = document.querySelector(".quit-quiz");

const timeLine = document.querySelector(".time-line");
const timerPerSec = document.querySelector(".timer_sec");

let counter;
let counterLine;
let userScore = 0;

export const timeLeft = 10;
export const widthValue = 55;

export const countDown = function (time) {
  const timer = () => {
    const formattedTime = time < 10 ? `0${time}` : time;
    timerPerSec.textContent = formattedTime;
    time--;

    if (time < 1) {
      clearInterval(counter);
      timerPerSec.textContent = "00";
      const options = document.querySelectorAll(".option");
      for (let i = 0; i < options.length; i++) {
        options[i].classList.add("disabled");
      }
    }
  };

  counter = setInterval(timer, 1000);
};

export const countTimeLine = function (count) {
  const timer = () => {
    if (count > 0) {
      timeLine.style.width = `${count}rem`;
      count -= 0.55;
    } else {
      timeLine.style.width = "0rem";
      clearInterval(counterLine);
    }
  };

  counterLine = setInterval(timer, 100);
};

let questionIndex = 0;

const wrongIcon = `<ion-icon class="icon wrong" name="close-circle-outline"></ion-icon>`;

const correctIcon = `<ion-icon class="icon correct" name="checkmark-done-circle-outline"></ion-icon>`;

const optionSelected = function (e) {
  clearInterval(counter);
  clearInterval(counterLine);
  const options = document.querySelectorAll(".option");
  let allOptions = options.length;
  const selected = e.target;
  let userAnswer = selected.textContent;
  let correctAnswer = questionsArr[questionIndex].correctAnswer;
  const answer = userAnswer.trim();

  // answer === correctAnswer
  //   ? selected.classList.add("correct")
  //   : selected.classList.add("wrong");

  if (answer === correctAnswer) {
    selected.classList.add("correct");
    selected.insertAdjacentHTML("beforeend", correctIcon);
    userScore++;
    console.log(userScore);
  } else {
    selected.classList.add("wrong");
    selected.insertAdjacentHTML("beforeend", wrongIcon);
    for (let i = 0; i < allOptions; i++) {
      let uniqueAnswer = options[i].querySelector("span").textContent;
      console.log(uniqueAnswer);
      if (uniqueAnswer === correctAnswer) {
        options[i].setAttribute("class", "option correct");
        options[i].insertAdjacentHTML("beforeend", correctIcon);
      }
    }
  }

  for (let i = 0; i < allOptions; i++) {
    options[i].classList.add("disabled");
  }
  nextBtn.style.display = "block";
};

export const showQuestion = function () {
  const question = document.querySelector(".question");
  question.innerHTML = `<span>${questionsArr[questionIndex].number}.) ${questionsArr[questionIndex].question}</span>`;

  const optionsList = document.querySelector(".option_list");
  optionsList.innerHTML = `
    <div class="option">
     <span>${questionsArr[questionIndex].options[0]}</span>
    </div>

    <div class="option">
     <span>${questionsArr[questionIndex].options[1]}</span>
    </div>

    <div class="option">
     <span>${questionsArr[questionIndex].options[2]}</span>
    </div>

    <div class="option">
     <span>${questionsArr[questionIndex].options[3]}</span>
    </div>
  `;

  const options = document.querySelectorAll(".option");
  console.log(options);

  options.forEach((option) => {
    option.addEventListener("click", optionSelected);
  });
};

export const questionCounter = function (i) {
  const questionCount = document.querySelector(".total_question");
  questionCount.innerHTML = `<span><p>${questionIndex + 1}</p> of ${
    questionsArr.length
  } questions</span>`;
};

const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result_box");
const infoBox = document.querySelector(".info-box");

const showResultBox = function () {
  infoBox.classList.remove("active");
  quizBox.classList.remove("active");
  resultBox.classList.add("active");

  const scored = resultBox.querySelector(".score span");
  console.log(scored);
  scored.textContent = userScore;
};

nextBtn.addEventListener("click", function () {
  if (questionIndex < questionsArr.length - 1) {
    questionIndex++;
    showQuestion();
    questionCounter();
    clearInterval(counter);
    countDown(timeLeft);
    countTimeLine(widthValue);
    nextBtn.style.display = "none";
  } else {
    showResultBox();
  }
});

quitQuiz.addEventListener("click", function () {
  window.location.reload();
});
