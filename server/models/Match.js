const mongoose = require('mongoose');

const MatchSchema = new mongoose.Schema({
  metadata: {
    data_version: {
      type: String,
      required: true,
    },
    match_id: {
      type: String,
      required: true,
    },
    participants: [
      {
        type: String,
        required: true,
      },
    ],
  },
  info: {
    game_mode: {
      type: String,
      required: true,
    },
    game_type: {
      type: String,
      required: true,
    },
    game_start_time_utc: {
      type: String,
      required: true,
    },
    game_version: {
      type: String,
      required: true,
    },
    players: [
      {
        puuid: {
          type: String,
          required: true,
        },
        deck_id: {
          type: String,
          required: true,
        },
        deck_code: {
          type: String,
          required: true,
        },
        factions: [
          {
            type: String,
            required: true,
          },
        ],
        game_outcome: {
          type: String,
          required: true,
        },
        order_of_play: {
          type: Number,
          required: true,
        },
      },
    ],
    total_turn_count: {
      type: Number,
      required: true,
    },
  },
});

module.exports = Match = mongoose.model('match', MatchSchema);
