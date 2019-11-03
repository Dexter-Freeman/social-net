import React from 'react';
import { connect } from 'react-redux';
import { logOut } from './../../redux/authReducer';
import Header from './Header';

class HeaderConatainer extends React.Component {
    
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

export default connect(mapStateToProps, { logOut })(HeaderConatainer);
