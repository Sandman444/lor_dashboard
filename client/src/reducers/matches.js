import { GET_MATCHES, RIOT_API_CONNECTION_ERR } from '../actions/types';

const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_MATCHES:
      return [...state, payload];
    case RIOT_API_CONNECTION_ERR:
    default:
      return state;
  }
}
