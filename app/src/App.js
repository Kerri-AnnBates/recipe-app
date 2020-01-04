import React from 'react';
import './styles/app.scss';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Header from './components/header/Header';
import Home from './components/home/Home';
import RecipeList from './components/recipe/RecipeList';
import EditRecipe from './components/edit/EditRecipe';

// Contexts
const RecipeContext = React.createContext();

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path='/' component={Home} />
      <Route path='/recipes' component={RecipeList} />
      <Route path='/edit' component={EditRecipe} />
    </div>
  )
}

export default App;
