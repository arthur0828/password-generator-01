// Assignment Code
var generateBtn = document.querySelector("#generate");

//Global Scope Prompt Variables
var promptOne = prompt("How many characters? Chose from a MINIMUM of 8 characters and a MAXIMUM of 128 characters");
var promptTwo = confirm("Confirm Upper cases?");
var promptThree = confirm("Confirm Lower Cases?");
var promptFour = confirm("Confirm Numbers?");
var promptFive = confirm("Confirm Symbols?");

//Turns the inputed promptOne string into a number
const characterAmount = parseInt(promptOne);

//If else statement in case they are not meeting minimum criteria
if(promptOne >=8 && promptOne <=128){
  promptOne = promptOne;
}else{
  while(promptOne < 8 || promptOne >128){
  promptOne = prompt("You MUST choose 8 or Greater, You MUST chose 128 or LOWER");
  }
}

// Global Scope Character variables
const upperCaseArray = arrayFromLowToHigh(65, 90);
const lowerCaseArray = arrayFromLowToHigh(97, 122);
const numberListArray = arrayFromLowToHigh (48, 57);
const symbolListArray = arrayFromLowToHigh (33, 47
  ).concat(
    arrayFromLowToHigh(58, 64)
  ).concat(
    arrayFromLowToHigh(91, 96)
  .concat(123, 126)
  );

//Function that takes the keycode array numbers and are pushed into an array
function arrayFromLowToHigh(low, high){
  const array = []
    for (let i = low; i <= high; i++){
      array.push(i);
    }
    return array;
  }

//Function that writes the password and applies it to the Query
function writePassword() {
  var password = generatePassword (characterAmount, promptTwo, promptThree, promptFour, promptFive);
  var passwordText = (characterAmount, promptTwo, promptThree, promptFour, promptFive);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }


//Function that generates a random combination from the prompt criteria 
function generatePassword(characterAmount, promptTwo, promptThree, promptFour, promptFive) {
  let keyCombination = upperCaseArray;
    if(promptThree) keyCombination = keyCombination.concat(lowerCaseArray);
    if(promptFour) keyCombination = keyCombination.concat(numberListArray);
    if(promptFive) keyCombination = keyCombination.concat(symbolListArray);
  
  const passwordCombination = [];
    for(let i = 0; i < characterAmount; i = i + 1){
      const passwordType = 
      keyCombination [Math.floor(Math.random() * 
      keyCombination.length)];  
      passwordCombination.push(String.fromCharCode(passwordType));
    }
  return passwordCombination.join('');
}

//Event Listeners
generateBtn.addEventListener("click", writePassword); 
