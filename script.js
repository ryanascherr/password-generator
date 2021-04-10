// Assignment Code
const generateBtn = $("#generate");
let uppercaseCheckbox = $("#uppercase");
let lowercaseCheckbox = $("#lowercase");
let numberCheckbox = $("#numbers");
let specialCheckbox = $("#special");

// Add event listener to generate button
generateBtn.click(createPassword);

let password = "";
let availableCharacters = "";
let uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
let numberCharacters = "0123456789";
let specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

function createPassword() {
  // let passwordLength = prompt("Let's make your password! How many characters do you want your password to be? Choose a number between 8 and 128.");

  let passwordLength = parseInt($("#length").val().trim());

  if (passwordLength > 128 || passwordLength < 8) {
    document.getElementById("password").innerHTML = "Please enter a valid number between 8 and 128";
    return;
  } else {
    if (uppercaseCheckbox[0].checked) {
      availableCharacters += uppercaseCharacters;
    }
    
    if (lowercaseCheckbox[0].checked) {
      availableCharacters += lowercaseCharacters;
    }
    
    if (numberCheckbox[0].checked) {
      availableCharacters += numberCharacters;
    }
    
    if (specialCheckbox[0].checked) {
      availableCharacters += specialCharacters;
    } 
    
    if (!uppercaseCheckbox[0].checked && !lowercaseCheckbox[0].checked && !numberCheckbox[0].checked && !specialCheckbox[0].checked) {
      document.getElementById("password").innerHTML = "Please choose at least 1 option";
      return;
    }
  }

  for (i = 0; i < passwordLength; i++) {

  //random value created or changed
  index = Math.floor(Math.random() * availableCharacters.length);

  //random value assigned or changed
  randomCharacter = availableCharacters[index];

  //var password string combines itself randomCharacter's current value, then repeat process until there are as many characters as the user selected
  password = password.concat(randomCharacter);
  }

  document.getElementById("password").innerHTML = password;

  //this is to check to make sure the variable has the appropriate available characters
  console.log(availableCharacters);

  //reset all variables
  availableCharacters = "";
  passwordLength = 0;
  password = "";
}