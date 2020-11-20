// Global array with options
const optionsToElect = ['Rock', 'Paper', 'Scissor'];
// Pattern of Regex to match de options
const pattern = /^(rock|paper|scissor)$/i;

let playerPlay = playerSelection();
let computerPlay = computerSelection();

// Function of computer random selection
function computerSelection() {
  // Variable = random election of array length
  let randomElection = Math.floor(Math.random() * optionsToElect.length);
  // Return the random election of the array
  return optionsToElect[randomElection];
}

// Function of the player selection
function playerSelection() {
  // Variable with the written selection
  let writtenSelection = prompt(
    'Write an option between: Rock, Paper or Scissor.\nLeft blank will be random!'
  );
  // If written selection match with te redex pattern
  if (pattern.test(writtenSelection)) {
    // Capitalize first letter
    writtenSelection =
      writtenSelection.charAt(0).toUpperCase() +
      writtenSelection.slice(1).toLowerCase();
    return writtenSelection;
    // If the player dont write anything: random option
  } else if (writtenSelection == '') {
    return (writtenSelection =
      optionsToElect[Math.floor(Math.random() * optionsToElect.length)]);
    // If player canceled the prompt
  } else if (writtenSelection == null) {
    return (writtenSelection = null);
  } else {
    // If player election dont match with the redex pattern
    alert('Wrong choice. Check the spelling.');
    window.location.reload(true);
  }
}

console.log(`Player selection: ${playerPlay}`);
console.log(`Computer selection: ${computerPlay}`);
