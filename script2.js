// Assignment Code
var generateBtn = document.querySelector("#generate");

var chars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","!","@","#","$",
"%","^","&","*","(",")"];

var upperAlpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z"]

var lowerAlpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z"]

var num = ["0","1","2","3","4","5","6","7","8","9"]

var sym = ["!","@","#","$","%","^","&","*","(",")"]

var passLength = 10;

var pw = ""
for (let i = 1; i <= passLength; i++) {
//  console.log(random_item(chars));
  function random_item(chars) {
  {return chars[Math.floor(Math.random()*chars.length)];}
}}

var password = [password()]

function password(pw) {
if (pw.includes(upperAlpha) && pw.includes(lowerAlpha) && pw.includes(num) && pw.includes(sym)) {
   return
  }
  else {random_item(chars)};
}
console.log(password(pw))
// function writePassword()


// var password = generatePassword();
// var passwordText = document.querySelector("#password");

// passwordText.value = password;

// generateBtn.addEventListener("click", writePassword);