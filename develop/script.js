// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',','(',')','{','}','[',']','~','-','_','.'];

var lowerCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var upperCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var numericCharacters = ['0','1','2','3','4',"5",'6','7','8','9'];


function getPasswordOptions() {

  var length = parseInt(
    prompt('How many characters would you like your password to contain?'),
    10
  );
  
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }
  
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }
  
  if (length > 128) {
    alert('Password length must be less than 128 characters');
    return null;
  }
  
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );
  
  var hasNumericCharacters = confirm(
    'Click OK to confirm including numeric characters.'
  );
  
  var hasLowerCharacters = confirm(
    'Click OK to confirm including lowercase characters.'
  );
  
  var hasUpperCharacters = confirm(
    'Click OK to confirm including uppercase characters.'
  );
 
  if (hasSpecialCharacters) {
  }else if (hasNumericCharacters) {
  }else if (hasLowerCharacters) {
  }else if (hasUpperCharacters) {
  }else {
    alert('Password must include at least one character type.')
  }
  
  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCharacters: hasLowerCharacters,
    hasUpperCharacters: hasUpperCharacters
  };

  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {
  var options = getPasswordOptions();
  
  var currentArr = new Array()
  
  if (options.hasSpecialCharacters) {
    currentArr= currentArr.concat(specialCharacters)
  }
  if (options.hasNumericCharacters) {
    currentArr= currentArr.concat(numericCharacters)
  }
  if (options.hasLowerCharacters) {
    currentArr= currentArr.concat(lowerCharacters)
  }
  if(options.hasUpperCharacters) {
    currentArr= currentArr.concat(upperCharacters)
  }
  console.log(currentArr)
  
  let pass = ""
  let i = 0
  while (i < options.length) {
    pass += getRandom(currentArr);
    i++
  } 
  return pass
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);