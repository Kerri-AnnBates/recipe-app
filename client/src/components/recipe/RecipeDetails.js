import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRecipeDetails } from '../../redux/actions/recipe-actions';

function RecipeDetails(props) {
	const id = props.match.params.id;
	
	useEffect(() => {
		fetchRecipeDetails(id)
	}, [])

	return (
		<div>
			<div className="container">
				<h1>Title</h1>
				<p>Description</p>
			</div>
		</div>
	)
}

function mapStateToProps(state) {
	return {
		recipeDetails: state.recipesReducer.recipeDetails
	}
}

export default connect(mapStateToProps, { fetchRecipeDetails })(RecipeDetails);