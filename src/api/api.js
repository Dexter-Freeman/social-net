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
    },

    authMe() {
        return instance.get(`auth/me`)
                .then(response => response.data)
    }
}

export default usersAPI;