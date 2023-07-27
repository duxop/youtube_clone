import React, { useEffect, useState } from "react";
import { searchSuggestionURL, videoSearchURL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { cacheSuggestions } from "../utils/searchCacheSlice";
import { setVideoList } from "../utils/videoListSlice";
import { closeSidebar } from "../utils/sidebarSlice";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const cache = useSelector((store) => store.seachCache.cache);
  const dispatch = useDispatch();

  const cacheSearch = (obj) => {
    dispatch(cacheSuggestions(obj));
  };
  const searchChange = ({ target }) => {
    setSearchInput(target.value);
  };

  const searchSuggestionAPI = async () => {
    console.log("API CALLED");
    const data = await fetch(searchSuggestionURL + searchInput);
    const json = await data.json();
    setSearchSuggestions(json[1]);
    cacheSearch({
      key: searchInput,
      val: json[1],
    });
  };

  useEffect(() => {
    let timeOut;
      timeOut = setTimeout(() => {
        const index = cache.find((el) => el.key === searchInput);
        if (index !== undefined) {
          console.log("cache used");
          setSearchSuggestions(index.val);
        } else searchSuggestionAPI();
      }, 300);

    return () => {
      clearTimeout(timeOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  const loadSearchResults = async (event, search) => {
    event.preventDefault();
    setShowSuggestions(false);
    setSearchInput("");
    console.log(searchInput);
    const toggleBar = () => {
      dispatch(closeSidebar());
    };
    toggleBar();
    const data = await fetch(videoSearchURL + search);
    const json = await data.json();
    console.log(json);
    dispatch(setVideoList(json.items));
  };

  const searchList = searchSuggestions.map((item, i) => (
    <li
      key={i}
      className="hover:bg-gray-200 cursor-pointer"
      onClick={(e) => {
        setShowSuggestions(false);
        loadSearchResults(e, item);
      }}
    >
      {item}
    </li>
  ));
  return (
    <div>
      <form onSubmit={(e) => loadSearchResults(e, searchInput)}>
        <input
          placeholder="Search"
          className=" border-2 border-blue-600 rounded-l-xl w-[25rem] pl-4"
          value={searchInput}
          onChange={(e) => searchChange(e)}
          onFocus={() => setShowSuggestions(true)}
        />
        <button className="bg-blue-600 border-2 border-blue-600 rounded-r-xl w-10">
          🔍
        </button>
      </form>
      {showSuggestions ? (
        <ul className="mt-1 w-[25rem] [&>li]:pl-1 fixed bg-gray-400 rounded-lg overflow-hidden">
          {searchList}
        </ul>
      ) : null}
    </div>
  );
}

export default Search;
