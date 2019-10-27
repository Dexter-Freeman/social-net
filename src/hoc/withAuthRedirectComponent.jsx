import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
    profile : state.profilePage.profile,
    isAuth : state.auth.isAuth
  });

const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Redirect to='/login' />
              }
              return <Component { ...this.props } />
        }
    }

    return connect(mapStateToProps, {})(RedirectComponent);
};

// const withAuthRedirectLoginPage = (Component) => {
//     class RedirectComponent extends React.Component {
//         render() {
//             if (this.props.isAuth) {
//                 return <Redirect />
//             }
//         }
//     }
// }

export default withAuthRedirect;