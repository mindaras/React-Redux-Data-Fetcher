import { FETCH_DATA } from '../actions/types';

export default function itemsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload.payload;
    default:
      return state;
  }
}
