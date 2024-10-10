let userscore=0;
let computerscore=0;
const userscore_span= document.getElementById("user-score");
const computerscore_span= document.getElementById("computer-score");
const scoreboard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result > p");
const rock2_div=document.getElementById("r");
const paper2_div=document.getElementById("p");
const sci_div=document.getElementById("s");

function getcomputerchoice(){
    const choices = ['r','p','s'];
    const randomnumber=Math.floor(Math.random() * 3);
    return choices[randomnumber];
}

 function convertToword(letter){
    if(letter==="r") return "Rock";
    if(letter==="p") return "Paper";
     return "Scissors";
 }

function win(userchoice, computerchoice){
    userscore++;
    userscore_span.innerHTML = userscore;
    computerscore_span.innerHTML = computerscore;
    result_p.innerHTML = ` ${convertToword(userchoice)} beats ${convertToword(computerchoice)}. You win!`;

}
function lose(userchoice,computerchoice){
   computerscore++;
    userscore_span.innerHTML = userscore;
    computerscore_span.innerHTML = computerscore;
    result_p.innerHTML = ` ${convertToword(userchoice)} loses to ${convertToword(computerchoice)}. You lost...`;
}
function tie(userchoice, computerchoice){
    
    result_p.innerHTML = ` ${convertToword(userchoice)} equals  ${convertToword(computerchoice)}. Tieee`;
}

function game(userchoice){
 const computerchoice = getcomputerchoice();

 switch(userchoice + computerchoice){
    case "rp":
    case "pr":
    case "sp":
        win(userchoice, computerchoice);
        break;
    case "rp":
    case "ps":
    case "sr":
        lose(userchoice, computerchoice);
        break;
    case "rr":
    case "pp":
    case "ss":
        tie(userchoice, computerchoice);
        break;
 }
}


function main(){
rock2_div.addEventListener('click',function(){
 game("r");
})

paper2_div.addEventListener('click',function(){
game("p");
})

 sci_div.addEventListener('click',function(){
game("s");
})
}
main();