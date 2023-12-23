import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div>
      <div className="flex items-center shadow-sm p-1">
        <img
          className="h-10 pt-2"
          src="https://banner2.cleanpng.com/20180604/cio/kisspng-user-profile-avatar-computer-icons-google-account-5b1571035447a7.6413663015281318433452.jpg"
          alt="chat-icon"
        />
        <span className="font-semibold px-2">{name}</span>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
