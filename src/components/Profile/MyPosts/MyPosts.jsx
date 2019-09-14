import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  return (
    <div>
        my posts
          <div>
          new post
          </div>
        <div className={classes.posts}>
          <Post message='First post' like_count='5' />
          <Post message='Second post' />
          <Post message='some text' />
        </div>
      </div>
  )
}

export default MyPosts;