import NavbarFriends from './NavbarFriends';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
		state: state.navbarFriends.navbarFriends
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

const NavbarFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(NavbarFriends);

export default NavbarFriendsContainer