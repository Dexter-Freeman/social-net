import { connect } from 'react-redux';
import React from 'react';
import Users from './Users';
import { follow, unFollow, 
    setCurrentPage, getUsers, 
    getUsersFromPage } from '../../redux/usersReducer';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    getUsersFromPage(page) {
        this.props.getUsersFromPage(page, this.props.pageSize)
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
    {follow, unFollow, 
        setCurrentPage, getUsers, 
        getUsersFromPage })(UsersContainer);