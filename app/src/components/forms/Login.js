import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// Components
import Header from '../header/Header';

function Login() {
   
   const [userInput, setUserInput] = useState({
      username: '',
      password: ''
   });

   return (
      <>
         <Header />
         <div className="login">
            <div className="container">
               <div className="login-wrapper">
                  <h1>Log in</h1>
                  <Form>
                     <FormGroup>
                        <Label for="username">Username:</Label>
                        <Input type="username" name="username" id="username" placeholder="Enter your username" />
                     </FormGroup>
                     <FormGroup>
                        <Label for="password">Password:</Label>
                        <Input type="password" name="password" id="password" placeholder="Enter your password" />
                     </FormGroup>
                     <Button color="primary">Login</Button>
                     <Button color="secondary">Register</Button>
                  </Form>
               </div>
            </div>
         </div>
      </>
   )
}

export default Login
