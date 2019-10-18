import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserDataTC } from './../../redux/authReducer';
import Header from './Header';

class HeaderConatainer extends React.Component {
    componentDidMount() {
        this.props.setAuthUserDataTC();
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
};

const mapStateToProps = (state) => ({
    isAuth : state.auth.isAuth,
    login : state.auth.login
});

export default connect(mapStateToProps, { setAuthUserDataTC })(HeaderConatainer);
