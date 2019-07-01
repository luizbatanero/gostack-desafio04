import React from 'react';

import Post from './Post';

class PostList extends React.Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Diego Fernandes',
          avatar: 'https://randomuser.me/api/portraits/men/97.jpg'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://randomuser.me/api/portraits/men/97.jpg'
            },
            content: "Conteúdo do comentário"
          }
        ],
      }
    ]
  };

  render () {
    return (
      <div className="postlist">
        {this.state.posts.map(post => <Post key={post.id} {...post} />)}
      </div>
    );
  }
}

export default PostList;
