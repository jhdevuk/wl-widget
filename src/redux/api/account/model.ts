

/* -----------------------------------
 *
 * Methods
 *
 * -------------------------------- */

export const SET: string = 'api/account/SET';


/* -----------------------------------
 *
 * IAction
 *
 * -------------------------------- */

export interface IAction {
   type: string;
   payload?: {
      data?: any;
      message?: any;
   };
}