// @ts-ignore
import React from 'react';
import ReactDOM from 'react-dom';
import SmartVideo from '../dist/bundle.js';

const testUrl = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'

const App = () => (
  <div>
    <h1>Testing Your Package</h1>
    <SmartVideo src={testUrl} width={400} height={400} />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

