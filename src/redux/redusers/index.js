import filterReduser from './filterReduser';
import pizzaReduser from './pizzaReduser';
import cartReduser from './cartReduser';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  filterReduser,
  pizzaReduser,
  cartReduser,
});

export default reducers;
