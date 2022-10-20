import thunk from "redux-thunk";
import { combineReducers, applyMiddleware, createStore } from "redux";
import { paginationReducer } from "./slice/paginationSlice";
import { dataReducer } from "./slice/dataSlice";

// Reducers Container

const reducer = combineReducers({
  pagination: paginationReducer,
  api: dataReducer
});

// Reducers Container

// Store For Provider
const store = createStore(reducer, applyMiddleware(thunk));
// Store For Provider

export default store;
