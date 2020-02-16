import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { getIngredients } from '../../redux/actions/ingredient-actions';

function AddIngredients(props) {

	const { getIngredients, ingredients, isFetching } = props;

	useEffect(() => {
		getIngredients();
	}, [])

	return (
		<div>
			<div className="container">
				<h1>Add Ingredient</h1>
				<section className="ingredients-list">
					<div className="ingredients-block">
						<input type="text" name="ingredients" id="ingredient-search" placeholder="Search.." />
						{isFetching && (<p>Loading ingredients...</p>)}
						<ul>
							{!isFetching && ingredients.map(ingredient => (
								<li key={ingredient.id}>{ingredient.name}<Button color="primary">Add</Button></li>
							))}

						</ul>
					</div>
				</section>
				<section>
					<h2>Included ingredients</h2>
				</section>
			</div>
		</div >
	)
}

// export default AddIngredients;
function mapStateToProps(state) {
	return {
		isFetching: state.ingredientsReducer.isFetching,
		ingredients: state.ingredientsReducer.ingredients
	}
}

export default connect(
	mapStateToProps, { getIngredients }
)(AddIngredients);
