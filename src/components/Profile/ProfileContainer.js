import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus, updateUserProfile, saveFoto } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirectComponent';
import { compose } from 'redux';
import { getAuthUserId } from '../../redux/authSelectors';
import { getProfile, getStatus } from '../../redux/profileSelectors';

class ProfileContainer extends React.Component {

	refreshUserProfile() {
		let userId = this.props.match.params.userId; // Выхватываем userId из адресной строки (url)
		if ( !userId ) {
			userId = this.props.authorizedUserId;
		};
		let isOwner = (+userId === +this.props.authorizedUserId) ? true : false;
		this.isOwner = isOwner;
		this.props.getUserProfile(userId);
		this.props.getUserStatus(userId);
		debugger
	}

	componentDidMount() {
		this.refreshUserProfile();
	};

	componentDidUpdate(prevProps, prevState) {
		if ( this.props.match.params.userId !== prevProps.match.params.userId ) {
			this.refreshUserProfile();
		}
    };

	render() {
		return (
			<Profile {...this.props } isOwner={this.isOwner}/>
		)
	}
};

const mapStateToProps = (state) => ({
	profile: getProfile(state),
	status: getStatus(state),
	authorizedUserId: getAuthUserId(state)
});

export default compose(
	connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, updateUserProfile, saveFoto }),
	withRouter,
	withAuthRedirect
)(ProfileContainer);