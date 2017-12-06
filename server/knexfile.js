// Update with your config settings.
const env = require('dotenv').load();

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/ar-images'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};
