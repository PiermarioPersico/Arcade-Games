const road = document.querySelectorAll('#grid > div');
const scoreEl = document.querySelector('#score');


// Conservo in variabile i riferimenti alla papera
const duckIdx = 1;
const duck = road[duckIdx];
duck.classList.add('duck');

let speed = 400;
let score = 0;


// Logica aggiunta pianta
function addPlant(){

  let currentPlantIdx = road.length - 1;
  road[currentPlantIdx].classList.add('plant');

  // if(currentPlantIdx === 1){
  //   road[currentPlantIdx].classList.remove('plant');
  //
  // }



  const plantInterval = setInterval(function(){
    score++;
    scoreEl.innerText = score;

    if(score % 20 === 0){
      speed = speed - 20;
    }



    road[currentPlantIdx].classList.remove('plant');
    currentPlantIdx--;

    if(currentPlantIdx < 0){
      clearInterval(plantInterval);
      addPlant();
      return;
    }


    // Se l'indice di posizione della pianta
    // coincide con quello della papera
    // e la classe `duck-jump` non è presente
    // vuol dire che la papera ha saltato nel momento sbaglato
    // e si è schiantata
    if(currentPlantIdx === duckIdx && !road[currentPlantIdx].classList.contains('duck-jump')){

       road[currentPlantIdx].classList.remove('duck');
       road[currentPlantIdx].classList.add('plant');
       clearInterval(plantInterval);

       if(score < 50){
         showAlertOne('Ci vuole più allenamento!');
       } else if(score > 50 && score < 100){
         showAlertTwo('I risultati del lavoro si iniziano a vedere!');
       } else if(score > 100 && score < 200){
         showAlertThree('Non si scherza con Batman!');
       }else if( score > 200 && score < 300){
         showAlertFour('Io sono Vendetta!');
       }else{
         showAlertLast('Io sono Batman!');
       }




       return;
    }

    road[currentPlantIdx].classList.add('plant');
  }, speed)
}

  addPlant();






function jump(event){
  if( (event.code === 'Space' || event.type === 'click') && !event.repeat ){
    duck.classList.remove('plant');
    duck.classList.add('duck-jump');
    setTimeout(function(){
      duck.classList.remove('duck-jump');
    }, 300);
  }
};

document.addEventListener('click', jump);
document.addEventListener('keydown', jump);







// ALLERT
function showAlertOne(message){

  const gameArea = document.querySelector('.game-area')
  const alertMessage = `
  <div class="game-alert">
    <div class="game-alert-message"><p>Punteggio:${score}</p>${message}<img class="winning-gif" src="../common/1GMP.gif" alt=""><div class="game-alert-regame"><a href="index.html">RIGIOCA</a><a href="../index.html">HOME</a></div></div>
  </div>`

  gameArea.innerHTML = gameArea.innerHTML + alertMessage;
}

function showAlertTwo(message){

  const gameArea = document.querySelector('.game-area')
  const alertMessage = `
  <div class="game-alert">
    <div class="game-alert-message"><p>Punteggio:${score}</p>${message}<img class="winning-gif" src="../common/batmanYes.gif" alt=""><div class="game-alert-regame"><a href="index.html">RIGIOCA</a><a href="../index.html">HOME</a></div></div>
  </div>`

  gameArea.innerHTML = gameArea.innerHTML + alertMessage;
}

function showAlertThree(message){

  const gameArea = document.querySelector('.game-area')
  const alertMessage = `
  <div class="game-alert">
    <div class="game-alert-message"><p>Punteggio:${score}</p>${message}<img class="winning-gif" src="../common/batmanThree.gif" alt=""><div class="game-alert-regame"><a href="index.html">RIGIOCA</a><a href="../index.html">HOME</a></div></div>
  </div>`

  gameArea.innerHTML = gameArea.innerHTML + alertMessage;
}

function showAlertFour(message){

  const gameArea = document.querySelector('.game-area')
  const alertMessage = `
  <div class="game-alert">
    <div class="game-alert-message"><p>Punteggio:${score}</p>${message}<img class="winning-gif" src="../common/batmanFour.gif" alt=""><div class="game-alert-regame"><a href="index.html">RIGIOCA</a><a href="../index.html">HOME</a></div></div>
  </div>`

  gameArea.innerHTML = gameArea.innerHTML + alertMessage;
}

function showAlertLast(message){

  const gameArea = document.querySelector('.game-area')
  const alertMessage = `
  <div class="game-alert">
    <div class="game-alert-message"><p>Punteggio:${score}</p>${message}<img class="winning-gif" src="../common/batmanLast.gif" alt=""><div class="game-alert-regame"><a href="index.html">RIGIOCA</a><a href="../index.html">HOME</a></div></div>
  </div>`

  gameArea.innerHTML = gameArea.innerHTML + alertMessage;
}
