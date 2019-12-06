import React from 'react';

function SearchForm() {
    return (
        <div className="search">
            <form>
                <label htmlFor="search">Search Recipe <input name="search" id="search" type="text" /></label>
                <button className="btn">Search</button>
            </form>
        </div>
    )
}

export default SearchForm;