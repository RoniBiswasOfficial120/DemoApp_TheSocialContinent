import React from "react";
import "./styles.css";
import { useState } from "react";
const ImageSlider = ({ list }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="slideShowMainContainer">
      <div className="slideshow-container">
        <a
          className="prev"
          onClick={() =>
            currentIndex - 1 <= 0
              ? setCurrentIndex(list.length - 1)
              : setCurrentIndex(currentIndex - 1)
          }
        >
          &#10094;
        </a>
        {list.map((image, imageIndex) => {
          return (
            imageIndex === currentIndex && (
                <img src={image} className="sliderImage" key={imageIndex}/>
            )
          );
        })}
        <a
          className="next"
          onClick={() =>
            currentIndex + 1 >= list.length - 1
              ? setCurrentIndex(0)
              : setCurrentIndex(currentIndex + 1)
          }
        >
          &#10095;
        </a>
      </div>
      <div className="dotContainer">
        {list.map((image, imageIndex) => {
          return (
            <span
              className="dot"
              onClick={() => setCurrentIndex(imageIndex)}
              key={imageIndex}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ImageSlider;
