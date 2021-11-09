import React, { useContext } from 'react';
import * as CONSTANTS from '../constants';
import { GlobalContext } from '../context/store';

function CuisineFilter() {
    const { filterCuisine } = useContext(GlobalContext);

    return (
        <div className="cmp-filter">
            <h4>Cuisines</h4>
            <select className="options" onChange={(e) => filterCuisine(e.target.value)}>
                {CONSTANTS.CUISINE_OPTIONS.map((item, index) => {
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

export default CuisineFilter;