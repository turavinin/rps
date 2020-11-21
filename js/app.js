// Global array with options
const optionsToElect = ['Rock', 'Paper', 'Scissor'];
// Pattern of Regex to match de options
const pattern = /^(rock|paper|scissor)$/i;
// Variables to store the election of the players

// Variables of players count
let player = 0;
let computer = 0;

// Function of computer random selection
function computerSelection() {
  // Variable = random election of array length
  let randomElection = Math.floor(Math.random() * optionsToElect.length);
  // Return the random election of the array
  return optionsToElect[randomElection];
}

// Function of the player selection
function playerSelection() {
  let writtenSelection;
  // while loop for match the selection
  do {
    writtenSelection = prompt(
      'Write an option between: Rock, Paper or Scissor.\nLeft blank will be random!'
    );
  } while (
    !pattern.test(writtenSelection) &&
    writtenSelection != null &&
    writtenSelection != ''
  );
  // if selection is blank, the option will be random
  if (writtenSelection == '') {
    return (writtenSelection =
      optionsToElect[Math.floor(Math.random() * optionsToElect.length)]);
    // If player canceled the prompt
  } else if (writtenSelection == null) {
    return (writtenSelection = null);
  } else {
    writtenSelection =
      writtenSelection.charAt(0).toUpperCase() +
      writtenSelection.slice(1).toLowerCase();
    return writtenSelection;
  }
}

function playRound(playerChoise, computerChoise) {
  if (playerChoise == computerChoise) {
    console.log(`It's a tie!`);
  } else if (playerChoise == null) {
    return (player = null);
  } else if (
    (playerChoise == optionsToElect[0] &&
      computerChoise == optionsToElect[2]) ||
    (playerChoise == optionsToElect[1] &&
      computerChoise == optionsToElect[0]) ||
    (playerChoise == optionsToElect[2] && computerChoise == optionsToElect[1])
  ) {
    console.log(`You win! ${playerChoise} beats ${computerChoise}.`);
    return (player += 1);
  } else {
    console.log(`You lose! ${computerChoise} beats ${playerChoise}.`);
    return (computer += 1);
  }
}

function game() {
  while (player != 3 || computer != 3) {
    playRound(playerSelection(), computerSelection());
    if (player == 3) {
      console.log(
        `You won the game! The final score is: Player(${player}), Computer (${computer})`
      );
      player = 0;
      computer = 0;
      return;
    } else if (computer == 3) {
      console.log(
        `You lose the game! The final score is: Player(${player}), Computer (${computer})`
      );
      player = 0;
      computer = 0;
      return;
    } else if (player == null) {
      console.log(`=(`);
      player = 0;
      computer = 0;
      return;
    } else {
      console.log(`Player: ${player}, Computer: ${computer}`);
    }
  }
}

// Start game when the button is clicked
document.querySelector('#bgnBtn').addEventListener('click', game);
