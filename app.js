//cashing the DOM (storing for future use)
let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");  //dom elements -->  span div 
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const reslut_div=document.querySelector(".result");
const rock_div =document.getElementById("r");
const paper_div =document.getElementById("p");
const scissors_div =document.getElementById("s");

function getComputerChoice()
{
    const choices=["r","p","s"];
    const randomNumber= Math.floor(Math.random()*3);
    return choices[randomNumber];
}
//console.log(getComputerChoice());
function convertToWord(letter)
{
    if(letter==="r") return "Rock";
    else if(letter==="p") return "Paper";
    else return "Scissors";
}

function win(userChoice,computerChoice){
const smallUserWord="User".fontsize(3).sub();
const smallCompWord="Comp".fontsize(3).sub();
const userChoice_div =document.getElementById(userChoice);
userScore++;
userScore_span.innerHTML=userScore;
computerScore_span.innerHTML=computerScore;
reslut_div.innerHTML=`${convertToWord(userChoice)} ${smallUserWord} beats ${convertToWord(computerChoice)} ${smallCompWord}  :::You win!!::: \u{1F609}`; //es6 format
userChoice_div.classList.add("green-glow");
setTimeout(function(){userChoice_div.classList.remove("green-glow")},500);
}
function lose(userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    const userChoice_div =document.getElementById(userChoice);
    const smallUserWord="User".fontsize(3).sub();
    const smallCompWord="Comp".fontsize(3).sub();
    reslut_div.innerHTML=`${convertToWord(userChoice)} ${smallUserWord} looses to ${convertToWord(computerChoice)} ${smallCompWord}  :::You lose!!::: \u{1F915}`;
    userChoice_div.classList.add("red-glow");
    setTimeout(function(){userChoice_div.classList.remove("red-glow")},500);
} 
function draw(userChoice,computerChoice){
    const userChoice_div =document.getElementById(userChoice);
    const smallUserWord="User".fontsize(3).sub();
    const smallCompWord="Comp".fontsize(3).sub();
    reslut_div.innerHTML=`${convertToWord(userChoice)} ${smallUserWord} equals to  ${convertToWord(computerChoice)} ${smallCompWord}  :::It's a draw !!::: \u{1F601} `;
    userChoice_div.classList.add("grey-glow");
setTimeout(function(){userChoice_div.classList.remove("grey-glow")},500);
}
function game(userChoice){
    const computerChoice= getComputerChoice();
    //console.log("user choice ->  " + userChoice);
    //console.log("computer choice = " + computerChoice);
    switch(userChoice+computerChoice)
    {
        case "rs":
        case "pr":
        case "sp":win(userChoice,computerChoice);break;
        case "rp":
        case "ps":
        case "sr":lose(userChoice,computerChoice);break;
        case "rr":
        case "pp":
        case "ss":draw(userChoice,computerChoice);break;   
    }
}

function main()
{
    rock_div.addEventListener('click',function(){
    game("r");
    })

    paper_div.addEventListener('click',function(){
    game("p");
    })
    scissors_div.addEventListener('click',function(){
    game("s");
    })
}
main();
