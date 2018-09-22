import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>
  }
  const { snippet, id } = video;
  const url = `https://www.youtube.com/embed/${id.videoId}`;
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div className="details-title">{snippet.title}</div>
        <div className="details-desc">{snippet.description}</div>
      </div>
    </div>
  );
}

export default VideoDetail;
