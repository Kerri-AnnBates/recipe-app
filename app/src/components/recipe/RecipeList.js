import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUserRecipes, fetchUserProfile } from '../../actions';

import Header from '../header/Header';

function RecipeList(props) {
    const { fetchUserRecipes, currentUser, fetchUserProfile } = props;
    
    // Get user id from reducer state
    console.log('user:', currentUser);
    const userId = currentUser.id;

    // Fetch recipes on load
    // useEffect(() => {
    //     fetchUserProfile
    //     fetchUserRecipes(userId);
    // }, [currentUser]);

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
        recipes: state.recipes,
        currentUser: state.currentUser
    }
}

// export default RecipeList;
export default connect(
    mapStateToProps, { fetchUserRecipes, fetchUserProfile }
)(RecipeList);