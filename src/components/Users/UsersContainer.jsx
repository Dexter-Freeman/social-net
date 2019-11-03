import { connect } from 'react-redux';
import React from 'react';
import { compose } from 'redux';
import Users from './Users';
import { follow, unFollow, 
    setCurrentPage, requestUsers, 
    getUsersFromPage } from '../../redux/usersReducer';
import withAuthRedirect from '../../hoc/withAuthRedirectComponent';
import { getUsers, getPageSize, getTotalCount, getCurrentPage, getIsFetching, getIsFollowingProgress } from '../../redux/usersSelectors';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingProgress : getIsFollowingProgress(state)
    }
};

export default compose(connect(mapStateToProps, 
    {follow, unFollow, 
        setCurrentPage, requestUsers, 
        getUsersFromPage }),
        withAuthRedirect)(UsersContainer)