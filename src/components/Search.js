import React, { useState } from "react";
import { SEARCH_PHOTOS } from "../url/url.js";
import axios from "axios";

const Photos = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  const handleClick = (ev) => {
    ev.preventDefault();
    searchUsers();
    console.log(SEARCH_PHOTOS, value.trim());
  };

  const handleChange = (ev) => {
    setValue(ev.target.value);
  };

  const searchUsers = async () => {
    try {
      const response = await axios.get(SEARCH_PHOTOS);
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
    <>
      <div className="search">
        <input className="input" onChange={handleChange} value={value} />
        <button onClick={handleClick}>Search</button>
      </div>
      <div className="picture">
        {data.map((pic) => {
          return (
            <img
              key={pic.id}
              alt="animals"
              src={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`}
            />
          );
        })}
      </div>
    </>
  );
};

export default Photos;
