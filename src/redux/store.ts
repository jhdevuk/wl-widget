import { Dispatch, Middleware, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { IAccount } from './api/account';
import { reducers } from './reducers';
import { IOffers } from './api/offers';


/* -----------------------------------
 *
 * IState
 *
 * -------------------------------- */

export interface IStore {
   dispatch?: Dispatch<any, any>;
   api: {
      account: IAccount;
      offers: IOffers;
   };
   views: {
      litelabel: {
         home: {
            topoffers: IOffers;
         };
         merchant: {
            offers: IOffers;
         }
      };
   };
}


/* -----------------------------------
 *
 * Initialise
 *
 * -------------------------------- */

function store(state?: any) {

   const list: Middleware[] = [
      thunk
   ];

   const create = compose(
      applyMiddleware(...list),
      (f: any) => f
   )(createStore);

   return create(reducers, state);

}


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { store as createStore };

