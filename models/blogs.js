class BlogModel {
  static create(con, data, callback) {
    const { title, description, user_id } = data;

    const sql = `INSERT INTO blogs
      (title, description, user_id)
      VALUES (?, ?, ?)`;

    con.query(sql, [title, description, user_id], callback);
  }

  static find(con, data, callback) {
    const { user_id } = data;

    const sql = `SELECT * FROM blogs
      WHERE user_id = ?
      ORDER BY id DESC`;

    con.query(sql, [user_id], callback);
  }

  static findOne(con, data, callback) {
    const { blog_id } = data;

    const sql = `SELECT * FROM blogs
      WHERE id = ?
      ORDER BY id DESC`;

    con.query(sql, [blog_id], callback);
  }
}

module.exports = BlogModel;
