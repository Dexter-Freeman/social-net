import {connect} from 'react-redux';
import Users from './Users';
import { followAC, unFollowAC, setUsersAC, setUsersCountAC , setCurrentPagetAC } from '../../redux/usersReducer';

const mapStateToProps = (state) => {
    return {
        users : state.usersPage.users,
        pageSize : state.usersPage.pageSize,
        totalCount : state.usersPage.totalCount,
        currentPage : state.usersPage.currentPage
    }
}; 

const mapDispatchToProps = (dispatch) => {
    return {
        follow : (userId) => dispatch(followAC(userId)),
        unFollow : (userId) => dispatch(unFollowAC(userId)),
        setUsers : (users) => dispatch(setUsersAC(users)),
        setUsersCount : (totalCount) => dispatch(setUsersCountAC(totalCount)),
        setCurrentPage : (currentPage) => dispatch(setCurrentPagetAC(currentPage))
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;