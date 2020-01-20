import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRecipes, fetchUserRecipes } from '../../actions';

import Header from '../header/Header';

function RecipeList(props) {
    const { fetchRecipes, fetchUserRecipes } = props;
    console.log(props.match.params.id);

    // Get user id from url
    const userId = parseInt(props.match.params.id, 10);

    // Fetch recipes on load
    useEffect(() => {
        // fetchRecipes();
        fetchUserRecipes(userId);
    }, []);

    return (
        <>
            <Header />
            <div className="recipe-list">
                <div className="container">
                    <h1>Your Recipes</h1>
                </div>
            </div>
        </>
    )
}

function mapStateToProps(state) {
    return {
        recipes: state.recipes
    }
}

// export default RecipeList;
export default connect(
    mapStateToProps, { fetchRecipes, fetchUserRecipes }
)(RecipeList);