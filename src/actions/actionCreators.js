import { FETCH_DATA } from './types';
import axios from 'axios';

export function fetchData() {
  return function(dispatch) {
    axios.get('./response.json')
      .then(response => dispatch({type: FETCH_DATA, payload: response.data}));
  };
}
