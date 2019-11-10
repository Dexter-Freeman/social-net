import React from 'react';
import style from './Users.module.css';
import Preloader from '../common/Preloader/Preloader';
import Pagination from './Pagination/Pagination';
import UserItem from './User/UserItem';

const Users = (props) => {
    return <div>
            {props.isFetching ? <Preloader /> : null}
            <div>
                <Pagination
                    totalCount={props.totalCount}
                    pageSize={props.pageSize}
                    currentPage={props.currentPage}
                    setCurrentPage={props.setCurrentPage}
                    getUsersFromPage={props.getUsersFromPage} />
            </div>
            <div className={style.usersList}>
                {/* <button onClick={props.getUsers} >Get Users</button> */}
                <div>
                    {props.users.map(
                        user => <UserItem
                                user={user}
                                isFollowingProgress={props.isFollowingProgress}
                                follow={props.follow}
                                unFollow={props.unFollow}
                                key={user.id} />
                    )}
                </div>
            </div>
        </div>
};

export default Users;