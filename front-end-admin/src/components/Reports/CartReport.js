import React, { useRef } from 'react'

import { useReactToPrint } from 'react-to-print';

import {CartReportClass} from '../Reports/CartReportClass';



const CartReport = () => {

    const componentRef = useRef();

    const handlePrint = useReactToPrint({

        content: () => componentRef.current,

    });

    return (
        
        <div>          
            
            <CartReportClass ref={componentRef} />

            &nbsp;&nbsp;<button className="btn btn-secondary btn-sm" onClick={handlePrint} >Print this out!</button>

        </div>
    
    )

}

export default CartReport;