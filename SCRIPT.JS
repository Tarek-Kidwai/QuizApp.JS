window.addEventListener('DOMContentLoaded', () => {
  const start = document.querySelector('#start');
  start.addEventListener('click', function (e) {
    document.querySelector('#quizBlock').style.display = 'block';
    start.style.display = 'none';
   });

    const timeElement = document.getElementById ('time');
    let seconds = 60;
    function updateTimer (){
      timeElement.innerHTML = seconds + 's';
      if (seconds === 0) {
        timeElement.innerHTML = 'Times Up!'
        clearInterval(timeInterval);
      } else {
        seconds--;
      };
    }
    const timeInterval = setInterval(updateTimer,1000);
  
  // quizArray QUESTIONS & ANSWERS
  // q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
  // Basic ideas from https://code-boxx.com/simple-javascript-quiz/
  const quizArray = [
    {
      q: 'Which is the third planet from the sun?',
      o: ['Saturn', 'Earth', 'Pluto', 'Mars'],
      a: 1, // array index 1 - so Earth is the correct answer here
    },
    {
      q: 'Which is the largest ocean on Earth?',
      o: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      a: 3,
    },
    {
      q: 'What is the capital of Australia?',
      o: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
      a: 1,
    },
    {
      q: 'What year was JavaScipt invented?',
      o: ['1990', '1995', '1998', '2000'],
      a: 1,
    },
    {
      q: 'What is the current population of Australia?',
      o: ['25M', '35M', '28M', '33M'],
      a: 0,
    },

  ];

  // function to Display the quiz questions and answers from the object
  const displayQuiz = () => {
    const quizWrap = document.querySelector('#quizWrap');
    let quizDisplay = '';
    quizArray.map((quizItem, index) => {
      quizDisplay += `<ul class="list-group">
                   Q - ${quizItem.q}
                    <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                    <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                    <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                    <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                    </ul>
                    <div>&nbsp;</div>`;
      quizWrap.innerHTML = quizDisplay;
    });
  };

  // Calculate the score
  const calculateScore = () => {
    let score = 0;
    quizArray.map((quizItem, index) => {
      for (let i = 0; i < 4; i++) {
        //highlight the li if it is the correct answer
        let li = `li_${index}_${i}`;
        let r = `radio_${index}_${i}`;
        liElement = document.querySelector('#' + li);
        radioElement = document.querySelector('#' + r);

        if (quizItem.a == i) {
          //change background color of li element here
          liElement.style.backgroundColor = 'green';
        }

        if (radioElement.checked && quizItem.a == i) {
          // code for task 1 goes here
          
          score++;

        } else if (radioElement.checked && quizItem.a !== i) {
          liElement.style.backgroundColor= 'red';

        }
      }
    });

    alert(`Your score is: ${score} out of ${quizArray.length}`);
  };

  const submitButton = document.querySelector ('#btnSubmit');
  submitButton.addEventListener('click',calculateScore);

  const resetButton = document.querySelector ('#btnReset');
  resetButton.addEventListener('click',reloadPage);

  function reloadPage (){
    location.reload()
  }

  // call the displayQuiz function
  displayQuiz();
});