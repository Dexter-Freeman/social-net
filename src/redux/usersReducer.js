import {usersAPI} from './../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SETUSERSCOUNT = 'SETUSERSCOUNT';
const SETCURRENTPAGE = 'SETCURRENTPAGE';
const TOGGLEISFETCHING = 'TOGGLEISFETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
    users: [
        // { id: 1, avaUrl : 'http://www.alluserpics.com/data/thumbnails/17/03178.jpg', 
        //     followed: true, fullName: 'Dexter F', status: 'I am a boss', 
        //     location: { city: 'Schelkino', country: 'Crimea' } },
        // { id: 2, avaUrl : 'http://www.alluserpics.com/data/thumbnails/17/03172.jpg', followed: true, fullName: 'Yurij Portash', status: 'I am a boss too', location: { city: 'Schelkino', country: 'Crimea' } },
        // { id: 3, avaUrl : 'http://www.alluserpics.com/data/thumbnails/17/03102.jpg', followed: false, fullName: 'Daniil', status: 'I am a boss too', location: { city: 'Schelkino', country: 'Crimea' } },
        // { id: 4, avaUrl : 'http://www.alluserpics.com/data/thumbnails/17/03102.jpg', followed: false, fullName: 'Lena', status: 'I am a boss too', location: { city: 'Schelkino', country: 'Crimea' } },

    ],
    pageSize: 100,
    totalCount: 0,
    currentPage: 1,
    isFetching: true,
    isFollowingProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
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
        case UNFOLLOW:
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
        case SETUSERS:
            return { ...state, users: [...action.users] }
        case SETUSERSCOUNT:
            return { ...state, totalCount: action.totalCount }
        case SETCURRENTPAGE:
            return { ...state, currentPage: action.currentPage }
        case TOGGLEISFETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                isFollowingProgress:
                    action.isFetching ?
                        [...state.isFollowingProgress, action.userId]
                        : state.isFollowingProgress.filter(userId => userId !== action.userId)
            }
        default:
            return state;
    }
};

const followSuccess = (userId) => ({
    type: FOLLOW,
    userId
});

const unFollowSuccess = (userId) => ({
    type: UNFOLLOW,
    userId
});

const setUsers = (users) => ({
    type: SETUSERS,
    users
})

const setUsersCount = (totalCount) => ({
    type: SETUSERSCOUNT,
    totalCount
})

const setCurrentPage = (currentPage) => ({
    type: SETCURRENTPAGE,
    currentPage
})

const toggleIsFetching = (isFetching) => ({
    type: TOGGLEISFETCHING,
    isFetching
})

const toggleIsFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    userId,
    isFetching
})

const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then((data) => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setUsersCount(data.totalCount));
            })
    }
}

const getUsersFromPage = (page, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(page, pageSize)
            .then((data) => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
            })
    }
}

const unFollow = (userId) => (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    usersAPI.unFollow(userId)
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(unFollowSuccess(userId));
                dispatch(toggleIsFollowingProgress(false, userId));
            }
        })
}

const follow = (userId) => (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    usersAPI.follow(userId)
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId));
                dispatch(toggleIsFollowingProgress(false, userId));
            }
        })
}

export {
    follow, unFollow,
    setCurrentPage, toggleIsFetching,
    toggleIsFollowingProgress, getUsers, getUsersFromPage
};

export default usersReducer;