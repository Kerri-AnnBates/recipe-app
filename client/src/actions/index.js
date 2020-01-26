import axios from 'axios';
import { axiosWithAuth } from '../protected/axiosWithAuth';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';

export const POST_DATA_START = 'POST_DATA_START';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
export const POST_DATA_FAIL = 'POST_DATA_FAIL';

export const REGISTER_USER_START = 'REGISTER_USER_START';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL';

export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';

// Register user
export const registerUser = (userData) => dispatch => {
   dispatch({ type: REGISTER_USER_START });

   axios.post('http://localhost:5000/api/auth/register', userData)
      .then(res => {
         console.log(res.data);
         dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: res.data
         });
      })
      .catch(error => {
         dispatch({
            type: REGISTER_USER_FAIL,
            payload: error
         });
      })
}

// Log in user
export const loginUser = (creds) => (dispatch) => {
   dispatch({ type: LOGIN_USER_START });
   
   axios.post('http://localhost:5000/api/auth/login', creds)
      .then(res => {
         console.log(res.data);
         
         // save token
         localStorage.setItem('token', res.data.token);

         dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: res.data
         });
      })
      .catch(error => {
         dispatch({
            type: LOGIN_USER_FAIL,
            payload: error
         });
      });
}

// Fetch all recipes
export const fetchRecipes = () => dispatch => {
   dispatch({ type: FETCH_DATA_START });

   axios.get('http://localhost:5000/api/recipes')
      .then(res => {
         console.log(res.data);
         dispatch({
            type: FETCH_DATA_SUCCESS,
            payload: res.data
         });
      })
      .catch(err => {
         console.log(err);
         dispatch({
            type: FETCH_DATA_FAIL,
            payload: err
         });
      });
}

// fetch recipes by user id
export const fetchUserRecipes = (id) => dispatch => {
   dispatch({ type: FETCH_DATA_START });

   axiosWithAuth().get(`http://localhost:5000/api/users/${id}/recipes`)
      .then(res => {
         console.log(res.data);

         dispatch({
            type: FETCH_DATA_SUCCESS,
            payload: res.data
         });

      })
      .catch(error => {
         console.log(error);

         dispatch({
            type: FETCH_DATA_FAIL,
            payload: error
         });
      })
}