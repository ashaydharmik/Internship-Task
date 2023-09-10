import React from "react";
import "./section.scss";
import Card from "../Card/Card";
import { card } from "../utils/Data";
import { useTheme } from "../utils/Context";
const Section = ({ sectionData }) => {
  const getCardDataForSection = (sectionId) => {
    return card.filter((item) => item.parent_sec === sectionId);
  };
  const { isLightTheme } = useTheme();

  return (
    <>
      <section className={`sec-container `}>
        <div className="section">
          {sectionData.map((section) => (
            <div
              className={`sec-box ${isLightTheme ? "light-s" : "dark"}`}
              key={section.id}
            >
              <h1>{section.title}</h1>
              <div className="card">
                <Card cardData={getCardDataForSection(section.id)} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Section;
