var generateBtn = document.querySelector("#generate");

const numbers = '1234567890'
const upperCases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCases = 'abcdefghijklmnopqrstuvwxyz'
const symbols = '!?#$%&*+-='

const passLength = 12

let charPool = numbers + upperCases + lowerCases + symbols

function generatesPass() {
  const randomPass = []
  for (let i = 0; i < 1; i++) {
    randomPass
      .push(Array(passLength)
        .fill(charPool)
        .map(x => x[Math.floor(Math.random() * x.length)])
        .join('')
      )
  }
  document.getElementById("password").innerHTML = randomPass
  return(randomPass)
}

const incLowerCases = document.getElementById("password").innerHTML;
const incUpperCases = document.getElementById("password").innerHTML;
const incNumbers = document.getElementById("password").innerHTML;
const incSymbols = document.getElementById("password").innerHTML;

let characters = generatesPass
generateBtn.addEventListener("click", generatesPass); {
incNumbers.checked ? (characters += numbers) : "";
incSymbols.checked ? (characters += symbols) : "";
incUpperCases.checked ? (characters += upperCases) : "";
incLowerCases.checked ? (characters += lowerCases) : "";
};


