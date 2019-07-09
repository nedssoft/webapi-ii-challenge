const Post = require("../data/db");

const respondSuccess = (statusCode, data, message = null, res) => {
  return res.status(statusCode).json({
    status: "success",
    ...(message && { message }),
    data
  });
};
const respondError = (statusCode, error = null, message = null, res) => {
  return res.status(statusCode).json({
    status: "error",
    ...(message && { errorMessage: message }),
    ...(error && { error })
  });
};
const createPost = async (req, res) => {
  try {
    const { title, contents } = req.body;

    if (!title || !contents) {
      respondError(
        400,
        null,
        "Please provide title and contents for the post.",
        res
      );
    } else {
      const post = await Post.insert({
        title,
        contents
      });
      if (post) {
        respondSuccess(201, post, "Post created successfully", res);
      } else {
        respondError(
          500,
          null,
          "There was an error while saving the post to the database",
          res
        );
      }
    }
  } catch (error) {
    respondError(
      500,
      error,
      "There was an error while saving the post to the database",
      res
    );
  }
};

const createPostComment = async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  try {
    if (!text) {
      respondError(400, null, "Provide the text for the comment", res);
    } else {
      const post = await Post.findById(id);
      if (!post.length) {
        respondError(404, null, "The post with the specified ID does not exist", res);
      } else {
        const comment = await Post.insertComment({ text, post_id: id });
        if (comment) {
          respondSuccess(201, comment, "Comment created successfully", res);
        } else {
          respondError(
            500,
            null,
            "There was an error while saving the comment to the database",
            res
          );
        }
      }
    }
   
  } catch (error) {
    respondError(
      500,
      error,
      "There was an error while saving the comment to the database",
      res
    );
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    if(posts.length) {
      respondSuccess(200, posts,'',res )
    } else {
      respondError(400, null, 'No posts found in the database', res);
    }
  } catch (error) {
    respondError(400, error, 'There was an error retrieving posts from the database', res);
  }
}

const getSinglePost = async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findById(id);
    if(post.length) {
      respondSuccess(200, post, 'Success', res)
    } else {
      respondError(404, null, 'The post with the specified ID does not exist.', res)
    }
  } catch (error) {
    respondError(500, error, 'The post information could not be retrieved.', res)
  }
}

module.exports = {
  createPost,
  createPostComment,
  getAllPosts,
  getSinglePost
};
