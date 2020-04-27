const myQuestions =
  [{
    question: "Harry Potter characters by order of mentions?",
    answers: ["Harry Potter","Ron Weasley","Hermione Granger","Albus Dumbledore","Rubeus Hagrid","Severus Snape", "Voldemort","Sirius Black", "Draco Malfoy","Fred Weasley"]
  },
  {
    question: "Test?",
    answers: ['a','b','c','d','e','f','g','h','i','j']
  }]
;

function newGame(){
  for (i = 0; i < 10; i++) {
    element = document.getElementsByClassName(`q${i+1}`)[0];
    document.getElementsByClassName(`q${i+1}`)[0].innerHTML = i+1;
    element.classList.remove('correct');
  };
    q = myQuestions[Math.floor(Math.random()*myQuestions.length)]
    console.log(q)
    document.getElementsByClassName(`question`)[0].innerHTML = q.question
}

const guessbox = document.querySelector('.guess');
guessbox.addEventListener('keydown', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(guessbox.value);
  }
}

function getResults(guess){
  for (i = 0; i < 10; i++) {
    /*pick = document.getElementsByClassName(`q${i+1}`)[0];
    console.log(pick);
    pick.classList.add('check');*/
    if (q.answers[i] == guess) {
      document.getElementsByClassName(`q${i+1}`)[0].innerHTML = guess;
      element = document.getElementsByClassName(`q${i+1}`)[0];
      /*pick.classList.remove('check');*/
      element.classList.add('correct');
    }
    }
  }
