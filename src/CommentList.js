import React from 'react';

import Comment from './Comment';

const CommentList = ({ comments }) => {
  return (
    <div className="post-comments">
      <p>
        {`${comments.length} comentário${comments.length > 1 ? 's' : ''}`}
      </p>
      {comments.map(comment => <Comment key={comment.id} {...comment} />)}
    </div>
  );
}

export default CommentList;
