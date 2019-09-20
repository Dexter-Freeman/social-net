import React from 'react';
import style from './NavbarFriends.module.css';
import {NavLink} from 'react-router-dom';
import NavbarFriendItem from './NavbarFriendItem/NavbarFriendItem';

const NavbarFriends = (props) => {
    let navbarFriendsList = props.state.navbarFriends.map(
        friend => <NavbarFriendItem state = {friend} />
    );
    // console.log(`2 navbar friend state  ${JSON.stringify(props.state)}`);
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