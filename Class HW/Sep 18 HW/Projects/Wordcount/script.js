
Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)]
}

const url = "https://type.fit/api/quotes"
async function fetchQuotes() {

    const res = await (await fetch(url)).json();

    document.querySelector("#match-text").innerHTML = res[Math.floor(Math.random() * res.length)]["text"]

}
fetchQuotes();

document.querySelector("#user-input").addEventListener('keyup', () => {
    document.querySelector("#user-text").innerHTML = document.querySelector("#user-input").value;
})

let user_input = document.querySelector("#user-input");
let match_text = document.querySelector("#match-text");


let sec = 0;
let min = 0
let timer;

document.querySelector("#start").addEventListener('click', () => {
    timer = setInterval(function () {
        user_input.focus()
        document.querySelector("#sec").innerHTML = sec;

        if (user_input.value === match_text.innerHTML) {
            clearInterval(timer);
        }
        sec++
        if (sec == 59) {
            sec = 0
            min++
        }
        document.querySelector("#min").innerHTML = min;

    }
        , 1000)
})

document.querySelector("#reset").addEventListener("click", () => {
    clearInterval(timer);
    user_input.value = ""
    sec = 0;
    min = 0
    document.querySelector("#sec").innerHTML = "0";
    document.querySelector("#min").innerHTML = "0";
    document.querySelector("#user-text").innerHTML = "";
    fetchQuotes();
})