import React from "react";
const InsSmallCard = ({ data }) => {
  return (
    <div className="InsSmallCard-wrapper">
      {data.map((item, index) => {
        const { img, title, content } = item;
        return (
          <div key={index} className="InsSmallCard">
            <img src={img} alt="img" />
            <h3>{title}</h3>
            <p>{content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default InsSmallCard;
