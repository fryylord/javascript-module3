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
 console.log(randomItem(chars));
  function randomItem(chars) {
  {return chars[Math.floor(Math.random()*chars.length)];}
}}

// var password = [passString()]

// function passString(pw) {
// if (pw.includes(upperAlpha) && pw.includes(lowerAlpha) && pw.includes(num) && pw.includes(sym)) {
//    return
//   }
//   else {random_item(chars)};
// }
// console.log(password(pw))

// var scramPass = [password(pw)]

// function password(pw) {
// if (pw.includes(upperAlpha) && pw.includes(lowerAlpha) && pw.includes(num) && pw.includes(sym)) {
//   }
//   else {getRandomChar(chars)};
//   console.log(scramPass)}
// }





// function writePassword()

//   var passArray = Array(passwordLength);
//     passArray[1] = upperAlpha;
//     passArray[2] = lowerAlpha;
//     passArray[3] = num;
//   //  passArray[4] = sym;
//     passArray = passArray.fill(allChars, 4);
    
//   return codePass(passArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('')
// }


// function codePass(array) {
//   for (let i = array.length - 1; i > 0; i--) {var j = Math.floor(Math.random() * (i + 1));
//     var temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }
//   return array;
// }

// console.log(genPass(500))






// var password = generatePassword();
// var passwordText = document.querySelector("#password");

// passwordText.value = password;

// generateBtn.addEventListener("click", writePassword);