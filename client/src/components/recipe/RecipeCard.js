import React from 'react';
import { Card, CardTitle, CardText, CardBody, CardLink } from 'reactstrap';

function RecipeCard(props) {
	const { recipe } = props;

	return (
		<>
			<Card body className="recipe-card">
				<CardBody className="card-titles">
					<CardTitle>{recipe.title}</CardTitle>
					<CardText>{recipe.description}</CardText>
				</CardBody>
				<CardBody className="card-links">
					<CardLink href="#">Edit</CardLink>
				</CardBody>
			</Card>
		</>
	)
}

export default RecipeCard;