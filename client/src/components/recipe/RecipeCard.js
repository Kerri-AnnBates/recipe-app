import React, { useState } from 'react';
import RecipeModal from './RecipeModal';
import { Card, Button, CardTitle, CardText, CardBody, CardLink } from 'reactstrap';

function RecipeCard(props) {
	const { recipe } = props;

	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	return (
		<>
			<Card body className="recipe-card">
				<CardBody className="card-titles" onClick={toggle}>
					<CardTitle>{recipe.title}</CardTitle>
					<CardText>{recipe.description}</CardText>
				</CardBody>
				<CardBody className="card-links">
					<CardLink href="#">Edit</CardLink>
				</CardBody>
			</Card>
			<RecipeModal toggle={toggle} modal={modal} recipe={recipe} />
		</>
	)
}

export default RecipeCard;