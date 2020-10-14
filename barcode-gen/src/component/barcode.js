import React from 'react';
import Barcode from 'react-barcode';

function barcode_gen(number) {

    return (
      <div>
        <Barcode value={[number]} download="barcode"/>
      </div>
    );
  }

const Barcode_app = () => {

    return (
        barcode_gen(100)
    );
};

export default Barcode_app;