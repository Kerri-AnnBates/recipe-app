import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function AddRecipe() {
   return (
      <div className="add-form">
         <div className="container">
            <h1>Add Recipe</h1>
            <div className="form-wrapper">
               <Form>
                  <FormGroup>
                     <Label for="recipe-title">Title:</Label>
                     <Input
                        type="recipe-title"
                        name="recipe-title"
                        id="recipe-title"
                        placeholder="Enter your username"
                     />
                  </FormGroup>
                  <FormGroup>
                     <Label for="description">Description:</Label>
                     <Input type="textarea" name="description" id="description" />
                  </FormGroup>
                  <Button color="primary">Submit</Button>
               </Form>
            </div>
         </div>
      </div>
   )
}

export default AddRecipe;
