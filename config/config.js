require('dotenv').config()

let CONFIG = {}

CONFIG.app = process.env.APP || 'development'
CONFIG.port = process.env.POST || '3005'

CONFIG.db_dialect = process.env.DB_DIALECT || 'mongo'
CONFIG.db_host = process.env.DB_HOST || 'localhost'
CONFIG.db_posrt = process.env.DB_PORT || '27017'
CONFIG.db_name = process.env.DB_NAME || 'name'
CONFIG.db_user = process.env.DB_USER || 'root'
CONFIG.db_user = process.env.DB_PASSWORD || 'password'

CONFIG.jwt_encryption = process.env.JWT_ENCRYPTION || 'jwt_please_change'
CONFIG.jwt_expiration = process.env.JWT_EXPIRATION || '1000'

module.exports = CONFIG
