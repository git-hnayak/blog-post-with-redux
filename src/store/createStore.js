import { createStore } from 'redux';
import { blogReducer } from './reducers/blogReducer';

//Store - takes a reducer function as an argument
const store = createStore(blogReducer);

export default store;
