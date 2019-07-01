import React from 'react';

const PostAuthor = ({ avatar, name, date }) => {
  return (
    <div className="post-author">
      <img src={avatar} alt={name} />
      <div>
        <span>{date}</span>
        <span>{name}</span>
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default PostAuthor;
