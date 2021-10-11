import React, { useRef } from 'react'

import { useReactToPrint } from 'react-to-print';

import {DeliveryReportClass} from './DeliveryReportClass';



const DeliveryReport = () => {

    const componentRef = useRef();

    const handlePrint = useReactToPrint({

        content: () => componentRef.current,

    });

    return (

        <div>          

            <DeliveryReportClass ref={componentRef} />

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button className="btn btn-secondary btn-sm" onClick={handlePrint}>Print this out!</button>

        </div>

    )

}

export default DeliveryReport;