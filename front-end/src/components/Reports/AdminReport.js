import React, { useRef } from 'react'

import { useReactToPrint } from 'react-to-print';

import {AdminClassRepots} from './AdminClassRepots';



const AdminReport = () => {

    const componentRef = useRef();

    const handlePrint = useReactToPrint({

        content: () => componentRef.current,

    });

    return (

        <div>          

            <AdminClassRepots ref={componentRef} />

            <button onClick={handlePrint}>Print this out!</button>

        </div>

    )

}

export default AdminReport;