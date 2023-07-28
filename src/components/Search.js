import React, { useEffect, useState } from "react";
import { searchSuggestionURL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { cacheSuggestions } from "../utils/searchCacheSlice";
import { useNavigate } from "react-router-dom";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const cache = useSelector((store) => store.seachCache.cache);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    navigate("/search?s=" + searchInput);
    setSearchInput("");
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
      <form
        onSubmit={(e) => loadSearchResults(e, searchInput)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)}
      >
        <input
          placeholder="Search"
          className=" border-2 border-blue-600 rounded-l-xl w-[25rem] pl-4"
          value={searchInput}
          onChange={(e) => searchChange(e)}
        />
        <button className="bg-blue-600 border-2 border-blue-600 rounded-r-xl w-10">
          🔍
        </button>
        {showSuggestions ? (
          <ul className="mt-1 w-[25rem] [&>li]:pl-1 fixed bg-gray-400 rounded-lg overflow-hidden">
            {searchList}
          </ul>
        ) : null}
      </form>
    </div>
  );
}

export default Search;
