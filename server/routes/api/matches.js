const express = require('express');
const router = express.Router();
const axios = require('axios');

const { PERSONAL_ID, API_KEY, API_PATH } = require('../../config.json');
//const Match = require('./models/Match');
const { fetchMatches } = require('../../riotApi/lor-match');

//last twenty matches played
let lastMatch = null;

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
  //Fetch matches from Riot
  fetchMatches()
    .then((matches) => {
      if (!lastMatch) {
        lastMatch = matches.data[0];
      } else {
        res.send(matches.data);
      }
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });

  //find new matches
  /*let newMatches = [];
    if (!lastMatch) {
      newMatches = matchesRiot.data;
      lastMatch = matchesRiot.data[0];
    } else {
      for (let i = 0; i < matchesRiot.data.length - 1; i++) {
        if (matchesRiot.data[i] === lastMatch) {
          lastMatch = matchesRiot[0];
          break;
        } else {
          //Fetch match data from LOR-MATCH-V1 for each missing game
          const matchesRiot = await axios.get(
            `${API_PATH}/lor/match/v1/matches/by-puuid/${PERSONAL_ID}/ids`,
            riotApiOptions
          );
          newMatches.push(matchesRiot.data[i]);
        }
      }
    }
    console.log(newMatches);*/

  //send sucess message
});

module.exports = router;
