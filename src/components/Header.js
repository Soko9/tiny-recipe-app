import React, { useState } from 'react';

function Header() {
    const [searchText, updateSearchText] = useState("");

    const handleSearchText = event => {
        updateSearchText(event.target.value);
    }

    const handleSearchSubmit = event => {
        event.preventDefault();
        alert(searchText);
        updateSearchText("");
    }

    return (
        <div className="cmp-header">
            <h1>Search and Find Recipes Spoonacularly</h1>
            <form onSubmit={(e) => handleSearchSubmit(e)}>
                <input
                    type="text"
                    name="searchText"
                    placeholder="powered by spoonacular.com"
                    value={searchText}
                    onChange={(e) => handleSearchText(e)}
                />
                <button
                    type="submit"
                >SPOON</button>
            </form>
        </div>
    )
}

export default Header;