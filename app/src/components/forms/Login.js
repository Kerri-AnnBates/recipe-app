import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// Components
import Header from '../header/Header';

function Login() {
   return (
      <>
         <div className="container">
            <Header />
         </div>
         <div className="login">
            <div className="container">
               <div className="login-wrapper">
                  <h1>Log in</h1>
                  <Form>
                     <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                     </FormGroup>
                     <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                     </FormGroup>
                     <Button>Login</Button>
                     <Button>Register</Button>
                  </Form>
               </div>
            </div>
         </div>
      </>
   )
}

export default Login
