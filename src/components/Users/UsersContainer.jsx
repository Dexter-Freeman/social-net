import { connect } from 'react-redux';
import React from 'react';
import Axios from 'axios';
import Users from './Users';
import { followAC, unFollowAC, setUsersAC, setUsersCountAC, setCurrentPagetAC, toggleIsFetchingAC } from '../../redux/usersReducer';

class UsersContainer extends React.Component {
    debugger;
    componentDidMount() {
        this.props.toggleIsFetching(true);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then((response) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setUsersCount(response.data.totalCount);
            })
    }

    getUsers(page) {
        // this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
            .then((response) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (<Users
            pages={pages}
            setCurrentPage={this.props.setCurrentPage}
            getUsers={this.getUsers.bind(this)}
            currentPage={this.props.currentPage}
            users={this.props.users}
            unFollow={this.props.unFollow}
            follow={this.props.follow}
            isFetching={this.props.isFetching} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unFollow: (userId) => dispatch(unFollowAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        setUsersCount: (totalCount) => dispatch(setUsersCountAC(totalCount)),
        setCurrentPage: (currentPage) => dispatch(setCurrentPagetAC(currentPage)),
        toggleIsFetching : (isFetching) => dispatch(toggleIsFetchingAC(isFetching))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);