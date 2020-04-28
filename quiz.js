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
    cycle(guessbox.value,9);
  }
}

function check(guess, ans, j) {
  if (guess === ans){
    /*Make answer show as correct*/
    document.getElementsByClassName(`q${j+1}`)[0].innerHTML = guess;
    element = document.getElementsByClassName(`q${j+1}`)[0];
    element.classList.add('correct');
  }
}

function cycle(guess, i) {
  pick = document.getElementsByClassName(`q${i+1}`)[0];
  pick.classList.add('check');
  console.log(guess);
  console.log(q.answers[i]);
  setTimeout(check(guess,q.answers[i],i),3000)
  pick.classList.remove('check');
  i--;
  if( i >= 0 ){
      cycle (guess,i);
  }
}
