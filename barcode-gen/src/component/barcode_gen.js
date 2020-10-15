import React from 'react';
import Barcodedl from './dl_barcode'
import Barcode from 'react-barcode';

function barcode_gen(number) {
  return (
    <div>
      <Barcodedl/>
      <div id="divToPrint">
        <Barcode value={[number]}/>
      </div>
    </div>
  );
}

export default barcode_gen;