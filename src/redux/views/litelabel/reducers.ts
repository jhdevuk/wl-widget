import { combineReducers } from 'redux';
import { reducer as home } from './home/reducers';
import { reducer as merchant } from './merchant/reducers';


/* -----------------------------------
 *
 * API Reducer
 *
 * -------------------------------- */

const reducer = combineReducers({

   home,
   merchant

});


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { reducer };