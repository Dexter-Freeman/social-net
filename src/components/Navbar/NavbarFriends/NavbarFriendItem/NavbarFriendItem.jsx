import React from 'react';
import style from './NavbarFriendItem.module.css';

const NavbarFriendItem = (props) => {
    return (
        <div className = {style.navbarFriendItem}>
            <div>
                <img className={style.navbarFriendAva} 
                    src = {props.state.avaUrl} 
                    alt = 'avka'/>
            </div>
            <div>
                {props.state.name}
            </div>
        </div>
    )
}

export default NavbarFriendItem;