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
    lives = 1
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
    fin = 1
  } else {
    fin = 0
  }
}

function cycle(guess, i) {
  pick = document.getElementsByClassName(`q${i+1}`)[0];
  pick.classList.add('check');
  console.log(guess);
  console.log(q.answers[i]);
  check(guess,q.answers[i],i)
  pick.classList.remove('check');
  i--;
  if(fin != 1){
    if (i >= 0){
      cycle (guess,i);
    } else if ( i < 0 & lives > 0) {
      alert("Ruh-Roh life lost!")
      lives -= 1
    }
    else {
      alert("YOU're NOT Tenable!!");
    }
  }
}

