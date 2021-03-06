import { combineReducers } from 'redux';
import { reducer as account } from './account';
import { reducer as offers } from './offers';


/* -----------------------------------
 *
 * API Reducer
 *
 * -------------------------------- */

const reducer = combineReducers({

   account,
   offers

});


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { reducer };