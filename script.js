let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const genCompChoice=()=>{
    const options=["stone","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options [randIdx];
    //rock, paper, scissor
}

const drawGame=()=>{
    
    msg.innerText="Game was DRAW, Play again!";
    msg.style.backgroundColor="black";
}

const showWinner=(userWin, userChoice,compChoice) =>{
    if(userWin) {
        userScore++;
        userScorePara.innerText=userScore;

        msg.innerText=`You Win!, Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
       
    } else{
        compScore++;
        compScorePara.innerText=compScore;
        
        msg.innerText=`You Lost!,Comps ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame =(userChoice) => {
    console.log("user choice=",userChoice);

    //generate computer choice

    const compChoice=genCompChoice();
    console.log("comp choice",compChoice);

    if(userChoice==compChoice) {
        //draw
        drawGame();
    } else {
        let userWin=true;
        if(userChoice=== "stone"){
            //scissor or paper
            userWin = compChoice=== "paper" ? false: true;
        } else if(userChoice=== "paper") {
            //stone or scissor
            userWin=compChoice==="scissors" ? true:false;
        } else {
            //rock, paper
           userWin=compChoice==="rock"? true:false;
        }
        showWinner(userWin,userChoice,compChoice);
    }


};

choices.forEach((choice)=> {
   
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        
        playGame(userChoice);

    }
    )
   
}) 