import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	let postsList = props.postsData
		.map(post => <Post message={post.postText} likesCount={post.likesCount} />);

	let newPostElement = React.createRef();

	const onPostChange = () => {
		let text = newPostElement.current.value;
		props.onPostChange(text);
	};

	const addPost = () => {
		props.addPost();
	};

	return (
		<div className={style.myPosts}>
			my posts
          <div>
				<div>
					<textarea
						ref={newPostElement}
						value={props.newPostText}
						onChange={onPostChange} />
					<div>
						<button onClick={addPost}>Add post</button>
					</div>
				</div>
			</div>
			<div className={style.posts}>
				{postsList}
			</div>
		</div>
	)
}

export default MyPosts;