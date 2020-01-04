import React from 'react'
import logo from '../../img/logo.png';
import SearchForm from './SearchForm'

function Header() {
    return (
        <header>
            <div className="container">
                <div className="flex-parent header-content">
                    <div className='logo'><img src={logo} alt="Recipes logo" /></div>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>Recipes</li>
                            <li>Login / SignUp</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
