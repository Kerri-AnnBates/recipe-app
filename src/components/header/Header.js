import React from 'react'
import SearchForm from '../SearchForm'

function Header() {
    return (
        <header>
            <h1>Recipe App</h1>
            <p>Keep track of all your favorite recipes</p>
            <SearchForm />
        </header>
    )
}

export default Header
