import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import imageReducer from './image';
import commentReducer from './comment';
import usersReducer from './user';
import likesReducer from './like';
import tagsReducer from './tag';

const rootReducer = combineReducers({
  session,
  users: usersReducer,
  images: imageReducer,
  comments: commentReducer,
  likes: likesReducer,
  tags: tagsReducer,
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
