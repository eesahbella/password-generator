// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var choiceArr = [];
var characterLength = 8;



// Function for getting a random element from an array
function getRandom(arr) {

}


// Write password to the #password input
function writePassword() {

  var correctPrompts = getPasswordOptions();
  var passwordText = document.querySelector('#password');

  if (correctPrompts) {
  var newPassword = generatePassword();
  passwordText.value = newPassword;

} else {
  passwordText.value = "";
}
}






// Function to generate password with user input
function generatePassword() {

  var password = "";
  for (let i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}



// Function to prompt user for password options
function getPasswordOptions() {

  choiceArr = [];

  characterLength = parseInt(prompt("What length would you like your password to be? Choose between 8-128 characters"));

  if ( isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    characterLength = (alert("Invalid input. Please enter a length between 8 and 128 characters."));
    return false;
    }

  if (confirm("Would you like lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCasedCharacters);
  }

  if (confirm("Would you like uppercase letters in your password?")) {
      choiceArr = choiceArr.concat(upperCasedCharacters);
  }

  if (confirm("Would you like special characters in your password?")) {
    choiceArr = choiceArr.concat(specialCharacters);
}
if (confirm("Would you like numbers in your password?")) {
  choiceArr = choiceArr.concat(numericCharacters);
}
return true;

}





// Get references to the #generate element
var generateBtn = document.querySelector('#generate');



// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);