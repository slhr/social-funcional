import {getAuthUserData} from "./auth-reducer";


const SET_INITIALIZED_SUCCESS = "app-reducer/SET_INITIALIZED_SUCCESS";


export type InitialStateType = {
    initialized: boolean
}


const initialState: InitialStateType = {
    initialized: false,
};

const appReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
};

export default appReducer;


// action creators
type InitializedSuccessActionType = {
    type: typeof SET_INITIALIZED_SUCCESS
}

export const initializedSuccess = (): InitializedSuccessActionType => ({type: SET_INITIALIZED_SUCCESS});

// thunk creators

export const initializeApp = () => {
    return (dispatch: any) => {
        let promise = dispatch(getAuthUserData());
        promise.then(() => {
            dispatch(initializedSuccess());
        });
    };
};