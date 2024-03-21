let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    function checkGuess() {
      const guessInput = document.getElementById('guessInput');
      const guess = parseInt(guessInput.value);
      const result = document.getElementById('result');

      if (isNaN(guess) || guess < 1 || guess > 100) {
        result.textContent = 'Please enter a valid number between 1 and 100.';
      } else {
        attempts++;

        if (guess > randomNumber) {
          result.textContent = 'It\'s too high';
        } else if (guess < randomNumber) {
          result.textContent = 'It\'s too low';
        } else {
          result.textContent = `Congrats...! It's the correct answer in ${attempts} attempts`;
          guessInput.disabled = true;
        }
      }
    }

    document.getElementById('guessInput').addEventListener('keyup', function(event) {
      if (event.keyCode === 13) { 
        event.preventDefault();
        checkGuess();
      }
    });

   
    document.getElementById('result').addEventListener('click', function() {
      resetGame();
    });

    function resetGame() {
      randomNumber = Math.floor(Math.random() * 100) + 1;
      attempts = 0;
      const guessInput = document.getElementById('guessInput');
      guessInput.value = '';
      guessInput.disabled = false;
      const result = document.getElementById('result');
      result.textContent = '';
    }