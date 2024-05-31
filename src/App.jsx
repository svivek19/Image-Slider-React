import React, { useState } from "react";
import data from "./Data";
import "./App.css";

const App = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const handlePrev = () => {
    imageIndex <= 0
      ? setImageIndex(data.length - 1)
      : setImageIndex(imageIndex - 1);
  };

  const handleNext = () => {
    imageIndex >= data.length - 1
      ? setImageIndex(0)
      : setImageIndex(imageIndex + 1);
  };

  return (
    <div className="main">
      <button onClick={handlePrev}>{"<"}</button>
      {data.map((url, i) => (
        <img
          key={i}
          src={url}
          alt="image"
          className={imageIndex === i ? "show" : "hide"}
        />
      ))}
      <button onClick={handleNext}>{">"}</button>
    </div>
  );
};

export default App;
