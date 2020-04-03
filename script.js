// Assignment code here

let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
let upperCase = lowerCase.map(function (letter) {
  return letter.toUpperCase();
    })
let special = "!@#$%^&*()-_+=?/\[]{}<>".split(""); 


function promptForLength() {
  let userResponse = prompt("How long would you like your password to be? (8 to 128 characters please)");
  let numberResponse = Number(userResponse);
  while (isNaN(numberResponse) || numberResponse > 128 || numberResponse < 8) {
      if (isNaN(numberResponse)) {
        userResponse = prompt("That's not a number. Please enter a number.");
      }
      else if(numberResponse > 128) {
        userResponse = prompt("That's too many characters.");
      }
      else if (numberResponse < 8) {
        userResponse = prompt("That's not enough characters.");
      }
      numberResponse = Number(userResponse);//Need to turn that value into a number once again if we get to this point because everytime the userResponse is asked it's value is always a string. 
  } 
  return numberResponse;   
}

function promptForCharacters(question) {
  let response = prompt(question).toLowerCase();
  do {
    if(response === "yes") {
      return true;
    }
    else if (response === "no") {
      return false;
    }
    else {
      response = prompt("I don't recognize that answer. " + question).toLowerCase();
    }
  } while (response !== "yes" && response !== "no"); 

}

function generatePassword() {
  let length = promptForLength();
  let useNumbers = false;
  let useLowerCase = false;
  let useUpperCase = false;
  let useSpecial = false;
  
  do {
    useNumbers = promptForCharacters("Do you want to use numbers? (yes or no)");
    useLowerCase = promptForCharacters("Do you want to use lower case letters? (yes or no)");
    useUpperCase = promptForCharacters("Do you want to use upper case letters? (yes or no)");
    useSpecial = promptForCharacters("Do you want to use special characters? (yes or no)");
    if(!useNumbers && !useLowerCase && !useUpperCase && !useSpecial) {
      alert("You need to choose at least one character type.");
    }
  } while(!useNumbers && !useLowerCase && !useUpperCase && !useSpecial);
  
  let passArray = [];

  if (useNumbers) {
    passArray.splice(0,0,...numbers);
  } 
  if (useLowerCase) {
    passArray.splice(0,0,...lowerCase);
  }
  if (useUpperCase) {
    passArray.splice(0,0,...upperCase);
  }
  if (useSpecial) {
    passArray.splice(0,0,...special);
  }
  let password = "";
  for(i = 0; i <= length; i++) {
    let randomNum = Math.floor(Math.random() * passArray.length);
    password += passArray[randomNum];
  }
  return password;
}


function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = " ";
  var password = generatePassword();
  
  passwordText.value = password;
}

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);
