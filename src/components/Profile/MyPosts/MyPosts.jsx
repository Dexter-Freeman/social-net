import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
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
          <Post message='First post' like_count='5' />
          <Post message='Second post' />
          <Post message='some text' />
        </div>
      </div>
  )
}

export default MyPosts;