import React, { useState } from 'react'
import { connect } from 'react-redux';
import {registerUser} from '../../actions';

// Reactstrap
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// Components
import Header from '../header/Header';

function Register(props) {

   const { registerUser } = props;
   
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

   // Register user
   const saveUser = (e) => {
      e.preventDefault();

      if (userInput.username && userInput.password) {
         console.log('user saved');
         console.log(userInput);
         registerUser(userInput);
         // props.history.push('/login');
         setUserInput({
            username: '',
            password: ''
         });
      } else {
         console.log('Please enter a username and password');
      }
   }

   return (
      <>
         <Header />
         <div className="login">
            <div className="container">
               <div className="login-wrapper">
                  <h1>Sign Up</h1>
                  <Form onSubmit={saveUser}>
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
                     <Button color="warning">Submit</Button>
                  </Form>
               </div>
            </div>
         </div>
      </>
   )
}

const mapStateToProps = (state) => {
   return {
      isRegistering: state.isRegistering,
      isRegistered: state.isRegistered
   }
}

export default connect(mapStateToProps, { registerUser })(Register);
