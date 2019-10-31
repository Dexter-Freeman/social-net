import { logIn, logOut } from '../../redux/authReducer';
import Login from './Login';
import { connect } from 'react-redux';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        isAuth : state.auth.isAuth,
        login : state.auth.login,
        id : state.auth.id
    }
};

export default compose(
    connect(mapStateToProps, {logIn, logOut})
)(Login);