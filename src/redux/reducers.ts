import { combineReducers } from 'redux';
import { reducer as api } from './api/reducers';
import { reducer as views } from './views/reducers';


/* -----------------------------------
 *
 * Reducers
 *
 * -------------------------------- */

const reducers = combineReducers({

   api,
   views

});


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { reducers };