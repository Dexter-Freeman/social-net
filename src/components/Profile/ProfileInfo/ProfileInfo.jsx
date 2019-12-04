import React, { useState } from 'react';
import style from './ProfileInfo.module.css';
import Preloader from './../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';
import ContactItem from './ContactItem';

const ProfileInfo = (props) => {
	let [editMode, setEditMode] = useState(false);

	if (!props.profile) {
		return <Preloader />
	};

	const avaInput = React.createRef();

	const onSubmit = (formData) => {
		props.updateUserProfile(formData).then(() => {
			setEditMode(false);
		})
	};

	const onAvaChange = (e) => {
		if ( e.target.files.length) {
			props.saveFoto(e.target.files[0]);
		}
	};

	return <div>
		<div className={style.profileDescription}>
			<ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus} />
			<div>
				<div>
					<img src={
						props.profile.photos.large ?
							props.profile.photos.large
							: 'http://www.alluserpics.com/data/thumbnails/17/03178.jpg'}
						alt='ava-large' />
				</div>
				{props.isOwner ? <div>
					<input type="file" 
						style={{display : 'none'}}
						onChange={onAvaChange} 
						name='changeAva' 
						ref={avaInput}
						id='changeAva' /><span>Change avatar: </span>
					<button onClick={() => avaInput.current.click()}>Select new ava</button>
				</div>
					: ``}
			</div>
			{editMode ?
				<ProfileDataForm initialValues={props.profile} onSubmit={onSubmit} />
				: <ProfileData profile={props.profile} goToEditMode={() => { setEditMode(true) }} isOwner={props.isOwner} />}
		</div>
	</div>
};



const ProfileData = ({ profile, isOwner, goToEditMode }) => {
	return <div>
		{isOwner ? <div>
			<button onClick={goToEditMode}>Edit</button>
		</div> : ``}
		<div>
			<span><b>Name:</b> {profile.fullName}</span>
		</div>
		<div>
			<span><b>About me:</b> </span><span>{profile.aboutMe}</span>
		</div>
		<div>
			<div>
				<span><b>Looking for a job:</b> </span><span>{profile.lookingForAJob ? `yes` : `no`}</span>
			</div>
			{profile.lookingForAJob ?
				<div>
					<span><b>Looking for a job description:</b> </span>
					<span>{profile.lookingForAJobDescription}</span>
				</div>
				: ``}
		</div>
		{<div>
			<span>Contacts: </span>{Object.keys(profile.contacts).map(key => {
				return <ContactItem
					key={key}
					contactName={key}
					contactValue={profile.contacts[key]} />
			})}
		</div>}

	</div>
};



export default ProfileInfo;