import React, { useContext } from 'react';
import * as CONSTANTS from '../constants';
import { GlobalContext } from '../context/store';

function CuisineFilter() {
    const { filterCuisine } = useContext(GlobalContext);

    const handleChange = event => {
        filterCuisine(event.target.value);
    }

    return (
        <div className="cmp-filter">
            <h4>Cuisines</h4>
            <div className="options options-c">
                {CONSTANTS.CUISINE_OPTIONS.map((item, index) => {
                    return (
                        <label key={index}>
                            <input
                                type="radio"
                                name="cuisine"
                                value={item}
                                onChange={(e) => handleChange(e)}
                            /> {item}
                        </label>
                    );
                })}
            </div>
        </div>
    )
}

export default CuisineFilter;