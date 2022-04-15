const grid = document.querySelector('#grid');

const size = 15;

// rxc = rige per colonne
const rxc = size * size;

const cells = [];

const aliens = [
  0,1,2,3,4,5
];


// creiamo div celle

for(let i = 0; i < rxc; i++){
  const cell = document.createElement('div');
  cell.innerText = i;
  cells.push(cell);
  grid.appendChild(cell);
}


function drawAliens(){
  for( let i = 0; i < aliens.length; i++){
    cells[aliens[i]].classList.add('alien');
  }

}

function removeAliens(){
  for( let i = 0; i < aliens.length; i++){
    cells[aliens[i]].classList.remove('alien');
  }
};

//movimento degli alieni
let step = 1;
let direction = 'forward'
function moveAliens(){

  const leftEdge = aliens[0] % size === 0
  const rightEdge = aliens[aliens.length - 1] % 15 === size - 1;

  removeAliens();

  if( direction === 'forward' && rightEdge){

     for(let i = 0; i < aliens.length; i++)

     aliens[i] = aliens[i] + size + 1;

     step = -1;

     direction = 'backword';
  }
  if( direction === 'backword' && leftEdge){

     for(let i = 0; i < aliens.length; i++)

     aliens[i] = aliens[i] + size - 1;

     step = 1;

     direction = 'forward';
  }



  for(let i = 0; i < aliens.length; i++) {
     aliens[i] = aliens[i] + step;
  }

  drawAliens();
};

setInterval(moveAliens, 500);
moveAliens();














function showAlert(message){
  const gameArea = document.querySelector('.game-area')
  const alertMessage = `
  <div class="game-alert">
    <div class="game-alert-message">${message}<div class="game-alert-regame"><img src="images/last.gif" alt=""><a href="index.html">RIGIOCA</a><a href="../index.html">HOME</a></div></div>
  </div>`

  gameArea.innerHTML = gameArea.innerHTML + alertMessage;
}
