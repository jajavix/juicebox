const express = require("express");
const tagsRouter = express.Router();

const { getAllTags, getPostsByTagName } = require("../db");

tagsRouter.get("/", async (req, res, next) => {
  try {
    const tags = await getAllTags();

    res.send({
      tags,
    });
  } catch ({ name, message }) {
    next({ name, message });
  }
});
//PART 3
//hash string in url, everything after the # gets treated as a fragment
tagsRouter.get("/:tagName/posts", async (req, res, next) => {
  // read the tagname from the params
  const { tagName } = req.params;
  try {
    // use our method to get posts by tag name from the db
    // send out an object to the client { posts: // the posts }
    const allPosts = await getPostsByTagName(tagName);
    const posts = allPosts.filter((post) => {
      if (post.active) {
        return true;
      }

      if (req.user && req.user.id === post.author.id) {
        return true;
      }
      return false;
    });
  } catch ({ name, message }) {
    // forward the name and message to the error handler
    next({ name, message });
  }
});

module.exports = tagsRouter;
