import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const RecipeModal = (props) => {
	const { toggle, modal, recipe } = props;

	return (
		<div>
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>{recipe.title}</ModalHeader>
				<ModalBody>
					<div>
						<h4>Description</h4>
						<p>{recipe.description}</p>
					</div>
					<div>
						<h4>Ingredients</h4>
					</div>
					<div>
						<h4>Steps</h4>
					</div>
        </ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={toggle}>Open in new tab?</Button>{' '}
					<Button color="secondary" onClick={toggle}>Cancel</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
}

export default RecipeModal;