import React from 'react';
import style from './UserItem.module.css';
import { NavLink } from 'react-router-dom';

const UserItem = ({ user, isFollowingProgress, follow, unFollow }) => {
    return (
        <div>
            <div>
                <NavLink to={`/profile/${user.id}`}>
                    <img className={style.userAva}
                        src={user.photos.small != null ?
                            user.photos.small
                            : 'http://www.alluserpics.com/data/thumbnails/17/03178.jpg'}
                        alt='my ava' />
                </NavLink>
                {user.followed ?
                    <button disabled={isFollowingProgress.some(id => id === user.id)}
                        onClick={() => {
                            unFollow(user.id);
                        }
                        } >Unfollow</button>
                    : <button disabled={isFollowingProgress.some(id => id === user.id)}
                        onClick={() => {
                            follow(user.id);
                        }
                        } >Follow</button>}
            </div>
            <div>
                <span>{user.name}</span>
                <div>
                    <span>{user.status}</span>
                </div>
            </div>
        </div>
    );
};

export default UserItem;