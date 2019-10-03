import React from 'react';
import style from './Users.module.css';
// import UserItem from './User/UserItem';

const Users = (props) => {
    // const follow = (userId) => {

    //     props.follow(userId);
    // };

    // const unFollow = (userId) => {
    //     props.unFollow(userId);
    // };

    let usersList = props.users.map(
        user => <div>
            <div>
                <img src={user.avaUrl} alt='my ava' />
                {user.followed ?
                    <button onClick = { () => props.unFollow(user.id) } >Unfollow</button>
                    : <button onClick = { () => props.follow(user.id) } >Follow</button>}
            </div>
            <div>
                <span>{ user.fullName }</span>
                <span>{ user.status }</span>
                <span>{ user.location.city }</span>
                <span>{ user.location.country }</span>
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