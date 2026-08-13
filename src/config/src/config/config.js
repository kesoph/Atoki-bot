require('dotenv').config();

module.exports = {
    TOKEN: process.env.TOKEN,
    MONGO_URI: process.env.MONGO_URI,
    OWNER_IDS: (process.env.OWNER_IDS || '').split(',').map(id => id.trim()),
    BOT_INVITE_URL: process.env.BOT_INVITE_URL,
    SUPPORT_SERVER_URL: process.env.SUPPORT_SERVER_URL,
    DEFAULT_PREFIX: process.env.DEFAULT_PREFIX || '!',
    BOT_VERSION: process.env.BOT_VERSION || '1.0.0'
};
