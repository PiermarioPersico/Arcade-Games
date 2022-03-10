
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

//diamo un valore di velocità iniziale

let bugSpeed = 800; //millisecondi


//Math.random restituisce un numero da 0 a 1 mentre Math.floor lo semplifica per difetto.in questo caso otteniamo un numero tra 0 e 8
function randomBug (){

  removeBug();
  const randomNumber = Math.floor(Math.random() * cells.length);
  const cell = cells[randomNumber];
  cell.classList.add('bug');
}

const bugMovement = setInterval(randomBug, bugSpeed);


//funzione per pulire le celle prima di inserire un altro bug
function removeBug(){
  for(i = 0; i < cells.length; i++){
    const cellToClean = cells[i];
    cellToClean.classList.remove('bug');
  }
}

//facciamo colpire il bug dall'utente
for(let i = 0; i < cells.length; i++){
  const cell = cells[i];

  cell.addEventListener('click', function(){
    if(cell.classList.contains('bug')){
      score++;
      scoreDisplay.innerText = score;
      console.log(score);
      cell.classList.remove('bug');
      cell.classList.add('splat');

      setTimeout(function(){
//puliamo la cella dallo splat
       cell.classList.remove('splat');

      },200)
    }
  })
}











// ALLERT
function showAlert(message){

  const gameArea = document.querySelector('.game-area')
  const alertMessage = `
  <div class="game-alert">
    <div class="game-alert-message">${message}<div class="game-alert-regame"><a href="index.html">RIGIOCA</a><a href="../index.html">HOME</a></div></div>
  </div>`

  gameArea.innerHTML = gameArea.innerHTML + alertMessage;
}
