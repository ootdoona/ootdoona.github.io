import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>Hello, streaming test
          {/* Edit <code>src/App.tsx</code> and save to reload. */}
        </p>
        {/* <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Ffb.watch%2F3XvNS7ojYL%2F&width=500&show_text=false&appId=1249604281777304&height=282" width="500" height="282" scrolling="no" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> */}
        <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F100001820358579%2Fvideos%2F5294837047253588%2F&width=500&show_text=false&appId=1249604281777304&height=889" width="500" height="889" scrolling="no" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      </header>
    </div>
  );
}

export default App;
