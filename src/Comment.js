import React from 'react';

const Comment = ({ author, content, date }) => {
  return (
    <div className="comment">
      <img src={author.avatar} alt={author.name} />
      <p>
        <strong>{author.name}</strong> {content}
      </p>
      <nav>
        <a href="#">Curtir</a>
        <span>&middot;</span>
        <a href="#">Responder</a>
        <span>&middot;</span>
        <a href="#">{date}</a>
      </nav>
    </div>
  );
}

export default Comment;
