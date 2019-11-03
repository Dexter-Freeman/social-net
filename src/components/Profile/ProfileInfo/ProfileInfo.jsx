import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from './../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div>
			<div className={style.profileDescription}>
				<ProfileStatusWithHooks status={ props.status } updateUserStatus={ props.updateUserStatus } />
				<div>
					<div>
						<img src={
							props.profile.photos.small ?
								props.profile.photos.small
								: 'http://www.alluserpics.com/data/thumbnails/17/03178.jpg'}
							alt='ava-small' />
					</div>
					<div>
						<span>Name: {props.profile.fullName}</span>
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