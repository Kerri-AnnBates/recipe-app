import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
// Components
import Header from './components/header/Header';
import RecipeList from './components/recipe/RecipeList';
import EditRecipe from './components/edit/EditRecipe';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path='/' component={RecipeList} />
      <Route path='/edit' component={EditRecipe} />
    </div>
  )
}

export default App;
