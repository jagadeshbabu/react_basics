// - CommentBox
//  - CommentList
//    - Comment
//  - CommentForm

import { Component } from 'react';


class Comment extends Component {
  render() {
    return (
      <div className="comment">
        Hello, World! I am a comment
      </div>
    );
  }
}

class CommentForm extends Component {
  render() {
    return (
      <div className="commentForm">
        Hello, World! I am a commentForm
      </div>
    );
  }
}

class CommentList extends Component {
  render() {
    return (
      <div className="commentList">
        Hello, World! I am a commentList
      </div>
    );
  }
}

export default class CommentBox extends Component {
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
}
