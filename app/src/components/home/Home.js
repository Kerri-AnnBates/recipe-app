import React from 'react';
import Header from '../header/Header';

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
      </div>
   )
}

export default home
