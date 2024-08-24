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
  {
    number: 4,
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["//", "/*", "#", "<!--"],
    correctAnswer: "//",
  },
  {
    number: 5,
    question: "What is the output of 'typeof null' in JavaScript?",
    options: ["'null'", "'undefined'", "'object'", "'string'"],
    correctAnswer: "'object'",
  },
  {
    number: 6,
    question:
      "Which method can be used to select an element by its ID in JavaScript?",
    options: [
      "getElementById()",
      "querySelector()",
      "getElementsByClassName()",
      "getElementByName()",
    ],
    correctAnswer: "getElementById()",
  },
  {
    number: 7,
    question: "Which of the following is a looping structure in JavaScript?",
    options: ["for", "if", "switch", "case"],
    correctAnswer: "for",
  },
  {
    number: 8,
    question: "What is the result of '2' + 2 in JavaScript?",
    options: ["4", "'22'", "NaN", "'4'"],
    correctAnswer: "'22'",
  },
  {
    number: 9,
    question:
      "Which method is used to convert a JSON string into a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.object()",
      "JSON.toObject()",
    ],
    correctAnswer: "JSON.parse()",
  },
  {
    number: 10,
    question: "What is the correct way to declare a JavaScript variable?",
    options: ["var myVar;", "variable myVar;", "v myVar;", "myVar = var;"],
    correctAnswer: "var myVar;",
  },
  {
    number: 11,
    question: "Which operator is used to assign a value to a variable?",
    options: ["=", "-", "*", "/"],
    correctAnswer: "=",
  },
  {
    number: 12,
    question: "Which method adds an element to the end of an array?",
    options: ["pop()", "push()", "shift()", "unshift()"],
    correctAnswer: "push()",
  },
  {
    number: 13,
    question: "Which JavaScript method is used to find the length of a string?",
    options: ["length()", "size()", "index()", "len()"],
    correctAnswer: "length()",
  },
  {
    number: 14,
    question:
      "Which function is used to convert a string to an integer in JavaScript?",
    options: ["parseInt()", "parseFloat()", "Number()", "toString()"],
    correctAnswer: "parseInt()",
  },
  {
    number: 15,
    question: "Which of the following is a JavaScript framework?",
    options: ["Django", "React", "Laravel", "Ruby on Rails"],
    correctAnswer: "React",
  },
  {
    number: 16,
    question: "Which keyword is used to define a constant in JavaScript?",
    options: ["let", "const", "var", "constant"],
    correctAnswer: "const",
  },
  {
    number: 17,
    question:
      "Which method can be used to remove the last element from an array?",
    options: ["pop()", "push()", "shift()", "splice()"],
    correctAnswer: "pop()",
  },
  {
    number: 18,
    question:
      "Which JavaScript event occurs when the user clicks on an HTML element?",
    options: ["onmouseover", "onchange", "onmouseclick", "onclick"],
    correctAnswer: "onclick",
  },
  {
    number: 19,
    question: "Which method is used to access the first element in an array?",
    options: ["shift()", "first()", "pop()", "unshift()"],
    correctAnswer: "shift()",
  },
  {
    number: 20,
    question: "Which operator is used to compare both value and type?",
    options: ["==", "===", "=", "!="],
    correctAnswer: "===",
  },
  {
    number: 21,
    question:
      "Which method is used to convert a JavaScript object into a JSON string?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.toString()",
    ],
    correctAnswer: "JSON.stringify()",
  },
  {
    number: 22,
    question: "Which keyword is used to create a class in JavaScript?",
    options: ["function", "class", "object", "prototype"],
    correctAnswer: "class",
  },
  {
    number: 23,
    question:
      "Which method returns the position of the first occurrence of a value in a string?",
    options: ["substr()", "indexOf()", "search()", "find()"],
    correctAnswer: "indexOf()",
  },
  {
    number: 24,
    question: "Which operator is used to concatenate strings in JavaScript?",
    options: ["+", "&", "*", "%"],
    correctAnswer: "+",
  },
  {
    number: 25,
    question:
      "Which method can be used to remove whitespace from both ends of a string?",
    options: ["trim()", "strip()", "cut()", "slice()"],
    correctAnswer: "trim()",
  },
  {
    number: 26,
    question:
      "Which keyword is used to declare a block-scoped variable in JavaScript?",
    options: ["var", "let", "const", "block"],
    correctAnswer: "let",
  },
  {
    number: 27,
    question:
      "Which method is used to add new elements to the beginning of an array?",
    options: ["push()", "unshift()", "shift()", "splice()"],
    correctAnswer: "unshift()",
  },
  {
    number: 28,
    question:
      "Which function is used to execute a function after a specified time interval?",
    options: [
      "setInterval()",
      "setTimeout()",
      "clearInterval()",
      "clearTimeout()",
    ],
    correctAnswer: "setTimeout()",
  },
  {
    number: 29,
    question: "Which keyword is used to define a function in JavaScript?",
    options: ["function", "def", "func", "method"],
    correctAnswer: "function",
  },
  {
    number: 30,
    question:
      "Which method is used to reverse the order of elements in an array?",
    options: ["reverse()", "sort()", "slice()", "splice()"],
    correctAnswer: "reverse()",
  },
  {
    number: 31,
    question: "What is the correct syntax for an arrow function in JavaScript?",
    options: ["() => {}", "function => {}", "() -> {}", "=> () {}"],
    correctAnswer: "() => {}",
  },
  {
    number: 32,
    question: "Which of the following is not a JavaScript loop?",
    options: ["for", "while", "do-while", "repeat"],
    correctAnswer: "repeat",
  },
  {
    number: 33,
    question: "Which JavaScript function is used to parse a JSON string?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.object()",
      "JSON.read()",
    ],
    correctAnswer: "JSON.parse()",
  },
  {
    number: 34,
    question: "Which keyword is used to exit a loop prematurely?",
    options: ["continue", "return", "break", "stop"],
    correctAnswer: "break",
  },
  {
    number: 35,
    question: "Which method is used to join two or more arrays?",
    options: ["concat()", "merge()", "join()", "append()"],
    correctAnswer: "concat()",
  },
  {
    number: 36,
    question: "Which statement is used to handle exceptions in JavaScript?",
    options: ["try-catch", "handle-error", "throw-catch", "catch-finally"],
    correctAnswer: "try-catch",
  },
  {
    number: 37,
    question: "Which method is used to convert an array into a string?",
    options: ["toString()", "join()", "concat()", "split()"],
    correctAnswer: "toString()",
  },
  {
    number: 38,
    question: "Which operator is used for logical AND in JavaScript?",
    options: ["&&", "||", "&", "&&="],
    correctAnswer: "&&",
  },
  {
    number: 39,
    question:
      "Which function is used to delay the execution of a function by a specified number of milliseconds?",
    options: [
      "setTimeout()",
      "setInterval()",
      "setDelay()",
      "delayExecution()",
    ],
    correctAnswer: "setTimeout()",
  },
  {
    number: 40,
    question: "Which method is used to sort the elements of an array?",
    options: ["sort()", "order()", "arrange()", "organize()"],
    correctAnswer: "sort()",
  },
  {
    number: 41,
    question:
      "Which JavaScript method is used to remove the first element from an array?",
    options: ["shift()", "pop()", "unshift()", "splice()"],
    correctAnswer: "shift()",
  },
  {
    number: 42,
    question: "Which method is used to get the length of an array?",
    options: ["size()", "count()", "length()", "index()"],
    correctAnswer: "length()",
  },
  {
    number: 43,
    question:
      "Which JavaScript method is used to add a new element to the beginning of an array?",
    options: ["unshift()", "push()", "shift()", "append()"],
    correctAnswer: "unshift()",
  },
  {
    number: 44,
    question:
      "Which JavaScript method is used to find the index of an element in an array?",
    options: ["indexOf()", "findIndex()", "search()", "getIndex()"],
    correctAnswer: "indexOf()",
  },
  {
    number: 45,
    question:
      "Which method can be used to combine the elements of an array into a single string?",
    options: ["join()", "concat()", "merge()", "splice()"],
    correctAnswer: "join()",
  },
  {
    number: 46,
    question:
      "Which operator is used to check if two values are equal in JavaScript?",
    options: ["=", "==", "===", "!=="],
    correctAnswer: "==",
  },
  {
    number: 47,
    question:
      "Which method is used to filter elements in an array based on a condition?",
    options: ["filter()", "map()", "reduce()", "slice()"],
    correctAnswer: "filter()",
  },
  {
    number: 48,
    question:
      "Which function is used to check if a value is NaN (Not-a-Number) in JavaScript?",
    options: ["isNaN()", "checkNaN()", "Number.isNaN()", "isNotNumber()"],
    correctAnswer: "isNaN()",
  },
  {
    number: 49,
    question:
      "Which JavaScript method is used to add an event listener to an element?",
    options: [
      "addEventListener()",
      "attachEvent()",
      "bindEvent()",
      "setListener()",
    ],
    correctAnswer: "addEventListener()",
  },
  {
    number: 50,
    question: "Which method is used to remove an event listener in JavaScript?",
    options: [
      "removeEventListener()",
      "detachEvent()",
      "unbindEvent()",
      "clearListener()",
    ],
    correctAnswer: "removeEventListener()",
  },
];

/*
// Array containing the questions
var questions = [
  "What is the capital of Spain?",
  "Who won the FIFA Women's World Cup in 2019?",
  "What is the smallest country in the world?",
  "Who invented the telephone?",
  "What is the tallest mountain in the world?"
];

// Function to select a random question from the array
function getRandomQuestion() {
  var randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

// Function to display the quiz
function displayQuiz(maxQuestions) {
  var quiz = document.getElementById("quiz");
  var numQuestionsDisplayed = 0;

  // Loop until max number of questions are displayed
  while (numQuestionsDisplayed < maxQuestions) {
    var question = getRandomQuestion();

    // Add the question to the quiz
    var questionDiv = document.createElement("div");
    questionDiv.innerHTML = question;
    quiz.appendChild(questionDiv);

    // Increment the number of questions displayed
    numQuestionsDisplayed++;
  }
}

// Call the function to display the quiz (10 questions in this example)
displayQuiz(10);






// Array of questions (already provided)
const questionsArr = [
  // (Insert the 50 questions array here)
];

// Function to shuffle the questions array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle the questions array
shuffleArray(questionsArr);

// Variables to keep track of the current question
let currentQuestionIndex = 0;

// Function to display a question on the UI using map
function displayQuestion() {
  const question = questionsArr[currentQuestionIndex];

  document.getElementById('question-number').textContent = `Question ${question.number}`;
  document.getElementById('question').textContent = question.question;
  
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = ''; // Clear previous options
  
  question.options.map(option => {
    const optionButton = document.createElement('button');
    optionButton.textContent = option;
    optionButton.onclick = () => checkAnswer(option);
    optionsDiv.appendChild(optionButton);
  });
}

// Function to check the selected answer
function checkAnswer(selectedOption) {
  const question = questionsArr[currentQuestionIndex];
  
  if (selectedOption === question.correctAnswer) {
    alert('Correct!');
  } else {
    alert(`Wrong! The correct answer is ${question.correctAnswer}`);
  }

  // Move to the next question
  currentQuestionIndex++;
  
  // If there are more questions, display the next one
  if (currentQuestionIndex < questionsArr.length) {
    displayQuestion();
  } else {
    alert('Quiz completed!');
  }
}

// Initialize the quiz by displaying the first question
document.getElementById('next-btn').onclick = displayQuestion;
displayQuestion(); // Display the first question immediately

*/
