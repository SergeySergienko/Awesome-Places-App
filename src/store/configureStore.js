import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import placesReducer from "./reducers/places";
import uiReducer from "./reducers/ui";
import authReducer from "./reducers/auth";

const rootReducer = combineReducers({
  places: placesReducer,
  ui: uiReducer,
  auth: authReducer
});

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
