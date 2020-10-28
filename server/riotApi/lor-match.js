const axios = require('axios');

const { PERSONAL_ID, API_KEY, API_PATH } = require('../config.json');

const riotApiOptions = {
  headers: {
    'X-Riot-Token': API_KEY,
  },
};

const fetchMatches = () => {
  return axios.get(
    `${API_PATH}/lor/match/v1/matches/by-puuid/${PERSONAL_ID}/ids`,
    riotApiOptions
  );
};

const fetchMatch = (matchId) => {
  return axios.get(`/lor/match/v1/matches/${matchId}`, riotApiOptions);
};

module.exports = { fetchMatches, fetchMatch };
