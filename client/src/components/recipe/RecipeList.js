import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUserRecipes } from '../../redux/actions/recipe-actions';
import { axiosWithAuth } from '../../protected/axiosWithAuth';
import { Button } from 'reactstrap';

// Components
import RecipeCard from './RecipeCard';

function RecipeList(props) {
    const { fetchUserRecipes, recipes } = props;

    async function getProfile() {
        // Wait for profile to be fetched.
        return await axiosWithAuth().get('http://localhost:5000/api/users/profile');

    }

    // Fetch recipes on load
    useEffect(() => {
        // Then get recipes after user info has been fetched.
        console.log('calling...')
        getProfile().then(res => fetchUserRecipes(res.data.id));
    }, []);

    // redirect to add recipe page
    function toAddRecipe() {
        props.history.push('/add-recipe');
    }

    return (
        <>
            <div className="recipe-list">
                <div className="container">
                    <h1>Your Recipes</h1>
                    <Button color="success" onClick={toAddRecipe}>Add Recipe</Button>
                    <div className="recipes-wrapper">
                        {recipes.length === 0 ? <p>You have no recipes yet...</p> :
                            recipes.map(recipe => (
                                <RecipeCard
                                    key={recipe.id}
                                    recipe={recipe}
                                />
                            ))}
                    </div>
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
    mapStateToProps, { fetchUserRecipes }
)(RecipeList);