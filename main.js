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
