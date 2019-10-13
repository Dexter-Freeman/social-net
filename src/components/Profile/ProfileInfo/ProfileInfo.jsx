import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from './../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div>
			<div>
				<img
					src='http://www.radionetplus.ru/uploads/posts/2013-04/thumbs/1365401196_teplye-oboi-1.jpeg'
					alt='alt' />
			</div>
			<div className={style.profileDescription}>
				ava + description
				<div>
					<div>
						<img src={props.profile.photos.small} alt='ava-small' />
					</div>
					<div>
						<span>About me: </span><span>{props.profile.aboutMe}</span>
					</div>
					
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo;