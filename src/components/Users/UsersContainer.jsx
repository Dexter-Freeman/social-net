import { connect } from 'react-redux';
import React from 'react';
import Users from './Users';
import usersAPI from './../../api/api';
import { follow, unFollow, setUsers, setUsersCount, setCurrentPage, toggleIsFetching, toggleIsFollowingProgress } from '../../redux/usersReducer';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then((data) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setUsersCount(data.totalCount);
            })
    }

    getUsersFromPage(page) {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(page, this.props.pageSize)
            .then((data) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
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
            getUsersFromPage={this.getUsersFromPage.bind(this)}
            currentPage={this.props.currentPage}
            users={this.props.users}
            unFollow={this.props.unFollow}
            follow={this.props.follow}
            isFetching={this.props.isFetching}
            toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
            isFollowingProgress={this.props.isFollowingProgress} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingProgress : state.usersPage.isFollowingProgress
    }
};

export default connect(mapStateToProps, 
    {follow, unFollow, setUsers, setUsersCount, setCurrentPage, toggleIsFetching, toggleIsFollowingProgress })(UsersContainer);