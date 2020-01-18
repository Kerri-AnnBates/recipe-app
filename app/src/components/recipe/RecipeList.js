import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../../actions';

import Header from '../header/Header';

function RecipeList(props) {
    const { fetchRecipes } = props;

    // Fetch recipes on load
    useEffect(() => {
        fetchRecipes();
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
    mapStateToProps, { fetchRecipes }
)(RecipeList);