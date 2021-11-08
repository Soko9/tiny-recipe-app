import React, { useContext } from 'react';
import * as CONSTANTS from '../constants';
import { GlobalContext } from '../context/store';

function DietFilter() {
    const { filterDiet } = useContext(GlobalContext);

    const handleChange = event => {
        filterDiet(event.target.value);
    }

    return (
        <div className="cmp-filter">
            <h4>Diets</h4>
            <div className="options">
                {CONSTANTS.DIET_OPTIONS.map((item, index) => {
                    return (
                        <label key={index}>
                            <input
                                type="radio"
                                name="diet"
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

export default DietFilter;