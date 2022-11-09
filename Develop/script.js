// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){

  var userInput = window.prompt("Password Lenght")

  var pasLenght = parseInt(userInput)
  if (isNaN(pasLenght)) {
    window.alert("That is not a number! Try again!");
    return  
  }
  if (pasLenght < 8 || pasLenght > 128) {
    window.alert("password Lengh must be between 8-128 characters ");
    return
  }

  var userLower = window.confirm("Include Lowercase?");
  var userUpper = window.confirm("Include Uppercase?");
  var userNumbers = window.confirm("Include Numeric?");
  var userSpecial = window.confirm("Include Special Characters?");

  var lowerList = ["a",	"b",	"c",	"d",	"e",	"f",	"g",	"h",	"i",	"j",	"k",	"l",	"m",	"n",	"o",	"p",	"q",	"r",	"s",	"t",	"u",	"v",	"w",	"x",	"y",	"z",];
  var upperList = ["A", "B", "C", "D","E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "X",];
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
  var specialList = [ "!","#", "$", "%", "&", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~", ]

  var allOptions = []

  if (userLower) {
    allOptions.push (lowerList)
  }

  if (userUpper) {
    allOptions.push (upperList)
  }

  if (userNumbers) {
    allOptions.push (numberList)
  }

  if (userSpecial) {
    allOptions.push (specialList)
  }

  var passwordGenerator = ""
  
  for (var i=0; i<pasLenght; i++){
    
  }

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
