import React from 'react';
import style from './Users.module.css';
import Axios from 'axios';
// import UserItem from './User/UserItem';

const Users = (props) => {
    if (props.users.length === 0) {
        Axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
            props.setUsers(response.data.items);
        })
    };

    let usersList = props.users.map(
        user => <div>
            <div>
                <img src={user.photos.small != null ? user.photos.small : 'http://www.alluserpics.com/data/thumbnails/17/03178.jpg'} alt='my ava' />
                {user.followed ?
                    <button onClick={() => props.unFollow(user.id)} >Unfollow</button>
                    : <button onClick={() => props.follow(user.id)} >Follow</button>}
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
        <div className={style.usersList}>
            <div>
                {usersList}
            </div>
        </div>
    )
}

export default Users