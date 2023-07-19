import Search from "./Search";
import { toggleSidebar } from "../utils/sidebarSlice";
import { useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const toggleBar = () => {
    dispatch(toggleSidebar());
  };
  return (
    <div className="flex justify-between p-2 items-center bg-green-200">
      <div className="flex">
        <button className="cursor-pointer p-2" onClick={() => toggleBar()}>
          Sidebar
        </button>
        <img
          className="cursor-pointer w-28 p-2"
          alt="logo"
          src="https://w7.pngwing.com/pngs/674/324/png-transparent-youtube-logo-music-video-computer-icons-youtube-logo-text-trademark-logo.png"
        ></img>
      </div>
      <Search />
      <div>
        <h1>User</h1>
      </div>
    </div>
  );
}
