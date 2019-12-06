import React from 'react';
import './App.css';
import Header from './components/header/Header';
import RecipeList from './components/recipe/RecipeList';

function App() {
  return (
    <div className="App">
     <Header />
     <RecipeList />
    </div>
  )
}

export default App;
