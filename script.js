var generateBtn = document.querySelector("#generate");

const upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerAlpha = "abcdefghijklmnopqrstuvwxyx";
const numbers = "0123456789";
const symbols = "!@#$%^&*()?";

function generatePass() { 
  var userSelection = ''; 
  var finalPassword = '';
  var passLength = prompt("Please insert a number between 8 to 128");

  if (passLength <8 ) {
    alert ("Please insert a number between 8 to 128");
    return;
  }
  if (passLength >128 ) {
  alert ("Please insert a number between 8 to 128");
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

  if (userSelection.length === 0)   return;
   
  for (var i = 0; i < passLength ; i++) {
    var randomIndex = Math.floor(Math.random() * userSelection.length);
    var random = userSelection[randomIndex]; 
    finalPassword = finalPassword.concat(random)
  }
document.getElementById("password").textContent = finalPassword
}
generateBtn.addEventListener("click", generatePass);
document.getElementById("password").textContent = finalPassword
console.log (generatePass());
