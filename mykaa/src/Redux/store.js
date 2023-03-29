import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { reducer as productReducer } from "./ProductReducer/reducer";
const rootReducer = combineReducers({
	products:productReducer,
});
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export default store;
