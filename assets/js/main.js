//Pseudo Code:
// a timer counts down from 60 seconds to 0 when start quiz button is clicked (event listener)
// quiz begins (question presented) when start quiz button is clicked
// time (5 seconds) is subtracted from the clock for each incorrect answer
// user does not advance to the next question until a correct answer is selected
// user receives feedback for correct and incorrect selections
// quiz stops when all questions are answered or timer reaches zero seconds remaining
// score = remaining seconds 
// user can save initials and score at the end of the game (leaderboard)
// user can clear the leaderboard (delete scores and initials)
// from leaderboard user can restart quiz
// from leaderboard page user can return to homepage



// Resources reviewed: https://www.udemy.com/course/build-a-quiz-app-with-html-css-and-javascript/learn/lecture/13685348#overview

let questionhtml = document.getElementById('questText');
let choices1html = document.getElementById('choice1');
let choices2html = document.getElementById('choice2');
let choices3html = document.getElementById('choice3');
let choices4html = document.getElementById('choice4');
let startquizhtml = document.getElementById('startQuiz');
let countdownhtml = document.getElementById('countdown');
let feedbackhtml = document.getElementById('feedback');

console.log(startquizhtml);

// arrays with questions, answer options, and correct answers.

let questions = [
  {
    questNum: 1,
    questText: 'In what year was Lake Champlain discovered by French explorer, Samuel de Champlain?',
    choicesText: ['1557', '1609', '1689', '1777'],
    correctAnswer: '1609'
  },

  {
    questNum: 2,
    questText: 'What is the name of the mysterious dinasaur-like creature who lives in Lake Champlain?',
    choicesText: ['Champ', 'Freddisaurus', 'Loch Ness Monster', 'Sturgie the Sturgeon'],
    correctAnswer: 'Champ'
  },

  {
    questNum: 3,
    questText: 'Which two states are connected by the Lake Champlain bridge?',
    choicesText: ['Washington & Minnesota', 'Idaho & Minnesota', 'New York & Vermont', 'Maine & New Hampshire'],
    correctAnswer: 'New York & Vermont'
  },

  {
    questNum: 4,
    questText: 'The deepest point in Lake Champlain is how many feet?',
    choicesText: ['126', '348', '400', '1500'],
    correctAnswer: '400'
  },

  {
    questNum: 5,
    questText: 'How many species of fish are there in Lake Champlain',
    choicesText: ['25', '90', '200', '625'],
    correctAnswer: '90'
  }

];

let secondsLeft = 60;
let timerBreak = 0;
// let timerBreak = 0

// skipping new element for now
let score = 0;
let questionIndex = 0;

startquizhtml.addEventListener('click', function ()
// document.getElementById("countdown").addEventListener('click', function() 
{
  if (timerBreak === 0) {
    timerBreak = setInterval(function () {
      secondsLeft--
      countdownhtml.textContent = 'Time: ' + secondsLeft

      if (secondsLeft <= 0) {
        clearInterval(timerBreak)
        // timerBreak = 1
        countdownhtml.textContent = "You're out of time!"
      }
    }, 1000)
  };

  funcQuestions(0)
});

function funcQuestions (i) {

  // for  (let i = 0; i <5; i++) 

  questionIndex = i;

  if (questionIndex > 4) {
    secondsLeftfinal = secondsLeft;
    clearInterval(timerBreak);
    // prompt("Time up")
    countdownhtml.textContent = 'Congratulations! Your score is: ' + String(secondsLeftfinal);
    console.log(questionIndex);
    secondsLeft = 60;
    //clearInterval(timerBreak)
    savetoleaderboard();
    return;
  };

  let userQuestion = questions[i].questText;
  questionhtml.textContent = userQuestion;
  // console.log(userQuestion)

  let userChoice1 = questions[i].choicesText[0];
  choices1html.textContent = userChoice1;
  // console.log(userChoice1)

  let userChoice2 = questions[i].choicesText[1];
  choices2html.textContent = userChoice2;
  // console.log(userChoice2)

  let userChoice3 = questions[i].choicesText[2];
  choices3html.textContent = userChoice3;
  // console.log(userChoice3)

  // let userChoice4 = questions[i].choicesText[3]
  // choices4html.textContent = userChoice4

  choices4html.textContent = questions[i].choicesText[3];
  // console.log(userChoice4)

  console.log(questionIndex);
  console.log(setInterval);
  console.log(timerBreak);

  // if (questions[0].correctAnswer ===  ){}

};

function choice1selectfunction () {
  let userSelectedAnswer = questions[questionIndex].choicesText[0];
  // console.log(userSelectedAnswer)
  if (userSelectedAnswer === questions[questionIndex].correctAnswer) {
    // console.log("You are correct")
    feedbackhtml.textContent = 'You are correct!';
    // i++
    console.log(questionIndex);
    funcQuestions(questionIndex + 1);
    return;
  };
  if (userSelectedAnswer !== questions[questionIndex].correctAnswer) {
    // console.log("You are wrong")
    feedbackhtml.textContent = 'You are wrong, try again!';
    secondsLeft = secondsLeft - 5;
  };
};

function choice2selectfunction () {
  let userSelectedAnswer = questions[questionIndex].choicesText[1];
  // console.log(userSelectedAnswer)
  if (userSelectedAnswer === questions[questionIndex].correctAnswer) {
    // console.log("You are correct")
    feedbackhtml.textContent = 'You are correct!';
    // i++
    console.log(questionIndex);
    funcQuestions(questionIndex + 1);
    return;
  };
  if (userSelectedAnswer != questions[questionIndex].correctAnswer) {
    // console.log("You are wrong")
    feedbackhtml.textContent = 'You are wrong, try again!';
    secondsLeft = secondsLeft - 5;
  };
};

function choice3selectfunction () {
  let userSelectedAnswer = questions[questionIndex].choicesText[2];
  // console.log(userSelectedAnswer)
  if (userSelectedAnswer === questions[questionIndex].correctAnswer) {
    // console.log("You are correct")
    feedbackhtml.textContent = 'You are correct!';
    // i++
    console.log(questionIndex);
    funcQuestions(questionIndex + 1);
    return;
  };
  if (userSelectedAnswer != questions[questionIndex].correctAnswer) {
    // console.log("You are wrong")
    feedbackhtml.textContent = 'You are wrong, try again!';
    secondsLeft = secondsLeft - 5;
  };
};

function choice4selectfunction () {
  let userSelectedAnswer = questions[questionIndex].choicesText[3];
  // console.log(userSelectedAnswer)
  if (userSelectedAnswer === questions[questionIndex].correctAnswer) {
    // console.log("You are correct")
    feedbackhtml.textContent = 'You are correct!';
    // i++
    console.log(questionIndex);
    funcQuestions(questionIndex + 1);
    return;
  };
  if (userSelectedAnswer != questions[questionIndex].correctAnswer) {
    // console.log("You are wrong")
    feedbackhtml.textContent = 'You are wrong, try again!';
    secondsLeft = secondsLeft - 5;
  };
};

choices1html.addEventListener('click', choice1selectfunction);
choices2html.addEventListener('click', choice2selectfunction);
choices3html.addEventListener('click', choice3selectfunction);
choices4html.addEventListener('click', choice4selectfunction);

function savetoleaderboard () {
  console.log('Save to Leaderboard');
  console.log('Your score was: ' + String(secondsLeft));
};

