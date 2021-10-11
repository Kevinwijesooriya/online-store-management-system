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
                    trigger={() =>
                        <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
                            Print this out!
                        </button>}
                    content={() => componentRef.current}
                />
            </div>

        </div>


    )
}