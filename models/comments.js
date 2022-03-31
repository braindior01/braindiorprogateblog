class CommentModel {
  static create(con, data, callback) {
    const { comment, blog_id, user_id } = data;

    const sql = `INSERT INTO comments
      (comment, blog_id, user_id)
      VALUES (?, ?, ?)`;

    con.query(sql, [comment, blog_id, user_id], callback);
  }

  static find(con, data, callback) {
    const { blog_id } = data;

    const sql = `SELECT comments.*, users.username FROM comments
      LEFT JOIN users ON comments.user_id = users.id
      WHERE comments.blog_id = ?
      ORDER BY comments.id DESC`;

    con.query(sql, [blog_id], callback);
  }
}

module.exports = CommentModel;