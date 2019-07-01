import React from 'react';

import Comment from './Comment';
import NewComment from './NewComment';
import CommentList from './CommentList';
import PostAuthor from './PostAuthor';

const Post = ({ author, date, content, comments }) => {
  return (
    <div className="post">
      <PostAuthor avatar={author.avatar} name={author.name} date={date} />
      <div className="post-content">{content}</div>
      <CommentList comments={comments} />
      <NewComment />
    </div>
  );
}

export default Post
