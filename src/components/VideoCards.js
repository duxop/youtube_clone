import React from "react";

function VideoCards({ data }) {
  const { title, channelTitle, thumbnails } = data?.snippet;
  const { url } = thumbnails?.medium;
  let { viewCount } = data?.statistics;
  let unit = "views";

  if (viewCount > 1000000) {
    unit = "M " + unit;
    viewCount = parseInt(viewCount / 1000000);
  } else if (viewCount > 1000) {
    unit = "k " + unit;
    viewCount = parseInt(viewCount / 1000);
  }
//   console.log(data);
  return (
    <div className="shivam w-[19rem] m-4 cursor-pointer">
      <img alt="thumbnail" className="rounded-md" src={url}></img>
      <div className="font-bold">{title}</div>
      <div>{channelTitle}</div>
      <h1>{viewCount + unit}</h1>
    </div>
  );
}

export default VideoCards;
