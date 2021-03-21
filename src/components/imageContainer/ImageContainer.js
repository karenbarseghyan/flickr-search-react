import React from 'react'
import Image from '../images/Image'
import './ImageContainer.css'

const ImageContainer = (props) => {
    return (
      <>
        <div className="image-container">
          {props.datas.length > 0 && <Image imageData={props.datas} />}
        </div>
      </>
    );
}
export default ImageContainer
