import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

const Player: React.FC<RouteComponentProps> = ({ location }) => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="embed-responsive embed-responsive-16by9">
          <video className="embed-responsive-item" src={ `/files/${location.state.movie.file}` } autoPlay playsinline controls />
        </div>
      </div>
    </div>
  );
}

export default Player;
