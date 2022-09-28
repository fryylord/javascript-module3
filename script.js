// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordTxt = document.getElementById("password");
var length = document.getElementById("length");
var incNumbers = document.getElementById("numbers");
var incSymbols = document.getElementById("symbols");

// Write password to the #password input
var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";

function writePassword() {
  var password = (length, characters) => {
    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return password;
  };
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
