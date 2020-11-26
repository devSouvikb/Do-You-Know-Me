var readlineSync = require("readline-sync");
const chalk = require("chalk");

var playerName = readlineSync.question(
  chalk.yellowBright("🙏  Namaste! Give me your name Please 🙏\n=> ")
);
console.log(
  chalk.bold.underline.cyanBright(
    `\n👋  Welcome! to ${chalk.yellow(
      `"DO YOU KNOW ME"`
    )} Quiz Game ${chalk.bold.yellowBright(playerName)}`
  )
);

console.log(
  chalk.magentaBright(
    `\nRules:-\n1. Total number of Questions 5\n2. Each Question has 2 points for answering correct\n3. There is no negative marking for wrong answer`
  )
);

if (
  readlineSync.keyInYN(
    chalk.bgWhite.black.bold(`\nLets Play!!! ${playerName} `)
  )
) {
} else {
  console.log(chalk.red.bold("\n😔 😔  Oh no!! You exit from the game"));
  process.exit();
}

var score = 0;

var play = (question, answer) => {
  var playerAnswer = readlineSync.question(question);

  if (playerAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green.bold("\nCongrats!! You are Correct 👍 👍"));
    score = score + 2;
  } else {
    console.log(chalk.red.bold("\nOops!! You are Wrong 👎 👎"));
  }

  console.log(
    chalk.bgMagentaBright.black.bold(
      `Current score is: ${chalk.red.bold(score)} `
    )
  );
  console.log("         ----------------     \n");
};

var questionSet = [
  {
    question: chalk.yellowBright("\nQ.1 Which State I am from?\n=> "),
    answer: "West Bengal",
  },

  {
    question: chalk.yellowBright("Q.2 Where do I currently live?\n=> "),
    answer: "Chennai",
  },

  {
    question: chalk.yellowBright(
      "Q.3 What is my favourite Programming Language?\n=> "
    ),
    answer: "Javascript",
  },

  {
    question: chalk.yellowBright("Q.4 What is my favourite Web Series?\n=> "),
    answer: "Breaking Bad",
  },

  {
    question: chalk.yellowBright(
      "Q.5 Who is my favourite Marvel Superhero?\n=> "
    ),
    answer: "Iron Man",
  },
];

for (var i = 0; i < questionSet.length; i++) {
  var currentQuestion = questionSet[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log(
  chalk.cyanBright.bold("Your final score is: ", chalk.red.bold(score))
);

if (score === 10) {
  console.log(
    chalk.yellowBright(
      "\n🤩 🤩  Wow!! You have answered all correct 🎉 🎉\n🤗  You are a close Friend 🤗"
    )
  );
} else if (score <= 4) {
  console.log(chalk.yellowBright("\n😔  You don't know much about me 😔"));
} else {
  console.log(chalk.yellowBright("\n😊  You are a good friend 😊"));
}

var leaderBoard = [
  {
    name: "Souvik",
    score: 10,
  },

  {
    name: "Rahul",
    score: 10,
  },

  {
    name: "Mahir",
    score: 8,
  },

  {
    name: "Sahil",
    score: 5,
  },
];

for (let i = 0; i < leaderBoard.length; i++) {
  if (leaderBoard[i].score < score) {
    console.log(
      chalk.cyan.bold(
        `\n🎉  Congrats! ${chalk.red.bold(
          playerName
        )} you have broken records 🎉`
      )
    );
    break;
  }
}

console.log(
  chalk.magentaBright(
    `\n${chalk.red.bold(
      "=>>"
    )} Please sent a screenshort of your score, so that I can update the LeaderBoard.`
  )
);

console.log(
  chalk.yellow.bold(
    `\n\n🙏 🙏  Thanks for playing ${chalk.red.bold(
      playerName
    )} 😊  Hope you enjoyed!!!`
  )
);
