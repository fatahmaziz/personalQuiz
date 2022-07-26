let readlineSync = require('readline-sync');

let userName = readlineSync.question(`Enter your name - `)
let userScore = 0
let topPerformers= {
  firstPlace: `Nandu`,
  firstScore : 3,
  secondPlace : `Hans`,
  secondScore : 2,
  thirdPlace : `Vimal`,
  thirdScore : 1
}

let questions = [{
  question : `Which year was I born in? - `,
  answer : `1999`
}, {
  question : `Which city is my office at? - `,
  answer : `Bengaluru`
}, {
  question: `Do I share my birth date with MS Dhoni?(Yes/No) - `,
  answer : `Yes`
}]

function checkAnswer(question, answer){
    let userAnswer = readlineSync.question(question)
    if(userAnswer.toLowerCase() === answer.toLowerCase()){
      console.log(`You have answered correctly.\n`)
      userScore++
    } else{
      console.log(`You have answered the incorrectly.\n`)
      if(userScore>0){
        userScore--
      }
    }
    console.log(`Your current score - ${userScore}\n`)
}

function quiz(){
  for(let initialValue =0; initialValue<questions.length; initialValue++){
    let currentQuestion = questions[initialValue]
    console.log(`Question ${initialValue + 1} - `)
    checkAnswer(currentQuestion.question, currentQuestion.answer)
  }
}

function topScore(){
    console.log(`Your have scored ${userScore} points.\n`)
  
    console.log(`Leaderboard - \n`)
  
    topPerformers.userPlace = userName
    topPerformers.userScore = userScore
    
    if(userScore == 3){
      console.log(`1. ${topPerformers.userPlace} has scored ${topPerformers.userScore}\n`)
      console.log(`2. ${topPerformers.firstPlace} has scored ${topPerformers.firstScore}\n`)
      console.log(`3. ${topPerformers.secondPlace} has scored ${topPerformers.secondScore}\n`)
      console.log(`Congratulations!!! You have been placed first on the leaderboard.\n`)
    } else if(userScore == 2){
      console.log(`1. ${topPerformers.firstPlace} has scored ${topPerformers.firstScore}\n`)
      console.log(`2. ${topPerformers.userPlace} has scored ${topPerformers.userScore}\n`)
      console.log(`3. ${topPerformers.secondPlace} has scored ${topPerformers.secondScore}\n`)
      console.log(`Congratulations!!! You have been placed second on the leaderboard. Play again to better your score.\n`)
    }else if(userScore == 1){
      topPerformers.thirdPlace = userName
      console.log(`1. ${topPerformers.firstPlace} has scored ${topPerformers.firstScore}\n`)
      console.log(`2. ${topPerformers.secondPlace} has scored ${topPerformers.secondScore}\n`)
      console.log(`3. ${topPerformers.userPlace} has scored ${topPerformers.userScore}\n`)
      console.log(`Congratulations!!! You have been placed third on the leaderboard. Play again to better your score.\n`)
    }else{
      console.log(`You scored ${userScore}, hence you cannot be placed on the leaderboard`)
    }
  
    console.log(`Take a screenshot and send it in get your name displayed on the leaderboard permanently.`)
  }

function playQuiz(){
  console.log(`Welcome ${userName}! Are you ready to play DO YOU KNOW FATAH??`)
  let userChoice = readlineSync.question(`Press Y to play the game. Press S to view the scoreboard. Press any other button to exit.\n`)
  if(userChoice.toLowerCase() === `y`){
    quiz()
    topScore()
  } else if(userChoice.toLowerCase() === `s`){
    console.log(`Leaderboard - \n`)
    console.log(`1. ${topPerformers.firstPlace} has scored ${topPerformers.firstScore}\n`)
    console.log(`2. ${topPerformers.secondPlace} has scored ${topPerformers.secondScore}\n`)
    console.log(`3. ${topPerformers.thirdPlace} has scored ${topPerformers.thirdScore}\n`)
    let userChoice = readlineSync.question(`Press Y to play the game. Press any other button to exit.\n`)
    if(userChoice.toLowerCase() === `y`){
      quiz()
      topScore()
    } else{
      console.log(`You have decide not to play :(\nIf you change your mind refresh the page :)`)
    }
  }else{
    console.log(`You have decide not to play :(\nIf you change your mind refresh the page :)`)
  }
}

playQuiz()