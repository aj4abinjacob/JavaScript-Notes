
const btn = document.querySelector("button");
let input_text = document.querySelector("input");
const card = document.querySelector(".card");
btn.addEventListener('click', () => {
    const text = input_text.value.toLowerCase()
    if (text === text.split('').reverse().join('')) {
        card.style.backgroundColor = '#1FAA59';
        document.querySelector("p").innerHTML = 'The text you have entered is Palindrome'
        document.querySelector(".fa-face-frown").style.display = 'none';
        document.querySelector(".fa-face-smile").style.display = 'block';
    } else {
        card.style.backgroundColor = '#EF5354';
        document.querySelector("p").innerHTML = 'The text you have entered is not Palindrome'
        document.querySelector(".fa-face-smile").style.display = 'none';
        document.querySelector(".fa-face-frown").style.display = 'block';
    }
}) 