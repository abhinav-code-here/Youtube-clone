import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import axios from "axios";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // console.log(searchQuery);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    if (!searchQuery) return;
    // console.log(YOUTUBE_SEARCH_API, searchQuery);
    const data = await axios.get(YOUTUBE_SEARCH_API, {
      params: {
        q: searchQuery,
        part: "snippet",
        maxResults: 10,
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    });
    console.log(data);
    const suggestionsArr = data?.data?.items?.map((d) => d?.snippet?.title);
    // console.log(json);

    setSuggestions(suggestionsArr);
    dispatch(
      cacheResults({
        [searchQuery]: suggestionsArr,
      })
    );
  };
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  console.log(suggestions);
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-md">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10 cursor-pointer"
          src="https://w7.pngwing.com/pngs/155/992/png-transparent-computer-icons-cloudsight-bar-youtube-taco%EF%BC%8Cmenu-design-angle-text-rectangle-thumbnail.png"
          alt="Hamburger-Menu"
        />
        <a href="/">
          <img
            className="pb-2 pl-2 h-14"
            src="https://i.gadgets360cdn.com/large/youtube_logo_new_official_1504077880072.jpg"
            alt="Youtube-Logo"
          />
        </a>
      </div>
      <div className="pt-3 col-span-10 justify-center ml-12 ">
        <input
          className="w-1/3 border border-gray-400 p-2 rounded-l-full px-5"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="border border-gray-400 p-2 rounded-r-full hover:bg-gray-100">
          {/* <img
            className="h-4"
            src="https://w7.pngwing.com/pngs/403/380/png-transparent-computer-icons-youtube-symbol-information-black-dandelion-circle-symbol-magnifying-glass-thumbnail.png"
            alt="Search-Icon"
          /> */}
          Search
        </button>
        {showSuggestions && (
          <div className="absolute bg-white py-2 px-6 w-[30rem] shadow-lg rounded-lg border border-gray-100">
            <ul className="shadow-sm">
              {suggestions?.map((suggestion) => (
                <li
                  key={suggestion}
                  className="py-1 shadow-sm hover:bg-gray-100"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div>
        <img
          className="h-10 pt-2 col-span-1"
          src="https://banner2.cleanpng.com/20180604/cio/kisspng-user-profile-avatar-computer-icons-google-account-5b1571035447a7.6413663015281318433452.jpg"
          alt="User-icon"
        />
      </div>
    </div>
  );
};

export default Head;
