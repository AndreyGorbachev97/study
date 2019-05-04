import {combineReducers} from 'redux';
import reducersProduct from './reducerProduct';

const allReducers = combineReducers({
    reducerProduct: reducersProduct,
});

export default allReducers