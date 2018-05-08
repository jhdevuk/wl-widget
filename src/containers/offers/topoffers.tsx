import Preact, { Component } from 'preact';
import { Dispatch } from 'redux';
import { IOffers } from '../../redux/api/offers';


/* -----------------------------------
 *
 * Style
 *
 * -------------------------------- */

const style = require('./scss/topoffers');


/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
   dispatch?: Dispatch<any, any>;
   offers?: IOffers;
}


/* -----------------------------------
 *
 * Components
 *
 * -------------------------------- */

import { Loading } from '../../components/utility';


/* -----------------------------------
 *
 * TopOffers
 *
 * -------------------------------- */

class TopOffers extends Component<IProps, {}> {


   public props: IProps;


   public render() {

      const { offers } = this.props;

      return (
         <div className={style.wrapper}>
            <h2 className={style.title}>
               Top Offers
            </h2>
            <Loading
               active={offers.loading}
            >
               <div>
                  LOADED
               </div>
            </Loading>
         </div>
      );

   }


}


/* -----------------------------------
 *
 * TopOffers
 *
 * -------------------------------- */

export { TopOffers };