import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import placesReducer from "./reducers/places";
import uiReducer from "./reducers/ui";

const rootReducer = combineReducers({
  places: placesReducer,
  ui: uiReducer
});

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
