import React, { createContext, useReducer } from 'react';
import { globalReducer } from './GlobalReducer';
import * as CONSTANTS from '../constants';

const initialState = {
    query: "",
    cuisine: "",
    diet: "",
    intolerance: "",
    type: ""
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(globalReducer, initialState);

    const filterCuisine = filter => {
        dispatch({
            type: CONSTANTS.ACTION_CUISINE,
            payload: filter
        });
    }

    const filterDiet = filter => {
        dispatch({
            type: CONSTANTS.ACTION_DIET,
            payload: filter
        });
    }

    const filterIntolerance = filter => {
        dispatch({
            type: CONSTANTS.ACTION_INTOLERANCE,
            payload: filter
        });
    }

    const filterType = filter => {
        dispatch({
            type: CONSTANTS.ACTION_TYPE,
            payload: filter
        });
    }

    const spoon = query => {
        dispatch({
            type: CONSTANTS.ACTION_SPOON,
            payload: query
        });
    }

    return (
        <GlobalContext.Provider value={{
            query: state.query,
            cuisine: state.cuisine,
            diet: state.diet,
            intolerance: state.intolerance,
            type: state.type,
            spoon,
            filterCuisine,
            filterDiet,
            filterIntolerance,
            filterType
        }}>
            {children}
        </GlobalContext.Provider>
    );
}