import React from 'react';

interface VideoComponentProps {
  src: string;
  width?: number;
  height?: number;
  controls?: boolean;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ src, width, height, controls = true }) => (
  <video src={src} width={width} height={height} controls={controls} />
);

export default VideoComponent;
