
document.getElementById('form').addEventListener('Display Answer',(e)=>{
  let question = document.getElementById('question').value;
  let answer = document.getElementById('answer').value;

  createCards(question, answer);
  (e).preventDefault();
});

var cards= [];
// push method won't push question-answer key value pairs into array
function createCards(question, answer) {
  var card = {
      question:question,
      answer:answer
}
    cards.push(card);
    console.log(cards);
    readCards();
    document.getElementById('form').reset();
  };


function flipCard() {
  this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard))