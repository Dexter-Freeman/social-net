import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus } from './../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirectComponent';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId; // Выхватываем userId из адресной строки (url)
    // if (!userId) {
    //   userId = 3873;
    // }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  };
  
  render() {
    return (
      <Profile { ...this.props } />
    )
  }
};

const mapStateToProps = (state) => ({
  profile : state.profilePage.profile,
  status : state.profilePage.status 
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);