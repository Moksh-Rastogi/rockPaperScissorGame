let score = JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      losses: 0,
      ties: 0
    };

    updateScoreOnScreen();

    function Result(myMove) {
      let computerMove = pickComputerMove();
      let result = '';

      if (myMove === computerMove) {
        result = 'Tie';
        score.ties++;
      } else if (
        (myMove === 'rock' && computerMove === 'scissor') ||
        (myMove === 'paper' && computerMove === 'rock') ||
        (myMove === 'scissor' && computerMove === 'paper')
      ) {
        result = 'You win';
        score.wins++;
      } else {
        result = 'You lose';
        score.losses++;
      }

      document.querySelector('.result').innerHTML = result;
      document.querySelector('.moves').innerHTML = `
        You chose <img src="rockPaperScissor-images/${myMove}-emoji.png" class="move-icon move-icon-result"> 
          and  Computer chose <img src="rockPaperScissor-images/${computerMove}-emoji.png" class="move-icon move-icon-result">
      `;

      updateScoreOnScreen();
      localStorage.setItem('score', JSON.stringify(score));
    }

    function updateScoreOnScreen() {
      document.querySelector('.scores').innerHTML =
        `Wins: ${score.wins} | Losses: ${score.losses} | Ties: ${score.ties}`;
    }

    function clearScreen() {
      document.querySelector('.result').innerHTML = '';
      document.querySelector('.moves').innerHTML = '';
    }

    function pickComputerMove() {
      const randomNumber = Math.random();
      if (randomNumber < 1 / 3) {
        return 'rock';
      } else if (randomNumber < 2 / 3) {
        return 'paper';
      } else {
        return 'scissor';
      }
    }