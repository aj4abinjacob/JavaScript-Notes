const card_container = document.querySelector(".cards-container")
const to_do_array = [];
const input_text = document.querySelector("input");

function rmParent(el) {
    el.parentElement.parentElement.remove();
}

function addCompletedTask(el) {
    document.querySelector(".completed-tasks").appendChild(el.parentElement.parentElement.cloneNode(true));
    el.parentElement.parentElement.remove();
}

function createCard() {
    const text = input_text.value;
    const mini_container = document.createElement('div');
    mini_container.classList.add('mini-container');
    const input_btn = document.createElement('div');
    input_btn.classList.add('input_controls')
    input_btn.innerHTML = `    
                        <div class="rm" onclick="rmParent(this)">
                            <i class="fa-solid fa-minus"></i>
                        </div>
                        <div class="done" onclick="addCompletedTask(this)">
                            <i class="fa-solid fa-check"></i>
                        </div
                        `
    // rm_btn.setAttribute('onclick', `rmParent(this)`)

    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<p>${text}</p>`
    mini_container.appendChild(card);
    mini_container.appendChild(input_btn);
    card_container.appendChild(mini_container)
}


document.querySelector('#add').addEventListener('click', () => {
    if (input_text.value.replace(/\s/g, "").length === 0) {
        alert("Please enter a proper task");
    } else {
        createCard();
        input_text.value = '';
    }
})