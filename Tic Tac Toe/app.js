let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("btn has clicked");
    if (turnO) {
      box.style.color="blue"
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;
    checkWinner();
  });
});

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

const checkWinner = () => {
  for (pattern of winPatterns) {
    let boxVal1 = boxes[pattern[0]].innerText;
    let boxVal2 = boxes[pattern[1]].innerText;
    let boxVal3 = boxes[pattern[2]].innerText;

    if (boxVal1 != "" && boxVal2 != "" && boxVal3 != "") {
      if (boxVal1 === boxVal2 && boxVal2 === boxVal3) {
        console.log(`${boxVal1} won the match`);
        showWinner(boxVal1);
        return;
      }
    }
  }
  if (count == 9) {
    msg.innerText = `No One is Winner`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  }
};

function showWinner(winner) {
  msg.innerText = `Congratulations winner is ${winner}`;
  msgContainer.classList.remove("hide");
  count = 0;
  disableBoxes();
}

function disableBoxes() {
  for (box of boxes) {
    box.disabled = true;
  }
}

function enableBoxes() {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
}

function resetGame() {
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
}
