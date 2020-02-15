import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function AddIngredients() {
	return (
		<div className="add-form">
			<div className="container">
				<h1>Add Ingredient</h1>
				<div className="form-wrapper">
					<Form>
						<FormGroup>
							<Label for="recipe-title">Title:</Label>
							<Input
								type="text"
								name="recipe-title"
								id="recipe-title"
							/>
						</FormGroup>
						<Button color="primary">Submit</Button>
					</Form>
				</div>
			</div>
		</div>
	)
}

export default AddIngredients
