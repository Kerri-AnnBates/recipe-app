import React from 'react';
import './styles/app.scss';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Home from './components/home/Home';
import RecipeList from './components/recipe/RecipeList';
import EditRecipe from './components/edit/EditRecipe';
import Footer from './components/footer/Footer';

// Contexts
const RecipeContext = React.createContext();

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
