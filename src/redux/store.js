import { createStore } from 'redux';
import reducers from './redusers';

const store = createStore(reducers);

export default store;
