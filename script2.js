var generateBtn = document.querySelector("#generate");

const numbers = '1234567890'
const upperCases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCases = 'abcdefghijklmnopqrstuvwxyz'
const symbols = '!?#$%&*+-='

const passLength = 12

let charPool = numbers + upperCases + lowerCases + symbols

generateBtn.addEventListener("click", generatesPass);

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
}
