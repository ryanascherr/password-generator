// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", createPassword);

var password = "";
var availableCharacters = "";
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var numberCharacters = "0123456789";
var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

function createPassword() {
  var passwordLength = prompt("Let's make your password! How many characters do you want your password to be? Choose a number between 8 and 128.");

  if (!passwordLength) {
    return;
  }

  if (passwordLength > 128 || passwordLength < 8) {
    alert("The password needs to be at least 8 characters and no more than 128 characters. Please try again.");
    return;
  }

  var upperCase = confirm("Do you want uppercase characters in your password?");

  var lowerCase = confirm("Do you want lowercase characters in your password?");

  var numbers = confirm("Do you want numbers in your password?");

  var special = confirm("Do you want special characters in your password?");

    if (upperCase === true) {
    availableCharacters = availableCharacters.concat(uppercaseCharacters);
  } if (lowerCase === true) {
    availableCharacters = availableCharacters.concat(lowercaseCharacters);
  } if (numbers === true) {
    availableCharacters = availableCharacters.concat(numberCharacters);
  } if (special === true) {
    availableCharacters = availableCharacters.concat(specialCharacters);
  } if (upperCase !== true && lowerCase !== true && numbers !== true && special !== true) {
    alert("You must choose 'OK' for as least one option. Please try again.");
    return;
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

  console.log(availableCharacters);

  //reset all variables
  availableCharacters = "";
  passwordLength = 0;
  password = "";
}