import React from 'react';
import style from './NavbarFriends.module.css';
import NavbarFriendItem from './NavbarFriendItem/NavbarFriendItem';

const NavbarFriends = (props) => {
    let navbarFriendsList = props.state.map(
        friend => <NavbarFriendItem state = {friend} key = {friend.id} />
    );
    return (
        <div className = {style.navbarFriends}>
                <h3 className={style.navbarFriendsHeader}>Friends</h3>
                <div className = {style.navbarFriendsList}>
                    {navbarFriendsList}
                </div>
        </div>
    )
}

export default NavbarFriends