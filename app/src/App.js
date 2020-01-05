import React from 'react';
import './styles/app.scss';
import { Route } from 'react-router-dom';

// Components
import Home from './components/home/Home';
import RecipeList from './components/recipe/RecipeList';
import EditRecipe from './components/edit/EditRecipe';
import Footer from './components/footer/Footer';

// Fontawesome icon library
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSave, faList, faTasks } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faSave, faList, faTasks);

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route path='/recipes' component={RecipeList} />
      <Route path='/edit' component={EditRecipe} />
      <Footer />
    </div>
  )
}

export default App;
