import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function AddRecipe() {
   return (
      <div className="add-form">
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
   
            <Button color="primary">Submit</Button>
         </Form>
      </div>
   )
}

export default AddRecipe;
