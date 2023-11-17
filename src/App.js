import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, addPost, addComment } from './actions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPostText: '',
      newCommentText: '',
    };
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  handleNewPostChange = (event) => {
    this.setState({
      newPostText: event.target.value,
    });
  };

  handleAddPost = () => {
    const { newPostText } = this.state;
    this.props.addPost(newPostText);
    this.setState({
      newPostText: '',
    });
  };

  handleNewCommentChange = (event) => {
    this.setState({
      newCommentText: event.target.value,
    });
  };

  handleAddComment = (postId) => {
    const { newCommentText } = this.state;
    this.props.addComment(postId, newCommentText);
    this.setState({
      newCommentText: '',
    });
  };

  render() {
    const { posts } = this.props;
    const { newPostText, newCommentText } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Instagram</h1>
        </header>

        <main className="App-main">
          <div className="posts-container">
            {posts.map((post) => (
              <div className="post" key={post.id}>
                <img src={post.imageUrl} alt={post.description} />
                <div className="post-details">
                  <p className="post-username">{post.username}</p>
                  <p className="post-description">{post.description}</p>
                  <div className="post-actions">
                    <button onClick={() => this.handleAddComment(post.id)}>Comment</button>
                    <button>Share</button>
                    <button>Save</button>
                  </div>
                  {post.comments.map((comment) => (
                    <div className="comment" key={comment.id}>
                      <p className="comment-username">{comment.username}</p>
                      <p className="comment-text">{comment.text}</p>
                    </div>
                  ))}
                  <input
                    type="text"
                    value={newCommentText}
                    onChange={this.handleNewCommentChange}
                    placeholder="Add a comment..."
                  />
                  <button onClick={() => this.handleAddComment(post.id)}>Post</button>
                </div>
              </div>
            ))}
          </div>
        </main>

        <div className="create-post-container">
          <textarea
            value={newPostText}
            onChange={this.handleNewPostChange}
            placeholder="What's on your mind?"
          />
          <button onClick={this.handleAddPost}>Post</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  addPost: (newPostText) => dispatch(addPost(newPostText)),
  addComment: (postId, newCommentText) => dispatch(addComment(postId, newCommentText)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
