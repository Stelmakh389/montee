const quizData = [
	{
		question: 'На какую сумму требуется чек?',
		a: 'До 100 000 руб.',
		b: 'От 100 000 руб.',
		c: 'Свой вариант',
	},
	{
		question: 'Нужна ли доставка?',
		a: 'Да',
		b: 'Нет',
		c: 'Другое'
	},
	{
		question: 'Как с вами связаться?',
		a: 'WhatsApp',
		b: 'Telegram',
		c: 'Звонок на телефон',
	}
]
	
	const answerEls = document.querySelectorAll('.answer');
	const questionEl = document.getElementById('question');
	const a_text = document.getElementById('a_text');
	const b_text = document.getElementById('b_text');
	const c_text = document.getElementById('c_text');
    const submitBtn = document.getElementById('submit');
	const submitBtn2 = document.getElementsByClassName('submit');
	const form_block = document.getElementById('form_block');
	const quiz_cont = document.getElementById('quiz_cont');
	const steps = document.getElementById('steps');
	
	let currentQuiz = 0;
	
	loadQuiz();
	
	function loadQuiz() {
		deselectAnswers();

		const currentQuizData = quizData[currentQuiz];

		questionEl.innerText = currentQuizData.question;
		a_text.innerText = currentQuizData.a;
		b_text.innerText = currentQuizData.b;
		c_text.innerText = currentQuizData.c;
	}
	
	function deselectAnswers() {
			answerEls.forEach(answerEl => (answerEl.checked = false));
		}

	function getSelected() {
		let answer;
		answerEls.forEach(answerEl => {
			if (answerEl.checked) {
				answer = answerEl.id;
			}
		})
		return answer;
	}
	
	for (var i = 0; i < submitBtn2.length; i++) {
				submitBtn2[i].addEventListener('click', () => {
					const answerVariant = getSelected();
					const currentData = quizData[currentQuiz];

					if (answerVariant) {
						currentQuiz++;
						if (currentQuiz < quizData.length) {
							loadQuiz();
							if (currentQuiz == 1){
							    steps.classList.remove('step-one');
							    steps.classList.add('step-two');
							}

							if (currentQuiz == 2){
							    steps.classList.remove('step-two');
							    steps.classList.add('step-three');
							}
						} else {
						   form_block.classList.add('active');
						   quiz_cont.className = "quiz_cont";
						}
					}
				});
	}