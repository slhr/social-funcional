import {getAuthUserData} from "./auth-reducer";

const SET_INITIALIZED_SUCCESS = "app/SET_INITIALIZED_SUCCESS";


let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

export default appReducer;


// action creators

export const initializedSuccess = () => ({type: SET_INITIALIZED_SUCCESS});

// thunk creators

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthUserData());
        promise.then(() => {
            dispatch(initializedSuccess());
        });
    }
}