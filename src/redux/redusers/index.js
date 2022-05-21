import filterReduser from './filterReduser';
import pizzaReduser from './pizzaReduser';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  filterReduser,
  pizzaReduser,
});

export default reducers;
