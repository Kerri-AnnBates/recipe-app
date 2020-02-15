import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { fetchRecipeDetails } from '../../redux/actions/recipe-actions';

function RecipeDetails(props) {

	const { fetchRecipeDetails, recipeDetails, isFetching } = props;
	const id = props.match.params.id;

	useEffect(() => {
		fetchRecipeDetails(id);
	}, [])

	function goBack() {
		props.history.push('/recipes');
	}

	return (
		<div>
			<div className="container">
				{isFetching && <p>Loading recipe...</p>}
				{recipeDetails && (
					<div className="recipe-details">
						<Button
							outline
							onClick={goBack}
						>Go Back</Button>
						<section>
							<h1>{recipeDetails.title}</h1>
							<p>Description:</p>
							<p>{recipeDetails.description}</p>
						</section>
						<section>
							<h2>Ingredients</h2>
							<Form>
								<FormGroup check>
									{recipeDetails.ingredients.map(ingredient => (
										<Label check key={ingredient.id} style={{ width: "100%", margin: "5px 0" }}>
											<Input type="checkbox" name="ingredient" /> <span style={{ marginLeft: "5px" }}>{ingredient.name}</span>
										</Label>
									))}
								</FormGroup>
							</Form>
						</section>
						<section>
							<h2>Steps</h2>
							<ol>
								{recipeDetails.steps.map(step => (
									<li key={step.id}>{step.instruction}</li>
								))}
							</ol>
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