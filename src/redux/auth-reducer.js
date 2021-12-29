import {authAPI, securityAPI} from "../api/api";

const SET_USER_DATA = "auth-reducer/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "auth-reducer/GET_CAPTCHA_URL_SUCCESS";

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export default authReducer;


// action creators

export const setAuthUserData = (userId, email, login, isAuth, captchaUrl) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth, captchaUrl}
});

export const getCaptchaUrlSuccess = captchaUrl => ({
    type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
});

// thunk creators

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();

    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true, null));
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {

    const response = await authAPI.login(email, password, rememberMe, captcha);

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        const errorMessage = response.data.messages[0]
        throw new Error(errorMessage)
    }
}


export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}


export const getCaptchaUrl = () => async (dispatch) => {
    let response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;

    dispatch(getCaptchaUrlSuccess(captchaUrl));
}
