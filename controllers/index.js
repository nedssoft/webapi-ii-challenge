const Post = require("../data/db");

const respondSuccess = (statusCode, data, message = null, res) => {
  return res
    .status(statusCode)
    .json({
      status: "success",
      ...(message && { message }),
      data
    });
}
const respondError = (statusCode, error = null, message = null, res) => {
  return res
    .status(statusCode)
    .json({
      status: "error",
      ...(message && {errorMessage: message }),
      ...(error && { error }),
    });
}
const createPost = async (req, res) => {
  try {
    const { title, contents } = req.body;

    if (!title || !contents) {
        respondError(400, null,"Please provide title and contents for the post." , res)
    } else {
      const post = await Post.insert({
        title,
        contents
      })
      if(post) {
        respondSuccess(201, post, 'Post created successfully', res)
      } else {
        respondError(500, null,"There was an error while saving the post to the database", res)
      }
    }
  } catch (error) {
    respondError(500, error,"There was an error while saving the post to the database", res)
  }
};

module.exports = {
  createPost
}

