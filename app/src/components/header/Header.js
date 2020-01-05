import React from 'react'
import logo from '../../img/logo.png';
import SearchForm from './SearchForm';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="container">
                <div className="flex-parent header-content">
                    <div className='logo'><img src={logo} alt="Recipes logo" /></div>
                    <nav>
                        <ul>
                            <li><NavLink exact to="/">Home</NavLink></li>
                            <li><NavLink to="/recipes">Recipes</NavLink></li>
                            <li>Login / SignUp</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
