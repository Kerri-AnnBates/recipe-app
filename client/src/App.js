import React, { useEffect } from 'react';
// import './styles/app.scss';
import { Route } from 'react-router-dom';
import { fetchUserProfile } from './actions';
import { connect } from 'react-redux';

// Components
import Home from './components/home/Home';
import RecipeList from './components/recipe/RecipeList';
import EditRecipe from './components/edit/EditRecipe';
import Footer from './components/footer/Footer';

// Fontawesome icon library
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSave, faList, faTasks } from '@fortawesome/free-solid-svg-icons';
import Login from './components/forms/Login';
import Register from './components/forms/Register';
import PrivateRoute from './protected/PrivateRoute';

library.add(fab, faSave, faList, faTasks);

function App(props) {
  const { fetchUserProfile } = props;

  useEffect(() => {
    // keep user logged in for as long as the token is good for
    fetchUserProfile();
  }, [])

  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <PrivateRoute path='/recipes' component={RecipeList} />
      <Route path='/edit' component={EditRecipe} />
      <Route path='/register' component={Register} />
      <Footer />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}

// export default RecipeList;
export default connect(
  mapStateToProps, { fetchUserProfile }
)(App);

// export default App;
