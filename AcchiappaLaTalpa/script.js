
// inseriamo punteggio iniziale
const scoreDisplay = document.querySelector('#score-display');
let score = 0;
scoreDisplay.innerText = score;


// inseriamo il tempo iniziale
const timerDisplay = document.querySelector('#timer-display');
let timeLeft = 30;
timerDisplay.innerText = timeLeft;


//inseriamo il bug via JS
const cells = document.querySelectorAll('.cell');

//Math.random restituisce un numero da 0 a 1 mentre Math.floor lo semplifica per difetto.in questo caso otteniamo un numero tra 0 e 8
const randomNumber = Math.floor(Math.random() * 9);
const cell = cells[randomNumber];

cell.classList.add('bug');
















// ALLERT
function showAlert(message){

  const gameArea = document.querySelector('.game-area')
  const alertMessage = `
  <div class="game-alert">
    <div class="game-alert-message">${message}<div class="game-alert-regame"><a href="index.html">RIGIOCA</a><a href="../index.html">HOME</a></div></div>
  </div>`

  gameArea.innerHTML = gameArea.innerHTML + alertMessage;
}
