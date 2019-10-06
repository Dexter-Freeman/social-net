import React from 'react';
import style from './Users.module.css';
import Axios from 'axios';

class Users extends React.Component {

    componentDidMount() {
        
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then((response) => {
            this.props.setUsers(response.data.items);
            this.props.setUsersCount(response.data.totalCount);
        })
    }

    getUsers(page) {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`).then((response) => {
            this.props.setUsers(response.data.items);
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        let pagesList = pages.map((pageNumber) => {
            return <span key={pageNumber}
                onClick = { () => {
                    this.props.setCurrentPage(pageNumber);
                    this.getUsers(pageNumber);
                } }
                className = { this.props.currentPage === pageNumber ? style.currentPage : style.paginationIem }>
                {pageNumber}
            </span>
        });
        let usersList = this.props.users.map(
            user => <div key={user.id}>
                <div>
                    <img className = {style.userAva} src={user.photos.small != null ? user.photos.small : 'http://www.alluserpics.com/data/thumbnails/17/03178.jpg'} alt='my ava' />
                    {user.followed ?
                        <button onClick={() => this.props.unFollow(user.id)} >Unfollow</button>
                        : <button onClick={() => this.props.follow(user.id)} >Follow</button>}
                </div>
                <div>
                    <span>{user.name}</span>
                    <span>{user.status}</span>
                    {/* <span>{ user.location.city }</span>
                    <span>{ user.location.country }</span> */}
                </div>
            </div>
        );
        return (
            <div>
                <div className='usersPagination'>
                    {pagesList}
                </div>
                <div className={style.usersList}>
                    <button onClick={this.getUser} >Get Users</button>
                    <div>
                        {usersList}
                    </div>
                </div>
            </div>

        )
    }
}

export default Users