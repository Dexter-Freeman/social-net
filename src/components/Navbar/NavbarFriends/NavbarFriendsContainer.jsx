import React from 'react';
import StoreContext from '../../../StoreContext';
import NavbarFriends from './NavbarFriends';

const NavbarFriendsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                 let state = store.getState().navbarFriends.navbarFriends;
                return (
                    <NavbarFriends state = {state} />
                )
            }}
        </StoreContext.Consumer>
    )
   
}

export default NavbarFriendsContainer