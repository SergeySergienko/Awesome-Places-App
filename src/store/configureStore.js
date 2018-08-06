import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import placesReducer from "./reducers/places";

const rootReducer = combineReducers({
  places: placesReducer
});

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
