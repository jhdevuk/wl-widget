import Preact, { Component } from 'preact';
import { Link } from 'preact-router';
import { connect } from 'preact-redux';
import { Dispatch } from 'redux';
import { IStore } from '../../../redux/store';
import * as utils from '../../../utility';
import { data } from '../../../data/default/litelabel';


/* -----------------------------------
 *
 * Style
 *
 * -------------------------------- */

const style = require('./_scss/home');


/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
   dispatch?: Dispatch<any, any>;
}


/* -----------------------------------
 *
 * Containers
 *
 * -------------------------------- */

import { TopOffers } from './containers/home';


/* -----------------------------------
 *
 * Connect
 *
 * -------------------------------- */

@(connect(
   (state: IStore) => ({
      dispatch: state.dispatch
   })
) as any)


/* -----------------------------------
 *
 * Home
 *
 * -------------------------------- */

class Home extends Component<IProps, {}> {


   public componentDidMount() {

      const { dispatch } = this.props;

      const list = data.home();

      list.map(
         (a) => dispatch(a)
      );

   }


   public render() {

      return (
         <div className={style.container}>
            <h1 className={style.title}>
               Lite Label: Home
            </h1>
            <Link href="/asos-vouchers">Asos</Link>
            <div className={style.topoffers}>
               <h2>Top Offers</h2>
               <TopOffers />
            </div>
         </div>
      );

   }


}


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Home };