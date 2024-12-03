const mainBox = document.querySelector(".inner-main");
const newGame = document.querySelector(".new-game-button");
const result = document.querySelector(".winner");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
let counter = 0;
let winnerSelected = false;

function removeAll() {
  console.log(mainBox);
  for (let i = 0; i < 3; i++) {
    let row = mainBox.children[i].querySelectorAll(`.box`);
    for (let j = 0; j < 3; j++) {
      row[j].textContent = "";
      row[j].classList.remove("o");
      row[j].classList.remove("x");
    }
  }
}
result.textContent = "Player O Term";

function checkWinner() {
  let box1 = mainBox.children[0].children[0];
  let box2 = mainBox.children[0].children[1];
  let box3 = mainBox.children[0].children[2];
  let box4 = mainBox.children[1].children[0];
  let box5 = mainBox.children[1].children[1];
  let box6 = mainBox.children[1].children[2];
  let box7 = mainBox.children[2].children[0];
  let box8 = mainBox.children[2].children[1];
  let box9 = mainBox.children[2].children[2];

  if (
    box1.classList.contains("o") &&
    box2.classList.contains("o") &&
    box3.classList.contains("o")
  ) {
    return "o";
  } else if (
    box1.classList.contains("x") &&
    box2.classList.contains("x") &&
    box3.classList.contains("x")
  ) {
    return "x";
  }

  if (
    box4.classList.contains("o") &&
    box5.classList.contains("o") &&
    box6.classList.contains("o")
  ) {
    return "o";
  } else if (
    box4.classList.contains("x") &&
    box5.classList.contains("x") &&
    box6.classList.contains("x")
  ) {
    return "x";
  }

  if (
    box7.classList.contains("o") &&
    box8.classList.contains("o") &&
    box9.classList.contains("o")
  ) {
    return "o";
  } else if (
    box7.classList.contains("x") &&
    box8.classList.contains("x") &&
    box9.classList.contains("x")
  ) {
    return "x";
  }

  if (
    box1.classList.contains("o") &&
    box4.classList.contains("o") &&
    box7.classList.contains("o")
  ) {
    return "o";
  } else if (
    box1.classList.contains("x") &&
    box4.classList.contains("x") &&
    box7.classList.contains("x")
  ) {
    return "x";
  }

  if (
    box2.classList.contains("o") &&
    box5.classList.contains("o") &&
    box8.classList.contains("o")
  ) {
    return "o";
  } else if (
    box2.classList.contains("x") &&
    box5.classList.contains("x") &&
    box8.classList.contains("x")
  ) {
    return "x";
  }

  if (
    box3.classList.contains("o") &&
    box6.classList.contains("o") &&
    box9.classList.contains("o")
  ) {
    return "o";
  } else if (
    box3.classList.contains("x") &&
    box6.classList.contains("x") &&
    box9.classList.contains("x")
  ) {
    return "x";
  }

  if (
    box1.classList.contains("o") &&
    box5.classList.contains("o") &&
    box9.classList.contains("o")
  ) {
    return "o";
  } else if (
    box1.classList.contains("x") &&
    box5.classList.contains("x") &&
    box9.classList.contains("x")
  ) {
    return "x";
  }

  if (
    box3.classList.contains("o") &&
    box5.classList.contains("o") &&
    box7.classList.contains("o")
  ) {
    return "o";
  } else if (
    box3.classList.contains("x") &&
    box5.classList.contains("x") &&
    box7.classList.contains("x")
  ) {
    return "x";
  }
  return "";
}

function myTerm(clickedBox) {
  if (
    !clickedBox.classList.contains("x") &&
    !clickedBox.classList.contains("o")
  ) {
    clickedBox.textContent = "O";
    clickedBox.classList.add("o");
    counter++;
  }
}

function yourTerm(clickedBox) {
  if (
    !clickedBox.classList.contains("x") &&
    !clickedBox.classList.contains("o")
  ) {
    clickedBox.textContent = "X";
    clickedBox.classList.add("x");
    counter++;
  }
}

mainBox.addEventListener("click", (e) => {
  const clickedBox = e.target;

  if (!winnerSelected) {
    if (counter % 2 == 0) {
      myTerm(clickedBox);
      result.textContent = "Player X Term";
    } else {
      yourTerm(clickedBox);
      result.textContent = "Player O Term";
    }
  }

  let winner = checkWinner();
  if (winner === "x") {
    result.textContent = "सो जाओ साक्षी कब तक राहुल जी से बात करते रहोगी";
    winnerSelected = true;
  } else if (winner === "o") {
    result.textContent = "सो जाओ साक्षी कब तक राहुल जी से बात करते रहोगी";
    winnerSelected = true;
  }
  if(counter === 9 && !winnerSelected){
    result.textContent = "सो जाओ साक्षी कब तक राहुल जी से बात करते रहोगी";
  }
});

newGame.addEventListener("click", () => {
  removeAll();
  counter = 0;
  winnerSelected = false;
  result.textContent = "Player O Term";
});

// Congratulation🎉 X Won The Match!
// क्या ख़ुशी क्या हाल है ज्यादा गेम नहीं खेलो कल परीक्षा है पढ़ लो
