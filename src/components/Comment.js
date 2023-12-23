import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex shadow-sm bg-gray-50 p-2 rounded-lg">
      <img
        className="pt-2 w-9 h-8"
        src="https://banner2.cleanpng.com/20180604/cio/kisspng-user-profile-avatar-computer-icons-google-account-5b1571035447a7.6413663015281318433452.jpg"
        alt="user-img"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
