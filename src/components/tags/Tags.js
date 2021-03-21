import React from 'react';
import './Tags.css';
import { v4 as uuidv4 } from "uuid";

const Tags = (props) => {
    return (
      <>
        <p>
          {props.tagsData.map((item) => {
            return (
              <span key={uuidv4()} className="tag-item">
                {item}
              </span>
            );
          })}
        </p>
      </>
    );
}

export default Tags
