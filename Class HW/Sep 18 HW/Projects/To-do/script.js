const to_do_array = [];


function rmParent(el) {
    el.parentElement.remove();
}

function createCard() {
    const mini_container = document.createElement('div');
    mini_container.classList.add('mini-container');
    const rm_btn = document.createElement('div');
    rm_btn.innerHTML = `<i class="fa-solid fa-check"></i>`
    // <i class="fa-solid fa-minus"></i>
    mini_container.classList.add('rm');
    const card = document.createElement('div');
    card.classList.add('card');
    mini_container.appendChild(card);
    mini_container.appendChild(rm_btn);

}

const card_container = document.querySelector(".card-container")

document.querySelector('#add').addEventListener('click', () => {
    createCard();
})