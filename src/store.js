import {createStore , applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";
import {combineReducers} from "redux";
import searchReducer from "./movieRedux/movieReducer/searchReducer";

const rootReducer= combineReducers({
    movie:searchReducer
});

const middleware = [thunk];

 const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleware)))

export default store;
