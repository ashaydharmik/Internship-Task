import React, { useState, useEffect } from "react";
import "./banner.scss";
import { useTheme } from "../utils/Context";

const Banner = ({ bannerData }) => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [bannerData]);

  const { isLightTheme } = useTheme();

  return (
    <div className={`banner-slider  ${isLightTheme ? "light-b" : "dark"}`}>
      <div
        className="banner-container"
        style={{ transform: `translateX(-${currentBannerIndex * 100}%)` }}
      >
        {bannerData.map((banner, index) => (
          <div key={banner.id_no} className="banner">
            <h3>{banner.id}</h3>
            <div className="content">
              <p>{banner.text}</p>
              {banner.button && <button>{banner.btn_name}</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
