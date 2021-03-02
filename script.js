// Assignment Code
//var generateBtn = document.querySelector//("#generate");

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

var password = "";

var availableCharacters = "";

var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";

var numberCharacters = "1234567890";

var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

function generatePassword(){
  
  var passwordLength = prompt("Let's make your password! How many characters do you want your password to be? Choose a number between 8 and 128.");

  var upperCase = confirm("Do you want uppercase characters in your password?");

  var lowerCase = confirm("Do you want lowercase characters in your password?");

  var numbers = confirm("Do you want numbers in your password?")

  var special = confirm("Do you want special characters in your password?")

  if (upperCase === true) {
    availableCharacters = availableCharacters.concat(uppercaseCharacters);
  } if (lowerCase === true) {
    availableCharacters = availableCharacters.concat(lowercaseCharacters);
  } if (numbers === true) {
    availableCharacters = availableCharacters.concat(numberCharacters);
  } if (special === true) {
    availableCharacters = availableCharacters.concat(specialCharacters);
  }

  for (var i = 0; i < length; i++) {
    password += availableCharacters.charAt(Math.floor(Math.random() * passwordLength));
  } return password;


   
  }

  generatePassword();

  console.log(generatePassword(passwordLength));

