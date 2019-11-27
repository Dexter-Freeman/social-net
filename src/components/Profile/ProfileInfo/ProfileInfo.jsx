import React, { useState } from 'react';
import style from './ProfileInfo.module.css';
import Preloader from './../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';

const ProfileInfo = (props) => {
	let [editMode, setEditMode] = useState(false);
	if (!props.profile) {
		return <Preloader />
	}
	return <div>
		<div className={style.profileDescription}>
			<ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus} />
			{editMode ? 
				<ProfileDataForm profile = {props.profile} /> 
				: <ProfileData profile={props.profile} goToEditMode={() => {setEditMode(true)}} isOwner={props.isOwner}/>}			
		</div>
	</div>
};

const ContactItem = ({contactName, contactValue}) => {
	return <div>
		<span><b>{contactName} - </b></span>
		<span>{contactValue ? contactValue : `none`}</span>
	</div>
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
	return <div>
		{isOwner ? <div>
			<button onClick={goToEditMode}>Edit</button>
		</div> : ``}
		<div>
			<img src={
				profile.photos.small ?
				profile.photos.small
					: 'http://www.alluserpics.com/data/thumbnails/17/03178.jpg'}
				alt='ava-small' />
		</div>
		<div>
			<span>Name: {profile.fullName}</span>
		</div>
		<div>
			<span>About me: </span><span>{profile.aboutMe}</span>
		</div>
		<div>
			<div>
				<span>Looking for a job: </span><span>{profile.lookingForAJob ? `yes` : `no`}</span>
			</div>
			{profile.lookingForAJob ?
				<div>
					<span>Looking for a job description: </span>
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
		</div> }

	</div>
};

const ProfileDataForm = (profile) => {
	debugger
	return <div>
		<div>
			<img src={
				profile.photos.small ?
					profile.photos.small
					: 'http://www.alluserpics.com/data/thumbnails/17/03178.jpg'}
				alt='ava-small' />
		</div>
		<div>
			<span>Name: {profile.fullName}</span>
		</div>
		<div>
			<span>About me: </span><span>{profile.aboutMe}</span>
		</div>
		<div>
			<div>
				<span>Looking for a job: </span><span>{profile.lookingForAJob ? `yes` : `no`}</span>
			</div>
			{profile.lookingForAJob ?
				<div>
					<span>Looking for a job description: </span>
					<span>{profile.lookingForAJobDescription}</span>
				</div>
				: ``}
		</div>
		{/* <div>
			<span>Contacts: </span>{Object.keys(profile.contacts).map(key => {
				return <ContactItem
					key={key}
					contactName={key}
					contactValue={profile.contacts[key]} />
			})}
		</div> */}

	</div>
};

export default ProfileInfo;