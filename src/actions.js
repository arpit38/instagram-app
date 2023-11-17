import { FETCH_POSTS, ADD_POST, ADD_COMMENT } from './types';

export const fetchPosts = () => async (dispatch) => {
  // Simulate API call to fetch posts
  const posts = [
    {
      id: 1,
      imageUrl: 'https://picsum.photos/200',
      username: 'johndoe',
      description: 'This is my first post!',
      comments: [],
    },
    {
      id: 2,
      imageUrl: 'https://picsum.photos/201',
      username: 'janedoe',
      description: 'This is my second post!',
      comments: [],
    },
  ];
  dispatch({
    type: FETCH_POSTS,
    payload: posts,
  });
};

export const addPost = (newPostText) => (dispatch) => {
  // Simulate API call to add a new post
  const newPost = {
    id: 3, // Assume unique IDs
    imageUrl: 'https://picsum.photos/202',
    username: 'johndoe',
    description: newPostText,
    comments: [],
  };
  dispatch({
    type: ADD_POST,
    payload: newPost,
  });
};

export const addComment = (postId, newCommentText) => (dispatch) => {
  // Simulate API call to add a new comment
  const newComment = {
    id: 1, // Assume unique IDs
    username: 'janedoe',
    text: newCommentText,
  };
  dispatch({
    type: ADD_COMMENT,
    payload: {
      postId,
      newComment,
    },
  });
};