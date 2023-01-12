import React from "react";
import "./card.css";

const Card = (props) => {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText ? <div className="card-badge">{badgeText}</div> : ""}
      <img
        src={`../images/${props.item.coverImg}`}
        alt="image"
        className="card-img"
      />
      <div>
        <div className="star--line">
          <img src="../images/star.png" className="star" alt="Star" />
          <h5>
            <span>{props.item.stats.rating} </span>
            <span>({props.item.stats.reviewCount})</span> •
            <span> {props.item.location}</span>
          </h5>
        </div>
        <p>{props.title}</p>
        <p>
          <span>From ${props.price}</span> / person
        </p>
      </div>
    </div>
  );
};

export default Card;
