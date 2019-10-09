const follow = 'follow';
const unFollow = 'unFollow';
const setUsers = 'setUsers';
const setUsersCount = 'setUsersCount';
const setCurrentPage = 'setCurrentPage';
const toggleIsFetching = 'toggleIsFetching';

const initialState = {
    users: [
        // { id: 1, avaUrl : 'http://www.alluserpics.com/data/thumbnails/17/03178.jpg', 
        //     followed: true, fullName: 'Dexter F', status: 'I am a boss', 
        //     location: { city: 'Schelkino', country: 'Crimea' } },
        // { id: 2, avaUrl : 'http://www.alluserpics.com/data/thumbnails/17/03172.jpg', followed: true, fullName: 'Yurij Portash', status: 'I am a boss too', location: { city: 'Schelkino', country: 'Crimea' } },
        // { id: 3, avaUrl : 'http://www.alluserpics.com/data/thumbnails/17/03102.jpg', followed: false, fullName: 'Daniil', status: 'I am a boss too', location: { city: 'Schelkino', country: 'Crimea' } },
        // { id: 4, avaUrl : 'http://www.alluserpics.com/data/thumbnails/17/03102.jpg', followed: false, fullName: 'Lena', status: 'I am a boss too', location: { city: 'Schelkino', country: 'Crimea' } },

    ],
    pageSize : 5,
    totalCount : 0,
    currentPage : 1,
    isFetching : true
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case follow:
            return {
                ...state,
                users: state.users.map(
                    (user) => {
                        if (user.id === action.userId) {
                            return { ...user, followed: true };
                        }
                        return user;
                    })
            }
        case unFollow:
            return {
                ...state,
                users: state.users.map(
                    (user) => {
                        if (user.id === action.userId) {
                            return { ...user, followed: false };
                        }
                        return user;
                    })
            }
        case setUsers:
            return { ...state, users : [ ...action.users ] }
        case setUsersCount: 
            return { ...state, totalCount : action.totalCount }
        case setCurrentPage: 
            return { ...state, currentPage : action.currentPage }
        case toggleIsFetching:
            return { ...state, isFetching : action.isFetching }
        default:
            return state;
    }
};

const followAC = (userId) => ({
    type: follow,
    userId
});

const unFollowAC = (userId) => ({
    type: unFollow,
    userId
});

const setUsersAC = (users) => ({
    type: setUsers,
    users
})

const setUsersCountAC = (totalCount) => ({
    type: setUsersCount,
    totalCount
})

const setCurrentPagetAC = (currentPage) => ({
    type: setCurrentPage,
    currentPage
})

const toggleIsFetchingAC = (isFetching) => ({
    type : toggleIsFetching,
    isFetching
})

export { followAC, unFollowAC, setUsersAC, setUsersCountAC, setCurrentPagetAC, toggleIsFetchingAC };

export default usersReducer;