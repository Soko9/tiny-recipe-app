import React, { useContext } from 'react';
import * as CONSTANTS from '../constants';
import { GlobalContext } from '../context/store';

function TypeFilter() {
    const { filterType } = useContext(GlobalContext);

    const handleChange = event => {
        filterType(event.target.value);
    }

    return (
        <div className="cmp-filter">
            <h4>Meal Types</h4>
            <div className="options">
                {CONSTANTS.MEAL_TYPE_OPTIONS.map((item, index) => {
                    return (
                        <label key={index}>
                            <input
                                type="radio"
                                name="meal_type"
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

export default TypeFilter;