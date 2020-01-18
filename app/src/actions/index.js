import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';

export const POST_DATA_START = 'POST_DATA_START';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
export const POST_DATA_FAIL = 'POST_DATA_FAIL';

export const fetchRecipes = () => dispatch => {
   dispatch({ type: FETCH_DATA_START});

   axios.get('http://localhost:5000/api/recipes')
      .then(res => {
         console.log(res.data);
         dispatch({
            type: FETCH_DATA_SUCCESS,
            payload: res.data
         })
      })
      .catch(err => {
         console.log(err);
      })
}