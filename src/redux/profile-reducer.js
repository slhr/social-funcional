import {profileAPI} from "../api/api";

const ADD_POST = "profileReducer/ADD-POST";
const SET_USER_PROFILE = "profileReducer/SET_USER_PROFILE";
const SET_STATUS = "profileReducer/SET_STATUS";
const DELETE_POST = "profileReducer/DELETE_POST";


const initialState = {
    profile: null,
    posts: [

        {id: 1, message: "It's my first post", elapsedTimePost: "3 days ago", likesCount: 26, viewsCount: 58},
        {id: 2, message: "It's my second post", elapsedTimePost: "2 days ago",  likesCount: 17, viewsCount: 41},
        {id: 3, message: "It's my third post", elapsedTimePost: "1 day ago",  likesCount: 5, viewsCount: 15 },
    ],
    status: "",
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST: {
            const newPost = {id: state.posts.length + 1, message: action.newPostText, elapsedTimePost: "just now", likesCount: 0, viewsCount: 0}
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((p) => p.id !== action.postId)
            };
        default:
            return state;
    }
};

export default profileReducer;


// actions

export const addPostCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});

// thunks

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};


export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};


export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};