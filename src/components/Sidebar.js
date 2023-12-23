import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen)
    return (
      <div>
        <ul className="font-bold pr-2">
          <Link to="/">
            <li>
              <img
                className="h-5 "
                src="https://w7.pngwing.com/pngs/848/762/png-transparent-computer-icons-home-house-home-angle-building-rectangle-thumbnail.png"
                alt="Home"
              />
              Home
            </li>
          </Link>
          <li>
            <img
              className="h-5"
              src="https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/YouTube-Shorts-Black-900x0.png"
              alt="Shorts"
            />
            Shorts
          </li>
          <li>
            <img
              className="h-5"
              src="https://cdn.icon-icons.com/icons2/2248/PNG/512/youtube_subscription_icon_136007.png"
              alt="Subscription"
            />
            Subscription
          </li>
        </ul>
      </div>
    );

  return (
    <div className="p-5 shadow-lg w-44">
      <Link to="/">
        <h1 className="font-bold">Home</h1>
      </Link>
      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <li>Your Channel</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
      </ul>
    </div>
  );
};

export default Sidebar;
