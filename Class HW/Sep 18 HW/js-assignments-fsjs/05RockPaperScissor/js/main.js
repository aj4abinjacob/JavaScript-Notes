Array.prototype.random = function(){
    return this[Math.floor(Math.random() * this.length)]
}

let choices = ['rock', 'paper', 'scissors'];

document.querySelectorAll(".choice").forEach((el) => {
    el.addEventListener("click",(event)=>{
        let computer_choice = choices.random();
        let user_choice = event.currentTarget.querySelector("img").getAttribute("alt");
        console.log(user_choice,computer_choice);

        const win_cases = {
            'rock' : 'scissors',
            'paper' : 'rock',
            'scissors' : 'paper'
        }
        
        if (user_choice === computer_choice){
            console.log("It's a draw");
        }else if (win_cases[user_choice] === computer_choice){
            console.log("You win")
        }else{
            console.log("Computer Wins")
        }
    })
})
