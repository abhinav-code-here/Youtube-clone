import React from "react";
import CommentList from "./CommentList";
const commentsData = [
  {
    name: "Abhinav Bindra",
    text: "This is a comment by Abhinav",
    replies: [
      {
        name: "Vaibhav Jindal",
        text: "This is a reply from Vaibhav",
        replies: [
          {
            name: "Abhinav Bindra",
            text: "This is a reply from Abhinav to Vaibhav's reply on Abhinav's comment",
          },
        ],
      },
    ],
  },
  {
    name: "Atul Thakur",
    text: "This is a comment by Atul",
  },
];

const CommentsContainer = () => {
  //   console.log(info);
  return (
    <div className="m-5 p-2 ">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentList comments={commentsData} />
      {/* <Comment data={commentsData[0]} /> */}
    </div>
  );
};

export default CommentsContainer;
