// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numArray  = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCharsUnicode = ['\u0020', '\u0021', '\u0022', '\u0023', '\u0024', '\u0025', '\u0026', '\u0027', '\u0028', '\u0029', '\u002A', '\u002B', '\u002C', '\u002D', '\u002E', '\u002F', '\u003A', '\u003B', '\u003C', '\u003D', '\u003E', '\u003F', '\u0040', '\u005B', '\u005C', '\u005D', '\u005E', '\u005F', '\u0060', '\u007B', '\u007C', '\u007D', '\u007E'];
const characterArray = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// Function to generate user prompt, validate input, and generate password according to specified inputs 
function generatePassword(){
  let characterArray = [];
  var pwdLength;
  var includeLowerCase;
  var includeUpperCase;
  var includeNumbers;
  var includeSpecialChars;

  pwdLength = 0
  password = ""

    // Generate prompt, test to see if value is a number, test to see if value is within range
    while ( pwdLength === null || isNaN(pwdLength) || pwdLength < 8 || pwdLength > 128)
      pwdLength = prompt('Please specify the length of your desired password (between 8 and 128 characters):')
      
   // Generate prompt, test to see if value is Y or N, if Y, append lower case array to possible characters array
    while (includeLowerCase !== "Y" && includeLowerCase !== "N")
      includeLowerCase = prompt('Would you like to include lower case letters: Y or N')
      if (includeLowerCase === "Y") {
        characterArray.push(...lowerCase)
      }

    // Generate prompt, test to see if value is Y or N, if Y, append upper case array to possible characters array
    while (includeUpperCase !== "Y" && includeUpperCase !== "N")
      includeUpperCase = prompt('Would you like to include upper case letters: Y or N')
      if (includeUpperCase === "Y") {
        characterArray.push(...upperCase)
      }
    
    // Generate prompt, test to see if value is Y or N, if Y, append number array to possible characters array
    while (includeNumbers !== "Y" && includeNumbers !== "N")
      includeNumbers = prompt('Would you like to include numbers: Y or N')
      if (includeNumbers === "Y") {
        characterArray.push(...numArray)
      }

    // Generate prompt, test to see if value is Y or N, if Y, append special character array to possible characters array  
    while (includeSpecialChars !== "Y" && includeSpecialChars !== "N")
      includeSpecialChars = prompt('Would you like to include special characters: Y or N')
      if (includeSpecialChars === "Y") {
        characterArray.push(...specialCharsUnicode)
      }

    //  Check to ensure that at least one character type was specified, otherwise generate alert and re-execute function
    if (characterArray.length === 0) {
        alert("You must include at least one character type");
        generatePassword()
      }

    // iterate through possible characters array as specified by password length
    if (characterArray.length !== 0) {
      for (var i = 0; i < pwdLength; i++) { 
        // Generate a random index within the range of the array length
        const randomIndex = Math.floor(Math.random() * characterArray.length);
        // Access the value at the random index
        const randomValue = characterArray[randomIndex];
        password += randomValue;
      }
    }
      return password
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
