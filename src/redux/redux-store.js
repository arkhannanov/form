import {combineReducers, createStore} from "redux";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    form: formReducer,
});

const store = createStore(reducers);
window.__store__ = store;

export default store;