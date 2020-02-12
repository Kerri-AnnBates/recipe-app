import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRecipeDetails } from '../../redux/actions/recipe-actions';

function RecipeDetails(props) {

	const { fetchRecipeDetails, recipeDetails, isFetching } = props;
	const id = props.match.params.id;

	useEffect(() => {
		fetchRecipeDetails(id);
	}, [])

	return (
		<div>
			<div className="container">
				{isFetching && <p>Loading recipe...</p>}
				{recipeDetails && (
					<div className="recipe-details">
						<section>
							<h1>{recipeDetails.title}</h1>
							<p>Description:</p>
							<p>{recipeDetails.description}</p>
						</section>
						<section>
							<h2>Ingredients</h2>
							<ul>
								{recipeDetails.ingredients.map(ingredient => (
									<li key={ingredient.id}>{ingredient.name}</li>
								))}
							</ul>
						</section>
						<section>
							<h2>Steps</h2>
							<ul>
								{recipeDetails.steps.map(step => (
									<li key={step.id}>{step.instruction}</li>
								))}
							</ul>
						</section>
					</div>
				)}
			</div>
		</div>
	)
}

function mapStateToProps(state) {
	return {
		recipeDetails: state.recipesReducer.recipeDetails,
		isFetching: state.recipesReducer.isFetching
	}
}

export default connect(mapStateToProps, { fetchRecipeDetails })(RecipeDetails);