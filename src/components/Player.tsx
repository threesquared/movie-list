import React, { useRef, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

const Player: React.FC<RouteComponentProps> = ({ location }) => {
  const videoElement = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoElement.current !== null) {
      videoElement.current.addEventListener('error', err => {
        console.log(err)
      }, false)
    }
  });

  return (
    <div className="py-5">
      <div className="container">
        <div className="embed-responsive embed-responsive-16by9">
          <video className="embed-responsive-item" ref={ videoElement } src={ `https://docs.fam.wtf/files/${location.state.movie.file}` } autoPlay playsInline controls />
        </div>
      </div>
    </div>
  );
}

export default Player;
