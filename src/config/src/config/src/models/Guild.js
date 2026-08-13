const mongoose = require('mongoose');

const guildSchema = new mongoose.Schema({
    guildId: { type: String, required: true, unique: true },
    prefix: { type: String, default: '!' },
    premium: {
        enabled: { type: Boolean, default: false },
        tier: { type: String, default: 'free' },
        expiresAt: Date
    },
    antinuke: {
        enabled: { type: Boolean, default: false },
        logChannelId: String,
        whitelistedUsers: [String],
        whitelistedRoles: [String],
        limits: {
            channelDelete: { limit: { type: Number, default: 3 }, interval: { type: Number, default: 10 }, action: { type: String, default: 'ban' } },
            ban: { limit: { type: Number, default: 3 }, interval: { type: Number, default: 10 }, action: { type: String, default: 'ban' } },
            kick: { limit: { type: Number, default: 5 }, interval: { type: Number, default: 10 }, action: { type: String, default: 'strip' } }
        }
    },
    automod: { enabled: { type: Boolean, default: false } },
    logging: { enabled: { type: Boolean, default: false }, channelId: String },
    jail: { enabled: { type: Boolean, default: false }, roleId: String, channelId: String }
});

module.exports = mongoose.model('Guild', guildSchema);
