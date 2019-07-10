import React from "react";
import styled from "styled-components";

const CommentWrapper = styled.div`
  width: 100%;
  padding: 0.8rem;
  text-align: center;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(204, 204, 204, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(204, 204, 204, 1);
  box-shadow: 0px 0px 5px 0px rgba(204, 204, 204, 1);
  margin: 1rem auto;
  position: relative;
`;

const TextWrapper = styled.div`
  margin-top: 22px;
  margin-right: 2rem;
  strong {
    font-weight: bold;
  }
  p {
    line-height: 1.5;
    font-size: 1.2rem;
  }
`

export default function Comment({ comment }) {
  return (
    <CommentWrapper>
      <TextWrapper>
        <p>
           {comment}
        </p>
      </TextWrapper>
    </CommentWrapper>
  );
}

