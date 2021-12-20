import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";

import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";
import profileReducer from "./profile-reducer";

const reducers = combineReducers({
    auth: authReducer,
    app: appReducer,
    profile: profileReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;