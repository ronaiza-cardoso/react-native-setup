import { createStore, compose } from 'redux';

import reducers from './ducks';

const middlewares = [];

const store = createStore(reducers, compose(...middlewares));

export default store;
