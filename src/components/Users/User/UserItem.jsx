import React from 'react';
// import style from './UserItem.module.css';

const UserItem = (props) => {
    return (
        <div>
            <div>
                <img src = {props.user.avaUrl} alt = 'my ava' />
                {props.user.followed ? 
                    <button onClick = {props.unFollow(props.user.id)}>Unfollow</button>
                    : <button onClick = {props.follow(props.user.id)}>Follow</button>}
            </div>
        </div>
    )
}

export default UserItem