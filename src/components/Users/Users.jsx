import React from 'react';
import style from './Users.module.css';
import Axios from 'axios';

class Users extends React.Component {
    constructor(props) {
        super(props);
        Axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
            this.props.setUsers(response.data.items);
        })
    }

    getUsers() {
        Axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
            this.props.setUsers(response.data.items);
        })
    }

    render() {
        let usersList = this.props.users.map(
            user => <div key={user.id}>
                <div>
                    <img src={user.photos.small != null ? user.photos.small : 'http://www.alluserpics.com/data/thumbnails/17/03178.jpg'} alt='my ava' />
                    {user.followed ?
                        <button onClick={() => this.props.unFollow(user.id)} >Unfollow</button>
                        : <button onClick={() => this.props.follow(user.id)} >Follow</button>}
                </div>
                <div>
                    <span>{user.name}</span>
                    <span>{user.status}</span>
                    {/* <span>{ user.location.city }</span>
                    <span>{ user.location.country }</span> */}
                </div>
            </div>
        );
        return (
            <div className={style.usersList}>
                <button onClick={this.getUser} >Get Users</button>
                <div>
                    {usersList}
                </div>
            </div>
        )
    }
}

export default Users