//set variables
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
let upperCase = lowerCase.map(function (letter) {
  return letter.toUpperCase();
    })
let special = "!@#$%^&*()-_+=?/\[]{}<>".split(""); 

//length function
function promptForLength() {
  let userResponse = prompt("How long should your password be? (8 to 128 characters please)");
  let numberResponse = Number(userResponse);
  while (isNaN(numberResponse) || numberResponse > 128 || numberResponse < 8) {
      if (isNaN(numberResponse)) {
        userResponse = prompt("You must enter a number.");
      }
      else if(numberResponse > 128) {
        userResponse = prompt("That's too many characters. Enter less than 128.");
      }
      else if (numberResponse < 8) {
        userResponse = prompt("That's not enough characters. Enter more than 8.");
      }
      numberResponse = Number(userResponse);
  } 
  return numberResponse;   
}

//type of characters function
function promptForType(question) {
  let response = prompt(question).toLowerCase();
  do {
    if(response === "y") {
      return true;
    }
    else if (response === "n") {
      return false;
    }
    else {
      response = prompt("I don't recognize that answer. " + question).toLowerCase();
    }
  } while (true); 
}

//generate password function
function generatePassword() {
  let length = promptForLength();
  let useNumbers = false;
  let useLowerCase = false;
  let useUpperCase = false;
  let useSpecial = false;
  
  do {
    useNumbers = promptForType("Do you want to use numbers? (y or n)");
    useLowerCase = promptForType("Do you want to use lower case letters? (y or n)");
    useUpperCase = promptForType("Do you want to use upper case letters? (y or n)");
    useSpecial = promptForType("Do you want to use special characters? (y or n)");
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

//write password function
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = " ";
  var password = generatePassword();
  passwordText.value = password;
}


var generateBtn = document.querySelector("#generate");


generateBtn.addEventListener("click", writePassword);
