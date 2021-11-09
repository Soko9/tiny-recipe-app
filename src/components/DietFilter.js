import React, { useContext } from 'react';
import * as CONSTANTS from '../constants';
import { GlobalContext } from '../context/store';

function DietFilter() {
    const { filterDiet } = useContext(GlobalContext);

    return (
        <div className="cmp-filter">
            <h4>Diets</h4>
            <select className="options" onChange={(e) => filterDiet(e.target.value)}>
                {CONSTANTS.DIET_OPTIONS.map((item, index) => {
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

export default DietFilter;