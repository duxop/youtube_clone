import React, { useEffect, useState } from "react";
import { videosApiUrl } from "../utils/constants";
import VideoCards from "./VideoCards";

function Main() {
  const [videoList, setVideoList] = useState([]);
  console.log("child");
  const videoListAPI = async () => {
    const data = await fetch(videosApiUrl);
    const json = await data.json();
    console.log(json);
    setVideoList(json.items);
    // console.log(json.items);
  };
  useEffect(() => {
    videoListAPI();
  }, []);

  const cardList = videoList.map((card) => {
    return <VideoCards key = {card.id} data={card} />;
  })

  return <div className="bg-purple-100 col-span-11 flex flex-wrap">
    {cardList}
  </div>;
}

export default Main;
