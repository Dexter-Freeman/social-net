import { actionCreateAddPost, actionCreateChangeNewPostText } from './../../../redux/profileReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
		postsData: state.profilePage.postsData,
		newPostText: state.profilePage.newPostText
    });

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(actionCreateAddPost()),
        onPostChange: (text) => dispatch(actionCreateChangeNewPostText(text))
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;