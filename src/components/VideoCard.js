import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img
        className="rounded-lg"
        src={thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <ul className="text-gray-600">
        <li className="font-bold py-2 text-black">{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} Views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
