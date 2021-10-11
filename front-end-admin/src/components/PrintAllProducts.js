import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function AllProducts() {
  const[product, setProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    function getProduct() {
      axios
        .get("http://localhost:5000/product/")
        .then(res => {
          setProduct(res.data);
        })
        .catch(err => {alert(err)});
    }
    getProduct();
  },[]);

  function Delete(id) {
    axios.delete(`http://localhost:5000/product/delete/${id}`).then((res) => {
      alert("Product Details Deleted")
    }).catch(err => {alert(err)});
  }

  const filteredCountrise = product.filter(std => {
    return (std.product_name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        std.model_number.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        std.category.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        std.date.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        std.supplier.toLowerCase().includes(searchTerm.toLocaleLowerCase()))

})

  return (<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white" >
  <div className="rounded-t mb-0 px-4 py-3 border-0">

      <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">New Stock Report</h6>
              <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
                  <div className="relative flex w-full flex-wrap items-stretch">
                      <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                          <i className="fas fa-search"></i>
                      </span>
                      <input
                          onChange={e => setSearchTerm(e.target.value)}
                          type="text"
                          placeholder="Search here..."
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                      />
                  </div>
              </form>              
          </div>
      </div>

      <div className="block w-full overflow-x-auto">

      <table className="items-center w-full bg-transparent border-collapse">

                            <thead className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                <tr>
                                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                                        scope="col">#</th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                     scope="col">Item Name</th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                     scope="col">Model Number</th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                     scope="col">Category</th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                     scope="col">Specifications</th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                     scope="col">Supplier</th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                     scope="col">Quantity</th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                     scope="col">Date</th>
                </tr>
            </thead>
            <tbody>
                {filteredCountrise.map((product, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" >{product.product_name}</td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" >{product.model_number}</td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" >{product.category}</td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" >{product.specifications}</td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" >{product.supplier}</td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" >{product.quantity}</td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" >{product.date.substring(0, 10)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <br /><br />
      </div>
      </div>
      </div>
      );
}

export default AllProducts;