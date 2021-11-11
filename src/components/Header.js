import React, { useContext } from 'react';
import { GlobalContext } from '../context/store';

function Header() {
    const { query, cuisine, diet, intolerance, type, spoon } = useContext(GlobalContext);

    const handleSearchText = event => {
        spoon(event.target.value);
    }

    const handleSearchSubmit = event => {
        event.preventDefault();
        alert(`${query} - ${cuisine} - ${diet} - ${intolerance} - ${type}`);
    }

    return (
        <div className="cmp-header">
            <h1>Search and Find Recipes Spoonacularly</h1>
            <form onSubmit={(e) => handleSearchSubmit(e)}>
                <input
                    type="text"
                    name="searchText"
                    placeholder="powered by spoonacular.com"
                    value={query}
                    onChange={(e) => handleSearchText(e)}
                />
                {/* <button
                    type="submit"
                >SPOON</button> */}
            </form>
        </div>
    )
}

export default Header;