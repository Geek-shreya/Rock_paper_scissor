let user_score = 0;
let comp_score = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

let userPara = document.querySelector("#user_score");
let compPara = document.querySelector("#comp_score");

let gencompChoice = () =>{
    const arr = ["rock", "paper", "scissor"]
    let num = Math.floor(Math.random() * 3)
    return(arr[num]);
}

let drawGame = () =>{
    console.log("game was draw")
}

let showWinner = (userWin) =>{
    if(userWin){
        user_score++;
        userPara.innerText = user_score;
        console.log("you win");
        msg.innerText = "Hurray! You win";
        msg.style.backgroundColor = "green";
    }else{
        comp_score++;
        compPara.innerText = comp_score;
        console.log("you lose");
        msg.innerText = "You lose";
        msg.style.backgroundColor = "red";
    }
}

let play = (userChoice) =>{
    console.log("user choice = " , userChoice);
    
    let compChoice = gencompChoice();
    console.log("comp choice = " , compChoice);

    if(userChoice === compChoice){
        drawGame();
        msg.innerText = "Game was draw . Play again!";
        msg.style.backgroundColor = "black";
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false:true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor"? false:true;
        }else{
            userWin = compChoice === "rock" ? false:true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    console.log(choice)
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        play(userChoice);
    })
});