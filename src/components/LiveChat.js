import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";
const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      //   console.log("Api polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(1, 1),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);
  return (
    <div>
      <div className="w-full h-[600px] ml-2 p-2 border border-black overflow-y-scroll flex flex-col-reverse">
        {/* <ChatMessage name="Abhinav Bindra" message="This is a live chat" />
      <ChatMessage name="Abhinav Bindra" message="This is a live chat" />
      <ChatMessage name="Abhinav Bindra" message="This is a live chat" />
      <ChatMessage name="Abhinav Bindra" message="This is a live chat" />
      <ChatMessage name="Abhinav Bindra" message="This is a live chat" />
      <ChatMessage name="Abhinav Bindra" message="This is a live chat" />
      <ChatMessage name="Abhinav Bindra" message="This is a live chat" /> */}
        {chatMessages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Abhinav",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="px-2 w-96 border border-gray-100"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
