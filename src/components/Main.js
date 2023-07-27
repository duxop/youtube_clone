import React, { useEffect } from "react";
import { videosApiUrl } from "../utils/constants";
import VideoCards from "./VideoCards";
import Shimmer from "./Shimmer";
import { useDispatch, useSelector } from "react-redux";
import { setVideoList } from "../utils/videoListSlice";

function Main() {
  const videoList = useSelector((store) => store.videoList.list);
  const dispatch = useDispatch();

  const n = 25;

  const videoListAPI = async () => {
    const data = await fetch(videosApiUrl);
    const json = await data.json();
    dispatch(setVideoList(json.items));
  };

  useEffect(() => {
    console.log(videoList);
    videoListAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cardList = videoList.map((card) => {
    return <VideoCards key={card.id} data={card} />;
  });

  return (
    <div className="col-span-11 flex flex-wrap">
      {videoList.length === 0
        ? [...Array(n)].map((e, i) => <Shimmer key={i} />)
        : cardList}
    </div>
  );
}
export default Main;
