import React, { useState } from "react";
import { SEARCH_PHOTOS_URL } from "../../url/url.js";
import axios from "axios";
import "./Search.css";
import Image from '../images/Image.js'
import Tags from '../tags/Tags.js'

const Photos = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [tags, setTags] = useState([]);

  const URL = `${SEARCH_PHOTOS_URL}&tags=animal&text=${value}`;
  const handleClick = (ev) => {
    ev.preventDefault();
    searchUsers();
  };

  const handleChange = (ev) => {
    setValue(ev.target.value);
    setTags(ev.target.value.trim().split(" "));
  };
  console.log(tags);

  const searchUsers = async (ev) => {
    try {
      const response = await axios.get(URL);
      const data = await response;
      setData(data.data.photos.photo);
    } catch (e) {
      console.log(e);
    }
  };
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
        <Tags tagsData={tags} />
      </div>
      <div className="merged-container">
        <div className="group-pics-title">Group Pics</div>
        <div className="group-pics-container"></div>
      </div>
    </div>
  );
};

export default Photos;
