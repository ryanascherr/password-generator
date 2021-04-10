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
  let passwordLength = prompt("Let's make your password! How many characters do you want your password to be? Choose a number between 8 and 128.");

  if (!passwordLength) {
    return;
  }

  if (passwordLength > 128 || passwordLength < 8) {
    return alert("The password needs to be at least 8 characters and no more than 128 characters. Please try again.");
  }

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
    alert("You must choose 'OK' for as least one option. Please try again.");
    return;
  }

  // let upperCase = confirm("Do you want uppercase characters in your password?");

  // let lowerCase = confirm("Do you want lowercase characters in your password?");

  // let numbers = confirm("Do you want numbers in your password?");

  // let special = confirm("Do you want special characters in your password?");

  //   if (upperCase) {
  //   availableCharacters += uppercaseCharacters;
  // } if (lowerCase) {
  //   availableCharacters += lowercaseCharacters;
  // } if (numbers) {
  //   availableCharacters += numberCharacters;
  // } if (special) {
  //   availableCharacters += specialCharacters;
  // } if (!upperCase && !lowerCase && !numbers && !special) {
  //   alert("You must choose 'OK' for as least one option. Please try again.");
  //   return;
  // }

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