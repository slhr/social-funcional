import {profileAPI} from "../api/api";
import {PhotosType, PostType, ProfileType} from "../types/types";

const ADD_POST = "profile-reducer/ADD_POST";
const SET_USER_PROFILE = "profile-reducer/SET_USER_PROFILE";
const SET_STATUS = "profile-reducer/SET_STATUS";
const SAVE_PHOTO_SUCCESS = "profile-reducer/SAVE_PHOTO_SUCCESS";


const initialState = {
    profile: null as ProfileType | null,
    status: "",
    posts: [
        {id: 1, message: "It's my first post", elapsedTimePost: "3 days ago", likesCount: 26, viewsCount: 58},
        {id: 2, message: "It's my second post", elapsedTimePost: "2 days ago", likesCount: 17, viewsCount: 41},
        {id: 3, message: "It's my third post", elapsedTimePost: "1 day ago", likesCount: 5, viewsCount: 15},
    ] as Array<PostType>,
};

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {

        case ADD_POST: {
            const newPost = {
                id: state.posts.length + 1,
                message: action.newPostText,
                elapsedTimePost: "just now",
                likesCount: 0,
                viewsCount: 0
            };
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
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos
                } as ProfileType
            };
        default:
            return state;
    }
};

export default profileReducer;


// actions

type AddPostCreatorActionType = {
    type: typeof ADD_POST
    newPostText: string
}

export const addPostCreator = (newPostText: string): AddPostCreatorActionType => ({type: ADD_POST, newPostText});


type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}

export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile});

type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}

export const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status});

type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}

export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos});

// thunks

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    const response = await profileAPI.getProfile(userId);

    dispatch(setUserProfile(response.data));
};


export const getStatus = (userId: number) => async (dispatch: any) => {
    const response = await profileAPI.getStatus(userId);

    dispatch(setStatus(response.data));
};


export const updateStatus = (status: string) => async (dispatch: any) => {
    const response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        const errorMessages = response.data.messages;
        throw new Error(errorMessages);
    }
};

export const setAvatarPhoto = (file: any) => async (dispatch: any) => {
    const response = await profileAPI.setAvatarPhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};