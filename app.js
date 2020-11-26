var readlineSync = require("readline-sync");
const chalk = require("chalk");

var playerName = readlineSync.question(
  "Namaste! Give me your name Please\n=> "
);
console.log(`\nWelcome! to ${`"DO YOU KNOW ME"`} Quiz Game ${playerName}`);

console.log(
  `\nRules:-\n1. Total number of Questions 5\n2. Each Question has 2 points for answering correct\n3. There is no negative marking for wrong answer`
);

var score = 0;

var play = (question, answer) => {
  var playerAnswer = readlineSync.question(question);

  if (playerAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("\nCongrats!! You are Correct");
    score = score + 2;
  } else {
    console.log("\nOops!! You are Wrong");
  }

  console.log(`Current score is: ${score} `);
  console.log("         ----------------     \n");
};

var questionSet = [
  {
    question: "\nQ.1 Which State I am from?\n=> ",
    answer: "West Bengal",
  },

  {
    question: "Q.2 Where do I currently live?\n=> ",
    answer: "Chennai",
  },

  {
    question: "Q.3 What is my favourite Programming Language?\n=> ",
    answer: "Javascript",
  },

  {
    question: "Q.4 What is my favourite Web Series?\n=> ",
    answer: "Breaking Bad",
  },

  {
    question: "Q.5 Who is my favourite Marvel Superhero?\n=> ",
    answer: "Iron Man",
  },
];

for (var i = 0; i < questionSet.length; i++) {
  var currentQuestion = questionSet[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("Your final score is: ", score);

console.log(`\n\nThanks for playing ${playerName} Hope you enjoyed!!!`);
