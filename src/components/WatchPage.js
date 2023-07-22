import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeSidebar } from '../utils/sidebarSlice';

function WatchPage() {

    const [URLSearchParams] = useSearchParams();
    const videoID = URLSearchParams.get('v');
    const dispatch = useDispatch();

    useEffect(() => {
      const toggleBar = () => {
        dispatch(closeSidebar());
      };
      toggleBar();
    }, [dispatch]);

  return (
    <div className="col-span-11 p-4">
      <iframe
        width="700"
        height="400"
        src={"https://www.youtube.com/embed/"+videoID+"?autoplay=1"}
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default WatchPage;