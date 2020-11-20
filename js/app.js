// Global array with options
const optionsToElect = ['Rock', 'Paper', 'Scissors'];

// Function of computer random election
function computerPlay() {
  // Variable = random election of array length
  let randomElection = Math.floor(Math.random() * optionsToElect.length);
  // Return the random election of the array
  return optionsToElect[randomElection];
}

// function of player election
function playerSelection() {
  // variable with written player selection
  let writtenSelection = prompt(
    'Write an option between: Rock, Paper or Scissor.\nLeft blank will be random!'
  );
  //If left blank the option is random
  if (writtenSelection == '') {
    return (writtenSelection = Math.floor(
      Math.random() * optionsToElect.length
    ));
    // If cancel the prompt
  } else if (writtenSelection == null) {
    return;
  } else if (
    writtenSelection != optionsToElect[0] ||
    writtenSelection != optionsToElect[1] ||
    writtenSelection != optionsToElect[2]
  ) {
    return;
  } else {
    console.log(writtenSelection);
    return writtenSelection;
  }
}

computerPlay();
playerSelection();

console.log(computerPlay());
console.log(playerSelection());
