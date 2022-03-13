const road = document.querySelectorAll('#grid > div');
console.log(road);

// for( let i = 0; i < road.length; i++){
//
//   road[i].innerText = i;
// }

// Conservo in variabile i riferimenti alla papera
const duckIdx = 1;
const duck = road[duckIdx];
duck.classList.add('duck');

function addPlant(){

  let currentPlantIdx = road.length - 1;
  road[currentPlantIdx].classList.add('plant');



  const plantInterval = setInterval(function(){
    road[currentPlantIdx].classList.remove('plant');
    currentPlantIdx--;

    if(currentPlantIdx < 0){
      clearInterval(plantInterval);
      addPlant();
      return;
    }

    if(currentPlantIdx === duckIdx && !road[currentPlantIdx].classList.contains('duck-jump')){
       showAlert('Crash!')
       clearInterval(plantInterval);
       road[currentPlantIdx].classList.remove('duck');
       road[currentPlantIdx].classList.add('plant');

       return;
    }

    road[currentPlantIdx].classList.add('plant');
  }, 700)
}

  addPlant();






function jump(event){
  if( (event.code === 'Space' || event.type === 'click') && !event.repeat ){
    console.log(event)
    duck.classList.add('duck-jump');
    setTimeout(function(){
      duck.classList.remove('duck-jump');
    }, 300);
  }
};

document.addEventListener('click', jump);
document.addEventListener('keydown', jump);







// ALLERT
function showAlert(message){

  const gameArea = document.querySelector('.game-area')
  const alertMessage = `
  <div class="game-alert">
    <div class="game-alert-message">${message}<img class="winning-gif" src="../common/7561.gif" alt=""><div class="game-alert-regame"><a href="index.html">RIGIOCA</a><a href="../index.html">HOME</a></div></div>
  </div>`

  gameArea.innerHTML = gameArea.innerHTML + alertMessage;
}
