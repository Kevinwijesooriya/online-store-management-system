import React, { useRef } from 'react'

import { useReactToPrint } from 'react-to-print';

import {StockReportClass} from '../Reports/StockReportClass';



const StockReport = () => {

    const componentRef = useRef();

    const handlePrint = useReactToPrint({

        content: () => componentRef.current,

    });

    return (

        <div>          

            <StockReportClass ref={componentRef} />

            <button className="btn btn-secondary btn-sm" onClick={handlePrint}>Print this out!</button>

        </div>

    )

}

export default StockReport;