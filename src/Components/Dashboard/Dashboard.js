import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Section from "../Section/Section";
import { banner } from "../utils/Data";
import { section } from "../utils/Data";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Banner bannerData={banner} />
      <Section sectionData={section} />
    </div>
  );
};

export default Dashboard;
