// Assignment Code

var generateBtn = document.querySelector("#generate");
// Created my arrays for lower, upper, numeric and scpecial characters for generator password
var lowerCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var upperCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var numericCharacters = ['0','1','2','3','4',"5",'6','7','8','9'];

var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',','(',')','{','}','[',']','~','-','_','.'];

// function code to help run my generator web to help user navigate the password options
function getPasswordOptions() {
// 
  var length = parseInt(
    prompt('Enter the number amount for password length?'),
    10
  );
  // Added a conditional statement to provide user with a length number as a message
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return;
  }
  // Added the minimum and max left of characters allow in a conditional statement 
  if (length < 8) {
    alert('Password minimun 8 characters');
    return;
  }
  
  if (length > 128) {
    alert('Password max 128 characters');
    return;
  }
  // Added a variable to help the user confirm all the characters 
  var hasSpecialCharacters = confirm(
    'Click OK to include special characters.'
  );
  
  var hasNumericCharacters = confirm(
    'Click OK to include numeric.'
  );
  
  var hasLowerCharacters = confirm(
    'Click OK to include lowercase.'
  );
  
  var hasUpperCharacters = confirm(
    'Click OK to include uppercase.'
  );
 //Condional statement to determine whether the user has included any particular character kinds
  if (hasSpecialCharacters) {
  }else if (hasNumericCharacters) {
  }else if (hasLowerCharacters) {
  }else if (hasUpperCharacters) {
  }else {
    alert('Password must include at least one character type.')
  }
  
  //Created a variable to hold user input 
  var passwordChoice = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCharacters: hasLowerCharacters,
    hasUpperCharacters: hasUpperCharacters
  };

  return passwordChoice;
}

//A method to extract a random selected element form an array
function getRandom(arr) {
  var randomArr = Math.floor(Math.random() * arr.length);
  var randomMath = arr[randomArr];

  return randomMath;
}

//Function that uses inputs to generate passwords
function generatePassword() {
  var choice = getPasswordOptions();
  
  var push = new Array()
  
  if (choice.hasSpecialCharacters) {
    push= push.concat(specialCharacters)
  }
  if (choice.hasNumericCharacters) {
    push= push.concat(numericCharacters)
  }
  if (choice.hasLowerCharacters) {
    push= push.concat(lowerCharacters)
  }
  if(choice.hasUpperCharacters) {
    push= push.concat(upperCharacters)
  }
  console.log(push)
  
  let pass = ""
  let i = 0
  while (i < choice.length) {
    pass += getRandom(push);
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