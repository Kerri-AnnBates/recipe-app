import {combineReducers} from 'redux'
import recipesReducer from './recipesReducer'
import userReducer from './userReducer'

const reducer = combineReducers({
	userReducer,
	recipesReducer
})

export default reducer