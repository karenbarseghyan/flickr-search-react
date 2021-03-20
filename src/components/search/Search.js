import React, { useState } from "react";
import { SEARCH_PHOTOS_URL } from "../../url/url.js";
import axios from "axios";
import "./Search.css";
import Image from '../images/Image.js'

const Photos = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  console.log(value, "ourvalue");

  const URL = `${SEARCH_PHOTOS_URL}&tags=animal&text=${value}`;
  console.log(URL, "555");
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
console.log(data, "dddddddd");
  return (
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
        {data.length > 0 && <Image imageData={data} />}
      </div>
      <div className="tag-container">
        <p className="tag-item">cat</p>
        <p className="tag-item">dog</p>
      </div>
      <div className="merged-container">
        <div className="group-pics-title">Group Pics</div>
        <div className="group-pics-container"></div>
      </div>
    </div>
  );
};

export default Photos;