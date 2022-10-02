var generateBtn = document.querySelector("#generate");

const numbers = '1234567890'
const upperCases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCases = 'abcdefghijklmnopqrstuvwxyz'
const symbols = '!?#$%&*+-='
const allChars = '!?#$%&*+-=1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
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
  return
  
}

generateBtn.addEventListener("click", generatesPass);

