import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div className="loading-box col-md-8">
        <span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"/>
        Loading...
      </div>
    );
  }
  const { snippet, id } = video;
  const url = `https://www.youtube.com/embed/${id.videoId}`;
  return (
    <div className="video-detail col-md-8">
      <div className="video-player embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <h1 className="details-title">{snippet.title}</h1>
        <div className="details-desc">{snippet.description}</div>
      </div>
    </div>
  );
}

export default VideoDetail;
