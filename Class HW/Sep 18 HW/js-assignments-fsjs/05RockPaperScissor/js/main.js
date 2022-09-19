Array.prototype.random = function(){
    return this[Math.floor(Math.random() * this.length)]
}

let computer = document.getElementById("result-comp-stat");
let user = document.getElementById("result-user-stat");
let winnerRT = document.getElementById("result-final-stat");

let userScoreVal = document.getElementById("userScoreVal");
let computerScoreVal = document.getElementById("compScoreVal");

let choices = ['rock', 'paper', 'scissors'];

document.querySelectorAll(".choice").forEach((el) => {
    el.addEventListener("click",(event)=>{
        let computer_choice = choices.random();
        computer.innerHTML = `Computer: ${computer_choice}`;
        let user_choice = event.currentTarget.querySelector("img").getAttribute("alt");
        user.innerHTML = `User: ${user_choice}`;

        const win_cases = {
            'rock' : 'scissors',
            'paper' : 'rock',
            'scissors' : 'paper'
        }

        let winner;
        if (user_choice === computer_choice){
            winner = "Draw";
        }else if (win_cases[user_choice] === computer_choice){
            winner = "User";
            userScoreVal.innerHTML = `${Number(userScoreVal.innerHTML) + 1}`;
        }else{
            winner = "Computer";
            computerScoreVal.innerHTML = `${Number(computerScoreVal.innerHTML) + 1}`;
        }
        winnerRT.innerHTML = `Winner: ${winner}`
        
        document.querySelectorAll('[id$="ScoreVal"]').forEach(el => {
            if (Number(el.innerHTML.match(/\d+/g).join("")) === 10){
                if(el.getAttribute("id").includes("user")){
                    alert("User has won the match");
                }else{
                    alert("Computer has won the match");
                }
                userScoreVal.innerHTML = 0;
                computerScoreVal.innerHTML = 0;
                winnerRT.innerHTML = `Winner: `;
                user.innerHTML = `User: `;
                computer.innerHTML = `Computer: `;
            }
        })
    })
})



