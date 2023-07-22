import React, { useEffect, useState } from "react";
import { videosApiUrl } from "../utils/constants";
import VideoCards from "./VideoCards";
import Shimmer from "./Shimmer";

function Main() {
  const [videoList, setVideoList] = useState([]);
  const n = 25;
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
    return <VideoCards key={card.id}  data={card} />;
  })

  return (<div className="col-span-11 flex flex-wrap">
    {videoList.length === 0 ? [...Array(n)].map((e, i) => <Shimmer/>) : cardList}
    
  </div>);
}

export default Main;
