import React, { useEffect, useRef } from 'react';
import {
	fetchQuiz,
	postAnswer,
	selectAnswer,
} from './../state/action-creators';
import { connect } from 'react-redux';

function Quiz(props) {
	const { fetchQuiz, quiz, postAnswer, selectAnswer, selectedAnswer } = props;
	useEffect(() => {
		fetchQuiz();
	}, []);

	const handleSelection = (e, index) => {
		selectAnswer(e.target.value);
		const elArr = document.getElementsByClassName('answer');
		for (let i = 0; i < elArr.length; i++) {
			if (elArr[i].classList.contains('selected')) {
				elArr[i].classList.remove('selected');
			}
		}
		elArr[index].classList.add('selected');
	};

	const handleSubmit = () => {
		postAnswer({
			quiz_id: quiz.quiz_id,
			answer_id: selectedAnswer,
		});
	};

	const btnOne = useRef('');
	const btnTwo = useRef('');

	return (
		<div id='wrapper'>
			{
				// quiz already in state? Let's use that, otherwise render "Loading next quiz..."
				quiz ? (
					<>
						<h2>{quiz.question}</h2>
						<div id='quizAnswers'>
							<div className='answer'>
								{quiz.answers[0].text}
								<button
									ref={btnOne}
									value={quiz.answers[0].answer_id}
									onClick={(e) => handleSelection(e, 0)}>
									{selectedAnswer === btnOne.current.value
										? 'SELECTED'
										: 'Select'}
								</button>
							</div>

							<div className='answer'>
								{quiz.answers[1].text}
								<button
									ref={btnTwo}
									value={quiz.answers[1].answer_id}
									onClick={(e) => handleSelection(e, 1)}>
									{selectedAnswer === btnTwo.current.value
										? 'SELECTED'
										: 'Select'}
								</button>
							</div>
						</div>

						<button
							id='submitAnswerBtn'
							disabled={!selectedAnswer}
							onClick={() => handleSubmit()}>
							Submit answer
						</button>
					</>
				) : (
					'Loading next quiz...'
				)
			}
		</div>
	);
}

export default connect((st) => st, { fetchQuiz, postAnswer, selectAnswer })(
	Quiz
);
