import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

//======Middleware================================
const middleware = [thunk];

//=====Reducers================================
const rootReducer = combineReducers({
  users: () => {
    return { me: 'Emmanuel' };
  },
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
