import React from "react";
import { Link } from 'react-router-dom';

function AdminMain() {




  return (
    <div className="justify-center flex flex-wrap relative">
      <div className="my-4 w-full lg:w-6/12 px-4">
        <a
          href="/admin/AdminRegister"
        >
          <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
          <i class="fas fa-fingerprint shadow-md rounded-full max-w-full w-16 mx-auto p-5 bg-white"></i>
            <p className="text-lg text-white mt-4 font-semibold">
              Authentication Management
            </p>
          </div>
        </a>
        <a
          href="/admin/salaryplan"

        >
          <div className="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8">
          <i class="fas fa-landmark shadow-md rounded-full max-w-full w-16 mx-auto p-5 bg-white"></i>
            <p className="text-lg text-white mt-4 font-semibold">
              Finance Management
            </p>
          </div>
        </a>
        <a
          href="/admin/stock"
        >
          <div className="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8">
          <i class="fas fa-layer-group shadow-md rounded-full max-w-full w-16 mx-auto p-5 bg-white"></i>
            <p className="text-lg text-white mt-4 font-semibold">
              Stock Management
            </p>
          </div>
        </a>
        <a
          href="/admin/allinquiry"
        >
          <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8 mt-8">
          <i class="fas fa-exclamation-circle shadow-md rounded-full max-w-full w-16 mx-auto p-5 bg-white"></i>
            <p className="text-lg text-white mt-4 font-semibold">
              Inquiry Management
            </p>
          </div>
        </a>
        <a
          href="/admin/adminfeedback"

        >
          <div className="bg-teal-500 shadow-lg rounded-lg text-center p-8 mt-8">
          <i class="fas fa-bug shadow-md rounded-full max-w-full w-16 mx-auto p-5 bg-white"></i>
            <p className="text-lg text-white mt-4 font-semibold">
              Feedback Management
            </p>
          </div>
        </a>
      </div>
      <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
        <a
          href="/admin/mainitem"
        >
          <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
            <i class="fas fa-cubes shadow-md rounded-full max-w-full w-16 mx-auto p-5 bg-white"></i>
            <p className="text-lg text-white mt-4 font-semibold">
              Product Management
            </p>
          </div>
        </a>
        <a
          href="/admin/Issuedcarts"
        >
          <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
          <i class="fas fa-shopping-cart shadow-md rounded-full max-w-full w-16 mx-auto p-5 bg-white"></i>
            <p className="text-lg text-white mt-4 font-semibold">
              Cart Management
            </p>
          </div>
        </a>
        <a
          href="/admin/order"
        >
          <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
          <i class="fas fa-hand-holding-usd shadow-md rounded-full max-w-full w-16 mx-auto p-5 bg-white"></i>
            <p className="text-lg text-white mt-4 font-semibold">
              Order Management
            </p>
          </div>
        </a>
        <a
          href="/admin/courier"
        >
          <div className="bg-red-600 shadow-lg rounded-lg text-center p-8 mt-8">
          <i class="fas fa-truck shadow-md rounded-full max-w-full w-16 mx-auto p-5 bg-white"></i>
            <p className="text-lg text-white mt-4 font-semibold">
              Delivery Management
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}
export default AdminMain;