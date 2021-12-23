import * as actionTypes from '../actions/Actiontypes';

const initialState = [[]];

export default function ProductReducers(state = initialState[0], action){
    switch(action.type){
        case actionTypes.PRODUCT_DATA_LOADING_COMPLETE:
            return state.concat(action.payload);
        default:
            return state;    
    }
}