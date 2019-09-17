import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsData = [
    {id : 1, postText : "First post", likesCount : 5},
    {id : 2, postText : "Second post", likesCount : 3},
    {id : 3, postText : "some text", likesCount : 25},
    {id : 4, postText : "more some text", likesCount : 1}
  ];

  let postsList = postsData
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