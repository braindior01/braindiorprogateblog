const Blog = require("../models/blogs");
const Comment = require("../models/comments");

class BlogController {
  // Show blog page
  static getBlogPage(req, res, next) {
    Blog.find(req.con, { user_id: req.user.id }, (err, rows) => {
      res.render("blogs", {
        username: req.user.username || req.user.displayName,
        blogs: rows || [],
      });
    });
  }

  // Create a blog post
  static createBlogPost(req, res, next) {
    Blog.create(
      req.con,
      {
        title: req.body.title,
        description: req.body.description,
        user_id: req.user.id,
      },
      () => {
        Blog.find(req.con, { user_id: req.user.id }, (err, rows) => {
          res.render("blogs", {
            username: req.user.username || req.user.displayName,
            blogs: rows || [],
          });
        });
      }
    );
  }

  // Go to blog details page
  static getBlogDetailPage(req, res, next) {
    Blog.findOne(req.con, { blog_id: req.params.blog_id }, (err, rows) => {
      Comment.find(
        req.con,
        { blog_id: req.params.blog_id },
        (err, comments) => {
          res.render("blogDetail", {
            username: req.user.username || req.user.displayName,
            blog: rows[0] || [],
            comments: comments || [],
          });
        }
      );
    });
  }

  // Create a comment
  static createComment(req, res, next) {
    Comment.create(
      req.con,
      {
        comment: req.body.comment,
        blog_id: req.params.blog_id,
        user_id: req.user.id,
      },
      () => {
        Blog.findOne(req.con, { blog_id: req.params.blog_id }, (err, rows) => {
          Comment.find(
            req.con,
            { blog_id: req.params.blog_id },
            (err, comments) => {
              res.render("blogDetail", {
                username: req.user.username || req.user.displayName,
                blog: rows[0] || [],
                comments: comments || [],
              });
            }
          );
        });
      }
    );
  }
}

module.exports = BlogController;