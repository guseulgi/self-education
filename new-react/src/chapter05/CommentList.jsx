import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name : '길동',
    comment : '안녕~',
  },
  {
    name : '순신',
    comment : '안녕하세요.',
  },
  {
    name : '이지',
    comment : 'Hello~~',
  },
];

function CommentList(props) {
  return (
    <div>
      {/* <Comment name='길동' comment='안녕~'/>
      <Comment name='순신' comment='안녕하세요.'/> */}
      {comments.map(comment => {
        return (
          <Comment name={comment.name} comment={comment.comment} />
        );
      })}
    </div>
  );
}

export default CommentList;