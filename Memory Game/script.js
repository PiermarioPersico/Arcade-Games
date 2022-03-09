// queruSelector individua tramite l'id css
const grid = document.querySelector('#grid');

const cards = ['alien','bug','duck','rocket','spaceship','tiktac'];

// utilizziamo lo SPREAD per unire e moltiplicare i vari array
const deck = [...cards, ...cards];


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
  card.classList.add(card.getAttribute('data-name'),'flipped');

}
