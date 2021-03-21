import React from "react";
import styles from "./Image.css";

const Image = (props) => {
  return (
    <>
      {props.imageData.map((pic) => {
        return (
          <img
            className="image-design"
            key={pic.id}
            alt="animals"
            src={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`}
          />
        );
      })}
    </>
  );
};

export default Image;
