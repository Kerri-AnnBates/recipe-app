import {
   FETCH_DATA_START,
   FETCH_DATA_SUCCESS,
   FETCH_DATA_FAIL,
   REGISTER_USER_START,
   REGISTER_USER_SUCCESS,
   REGISTER_USER_FAIL,
   LOGIN_USER_START,
   LOGIN_USER_SUCCESS,
   LOGIN_USER_FAIL,
} from '../actions';

const initialState = {
   isFetching: false,
   isLoggingIn: false,
   loggedIn: false,
   isRegistering: false,
   isRegistered: false,
   error: null,
   recipes: [],
}

function reducer(state = initialState, action) {
   switch (action.type) {
      case FETCH_DATA_START:
         return {
            ...state,
            isFetching: true,
            error: null,
            recipes: []
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
      // Register user
      case REGISTER_USER_START:
         return {
            isRegistering: true,
            isRegistered: false,
            error: null,
         }
      case REGISTER_USER_SUCCESS:
         return {
            isRegistering: false,
            isRegistered: true,
            error: null,
         }
      case REGISTER_USER_FAIL:
         return {
            ...state,
            isRegistering: false,
            isRegistered: false,
            error: action.payload
         }
      // Login user
      case LOGIN_USER_START:
         return {
            ...state,
            isLoggingIn: true,
            loggedIn: false,
            error: null
         }
      case LOGIN_USER_SUCCESS:
         return {
            ...state,
            isLoggingIn: false,
            loggedIn: true,
            error: null
         }
      case LOGIN_USER_FAIL:
         return {
            ...state,
            isLoggingIn: false,
            loggedIn: false,
            error: action.payload
         }
      default:
         return state;
   }
}

export default reducer;