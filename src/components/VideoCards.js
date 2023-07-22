import React from "react";
import { Link } from "react-router-dom";

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
    <div className="w-[18rem] h-[283px] m-4 cursor-pointer overflow-hidden hover:bg-gray-200 rounded-md">
      <Link to={"/watch?v=" + data.id}>
        <img alt="thumbnail" src={url}></img>
        <div className="font-bold px-2">{title}</div>
        <div className="px-2">{channelTitle}</div>
        <h1 className="px-2">{viewCount + unit}</h1>
      </Link>
    </div>
  );
}

export default VideoCards;
