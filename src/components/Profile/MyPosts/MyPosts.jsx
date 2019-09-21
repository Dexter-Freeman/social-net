import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsList = props.state.postsData
    .map(post => <Post message={post.postText} likesCount={post.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  }

  return (
    <div className={style.myPosts}>
        my posts
          <div>
            <div>
              <textarea ref={newPostElement} />
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