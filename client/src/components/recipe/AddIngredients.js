import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { getIngredients } from '../../redux/actions/ingredient-actions';

function AddIngredients(props) {

	const { getIngredients, ingredients, isFetching } = props;
	const [search, setSearch] = useState('');
	const [filteredIngredients, setFilteredIngredients] = useState([]);

	function handleChange(e) {
		setSearch(e.target.value)
	}

	useEffect(() => {
		getIngredients();
	}, [])

	useEffect(() => {
		setFilteredIngredients(ingredients);
	}, [ingredients])

	useEffect(() => {
		setFilteredIngredients(
			ingredients.filter((ingredient) => {
				return ingredient.name.toLowerCase().includes(search.toLowerCase());
			})
		);
	}, [search])

	return (
		<div>
			<div className="container">
				<h1>Add Ingredients</h1>
				<section className="ingredients-list">
					<div className="ingredients-block">
						{/* search box to filter out ingredients */}
						<input
							type="text"
							name="ingredients"
							id="ingredient-search"
							placeholder="Search ingredient..."
							value={search}
							onChange={handleChange}
						/>

						{/* List ingredients */}
						{isFetching && (<p>Loading ingredients...</p>)}
						<ul>
							{!isFetching && filteredIngredients.map(ingredient => (
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
