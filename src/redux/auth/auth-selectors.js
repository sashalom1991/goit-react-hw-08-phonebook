const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUseremail = state => state.auth.user.email;

const getFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
    getIsLoggedIn,
    getUseremail,
    getFetchingCurrentUser
};

export default authSelectors;