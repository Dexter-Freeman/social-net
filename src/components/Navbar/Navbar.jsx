import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';
import NavbarFriendsContainer from './NavbarFriends/NavbarFriendsContainer';

const Navbar = (props) => {
    return (
        <nav className={style.nav}>
            <div className={`${style.item} ${style.active}`}>
                <NavLink to='/profile' activeClassName={style.active}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/dialogs' activeClassName={style.active}>Dialogs</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/news' activeClassName={style.active}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/music' activeClassName={style.active}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='settings' activeClassName={style.active}>Settings</NavLink>
            </div>
            <NavbarFriendsContainer />
      </nav>
    )
}

export default Navbar;