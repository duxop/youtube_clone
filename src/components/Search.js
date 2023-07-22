import React, { useEffect, useState } from "react";

function Search() {
  const [searchInput, setSearchInput] = useState("");

  const searchChange = ({ target }) => {
    setSearchInput(target.value);
    // console.log(searchInput);
  }

  // const searchSuggestionAPI = async () => {
  //   const data = await fetch(searchSuggestion);
  //   const json = await data.json();
  //   console.log(json);
  // }

  useEffect(() => {
    const timeOut = setTimeout(()=>{
      // searchSuggestionAPI();
  }, 300);

  return () => {
    clearTimeout(timeOut);
  }
  }, [searchInput]);
  return (
    <div>
      <input
        placeholder="Search"
        className=" border-2 border-blue-600 rounded-l-xl w-80 pl-4"
        value={searchInput}
        onChange={(e) => searchChange(e)}
      />
      <button className="bg-blue-600 border-2 border-blue-600 rounded-r-xl w-10">
        🔍
      </button>
    </div>
  );
}

export default Search;
