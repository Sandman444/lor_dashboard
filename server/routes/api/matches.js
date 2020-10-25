const express = require('express');
const router = express.Router();
const axios = require('axios');

const { PERSONAL_ID, API_KEY, API_PATH } = require('../../config.json');

//last twenty matches played
let lastMatch = null;

//const Match = require('./models/Match');

// @route    GET api/matches
// @desc     Get all saved matches from database
// @access   Private
router.get('/', async (req, res) => {
  res.send('These are some matches');
});

// @route    POST api/matches
// @desc     Pull current match list from Riot and add
//           any new ranked matches to the database
// @access   Private
router.get('/riot', async (req, res) => {
  try {
    //Fetch last twenty matches from riot's LOR-MATCH-V1 api (arrives as game ids)
    const riotApiOptions = {
      headers: {
        'X-Riot-Token': API_KEY,
      },
    };
    const matchesRiot = await axios.get(
      `${API_PATH}/lor/match/v1/matches/by-puuid/${PERSONAL_ID}/ids`,
      riotApiOptions
    );
    console.log(matchesRiot.status);
    //find new matches 
    let newMatches = [];
    if (!lastMatch) {
      newMatches = matchesRiot.data;
      lastMatch = matchesRiot.data[0];
    } else {
      for (let i = 0; i < matchesRiot.data.length - 1; i++) {
        if (matchesRiot.data[i] === lastMatch) {
          break;
        } else {
          newMatches.push(matchesRiot.data[i]);
        }
      }
    }
    //Fetch match data from LOR-MATCH-V1 for each missing game
    newMatches.forEach(matchId => {
      const matchesRiot = await axios.get(
        `${API_PATH}/lor/match/v1/matches/${matchId}`,
        riotApiOptions
      );
    });
    //add new match data to database
    //send sucess message
    res.send(newMatches);
  } catch (err) {
    res.status(err.response.status).send(err.message);
  }
});

module.exports = router;
