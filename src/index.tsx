import React from 'react';
import ReactDOM from 'react-dom';
import VideoComponent from './components/index';

const testUrl = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'

const App = () => (
  <div>
    <h1>Video Component Example</h1>
    <VideoComponent src={testUrl} width={640} height={360} />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
