import React from 'react';
import style from './Users.module.css';
import Preloader from '../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import usersAPI from './../../api/api';

const Users = (props) => {
    let pagesList = props.pages.map((pageNumber) => {
        return <span key={pageNumber}
            onClick={() => {
                props.setCurrentPage(pageNumber);
                props.getUsersFromPage(pageNumber);
            }}
            className={props.currentPage === pageNumber ? style.currentPage : style.paginationIem}>
            {pageNumber}
        </span>
    });

    let usersList = props.users.map(
        user => <div key={user.id}>
            <div>
                <NavLink to={`/profile/${user.id}`}>
                    <img className={style.userAva}
                        src={user.photos.small != null ? user.photos.small : 'http://www.alluserpics.com/data/thumbnails/17/03178.jpg'}
                        alt='my ava' />
                </NavLink>
                {user.followed ?
                    <button disabled={props.isFollowingProgress.some(id => id===user.id)} onClick={() => {
                        props.toggleIsFollowingProgress(true, user.id);
                        usersAPI.unFollow(user.id)
                            .then((data) => {
                                if (data.resultCode === 0) {
                                    props.unFollow(user.id)
                                    props.toggleIsFollowingProgress(false, user.id);
                                }
                            })
                        
                    }
                    } >Unfollow</button>
                    : <button disabled={props.isFollowingProgress.some(id => id===user.id)} onClick={() => {
                        props.toggleIsFollowingProgress(true, user.id);
                        usersAPI.follow(user.id)
                            .then((data) => {
                                if (data.resultCode === 0) {
                                    props.follow(user.id)
                                    props.toggleIsFollowingProgress(false, user.id);
                                }
                            })
                       
                    }
                    } >Follow</button>}
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
            {props.isFetching ? <Preloader /> : null}
            <div className='usersPagination'>
                {pagesList}
            </div>
            <div className={style.usersList}>
                {/* <button onClick={props.getUsers} >Get Users</button> */}
                <div>
                    {usersList}
                </div>
            </div>
        </div>

    )
}

export default Users;