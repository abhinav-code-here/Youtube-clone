import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
  if (comments == null) return;
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="ml-10 pl-5 border border-l-black">
        {/* <Comment key={index} data={comment} />
        <Comment key={index} data={comment} />
        <Comment key={index} data={comment} /> */}
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentList;
