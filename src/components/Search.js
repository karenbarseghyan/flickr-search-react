import React, { useState } from "react";
import { URL, SEARCH_PHOTOS_URL, ENDPOINT } from "../url/url.js";
import axios from "axios";
import "./Search.css";

const Photos = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  const handleClick = (ev) => {
    ev.preventDefault();
    searchUsers();
    console.log(URL, value.trim());
  };

  const handleChange = (ev) => {
    setValue(ev.target.value);
  };

  const searchUsers = async (ev) => {
    try {
      const response = await axios.get(URL);
      const data = await response;
      console.log(data);
      setData(data.data.photos.photo);
      console.log(data.data.photos);
      console.log(data.data.photos.photo[0].id);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="wrapper">
        <div className="container">
            <div className="body">
                <div className="block-search">
                    <input
                        type="text"
                        className="input"
                        onChange={handleChange}
                        value={value}
                        />
                    <button className="btn-search" onClick={handleClick}>
                        Search
                    </button>
                </div>
                <div className="image-container">
                    {data.map((pic) => {
                    return (
                    <img
                        className="image-design"
                        key={pic.id}
                        alt="animals"
                        src={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`}
                    />
                    );
                    })}
                </div>
                <div className="drap-drop">
                    <div className="item-drop"></div>
                    <div className="item-drop"></div>
                </div>
                <div className="show-item"></div>
            </div>
        </div>
    </div>
  );
};

export default Photos;
