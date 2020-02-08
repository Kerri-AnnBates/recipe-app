import {
	FETCH_DATA_START,
	FETCH_DATA_SUCCESS,
	FETCH_DATA_FAIL,
} from '../actions/types';

const initialState = {
	isFetching: false,
	error: null,
	recipes: [],
}

function recipesReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_DATA_START:
			return {
				...state,
				isFetching: true,
				error: null
			}
		case FETCH_DATA_SUCCESS:
			return {
				...state,
				isFetching: false,
				error: null,
				recipes: action.payload
			}
		case FETCH_DATA_FAIL:
			return {
				...state,
				isFetching: false,
				error: action.payload,
				recipes: []
			}
		default:
			return state;
	}
}

export default recipesReducer;