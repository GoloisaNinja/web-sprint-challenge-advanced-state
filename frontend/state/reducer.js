// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux';
import * as type from './action-types';

const initialWheelState = {
	counter: 0,
};
function wheel(state = initialWheelState, action) {
	switch (action.type) {
		case type.MOVE_CLOCKWISE:
			if (state.counter !== 5)
				return {
					...state,
					counter: state.counter + 1,
				};
			else {
				return {
					...state,
					counter: 0,
				};
			}
		case type.MOVE_COUNTERCLOCKWISE:
			if (state.counter === 0) {
				return {
					...state,
					counter: 5,
				};
			} else {
				return {
					...state,
					counter: state.counter - 1,
				};
			}
	}
	return state;
}

const initialQuizState = '';
function quiz(state = initialQuizState, action) {
	switch (action.type) {
		case type.SET_QUIZ_INTO_STATE:
			return {
				...action.payload,
			};
	}
	return state;
}

const initialSelectedAnswerState = null;
function selectedAnswer(state = initialSelectedAnswerState, action) {
	switch (action.type) {
		case type.SET_SELECTED_ANSWER:
			return action.payload;
		default:
			return state;
	}
}

const initialMessageState = '';
function infoMessage(state = initialMessageState, action) {
	switch (action.type) {
		case type.SET_INFO_MESSAGE:
			return action.payload;
		default:
			return state;
	}
}

const initialFormState = {
	newQuestion: '',
	newTrueAnswer: '',
	newFalseAnswer: '',
};
function form(state = initialFormState, action) {
	return state;
}

export default combineReducers({
	wheel,
	quiz,
	selectedAnswer,
	infoMessage,
	form,
});
