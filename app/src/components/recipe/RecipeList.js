import React from 'react';
import Header from '../header/Header';

function RecipeList() {
    return (
        <div className="container">
            <Header />
            <div className="recipe-list">
                <div className="container">
                    <h1>Your Recipes</h1>
                </div>
            </div>
        </div>
    )
}

export default RecipeList;