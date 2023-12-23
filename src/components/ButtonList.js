import React from "react";
import Button from "./Button";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
const ButtonList = () => {
  const list = [
    "All",
    "Mixes",
    "Live",
    "Gyms",
    "Music",
    "Programming",
    "Gaming",
    "Dramedy",
    "Stocks",
    "Indie",
    "CAT",
    "Comedy ",
    "Valorant",
    "Tseries",
    "Bollywood",
    "News",
    "Pop",
    "Guitar",
    "Watched",
    "New ",
  ];

  return (
    <div className="flex justify-start">
      {list.map((item) => {
        return <Button name={item} key={item} />;
      })}
    </div>
  );

  // <div className="flex">
  //   <Button name="All" />

  //   <Button name="Gaming" />

  //   <Button name="song" />

  //   <Button name="live" />

  //   <Button name="cricket" />

  //   <Button name="soccer" />

  //   <Button name="news" />

  //   <Button name="Indian pop music" />

  //   <Button name="Indie music" />

  //   <Button name="CAT" />
  // </div>
};

export default ButtonList;
