var generateBtn = document.querySelector("#generate");

const upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerAlpha = "abcdefghijklmnopqrstuvwxyx";
const numbers = "0123456789";
const symbols = "!@#$%^&*()?/;:~";

generateBtn.addEventListener("click", generatePass);

function generatePass() { 
  var userSelection = ''; 
  var finalPassword = '';
  var passLength = prompt("Please insert a number between 5 to 99");
  if (passLength <5 ) {
    alert ("Please insert a number between 5 to 99");
    return;
  }
  if (passLength >99 ) {
  alert ("Please insert a number between 5 to 99");
  return;
  }
  
  var upperA = confirm("Would you like to use uppercase letters?");
  if(upperA) {
    userSelection = userSelection.concat(upperAlpha);
  } 
  
  var lowerA = confirm("Would you like lowercase letters?");
  if(lowerA) {
    userSelection = userSelection.concat(lowerAlpha);
  }

  var specC = confirm("Would you like to use special characters?");
  if(specC) {
    userSelection = userSelection.concat(symbols);
  }

  var numb = confirm("Would you like to add numbers?"); 
  if(numb) { 
    userSelection = userSelection.concat(numbers);
  }
  console.log("user selection = " + userSelection);

  if (userSelection.length === 0)   return;
   
  for (var i = 0; i < passLength ; i++) {
    var randomIndex = Math.floor(Math.random() * userSelection.length);
    var random = userSelection[randomIndex]; 
    finalPassword = finalPassword.concat(random)
  }
document.getElementById("password").innerHTML = finalPassword
return finalPassword
}
console.log (generatePass());
