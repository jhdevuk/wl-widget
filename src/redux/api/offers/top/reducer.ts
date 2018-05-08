import update from 'immutability-helper';
import { IAction } from './model';
import { TopOffers } from './state';
import { Action } from './model';


/* -----------------------------------
 *
 * Top
 *
 * -------------------------------- */

function reducer(state = TopOffers, action: IAction) {


   switch (action.type) {


      case Action.Request: {

         const { data } = action.payload;

         return {...state, ...data};

      }


      default: {

         return state;

      }


   }


}


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { reducer };