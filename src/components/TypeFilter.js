import React, { useContext } from 'react';
import * as CONSTANTS from '../constants';
import { GlobalContext } from '../context/store';

function TypeFilter() {
    const { filterType } = useContext(GlobalContext);

    return (
        <div className="cmp-filter">
            <h4>Meal Types</h4>
            <select className="options" onChange={(e) => filterType(e.target.value)}>
                {CONSTANTS.MEAL_TYPE_OPTIONS.map((item, index) => {
                    return (
                        <option
                            key={index}
                            value={item}>
                                {item}
                        </option>
                    );
                })}
            </select>
        </div>
    )
}

export default TypeFilter;