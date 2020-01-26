import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';
import {Redirect} from 'react-router-dom';

// Components
import Header from '../header/Header';
import { Link } from 'react-router-dom';

function Login(props) {

   const { loginUser, loggedIn } = props;

   const [userInput, setUserInput] = useState({
      username: '',
      password: ''
   });

   // handle change to inputs
   const handleChange = (e) => {
      setUserInput({
         ...userInput,
         [e.target.name]: e.target.value
      })
   }

   const submitForm = (e) => {
      e.preventDefault();
      loginUser(userInput);
      setUserInput({
         username: '',
         password: ''
      });
   }

   // if (loggedIn) {
   //    return <Redirect to="/recipes" />;
   // }

   return (
      <>
         <Header />
         <div className="login">
            <div className="container">
               <div className="login-wrapper">
                  <h1>Log in</h1>
                  <Form onSubmit={submitForm}>
                     <FormGroup>
                        <Label for="username">Username:</Label>
                        <Input
                           type="username"
                           name="username"
                           id="username"
                           placeholder="Enter your username"
                           value={userInput.username}
                           onChange={handleChange}
                        />
                     </FormGroup>
                     <FormGroup>
                        <Label for="password">Password:</Label>
                        <Input
                           type="password"
                           name="password"
                           id="password"
                           placeholder="Enter your password"
                           value={userInput.password}
                           onChange={handleChange}
                        />
                     </FormGroup>
                     <Button color="primary">Login</Button>
                     {/* <Button color="secondary" onClick={redirect}>Register</Button> */}
                     <Link to="/register">Don't have an account?</Link>
                  </Form>
               </div>
            </div>
         </div>
      </>
   )
}

const mapStateToProps = (state) => {
   return {
      isLoggingIn: state.isLoggingIn,
      loggedIn: state.loggedIn
   }
}

export default connect(mapStateToProps, { loginUser })(Login)
