import React from 'react';

function RecipeCard(props) {
    const { recipe } = props;

    // console.log('recipeCard', recipe);

    return (
        <>
            <div className="recipe-card">
                <h2>{recipe.title}</h2>
                <p>{recipe.description}</p>
            </div>
        </>
    )
}

export default RecipeCard;