import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import totalItemsReducer from './totalItemsReducer';

const rootReducer = combineReducers({
  items: itemsReducer,
  totalItems: totalItemsReducer
});

export default rootReducer;
