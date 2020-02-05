const game = () => {
    let pScore = 0;
    let cScore = 0;
  
    //Start the Game
    const startGame = () => {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
  
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };
    //Play Match
    const playMatch = () => {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");
  
      hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
          this.style.animation = "";
        });
      });
      //Computer Options
      const computerOptions = ["rock", "paper", "scissors"];
  
      options.forEach(option => {
        option.addEventListener("click", function() {
          //Computer Choice
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[computerNumber];

          playerHand.src = `${this.textContent}.png`;
          computerHand.src = `${computerChoice}.png`;
          compareHands(this.textContent, computerChoice);
        
        });
      });
    };

    const updateScore = () =>{
        const playerScore = document.querySelector('.playerScore p');
        const computerScore = document.querySelector('.computerScore p');

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;


        if(pScore === 5){
            winner.textContent = 'Player wins the set';
            return;
            }else{
            winner.textContent = 'Computer wins set';
            return;
        }
        
    }

    const compareHands = (playerChoice, computerChoice)=>{
        // Checking for a tie 
        const winner = document.querySelector('.winner');

       

        if(playerChoice === computerChoice){
            winner.textContent = 'It is a tie';
            return;
        }
        // Check for rock
        if (playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player Wins';

                pScore++;
                updateScore();
                return;
            }else{
                 winner.textContent = 'Computer wins';
                 cScore++;
                 updateScore();
                return;
            }
        }
            // Check for paper
        if (playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }else {
                winner.textContent = 'Player wins';
                pScore++;
                return;
            }
       }
        // Check for scissors
        if (playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }else { 
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            }
        }


 

    }

    //Is call all the inner function
    startGame();
    playMatch();

  };
  
  //start the game function
  game();

