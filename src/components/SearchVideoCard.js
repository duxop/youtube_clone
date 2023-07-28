import React from "react";
import { Link } from "react-router-dom";

function SearchVideoCard({ data }) {
  const { title, channelTitle, thumbnails, description } = data?.snippet;
  const { url } = thumbnails?.medium;
  const id = data?.id?.videoId;

  console.log(data);
  return (
    <div className="w-[100%] h-[200px] m-4 p-2 cursor-pointer overflow-hidden hover:bg-gray-200 rounded-md">
      <Link to={"/watch?v=" + id}>
        <div className="flex">
          <img alt="thumbnail" className="rounded-md" src={url}></img>
          <div>
            <div className="font-medium p-2 p">{title}</div>
            <div className="p-2 font-bold">{channelTitle}</div>
            <div className="px-2 pr-20">{description}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SearchVideoCard;
