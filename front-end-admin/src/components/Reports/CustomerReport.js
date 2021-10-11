import React, { useRef } from 'react'

import { useReactToPrint } from 'react-to-print';

import {CustomerClass} from './CustomerReportClass';



const CustomerReport = () => {

    const componentRef = useRef();

    const handlePrint = useReactToPrint({

        content: () => componentRef.current,

    });

    return (

        <div>          

            <CustomerClass ref={componentRef} />

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"onClick={handlePrint}>Print this out!</button>

        </div>

    )

}

export default CustomerReport;