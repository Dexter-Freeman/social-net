import React from 'react';
import style from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsList}>
                Dialogs list
                <div className={style.item + ' ' + style.active}>
                    User 1
                </div>
                <div className={style.item}>
                    User 2
                </div>
                <div className={style.item}>
                    User 3
                </div>
                <div className={style.item}>
                    User 4
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>
                    Hello! How are you?
                </div>
                <div className={style.message}>
                    I'm develope my own social network
                </div>
                <div className={style.message}>
                    Wow! It's amazing!
                </div>
            </div>

        </div>
    )
}

export default Dialogs;