import picture from "../../assets/images/home-image.jpg";

import React from "react";

function HomeImage() {
  return (
    <div>
      <img src={picture} alt="Screen with code on it" className="home-image" />
    </div>
  );
}

export default HomeImage;
