//declarations 
let range = 2
let point = 0

//methods
function preditGame() {
  var number = Math.floor(Math.random() * range) + 1 //generate random number between 1 and the range
  var guess = prompt("Guess the generated number between 1 and " + range)

  //check if guess is correct
  if (guess == number) {
    continueGame()
  } else {
    restartGame(number)
  }

}

function continueGame() {
  console.log("Hurray! You guessed right " + username + "\nyou have \n" + point + "\n Moving to next stage...\n")
  range += range
  point += point
  preditGame()
}

function restartGame(no) {
  console.log("Sorry " + username + "! You guessed wrong\n The generated number is " + no + "\n");
  var res = prompt("Restart game?(y/n)")
  if (res == "y") {
    playGame()
  }
  else {
    console.log("Game ended")
  }
}

//game entry
if (username == undefined) {
  console.log("Welcome to the guessing game\n ")
  var username = prompt("Please enter your username");

} else {
  console.log("Welcome back to the guessing game " + username)
}

//show game instructions
console.log("Below are the game instructions\n You are to predict a randomly generated number within the range of 1 and " + range + ".\n The range will be incremented by 1 on each successful guess.\n Goodluck\n\n")

//start game
preditGame()