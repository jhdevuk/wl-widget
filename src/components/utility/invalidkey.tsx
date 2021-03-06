import Preact, { Component } from 'preact';


/* -----------------------------------
 *
 * Style
 *
 * -------------------------------- */

const style = require('./_scss/invalidkey');


/* -----------------------------------
 *
 * InvalidKey
 *
 * -------------------------------- */

const InvalidKey = () => {

   return (
      <div className={style.wrapper}>
         Invalid API Key
      </div>
   );

};


/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { InvalidKey };