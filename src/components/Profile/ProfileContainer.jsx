import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from './../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirectComponent';

class ProfileContainer extends React.Component {
  	componentDidMount() {
		let userId = this.props.match.params.userId; // Выхватываем userId из адресной строки (url)
		if (!userId) {
			userId = 2;
		}
      this.props.getUserProfile(userId);
  };

  render() {
    return (
      <Profile { ...this.props } profile = { this.props.profile } />
    )
  }
};

const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => ({
  profile : state.profilePage.profile,
});

const withUrlProfileComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getUserProfile })(withUrlProfileComponent);