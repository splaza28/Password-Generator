//Add various character arrays
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var special = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "?", "/", "=", "+"];
var randomSelection = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//define password length variable
var pwLength = 8;

//Create function for user prompts along with if statements for password criteria
function getPrompts() {
  pwLength = (prompt("How many characters would you like in your password?"));
    
    if (pwLength <= 7 || pwLength >= 129) {
      alert("Length of password must be between 8 - 128 characters. Please try again.");
      return false; 

    }

    if (confirm("Would you like to have numbers in your password?")) {
      randomSelection = randomSelection.concat(numbers);
    }

    if (confirm("Would you like to have uppercase letters in your password?")) { 
      randomSelection = randomSelection.concat(upperCase);
    }
    
    if (confirm("Would you like to have lowerCase letters in your password?")) {
      randomSelection = randomSelection.concat(lowerCase);
    }

    if (confirm("Would you like to have special characters in your password?")) {
      randomSelection = randomSelection.concat(special);
    }
      return true;
    }

  // Write password to the #password input
  function writePassword() {
  var correctResponse = getPrompts();

  if(correctResponse){
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }  
}

//Creating function to generate password based on responses to prompts
function generatePassword() {
  var pwd = "";
  for (var i = 0; i < pwLength; i++){
       var randomLetter = Math.floor(Math.random() * randomSelection.length); 
       pwd = pwd + randomSelection[randomLetter];
  }
  return pwd;
}