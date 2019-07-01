import React from 'react';
import './App.css';

import Header from './Header';
import PostList from './PostList';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <PostList />
      </>
    );
  }
}

export default App;
