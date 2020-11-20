// Global array with options
const optionsToElect = ['Rock', 'Paper', 'Scissor'];
// Pattern of Regex to match de options
const pattern = /^(rock|paper|scissor)$/i;

// Function of computer random selection
function computerPlay() {
  // Variable = random election of array length
  let randomElection = Math.floor(Math.random() * optionsToElect.length);
  // Return the random election of the array
  return optionsToElect[randomElection].toUpperCase();
}

// Function of the player selection
function playerSelection() {
  // Variable with the written selection
  let writtenSelection = prompt(
    'Write an option between: Rock, Paper or Scissor.\nLeft blank will be random!'
  );
  // If written selection match with te redex pattern
  if (pattern.test(writtenSelection)) {
    return writtenSelection.toUpperCase();
    // If the player dont write anything: random option
  } else if (writtenSelection == '') {
    return (writtenSelection = optionsToElect[
      Math.floor(Math.random() * optionsToElect.length)
    ].toUpperCase());
    // If player canceled the prompt
  } else if (writtenSelection == null) {
    return (writtenSelection = null);
  } else {
    // If player election dont match with the redex pattern
    alert('Wrong choice. Check the spelling.');
    window.location.reload(true);
  }
}

console.log(computerPlay());
console.log(playerSelection());

/* 
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
    // If the written selection matches with de array data
  } else if (optionsToElect.includes(writtenSelection)) {
    return writtenSelection;
    // If the written selection dont matches with data
  } else {
    return (writtenSelection = null);
  }
}

console.log(playerSelection());

 */
