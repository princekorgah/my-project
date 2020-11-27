

// QUIZ-JS ENDS HERE


const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');


const newYears = "1 Jan 2021";

function countdown(){
	const newYearsDate = new Date(newYears);
	const currentDate = new Date();

	const totalSeconds = (newYearsDate - currentDate) / 1000;

	const days = Math.floor(totalSeconds / 3600 / 24);
	const hours = Math.floor(totalSeconds / 3600) % 24;
	const mins = Math.floor(totalSeconds / 60) % 60;
	const seconds = Math.floor(totalSeconds) % 60;



	daysEl.innerHTML = days;
	hoursEl.innerHTML = formatTime(hours);
	minsEl.innerHTML = formatTime(mins);
	secondsEl.innerHTML = formatTime(seconds);


	//console.log(days, hours, minutes, seconds);
}

function formatTime(time) {
	return time < 10 ? (`0${time}`) : time;
}

// initial call
countdown();

setInterval(countdown, 1000);




// QUIZ JS STARTS FROM HERE

const quizData = [
	{
		question: 'How old is Folrin?',
		a: '10',
		b: '15',
		c: '26',
		d: '110',
		correct: 'c'
	},	{
		question: 'What is the most used programming language in 2019?',
		a: 'Java',
		b: 'C',
		c: 'Python',
		d: 'JavaScript',
		correct: 'a'
	}, {
		question: 'Who is the president of the US?',
		a: 'Florin Pop',
		b: 'Donald Trump',
		c: 'Ivan Nana',
		d: 'Natural Hair Abby',
		correct: 'b'
	}, {
		question: 'What does HTML stand for?',
		a: 'Hypertext Markup Language',
		b: 'Ho Man Light',
		c: 'How Manchester Lost',
		d: 'Hyperman Trump Language',
		correct: 'a'
	}, {
		question: 'What is Natural Hair Abby?',
		a: 'Natural',
		b: 'Hair',
		c: 'Abby',
		d: 'Hair Line',
		correct: 'd'
	}
];

const answerEls = document.querySelectorAll(".answer");

const quiz = document.getElementById("quiz");

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;

let score = 0;

loadQuiz();

function loadQuiz() {
	deselectAnswers();

	const currentQuizData = quizData[currentQuiz];

	questionEl.innerText = currentQuizData.question;

	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;

}


function getSelected(){
	let answer = undefined;

	answerEls.forEach((answerEl) => {
		if(answerEl.checked) {
			answer = answerEl.id;
		}

	});

	return answer;
}

function deselectAnswers(){
	answerEls.forEach((answerEl) => {
		answerEl.checked = false;

		});

}

submitBtn.addEventListener("click", () => {
	// check to see the answer
	const answer = getSelected();

	//console.log(answer);


	if(answer) {
		if(answer === quizData[currentQuiz].correct) {
			score++;
		}
		currentQuiz++;
		if(currentQuiz < quizData.length) {
			loadQuiz();
		} else {
			quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} 
			questions.</h2> <button onclick="location.reload()">Reload</button>`;
		}
	}

});

// QUIZ-JS ENDS HERE














		//if(answer && answer === quizData[currentQuiz]) {

			//}

	//}
	//currentQuiz++;


		

		//	if(currentQuiz < quizData.length) {

				//loadQuiz();

			//} else {
		// 	// TODO: SHOW RESULTS
				//alert("You are done, get yourself a coconut juice!");
	 	//}
	//}

//});

// QUIZ JS