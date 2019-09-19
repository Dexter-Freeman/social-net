import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  
  let postsList = props.postsData
    .map(post => <Post message={post.postText} likesCount={post.likesCount} />);

  return (
    <div className={style.myPosts}>
        my posts
          <div>
            <div>
              <textarea />
              <div>
                <button>Add post</button>
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