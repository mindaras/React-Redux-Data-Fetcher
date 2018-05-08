import { FETCH_DATA } from '../actions/types';

export default function totalItemsReducer(state = 0, action) {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload.totalItems;
    default:
      return state;
  }
}
