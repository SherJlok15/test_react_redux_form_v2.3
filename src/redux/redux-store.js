import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LoginReducer from './LoginReducer';

let reducers = combineReducers({
  login: LoginReducer,
  form: formReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
