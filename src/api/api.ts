import axios from "axios";


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "4bc7e817-ee00-4898-a73b-a41f1ce8c8a7"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    follow(userId: number) {
        return instance.post(`follow/${userId}`);
    },

    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`);
    },
};

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`);
    },

    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`);
    },

    updateStatus(status: string) {
        return instance.put(`profile/status`, {status});
    },

    saveProfile(profile: any) {
        return instance.put(`profile`, profile);
    },

    setAvatarPhoto(file: any) {
        const formData = new FormData();
        formData.append("image", file);

        return instance.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    },

};

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },

    login(email: string, password: string, rememberMe = false, captcha: string | null = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha});
    },

    logout() {
        return instance.delete(`auth/login`);
    },

};

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    },
};