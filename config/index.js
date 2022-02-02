const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  serviceName: process.env.SERVER_NAME,
  urlDb: process.env.MONGO_URL,
};
