const cards = document.querySelectorAll('.flashcard');


function flipCard() {
  this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard))