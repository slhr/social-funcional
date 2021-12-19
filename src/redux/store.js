import {applyMiddleware, combineReducers, createStore} from "redux";

import authReducer from "./auth-reducer";
import thunk from "redux-thunk";
import appReducer from "./app-reducer";

const reducers = combineReducers({
    auth: authReducer,
    app: appReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;