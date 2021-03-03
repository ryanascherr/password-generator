var password = "";

var availableCharacters = "";

var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";

var numberCharacters = "0123456789";

var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

function testFunction() {
  var passwordLength = prompt("Let's make your password! How many characters do you want your password to be? Choose a number between 8 and 128.");

  if (passwordLength > 128 || passwordLength < 8) {
    alert("The password needs to be at least 8 characters and no more than 128 characters. Please try again.");
    testFunction();
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
    alert("You must choose 'Okay' for as least one option. Please try again.");
    testFunction();
  }

  //var index is getting a random value up to the number of items in the availableCharacters string.
  var index = Math.floor(Math.random() * availableCharacters.length);

  //var randomCharacter is picking a value from the array of availableCharacters based on the random number of index.
  var randomCharacter = availableCharacters[index];

  for (i = 0; i < passwordLength; i++) {
  //var password string combines itself randomCharacter's current value
  password = password.concat(randomCharacter);
  //random value changes
  index = Math.floor(Math.random() * availableCharacters.length);
  //new random value assigned, then repeat process until there are as many characters as the user selected
  randomCharacter = availableCharacters[index];
  }

  alert("Password is: " + password);

  console.log(availableCharacters);

  availableCharacters = "";
}

testFunction();