const INSERT_USER = 'INSERT INTO users (email, password, salt) VALUES (?)'
const SELECT_USER_BY_EMAIL = 'SELECT * FROM users WHERE email = ?'

async function insertUser(db, { email, password, salt }) {
  return db.queryAsync(INSERT_USER, [[email, password, salt]])
}

async function selectUserByEmail(db, { email }) {
  return db.queryAsync(SELECT_USER_BY_EMAIL, [email])
}

module.exports = {
  insertUser,
  selectUserByEmail
}

