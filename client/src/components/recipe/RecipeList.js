import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchUserRecipes, fetchUserProfile } from '../../actions';

import Header from '../header/Header';

function RecipeList(props) {
    const { fetchUserRecipes, currentUser, fetchUserProfile, profileFetched, recipes } = props;

    // Get user id from reducer state
    console.log('user:', currentUser);
    const userId = currentUser.id;

    // Fetch recipes on load
    useEffect(() => {
        console.log('fetched profile', profileFetched);
        fetchUserRecipes(userId);
        
    }, [profileFetched]);

    console.log('recipes:', recipes);

    return (
        <>
            <Header />
            <div className="recipe-list">
                <div className="container">
                    <h1>Your Recipes</h1>
                    {recipes.map(recipe => (
                        <h3 key={recipe.id}>{recipe.title}</h3>
                    ))}
                </div>
            </div>
        </>
    )
}

function mapStateToProps(state) {
    return {
        recipes: state.recipes,
        currentUser: state.currentUser,
        profileFetched: state.profileFetched
    }
}

// export default RecipeList;
export default connect(
    mapStateToProps, { fetchUserRecipes, fetchUserProfile }
)(RecipeList);