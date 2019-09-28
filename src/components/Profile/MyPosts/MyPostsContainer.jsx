import React from 'react';
import { actionCreateAddPost, actionCreateChangeNewPostText } from './../../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
	let state = props.store.getState().profilePage;
	const postsData = state.postsData;
	const newPostText = state.newPostText;
	const onPostChange = (text) => {
		props.store.dispatch(actionCreateChangeNewPostText(text));
	};

	const addPost = () => {
		props.store.dispatch(actionCreateAddPost());
	};
	return <MyPosts
		addPost={addPost}
		onPostChange={onPostChange}
		postsData={postsData}
		newPostText={newPostText} />
}

export default MyPostsContainer;