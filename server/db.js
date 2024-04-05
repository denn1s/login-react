import conn from './conn.js'

export async function login(user, password_md5) {
  const [rows] = await conn.query('SELECT id FROM users WHERE user = ? AND password = ?', [user, password_md5])
  if (rows.length === 1) {
    return rows[0].id
  }
  return false
}

export async function user_permissions(user_id) {
  const [rows] = await conn.query('SELECT action FROM actions WHERE user_id = ?', [user_id])
  return rows.map((row) => row.action)
}


export async function register(user, password_md5) {
  const [rows] = await conn.query('INSERT INTO users (user, password) VALUES (?, ?)', [user, password_md5])
  return rows
}
