import axios from 'axios';
import { axiosWithAuth } from '../../protected/axiosWithAuth';

import {
   FETCH_DATA_START,
   FETCH_DATA_SUCCESS,
   FETCH_DATA_FAIL,
   ADD_DATA_START,
} from './types';


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
         // console.log(res.data);

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

// Post a recipe
export const addRecipe = () => dispatch => {
   dispatch({type: ADD_DATA_START});

   
}