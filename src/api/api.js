import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "4bc7e817-ee00-4898-a73b-a41f1ce8c8a7"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    follow(userId) {
        return instance.post(`follow/${userId}`);
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`);
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status});
    }

}

export const authAPI = {

    me() {
        return instance.get(`auth/me`);
    },

    login(email, password, rememberMe = false, captcha = false) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha});
    },

    logout() {
        return instance.delete(`auth/login`);
    }
}