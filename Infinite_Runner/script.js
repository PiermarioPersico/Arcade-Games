const road = document.querySelectorAll('#grid > div');
console.log(road);

for( let i = 0; i < road.length; i++){

  road[i].innerText = i;
}

// Conservo in variabile i riferimenti alla papera
const duckIdx = 1;
const duck = road[duckIdx];
duck.classList.add('duck');


function jump(event){
  if( event.code === 'Space' && !event.repeat ){

  }
  duck.classList.add('duck-jump');
  setTimeout(function(){
    duck.classList.remove('duck-jump');
  }, 300);
};

document.addEventListener('click', jump);
