import React, { useState } from "react";
import "./card.scss";
import { FaCaretDown } from "react-icons/fa";
import { useTheme } from "../utils/Context";

const Card = ({ cardData }) => {
  const [showAllCards, setShowAllCards] = useState(false);

  const initialCard = 3;

  const toggleShowAllCards = () => {
    setShowAllCards(!showAllCards);
  };

  const { isLightTheme } = useTheme();

  return (
    <>
      <section className="card-container">
        {cardData
          .slice(0, showAllCards ? cardData.length : initialCard)
          .map((item) => (
            <div
              key={item.id}
              className={`card-box  ${isLightTheme ? "light-c" : "dark"}`}
            >
              <div className="heading">
                <h3>{item.card_title}</h3>
              </div>
              {item.data_type === "image" && (
                <img
                  src={item.data_value}
                  alt={item.card_title}
                  width={"200px"}
                  height={"110px"}
                />
              )}
              {item.data && (
                <div>
                  <strong>Data:</strong> {item.data_value}
                </div>
              )}

              {item.data_type === "tags" && (
                <div className="tags">
                  {item.data_value.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              {item.data_type === "number" && (
                <div>
                  <strong>Number:</strong> {item.data_value}
                </div>
              )}
              {item.data_type === "text" && (
                <div>
                  <strong>Text:</strong> {item.data_value}
                </div>
              )}

              {item.link && <a href={item.redirect}>{item.link_name}</a>}

              {item.note && (
                <div className="note">
                  <strong>Note:</strong> {item.note}
                </div>
              )}
              {item.button && <button>{item.button_name}</button>}
            </div>
          ))}
        {!showAllCards && (
          <div className="buttons">
            <button onClick={toggleShowAllCards}>
              See more
              <FaCaretDown />
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default Card;
