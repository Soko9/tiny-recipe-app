import React, { useContext } from 'react';
import * as CONSTANTS from '../constants';
import { GlobalContext } from '../context/store';

function IntoleranceFilter() {
    const { filterIntolerance } = useContext(GlobalContext);

    const handleChange = event => {
        filterIntolerance(event.target.value);
    }

    return (
        <div className="cmp-filter">
            <h4>Intolerances</h4>
            <div className="options">
                {CONSTANTS.INTOLERANCE_OPTIONS.map((item, index) => {
                    return (
                        <label key={index}>
                            <input
                                type="radio"
                                name="intolerance"
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

export default IntoleranceFilter;