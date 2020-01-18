import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL, POST_DATA_START, POST_DATA_SUCCESS, POST_DATA_FAIL } from '../actions';

const initialState = {
   isFetching: false,
   isLoggingIn: false,
   loggedIn: false,
   error: null,
   recipes: []
}

function reducer(state = initialState, action) {
   switch(action.type) {
      case 'FETCH_DATA_START':
         return {
            ...state,
            isFetching: true,
            isLoggingIn: false,
            loggedIn: false,
            error: null,
            recipes: []
         }
      case 'FETCH_DATA_SUCCESS':
         return {
            ...state,
            isFetching: false,
            isLoggingIn: false,
            loggedIn: false,
            error: null,
            recipes: action.payload
         }
      default: 
         return state;
   }
}

export default reducer;