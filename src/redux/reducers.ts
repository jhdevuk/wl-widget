import { combineReducers } from 'redux';
import { reducer as api } from './api/reducers';


/* -----------------------------------
 *
 * Reducers
 *
 * -------------------------------- */

const reducers = combineReducers({

   api

});


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { reducers };