import { connect } from 'react-redux';
import React from 'react';
import Axios from 'axios';
import Users from './Users';
import { follow, unFollow, setUsers, setUsersCount, setCurrentPage, toggleIsFetching } from '../../redux/usersReducer';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`, {
            withCredentials: true
        })
            .then((response) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setUsersCount(response.data.totalCount);
            })
    }

    getUsers(page) {
        this.props.toggleIsFetching(true);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`, {
            withCredentials: true   // withCredentials: true прикрепляет к запросу куки, 
                                    //т.е. сервер видит что я авторизован или не авторизован
        })
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

export default connect(mapStateToProps, 
    {follow, unFollow, setUsers, setUsersCount, setCurrentPage, toggleIsFetching })(UsersContainer);