let userWinCount=0;
let computerWinCount=0;
let userChoice;
let computerChoice;
let userScore=document.querySelector("#user");
let userScoreCard=document.querySelector(".user");
let computerScore=document.querySelector("#computer");
let computerScoreCard=document.querySelector(".computer");
let result=document.querySelector(".result");
let choicesArray=["rock","paper","scissor"];
let randomChoice=()=>{
    let randomIndex=Math.floor(Math.random()*3);
    return choicesArray[randomIndex];
}
let draw=()=>{
    console.log("draw");
    result.innerText="Its a draw between computer and user";
 result.style.backgroundColor="#500073";
}
let userWin=()=>{
    userWinCount++;
   userScore.innerText=userWinCount;
    result.innerText="Its a win over computer";
    result.style.backgroundColor="green";
}
let computerWin=()=>{
    computerWinCount++;
    computerScore.innerText=computerWinCount;
    result.innerText="Its a loss over computer";
    result.style.backgroundColor="red";
}
let allChoices=document.querySelectorAll(".image");
allChoices.forEach(choice=>{
    choice.addEventListener("click",()=>{
        userChoice=choice.getAttribute("id");
        computerChoice=randomChoice();
        let user=true;
        if(userChoice===computerChoice){
            draw();
        }
        else if(userChoice==="rock"&&computerChoice==="scissor"||userChoice==="paper"&&computerChoice==="rock"||userChoice==="scissor"&&computerChoice==="paper"){
            userWin()
        }
        else{
            computerWin()
        }
        if(userWinCount===computerWinCount){
 computerScoreCard.style.backgroundColor="#FFD65A";
             userScoreCard.style.backgroundColor="#FFD65A";

        }
        else if(userWinCount>computerWinCount){
            userScoreCard.style.backgroundColor="green";

        }
        else{
            computerScoreCard.style.backgroundColor="green";
        }
    })

})