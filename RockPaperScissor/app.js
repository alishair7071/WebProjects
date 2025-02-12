let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg= document.querySelector("#msg");
let userScorePara= document.querySelector("#user-score");
let compScorePara= document.querySelector("#comp-score");


choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const playGame = (userChoice) => {
  let compChoice = generateCompChoice();
  console.log("user choice is: ", userChoice);
  console.log("comp choice is: ", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice == "rock") {
      userWin = compChoice == "paper" ? false : true;
    } else if (userChoice == "paper") {
      userWin = compChoice == "scissors" ? false : true;
    } else {
      userWin = compChoice == "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

const showWinner= (userWin, userChoice, compChoice)=>{

    if(userWin){
        console.log("You win");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Won! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor= "green";
    }
    else{
        console.log("You lose");
        compScore++;
        compScorePara.innerText= compScore;
        msg.innerText=`You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor= "red";
    }

}

const generateCompChoice = (userChoice) => {
  let options = ["rock", "paper", "scissors"];
  let randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const drawGame = () => {
  console.log("Game is draw");
  msg.innerText="Game Draw. Try again";
  msg.style.backgroundColor= "#081b31";
};
