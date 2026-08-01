const rps = (p1, p2) => {
  let result = "";

  if (p1 !== "scissors" || p1 !== "rock" || p1 !== "paper") {
    result = "Incorrect data";
  }
  if (p2 !== "scissors" || p2 !== "rock" || p2 !== "paper") {
    result = "Incorrect data";
  }

  if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock")
  ) {
    result = "Player 1 won!";
  } else if (p1 !== p2) {
    result = "Player 2 won!";
  } else {
    result = "Draw!";
  }

  return result;
};

console.log(rps("rock", "scissors"));
