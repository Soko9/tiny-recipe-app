import React from 'react';
import CuisineFilter from './CuisineFilter';
import DietFilter from './DietFilter';
import TypeFilter from './TypeFilter';
import IntoleranceFilter from './IntoleranceFilter';

function Filters() {
    return (
        <>
            <h2 className="filter-title">Filter Out Your Recipes</h2>
            <div className="cmp-filters">
                <CuisineFilter />
                <TypeFilter />
                <DietFilter />
                <IntoleranceFilter />
            </div>
        </>
    )
}

export default Filters;