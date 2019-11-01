import React from 'react';
import { connect } from 'react-redux';
import { getAuthUserData, logOut } from './../../redux/authReducer';
import Header from './Header';

class HeaderConatainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
};

const mapStateToProps = (state) => ({
    isAuth : state.auth.isAuth,
    userName : state.auth.userName,
    id : state.auth.id
});

export default connect(mapStateToProps, { getAuthUserData, logOut })(HeaderConatainer);
