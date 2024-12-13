let userScore = 0; 
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');

//  we are doing modular programming- where we create a function and then call it when we need it for every single choice we have in our game.====these are resusable 

const genCompChoice = () => {
    //rock, paper, scissors
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
    //as such js m koi random function nhi hota to generate a random form a bohot badi elements wlai array..... so we use math.random[this generates 0-1 k beech ko ibhi random value generate kaerte hain] and math.floor[this rounds off the value to the nearest integer]
    // string randomly generate nai kar skare lekin index randomly generate kar skare hain so we'll be using the index to get the string. isisliye array k form m store kare hain.
    
};
// this function will be called when the user makes a choice
const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "User Wins";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        
        msg.innerText = "Computer Wins";
    }
};
const drawGame = () => {
   
    msg.innerText = "Draw, play again";
}
const playGame = (userChoice) => {
   
    const compChoice = genCompChoice();
    

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            compChoice === "paper"? userWin = false : userWin = true;
        }
        else if(userChoice === "paper"){
            compChoice === "scissors"? userWin = false : userWin = true;
        }else{
            userWin = compChoice === "rock"? userWin = false : userWin = true;
        }
        showWinner(userWin);
    }
};


choices.forEach((choice) => {
        // kaunsi specific choice kp click kr rhe hain
    choice.addEventListener("click", () =>{
        const userChoice =choice.getAttribute("id");
       
        playGame(userChoice);
    });
});

