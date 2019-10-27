import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import NewPostForm from './NewPostForm/NewPostForm';

const MyPosts = (props) => {
	let postsList = props.postsData
		.map(post => <Post message={post.postText} likesCount={post.likesCount} key={post.id} />);

	// let newPostElement = React.createRef();

	// const onPostChange = () => {
	// 	let text = newPostElement.current.value;
	// 	props.onPostChange(text);
	// };

	// const addPost = () => {
	// 	props.addPost();
	// };

    const onSubmit = (formData) => {
		console.log(`formData - ${JSON.stringify(formData)}`);
		props.addPost(formData.newPostText);
	};

	return (
		<div className={style.myPosts}>
			my posts
          	<div>
				<NewPostForm onSubmit={ onSubmit } />
			</div>
			<div className={style.posts}>
				{postsList}
			</div>
		</div>
	)
}

export default MyPosts;