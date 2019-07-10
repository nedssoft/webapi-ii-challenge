import React from "react";
import styled from "styled-components";
import Post from "./Post";
import axios from 'axios'

const BASE_URL = 'http://localhost:8000/api/posts/'
const PostsContainer = styled.section`
  width: 820px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
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
    posts: [],
    comments: [],
    showComments: false,
  }
  componentDidMount() {
    this.getPosts()
  }
  getPosts = () => {
    axios.get(BASE_URL).then(res => {

      this.setState({posts : res.data.data})
    }).catch(err => {
      console.log(err)
    })
  }
  deletePost = (id) => {
    axios.delete(`${BASE_URL}/${id}`)
    .then(({data}) => {
      if (data.status === 'success') {
        alert('User deleted successfully')
        this.getPosts()
      }
    })
  }
  toggleComments = (id) => {
    axios.get(`${BASE_URL}/${id}/comments`).then(res => {
      console.log(res.data)
      this.setState({comments : res.data.data, showComments: true})
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
                showComments={this.state.showComments}
                comments={this.state.comments}
                toggleComments={this.toggleComments}
              />
            ))}
        </PostsWrapper>
      </PostsContainer>
      </React.Fragment>
    );
  }
}

export default Posts


