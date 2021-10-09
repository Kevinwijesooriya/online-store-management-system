import React, { useRef } from "react";
import ReactToPrint from 'react-to-print';
import { InquiryreportClass } from './InquiryreportClass'

export default function Inquiryreport() {
    const componentRef = useRef();




    return (

        <div >
            <div>
                <InquiryreportClass ref={componentRef} />
            </div>
            <div>
                <ReactToPrint
                    trigger={() => <button className='btn btn-secondary btn-sm'>Print this out!</button>}
                    content={() => componentRef.current}
                />
            </div>

        </div>


    )
}