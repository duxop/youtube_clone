import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSidebar } from "../utils/sidebarSlice";
import Comments from "./Comments";
import { commentsSample } from "../utils/commentsSample";
import LiveChat from "./LiveChat";

function WatchPage() {
  const [URLSearchParams] = useSearchParams();
  const videoID = URLSearchParams.get("v");
  const dispatch = useDispatch();
  const commentsData = commentsSample;
  useEffect(() => {
    const toggleBar = () => {
      dispatch(closeSidebar());
    };
    toggleBar();
  }, [dispatch]);

  function Recc({ data }) {
    return data.map(({ user, text, replies }, index) => (
      <>
        <Comments user={user} text={text} />
        <div className="pl-6">
          <Recc data={replies} />
        </div>
      </>
    ));
  }
  return (
    <div className="col-span-11 flex flex-col">
      <div className="p-4 flex">
        <div className="w-[800px]">
          <iframe
            width="800"
            height="450"
            src={"https://www.youtube.com/embed/" + videoID + "?autoplay=1"}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <LiveChat />
      </div>

      <div className="w-[800px] ml-4">
        <Recc data={commentsData} />
      </div>
    </div>
  );
}

export default WatchPage;
