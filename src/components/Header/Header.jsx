import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={style.header}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW1qL2UGNRENFDzCrqI2f-4w8JJUdbXTUYucNacGlqZEPpbTzR'
                alt='logo' />
            <div className={style.loginBlock}>
                {props.isAuth ?
                    <NavLink to={`/profile/${props.id}`} >
                        <span className={style.userName}>{props.login}</span>
                    </NavLink>                    
                    : <NavLink to='/login' >Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;