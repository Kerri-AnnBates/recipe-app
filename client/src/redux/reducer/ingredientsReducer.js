import {
	FETCH_INGREDIENTS_START,
	FETCH_INGREDIENTS_SUCCESS,
	FETCH_INGREDIENTS_FAIL,
	ADD_INGREDIENT_TO_RECIPE_START,
	ADD_INGREDIENT_TO_RECIPE_SUCCESS,
	ADD_INGREDIENT_TO_RECIPE_FAIL
} from '../actions/types';

const initialState = {
	isFetching: false,
	error: null,
	ingredients: [],
	isAdding: false,
	added: false
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
		case ADD_INGREDIENT_TO_RECIPE_START:
			return {
				...state,
				isAdding: true,
				error: null
			}
		case ADD_INGREDIENT_TO_RECIPE_SUCCESS:
			return {
				...state,
				isAdding: false,
				added: true,
				error: null
			}
		case ADD_INGREDIENT_TO_RECIPE_FAIL:
			return {
				...state,
				error: action.payload
			}

		default:
			return state;
	}
}

export default ingredientsReducer;