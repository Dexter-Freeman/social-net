import React from 'react';
import style from './Users.module.css';
import Preloader from '../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';

const Users = (props) => {

    let pagesList = props.pages.map((pageNumber) => {
        return <span key={pageNumber}
            onClick={() => {
                props.setCurrentPage(pageNumber);
                props.getUsers(pageNumber);
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
                    <button onClick={() => {
                        Axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                            withCredentials: true,  // withCredentials: true прикрепляет к запросу куки, 
                                                    //т.е. сервер видит что я авторизован или не авторизован
                            headers : { // API-KEY взят из аккаунта в social-network.samuraijs.com,
                                        // его сгенерировал сервер, нужен для полного доступа к api
                                "API-KEY" : "5995d704-6605-4021-be3a-75799fb9ae6d"
                            }
                        })
                            .then((response) => {
                                if (response.data.resultCode === 0) {
                                    props.unFollow(user.id)
                                }
                            })
                    }
                    } >Unfollow</button>
                    : <button onClick={() => {
                        Axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                            withCredentials: true,
                            headers : {
                                "API-KEY" : "5995d704-6605-4021-be3a-75799fb9ae6d"
                            }
                        })
                            .then((response) => {
                                if (response.data.resultCode === 0) {
                                    props.follow(user.id)
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
                <button onClick={props.getUsers} >Get Users</button>
                <div>
                    {usersList}
                </div>
            </div>
        </div>

    )
}

export default Users;