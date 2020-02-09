import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

function RecipeCard(props) {
	const { recipe } = props;

	return (
		<>
			<Card body className="recipe-card">
				<CardTitle>{recipe.title}</CardTitle>
				<CardText>{recipe.description}</CardText>
			</Card>
		</>
	)
}

export default RecipeCard;