var characterLength= 8;
var choiceArray = [];

var specialCharacterArray= ['!','@','#','$','%','^','&','*','(',')','_','-','=','+','<','>','?','.',',',':',';','~'];
var lowerCaseArray= ['a','b','c','d','e','f','g','h','i','j','k','l','m','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; 
var numberArray = ['0','1','2','3','4','5','6','7','8','9'];

// Assignment Code
var generateButton=document.querySelector("#generate");


// Add event listener to generate button
generatebutton.addEventListener ("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getprompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts){
    var newpassword = generatePassword();
    passwordText.value = newpassword;
  } else {
    passwordText.value = "";
  }
 
}

function generatePassword() {
  //generate password based on answers from prompts
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = math.floor(Math.random() * choiceArray.length)
    password = password + choiceArray[randomIndex];
  }
  return password;

}
//determine length
function getprompt() {
  choiceArray = [];

  characterLength = parseInt(prompt("What is your desired length of password? (Between 8 and 128 characters)"))
  
  if (isNaN(characterLength)||(characterLength < 8) || (characterLength > 128)){
    alert ("Desired length must be a number within 8 to 128. Please input your new answer.")
    return false;
  }
  if (confirm ("would you like special characters in your password")){
    choicesArray = choiceArray.concat(specialCharacterArray);
  }
  if (confirm ("would you like Lower case characters in your password")){
    choicesArray = choiceArray.concat(lowerCaseArray);
  }
  if (confirm ("would you like Upper case characters in your password")){
    choicesArray = choiceArray.concat(upperCaseArray);
  }
  if (confirm ("would you like number characters in your password")){
    choicesArray = choiceArray.concat(numberArray);
  }
  return true;
}
  

