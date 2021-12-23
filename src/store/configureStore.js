import {createStore,combineReducers} from 'redux';
import ProductReducer from './reducers/ProductReducer';
import cartReducer from './reducers/CartReducre';

const allReducer = combineReducers({
    ProductReducer,
    cartReducer,
})

const store = createStore(allReducer);

export default store;