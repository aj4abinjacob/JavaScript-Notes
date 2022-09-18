Array.prototype.random = function(){
    return this[Math.floor(Math.random() * this.length)]
}

const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    const password = document.getElementById("result").textContent;
    navigator.clipboard.writeText(password).then(() => {
        /* clipboard successfully set */
      }, () => {
        /* clipboard write failed */
      });
})

generateEl.addEventListener('click', () => { 
    resultEl.textContent = generatePassword(lowercaseEl.checked, uppercaseEl.checked,
         numbersEl.checked, symbolsEl.checked, lengthEl.valueAsNumber);
})

function generatePassword(lower, upper, number, symbol, length) {
    // a-z 97-122 A-Z 65-90
    let password = "";
    let invalids = ["lower", "upper", "number", "symbol"];
    let invalids_tf= [lower, upper, number, symbol];
    if (invalids_tf.filter(el => el === false).length === 4){alert("Please select atleast a category")}
    invalids = invalids.filter((el,ind) => invalids_tf[ind] == false)
    let fun_obj = {
        "lower" : getRandomLower,
        "upper" : getRandomUpper,
        "number" : getRandomNumber,
        "symbol" : getRandomSymbol
    }
    invalids.forEach(el => delete fun_obj[el]);
    [...new Array(length).keys()].forEach(element => {
        
        password += fun_obj[Object.keys(fun_obj).random()]();
    });
    return password
}

let lower_case = [...new Array(123).keys()].filter((x) => x>=97).map(x => String.fromCharCode(x));
let upper_case = [...new Array(91).keys()].filter((x) => x>=65).map(x => String.fromCharCode(x));

function getRandomLower() {
    return lower_case.random()
}

function getRandomUpper() {
    return upper_case.random()
}

function getRandomNumber() {
    return [...new Array(10).keys()].random()
}

function getRandomSymbol() {
    return "!@#$%^&*(){}|{:".split("").random()
}