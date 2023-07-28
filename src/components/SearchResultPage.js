import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SearchVideoCard from "./SearchVideoCard";
import { openSidebar } from "../utils/sidebarSlice";
import { useSearchParams } from "react-router-dom";
import { videoSearchURL } from "../utils/constants";

function SearchResultPage() {
  const [searchVideoList, setSearchVideoList] = useState([]);
  const [URLSearchParams] = useSearchParams();
  const search = URLSearchParams.get("s");
    console.log(search)
  const searchApi = async () => {
    const data = await fetch(videoSearchURL + search);
    const json = await data.json();
    console.log(json);
    setSearchVideoList(json.items);
  }
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(openSidebar());
    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    searchApi();
    // eslint-disable-next-line
  }, [search]);
  return (
    <div className="col-span-11">
      <div className="mr-6">
        {searchVideoList.map((data) => (
          <SearchVideoCard data={data} />
        ))}
      </div>
    </div>
  );
}

export default SearchResultPage;
