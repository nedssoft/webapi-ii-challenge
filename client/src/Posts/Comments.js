import React from "react";
import styled from "styled-components";
import Comment from './Comment'

const CommentsWrapper = styled.div`
  width: 89%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  margin: auto;
`;
export default function Comments({ comments }) {
  return (
      <CommentsWrapper>
        {comments &&
          comments.map(comment => (
            <Comment
              key={comment.id}
              comment={comment.text}
            />
          ))}
      </CommentsWrapper>
  );
}



