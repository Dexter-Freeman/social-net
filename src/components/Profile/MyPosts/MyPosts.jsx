import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsList = props.state.postsData
    .map(post => <Post message={post.postText} likesCount={post.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.changeNewPostText(text);
}

  return (
    <div className={style.myPosts}>
        my posts
          <div>
            <div>
              <textarea 
                ref={newPostElement} 
                value = {props.state.newPostText} 
                onChange = {onPostChange} />
              <div>
                <button onClick={ addPost }>Add post</button>
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