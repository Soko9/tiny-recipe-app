import * as CONSTANTS from '../constants';

export const globalReducer = (state, action) => {
    switch (action.type) {
        case CONSTANTS.ACTION_CUISINE:
            return {
                ...state,
                cuisine: action.payload
            }
        case CONSTANTS.ACTION_DIET:
            return {
                ...state,
                diet: action.payload
            }
        case CONSTANTS.ACTION_INTOLERANCE:
            return {
                ...state,
                intolerance: action.payload
            }
        case CONSTANTS.ACTION_TYPE:
            return {
                ...state,
                type: action.payload
            }
        case CONSTANTS.ACTION_SPOON:
            return {
                ...state,
                query: action.payload,
            }
        default:
            return state;
    }
}