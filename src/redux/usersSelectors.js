const getUsers = (state) => {
    return state.usersPage.users
};

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