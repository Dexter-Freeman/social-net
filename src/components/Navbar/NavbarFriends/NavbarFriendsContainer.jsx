import NavbarFriends from './NavbarFriends';
import {connect} from 'react-redux';

// const NavbarFriendsContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                  let state = store.getState().navbarFriends.navbarFriends;
//                 return (
//                     <NavbarFriends state = {state} />
//                 )
//             }}
//         </StoreContext.Consumer>
//     )
   
// };

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