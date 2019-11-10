import { createSelector } from "reselect";


const getUsersSelector = (state) => {
    return state.usersPage.users
};

const getUsers = createSelector(getUsersSelector, (users) => {  // Просто чтобы попробовать библиотеку reselect
    return users.filter(user => true);
})

const getPageSize = (state) => {
    return state.usersPage.pageSize
};

const getTotalCount = (state) => {
    return state.usersPage.totalCount
};

const getCurrentPage = (state) => {
    return state.usersPage.currentPage
};

const getIsFetching = (state) => {
    return state.usersPage.isFetching
};

const getIsFollowingProgress = (state) => {
    return state.usersPage.isFollowingProgress
};
    
export { getUsers, getPageSize, getTotalCount, getCurrentPage, getIsFetching, getIsFollowingProgress };