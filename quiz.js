const myQuestions =
  [{
    question: "Harry Potter characters by order of mentions?",
    answers: ["Harry Potter","Ron Weasley","Hermione Granger","Albus Dumbledore","Rubeus Hagrid","Severus Snape", "Voldemort","Sirius Black", "Draco Malfoy","Fred Weasley"]
  },
  {
    question: "Test?",
    answers: ['a','b','c','d','e','f','g','h','i','j']
  },
  {
    question: "The last 10 Best Picture Oscar winners?",
    answers: ['Parasite','Green Book','The Shape of Water','Moonlight','Spotlight','Birdman','12 Years a Slave','Argo','The Artist',`The King's Speech`]
  }
];

//New game button
function newGame(){
  for (i = 0; i < 10; i++) {
    element = document.getElementsByClassName(`q${i+1}`)[0];
    document.getElementsByClassName(`q${i+1}`)[0].innerHTML = i+1;
    element.classList.remove('correct');
    element.classList.remove('grow');
  };
    q = myQuestions[Math.floor(Math.random()*myQuestions.length)]
    console.log(q)
    document.getElementsByClassName(`question`)[0].innerHTML = q.question
    lives = 1
    heart = document.getElementsByClassName('lives')[0];
    heart.classList.remove('hide');
    let nom1 = document.querySelector('.n1');
    nom1.classList.remove('hide');
    let nom2 = document.querySelector('.n2');
    nom2.classList.remove('hide');
    let nom3 = document.querySelector('.n3');
    nom3.classList.remove('hide');
    let ovr = document.querySelector('.overrule');
    ovr.classList.remove('hide')
}

let snd = new Audio("correct.mp3"); // buffers automatically when created


//guess input box
const guessbox = document.querySelector('.guess-input');
guessbox.addEventListener('keydown', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    cycle(guessbox.value,9);
  }
}

//check if guess is correct
function cycle(guess, i) {
  pick = document.getElementsByClassName(`q${i+1}`)[0];
  pick.classList.add('check');
  console.log(guess);
  console.log(q.answers[i]);
  check(guess,q.answers[i],i)
  i--;
  if(fin != 1){       //Check if answer has been found
    if (i >= 0){      //if answers lef to check will go check
      cycle (guess,i);
    } else if ( i < 0 & lives > 0) { //No answers to check left but have life
      lives -= 1
      heart = document.getElementsByClassName('lives')[0];
      heart.classList.add('hide');
      sgn = document.getElementsByClassName('container2')[0];
      sgn.classList.remove('hide');
      cnt = document.getElementsByClassName('container')[0];
      cnt.classList.add('hide');
      setTimeout(function () {
        sgn.classList.add('hide');
        cnt.classList.remove('hide');
      },3000)
    }
    else { //Nothing left to check and out of lives
      alert("You're Terrible at Tenable!!");
    }
  }
}
// Check guess against answer
function check(guess, ans, j) {
  if (guess === ans){
    /*Make answer show as correct*/
    document.getElementsByClassName(`q${j+1}`)[0].innerHTML = guess;
    scaleFontSize(`q${j+1}`)
    element = document.getElementsByClassName(`q${j+1}`)[0];
    element.classList.add('correct');
    element.classList.add('grow');
    snd.play();
    fin = 1;
  } else {
    fin = 0

    //sleep(2000).then(() => { element.classList.remove('check')})
    setTimeout(function () {
   element = document.getElementsByClassName(`q${j+1}`)[0];
   element.classList.remove('check')}
   ,3000)
  }
}

//Make alert when all 10 are guessed
/*function allAnswers(){
  console.log(c)
  if (c = 10) {
    alert('You Win')
  } else {
    c = c+1;
  }
}*/

//Adjusts text to fit in the Div
function scaleFontSize(element) {
    var container = document.getElementsByClassName(element)[0];
    container.style.fontSize = "100%";
      if (container.scrollWidth > container.clientWidth) {
        container.style.fontSize = "70%";
    }
}

//Use nominate/ Overrule
/*function removeButton(){
  btn = document.getElementsByClassName(``)
} */
const firstNom = document.querySelector('.n1');
firstNom.addEventListener('click', function(){
  firstNom.classList.add('hide')
});
const secNom = document.querySelector('.n2');
secNom.addEventListener('click', function(){
  secNom.classList.add('hide')
});
const thirdNom = document.querySelector('.n3');
thirdNom.addEventListener('click', function(){
  thirdNom.classList.add('hide')
});
const ovr = document.querySelector('.overrule');
ovr.addEventListener('click', function(){
  ovr.classList.add('hide')
});

// Sleep function
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
