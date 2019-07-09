import React from "react";
import styled from "styled-components";
import Post from "./Post";
import axios from 'axios'

const BASE_URL = 'http://localhost:8000/api/posts'
const PostsContainer = styled.section`
  width: 800px;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  margin: auto;
  flex-direction: column;
  @media (max-width: 500px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;

const PostsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;
class Posts extends React.Component {
  state = {
    posts: []
  }
  componentDidMount() {
    this.getUsers()
  }
  getPosts = () => {
    axios.get(BASE_URL).then(res => {
      console.log(res.data)
      this.setState({posts : res.data})
    }).catch(err => {
      console.log(err)
    })
  }
  render() {
    return (
      <React.Fragment>
      <PostsContainer>
        <PostsWrapper>
          {this.state.posts &&
            this.state.posts.map(post => (
              <Post
                key={post.id}
                post={post}
                deletePost={this.deletePost}
              />
            ))}
        </PostsWrapper>
      </PostsContainer>
      </React.Fragment>
    );
  }
}

export default Posts


