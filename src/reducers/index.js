import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import code from './codeReducer';

export default combineReducers({
    routing: routerReducer,
    code
});