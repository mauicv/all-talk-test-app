import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PostDisplay />
      </header>
    </div>
  );
}


class PostDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
    };
  }

  render() {
    return (
      <div>
        <button
          className="square"
          onClick={() => this.request()}
        >
          send request
        </button>
        <div>
          {this.state.posts ? this.state.posts.map((post, ind) => <div key={ind}>{post['content']}</div>) : null}
        </div>
      </div>
    );
  }

  request() {
    fetch('http://localhost:8000/posts/accepted?from_index=0&to_index=100')
      .then(response => response.json())
      .then(json => {console.log(json); this.setState({ posts: json['posts'] })});
  }
}

// this.setState({ post: post['content'] })

export default App;
