import React from 'react';
import style from './DialogItem.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={style.item}>
            <img className = {style.dialogItemAva} 
                src = {props.avaUrl} alt = 'ava'/>
            <NavLink to={path} activeClassName={style.active} >{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;