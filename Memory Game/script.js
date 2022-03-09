// queruSelector individua tramite l'id css
const grid = document.querySelector('#grid');

const cards = ['alien','bug','duck','rocket','spaceship','tiktac'];

// utilizziamo lo SPREAD per unire e moltiplicare i vari array
const deck = [...cards, ...cards];

let pick = [];


// sort modifica l'ordine degli elementi dentro l'arrey se il numero è positivo o negativo
deck.sort(function(){
  return 0.5 - Math.random();
});
// Math.random restituisce un numero casuale tra 0 e 1

for(let i = 0; i < deck.length; i++){

  // crea un elemento nell'HTML
  const card = document.createElement('div');
  const cardName = deck[i];

// aggiunge all'elemento la classe css card
  card.classList.add('card')
  card.setAttribute('data-name', cardName)
  card.addEventListener('click', flipCard);

  grid.appendChild(card)
}

function flipCard(event){
  const card = event.target;

  if(card.classList.contains('flipped')) return;
  card.classList.add(card.getAttribute('data-name'),'flipped');

// il comando push aggiunge il valore card all'arrey pick
  pick.push(card);

  if (pick.length === 2) {
    // ceck for match
    checkForMatch()
  }

}

function checkForMatch(){
  const card1 = pick[0];
  const card2 = pick[1];
  const card1Name = card1.getAttribute('data-name');
  const card2Name = card2.getAttribute('data-name');

  if(card1Name === card2Name){
   console.log('hai fatto match!');
   checkForWin();
 }else{
   setTimeout(function(){
     card1.classList.remove(card1Name, 'flipped');
     card2.classList.remove(card2Name, 'flipped');

   }, 500);

 }
 // risvuotiamo il pick
 pick = [];

}

function checkForWin(){

  const flippedCards = document.querySelectorAll('.flipped');
  if(flippedCards.length === deck.length){
    console.log('hai vinto!');
    showAlert('Hai Vinto!');
  }

}


function showAlert(message){

  const gameArea = document.querySelector('.game-area')
  const alertMessage = `
  <div class="game-alert">
    <div class="game-alert-message">${message}  <div class="game-alert-regame"><a href="index.html">RIGIOCA</a><a href="../index.html">HOME</a></div></div>
  </div>`

  gameArea.innerHTML = gameArea.innerHTML + alertMessage;
}
