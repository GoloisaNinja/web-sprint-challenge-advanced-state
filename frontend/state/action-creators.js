// ❗ You don't need to add extra action creators to achieve MVP
import * as type from './action-types';
import axios from 'axios';

export function moveClockwise() {
	return {
		type: type.MOVE_CLOCKWISE,
	};
}

export function moveCounterClockwise() {
	return {
		type: type.MOVE_COUNTERCLOCKWISE,
	};
}

export function selectAnswer(id) {
	return {
		type: type.SET_SELECTED_ANSWER,
		payload: id,
	};
}

export function setMessage(str) {
	return {
		type: type.SET_INFO_MESSAGE,
		payload: str,
	};
}

export function setQuiz(quizQuestion) {
	return {
		type: type.SET_QUIZ_INTO_STATE,
		payload: quizQuestion,
	};
}

export function inputChange() {}

export function resetForm() {}

// ❗ Async action creators
export function fetchQuiz() {
	return function (dispatch) {
		// First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
		// On successful GET:
		// - Dispatch an action to send the obtained quiz to its state
		axios
			.get('http://localhost:9000/api/quiz/next')
			.then((response) => {
				//console.log(response.data);
				dispatch(setQuiz(response.data));
			})
			.catch((error) => {
				console.log(error);
			});
	};
}
export function postAnswer(obj) {
	return function (dispatch) {
		// On successful POST:
		// - Dispatch an action to reset the selected answer state
		// - Dispatch an action to set the server message to state
		// - Dispatch the fetching of the next quiz
		const body = obj;
		axios
			.post('http://localhost:9000/api/quiz/answer', body)
			.then((response) => {
				dispatch(setMessage(response.data.message));
				dispatch(fetchQuiz());
				dispatch(selectAnswer(null));
			})
			.catch((error) => {
				console.log(error);
			});
	};
}
// export function postQuiz() {
//   return function (dispatch) {
//     // On successful POST:
//     // - Dispatch the correct message to the the appropriate state
//     // - Dispatch the resetting of the form
//   }
// }
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
