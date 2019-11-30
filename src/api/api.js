import Axios from 'axios';

const instance = Axios.create(
    {
        withCredentials: true,  // withCredentials: true прикрепляет к запросу куки, 
        //т.е. сервер видит что я авторизован или не авторизован
        headers: {  // API-KEY взят из аккаунта в social-network.samuraijs.com,
            // его сгенерировал сервер, нужен для полного доступа к api
            "API-KEY": "5995d704-6605-4021-be3a-75799fb9ae6d"
        },
        baseURL: 'https://social-network.samuraijs.com/api/1.0/'
    });

const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)

    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },

    unFollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    }
};

const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },

    logIn(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => response.data)
    },

    logOut() {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    }
};

const userProfileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },

    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data)
    },

    updateUserStatus(status) {
        return instance.put(`profile/status`, {
            status
        })
            .then(response => response.data)
    },

    updateUserProfile(profile) {
        return instance.put(`profile`, profile)
            .then(response => response.data)
    },

    updateUserPhoto(photo) {
        const formData = new FormData();
        formData.append('image', photo);

        return instance.put(`profile/photo`, formData, {
            headers : {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data)
    }
};

export { usersAPI, authAPI, userProfileAPI };