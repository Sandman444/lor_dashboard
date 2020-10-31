const { default: Axios } = require('axios');
const express = require('express');
const router = express.Router();
const axios = require('axios');

const { PERSONAL_ID, API_KEY, API_PATH } = require('../../config.json');
//const Match = require('./models/Match');
const {
  fetchMatches,
  fetchMatch,
  fetchRankedMatch,
} = require('../../riotApi/lor-match');
const Match = require('../../models/Match');
const Info = require('../../models/Info');

//last twenty matches played
let lastMatch = null; //need to pull last match from database

// @route    GET api/matches
// @desc     Get all saved matches from database
// @access   Private
router.get('/', async (req, res) => {
  await fetchMatches()
    .then((matches) => res.send(matches.data))
    .catch((err) => res.status(500).send(err.message));
});

// @route    PUT api/matches/riot
// @desc     Pull current match list from Riot and add
//           any new ranked matches to the database
// @access   Private
router.put('/riot', async (req, res) => {
  //Get the last match id if not stored in server
  if (!lastMatch) {
    const info = await Info.find({});
    lastMatch = info[0].lastMatch;
  }
  //Fetch matches from Riot
  await fetchMatches()
    .then(async ({ data }) => {
      //Find new matches
      const newMatches = [];
      for (let i = 0; i < 20; i++) {
        if (data[i] === lastMatch) {
          //Update Info object with new lastMatch
          if (i > 0) {
            const info = await Info.find({});
            info[0].lastMatch = data[0];
            info[0].save();
          }
          break;
        } else {
          //get match data
          await fetchMatch(data[i])
            .then(({ data }) => {
              //Save match to db if ranked
              if (data.info.game_type === 'Ranked') {
                newMatches.push(data);
                const newMatch = new Match(match.data);
                newMatch.save();
              }
            })
            .catch((err) => res.status(500).send(err.message));
        }
      }
      res.json(newMatches);
      //Need to figure out how rate limiting work incase there are more than 20 new matches
    })
    .catch((err) => res.status(500).send(err.message));
});

// @route    POST api/matches/:match_id/ranked
// @desc     Post
// @access   Private
router.get('/:match_id/ranked', async (req, res) => {
  //check if ranked match
  await fetchMatch(req.params.match_id)
    .then(async ({ data }) => {
      if (data.info.game_mode === 'Ranked') {
        const match = new Match(data);
        await match.save();
        res.json(match);
      }
      res.send('not ranked');
    })
    .catch((err) => res.status(500).send(err.message));
});

module.exports = router;
