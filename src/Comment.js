import React from 'react';

const Comment = ({ author, content, date }) => {
  return (
    <div className="comment">
      <img src={author.avatar} alt={author.name} />
      <div>
        <p><strong>{author.name}</strong> {content}</p>
        <nav>
          <a href="#">Curtir</a>
          <span>&middot;</span>
          <a href="#">Responder</a>
        </nav>
      </div>
    </div>
  );
}

export default Comment;
