import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default class dl_barcode extends React.Component {

  printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.save("barcode.pdf");
      }
    );
  }

  render() {
    return (
    <div>
      <div>
        <button onClick={this.printDocument}>Print</button>
      </div>
    </div>
    );
  }
}