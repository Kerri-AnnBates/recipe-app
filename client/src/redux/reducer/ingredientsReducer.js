import {
	FETCH_INGREDIENTS_START,
	FETCH_INGREDIENTS_SUCCESS,
	FETCH_INGREDIENTS_FAIL
} from '../actions/types';

const initialState = {
	isFetching: false,
	error: null,
	ingredients: [],
}

function ingredientsReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_INGREDIENTS_START:
			return {
				...state,
				isFetching: true,
				error: null
			}
		case FETCH_INGREDIENTS_SUCCESS:
			return {
				...state,
				isFetching: false,
				ingredients: action.payload,
				error: null
			}
		case FETCH_INGREDIENTS_FAIL:
			return {
				...state,
				ingredients: [],
				error: action.payload
			}
		default:
			return state;
	}
}

export default ingredientsReducer;