// queruSelector individua tramite l'id css
const grid = document.querySelector('#grid');

const cards = ['alien','bug','duck','rocket','spaceship','tiktak'];

// utilizziamo lo SPREAD per unire e moltiplicare i vari array
const deck = [...cards, ...cards];
console.table(deck)


for(let i = 0; i < deck.length; i++){

  // crea un elemento nell'HTML
  const card = document.createElement('div');

// aggiunge all'elemento la classe css card
  card.classList.add('card')
  grid.appendChild(card)


}
