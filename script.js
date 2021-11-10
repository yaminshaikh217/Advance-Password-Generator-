const resultSpan = document.getElementById("result")
const clipBoard = document.getElementById("copyBtn")
const lengthEl = document.getElementById("length")
const upperEl = document.getElementById("upper")
const lowerEl = document.getElementById("lower")
const numberEl = document.getElementById("number")
const symbolEl = document.getElementById("symbol")
const generateBtn = document.getElementById("genBtn")


const randomFunction = {
    upper: randomUpper,
    lower: randomLower,
    number: randomNumber,
    symbol: randomSymbol
}

generateBtn.addEventListener("click", () => {

    let hasLength = +lengthEl.value;
    let hasUpper = upperEl.checked;
    let hasLower = lowerEl.checked;
    let hasNumber = numberEl.checked;
    let hasSymbol = symbolEl.checked;

    resultSpan.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, hasLength)
})

function generatePassword(upper, lower, number, symbol, length) {

    let generatedPassword = '';

    let count = upper + lower + number + symbol

    let Arr = [{ upper }, { lower }, { number }, { symbol }].filter(curr => Object.values(curr)[0])

    if (count == 0) { return " " }

    for (let i = 0; i < length; i++) {
        Arr.forEach((curr) => {
            let password = Object.keys(curr)[0]
            generatedPassword += randomFunction[password]()
        })

    }

    let finalPassword = generatedPassword.slice(0, length)
    return finalPassword

}


clipBoard.addEventListener("click", () => {
    let txtarea = document.createElement("textarea")
    txtarea.value = resultSpan.innerText

    if (txtarea) {
        document.body.appendChild(txtarea)
        txtarea.select()
        document.execCommand('copy')
        txtarea.remove()
        alert("Your Password is Copied To ClipBoard")
    }

})






function randomUpper() {

    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function randomLower() {

    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function randomNumber() {

    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function randomSymbol() {
    let symbols = "!@#$%^&*()_+"
    return symbols[Math.floor(Math.random() * symbols.length)]
}




