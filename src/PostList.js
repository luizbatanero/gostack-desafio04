import React from 'react';

import Post from './Post';

class PostList extends React.Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Leanne Graham',
          avatar: 'https://randomuser.me/api/portraits/women/95.jpg'
        },
        date: '01 Jul 2019',
        content: 'Doloribus at sed quis culpa deserunt consectetur qui praesentium naccusamus fugiat dicta nvoluptatem rerum ut voluptate autem nvoluptatem repellendus aspernatur dolorem in.',
        comments: [
          {
            id: 1,
            author: {
              name: 'Ervin Howell',
              avatar: 'https://randomuser.me/api/portraits/men/95.jpg'
            },
            content: "Non et atque noccaecati deserunt quas accusantium!"
          },
          {
            id: 2,
            author: {
              name: 'Kurtis Weissnat',
              avatar: 'https://randomuser.me/api/portraits/men/92.jpg'
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare ullamcorper sodales. Praesent orci eros, suscipit ut convallis quis, fringilla tempus tellus. Sed posuere lobortis sollicitudin. Morbi vel semper mi. Maecenas ac ligula ultricies ipsum elementum ultrices ut a arcu. Suspendisse potenti."
          }
        ],
      },
      {
        id: 2,
        author: {
          name: 'Ervin Howell',
          avatar: 'https://randomuser.me/api/portraits/men/95.jpg'
        },
        date: '01 Jul 2019',
        content: 'Non et atque noccaecati deserunt quas accusantium!',
        comments: [
          {
            id: 1,
            author: {
              name: 'Patricia Lebsack',
              avatar: 'https://randomuser.me/api/portraits/women/98.jpg'
            },
            content: "Non et atque noccaecati deserunt quas accusantium!"
          },
          {
            id: 2,
            author: {
              name: 'Patricia Lebsack',
              avatar: 'https://randomuser.me/api/portraits/women/98.jpg'
            },
            content: "Fusce mollis, eros ornare congue posuere, lectus urna malesuada sapien, et iaculis leo odio sed odio."
          },
          {
            id: 3,
            author: {
              name: 'Leanne Graham',
              avatar: 'https://randomuser.me/api/portraits/women/95.jpg'
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare ullamcorper sodales. Praesent orci eros, suscipit ut convallis quis, fringilla tempus tellus. Sed posuere lobortis sollicitudin. Morbi vel semper mi. Maecenas ac ligula ultricies ipsum elementum ultrices ut a arcu. Suspendisse potenti."
          }
        ],
      },
      {
        id: 3,
        author: {
          name: 'Leanne Graham',
          avatar: 'https://randomuser.me/api/portraits/women/95.jpg'
        },
        date: '01 Jul 2019',
        content: 'Doloribus at sed quis culpa deserunt consectetur qui praesentium naccusamus fugiat dicta nvoluptatem rerum ut voluptate autem nvoluptatem repellendus aspernatur dolorem in.',
        comments: [
          {
            id: 1,
            author: {
              name: 'Ervin Howell',
              avatar: 'https://randomuser.me/api/portraits/men/95.jpg'
            },
            content: "Non et atque noccaecati deserunt quas accusantium!"
          },
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
