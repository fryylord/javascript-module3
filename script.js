// Assignment Code
var generateBtn = document.querySelector("#generate");
var chars ={ 
  upperAlpha: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  lowerAlpha: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  digit: ["0","1","2","3","4","5","6","7","8","9"],
  specChar: ["!","@","#","$","%","^","&","*","(",")"]}
var passlength = 12;
var items1 = chars.upperAlpha
var items2 = chars.lowerAlpha
var items3 = chars.digit
var items4 = chars.specChar

function random_item(items1)
{return items1[Math.floor(Math.random()*items1.length)];}

function random_item(items2)
{return items2[Math.floor(Math.random()*items2.length)];}

function random_item(items3)
{return items3[Math.floor(Math.random()*items3.length)];}

function random_item(items4)
{return items4[Math.floor(Math.random()*items4.length)];}

console.log(random_item(items1));
console.log(random_item(items2));
console.log(random_item(items3));
console.log(random_item(items4));

//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");
//
//  passwordText.value = password;
//
//}
//generateBtn.addEventListener("click", writePassword);