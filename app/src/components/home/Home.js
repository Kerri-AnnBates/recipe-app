import React from 'react';
import Header from '../header/Header';
import ingredientImg from '../../img/ingredients.jpg';
import listImg from '../../img/list.jpg';
import favFoodImg from '../../img/fav-dish.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function home() {
   return (
      <div className="home">
         <div className="main-intro">
            <div className="container">
               <Header />
               <div className="main-content">
                  <div className="grid-text">
                     <h1>Recipes</h1>
                  </div>
                  <div className="grid-sidebar">
                     <h2>Keep track of all your favorite recipes</h2>
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, cupiditate quaerat. Quibusdam eaque illum eveniet nisi, reprehenderit ea repellat enim est molestiae dolor quod aut amet hic voluptates ab voluptate?</p>
                  </div>
                  <div className="grid-img">
                     Image here
                  </div>
               </div>
            </div>
         </div>
         <div className="featured">
            <div className="container">
               <div className="medium-container">
                  <div className="f-grid">
                     <div className="f-box-1 f-box">
                        <div className="icons"><FontAwesomeIcon icon="save" /></div>
                        <div className="img-container">
                           <img src={favFoodImg} alt="Favorite salmon dish" />
                        </div>
                        <div className="content">
                           <p>Save all your favorite recipes.</p>
                        </div>
                     </div>
                     <div className="f-box-2 f-box">
                        <div className="icons"><FontAwesomeIcon icon="list" /></div>
                        <div className="img-container">
                           <img src={listImg} alt="Person writing a list of items" />
                        </div>
                        <div className="content">
                           <p>Keep track of your list of recipes.</p>
                        </div>
                     </div>
                     <div className="f-box-3 f-box">
                        <div className="icons"><FontAwesomeIcon icon="tasks" /></div>
                        <div className="img-container">
                           <img src={ingredientImg} alt="Cooking ingredients" />
                        </div>
                        <div className="content">
                           <p>See if you have enough ingredients for that reecipe.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default home
