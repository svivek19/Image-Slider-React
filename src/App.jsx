import React, { useState } from "react";
import data from "./Data";
import "./App.css";

const App = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const handlePrev = () => {
    if (imageIndex <= 0) {
      setImageIndex(data.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  };

  const handleNext = () => {
    if (imageIndex >= data.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };

  return (
    <div className="main">
      <button onClick={handlePrev}>{"<"}</button>
      <img src={data[imageIndex]} alt="image" />
      <button onClick={handleNext}>{">"}</button>
    </div>
  );
};

export default App;
