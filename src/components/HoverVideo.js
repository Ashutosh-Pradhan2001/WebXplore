import React from "react";
import "./hoverVideo.css";
const HoverVideo = () => {
  return (
    <div className="hoverVideo">
      <video
        src="Dus Bahane-(HDvideo9).mp4"
        className="videoPlayer"
        autoPlay={true}
        muted
      />
    </div>
  );
};

export default HoverVideo;
