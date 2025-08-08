require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER || 'quickbite_user',
    password: process.env.DB_PASSWORD || 'quickbite_pass',
    database: process.env.DB_NAME || 'quickbite_dev',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
  },
  test: {
    // same structure
  },
  production: {
    // same structure
  },
};
