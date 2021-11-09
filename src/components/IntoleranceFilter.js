import React, { useContext } from 'react';
import * as CONSTANTS from '../constants';
import { GlobalContext } from '../context/store';

function IntoleranceFilter() {
    const { filterIntolerance } = useContext(GlobalContext);

    return (
        <div className="cmp-filter">
            <h4>Intolerances</h4>
            <select className="options" onChange={(e) => filterIntolerance(e.target.value)}>
                {CONSTANTS.INTOLERANCE_OPTIONS.map((item, index) => {
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

export default IntoleranceFilter;