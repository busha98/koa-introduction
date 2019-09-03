const { dataType } = require('db-migrate-shared')

exports.up = async function up(db) {
  await db.createTable('users', {
    id: { type: dataType.INTEGER, primaryKey: true, autoIncrement: true },
    created_at: { type: dataType.TIMESTAMP, defaultValue: 'CURRENT_TIMESTAMP' },
    updated_at: { type: dataType.TIMESTAMP, defaultValue: 'CURRENT_TIMESTAMP' },
    email: { type: dataType.CHAR, length: 50, notNull: true }
  })
}

exports.down = async function down(db) {
  await db.dropTable('users')
}

exports._meta = {
  version: 1
}
