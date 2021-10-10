import React, { useRef } from 'react'

import { useReactToPrint } from 'react-to-print';

import {Itemreportclass} from '../Reports/Itemreportclass';



const Itemreport = () => {

    const componentRef = useRef();

    const handlePrint = useReactToPrint({

        content: () => componentRef.current,

    });

    return (

        <div>          

            <Itemreportclass ref={componentRef} />

            <button onClick={handlePrint}>Print this out!</button>

        </div>

    )

}

export default Itemreport;