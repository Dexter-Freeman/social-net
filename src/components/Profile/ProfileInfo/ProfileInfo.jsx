import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img 
          src='http://www.radionetplus.ru/uploads/posts/2013-04/thumbs/1365401196_teplye-oboi-1.jpeg'
          alt='alt' />
      </div>
      <div className={style.profileDescription}>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;