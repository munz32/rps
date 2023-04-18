
var answer,compChoice;
const days = ["Rock", "Paper", "Scissors"]

function getComputerChoice (){
    randomNumber = Math.floor(Math.random()*3);
    compChoice = days[randomNumber];

}


function getAnswer(){
    answer = prompt("Rock, Paper, Scissors Go!");
    return answer;
    
}

//getAnswer()


//getComputerChoice()

// console.log(answer)
// console.log(compChoice)



function playRound(){
    getComputerChoice()
    getAnswer()
    console.log(answer)
    console.log(compChoice)

    if (compChoice == answer){
        console.log("Tie, play again");
        alert("Tie!")
        playRound();
    }
    else if(answer =="Rock" & compChoice =="Scissors"){
        console.log("You win!")
    }
    else if(answer=="Paper" & compChoice=="Rock"){
        console.log("You win!")
    }
    else if(answer=="Scissors" & compChoice=="Paper"){
        console.log("You win!")
    }
    else{
        console.log("You lose!")
    }
}

playRound()
