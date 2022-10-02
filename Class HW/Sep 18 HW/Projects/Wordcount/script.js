

const url = "https://zenquotes.io/api/quotes"

async function getQuote() {
    let response = await fetch("https://zenquotes.io/api/quotes");
    if (response.ok) {
        document.querySelector("#match-text").innerHTML = response.json()[0]['q']
    }
}
getQuote()

async function fetchJokes() {

    const joke = await (await fetch(url)).json();

    return joke;

}



document.querySelector("#user-input").addEventListener('keyup', () => {
    document.querySelector("#user-text").innerHTML = document.querySelector("#user-input").value;
})

let user_input = document.querySelector("#user-input");
let match_text = document.querySelector("#match-text");

function startTimer() {
    setInterval(console.log("hello"), 1000)
}

let sec = 0;
let min = 0


document.querySelector("button").addEventListener('click', () => {
    let timer = setInterval(function () {
        document.querySelector("#sec").innerHTML = sec;
        sec++
        if (user_input.value === match_text.innerHTML) {
            clearInterval(timer);
        }
        if (sec == 59) {
            sec = 0
            min++
        }

    }
        , 1000)
})