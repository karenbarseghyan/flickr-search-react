import React from 'react';
import styles from './Tags.css';
import { v4 as uuidv4 } from "uuid";

const Tags = (props) => {
    return (
        <>
            {props.tagsData.map((item)=>{
                return <p key={uuidv4()} className="tag-item">{item}</p>;
            })}
        </>
    )
}

export default Tags
