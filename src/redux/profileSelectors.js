const getProfile = (state) => {
    return state.profilePage.profile;
};

const getStatus = (state) => {
    return state.profilePage.status;
};


export { getProfile, getStatus };