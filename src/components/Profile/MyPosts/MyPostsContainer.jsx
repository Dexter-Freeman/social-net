import React from 'react';
import { actionCreateAddPost, actionCreateChangeNewPostText } from './../../../redux/profileReducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = (props) => {
	return (
		<StoreContext.Consumer>
			{(store) => {
				let state = store.getState().profilePage;
				const postsData = state.postsData;
				const newPostText = state.newPostText;
				const onPostChange = (text) => {
					store.dispatch(actionCreateChangeNewPostText(text));
				};

				const addPost = () => {
					store.dispatch(actionCreateAddPost());
				};
				return (<MyPosts
					addPost={addPost}
					onPostChange={onPostChange}
					postsData={postsData}
					newPostText={newPostText} />)
			}}
		</StoreContext.Consumer>
	)
}

export default MyPostsContainer;