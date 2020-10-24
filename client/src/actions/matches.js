import axios from 'axios';

import { GET_MATCHES, RIOT_API_CONNECTION_ERR } from './types';
import config from '../config.json';

const { API_PATH, PERSONAL_ID, API_KEY } = config;
//Get match id's from Riot API-> LOR-MATCH-V1
export const getMatches = () => async (dispatch) => {
  console.log('getting matches');
  //   try {
  //     const res = await axios.get(
  //       `${API_PATH}/lor/match/v1/matches/by-puuid/${PERSONAL_ID}/ids}`
  //     );

  //     console.log(res.data);

  //     dispatch({
  //       type: GET_MATCHES,
  //       payload: res.data,
  //     });
  //   } catch (err) {
  //     dispatch({
  //       type: RIOT_API_CONNECTION_ERR,
  //       payload: { msg: err.response.statusText, status: err.response.status },
  //     });
  //   }
};
