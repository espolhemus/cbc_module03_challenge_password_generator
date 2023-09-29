// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numArray  = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const specialChars = [ , !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, ~];
const specialCharsUnicode = ['\u0020', '\u0021', '\u0022', '\u0023', '\u0024', '\u0025', '\u0026', '\u0027', '\u0028', '\u0029', '\u002A', '\u002B', '\u002C', '\u002D', '\u002E', '\u002F', '\u003A', '\u003B', '\u003C', '\u003D', '\u003E', '\u003F', '\u0040', '\u005B', '\u005C', '\u005D', '\u005E', '\u005F', '\u0060', '\u007B', '\u007C', '\u007D', '\u007E'];

const characterArray = [];

characterArray.push(...lowerCase, ...numArray, ...upperCase);
console.log(characterArray)

// Prompt for password length (8 - 128)
// Validate response

//var pwdLength = prompt("Please specify a password length (between 8 and 128 characters):",  "Password Length");

// Prompt for permissible character types - uppercase,  lowercase,  numeric and/or special characters
// Validate response? 
// Generate password
// Clear/reset



// Write password to the #password input
function writePassword() {
  
  var passwordText = document.querySelector("#password");

  // var pwdCharTypes
  var pwdLength = prompt("Please specify a password length (between 8 and 128 characters):",  "Password Length");
    console.log(pwdLength)
    if (pwdLength >= 8 && pwdLength <= 128) {
      // code to be executed if condition1 is true
      // call function to call next prompt
      // should be array/object to determine what test?
      var pwdLowerCase = prompt("Should this password include lower case characters",  "Y or N");
        console.log(pwdLowerCase)
    } else {
      console.log("error")
      // code to be executed if all conditions are false
    }
    // if statement to confirm value is numeric and is between 8 and 128 characters
      // else error message and display prompt again
    // else prompt to include lowercase,  uppercase,  numeric and/or special characters
      // validate that at least one character type is selected
    // use random number generate to multiply against array position and iterate through for loop
    // create array containing set of valid characters
    // var password = generatePassword();
  
  
  password = "randompassword"
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click",  writePassword);
