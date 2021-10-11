import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { MdDelete } from "react-icons/md"


function AdminReportcomponent() {

    const [searchTerm, setSearchTerm] = useState('');

    const [admin, setAdmin] = useState([]);

    useEffect(() => {
        function getAdmin() {
            axios
                .get("http://localhost:5000/admin/list")
                .then(res => {
                    setAdmin(res.data);
                })
                .catch(err => { alert(err) });
        }
        getAdmin()
    }, []);

    function Delete(id) {
        axios.delete(`http://localhost:5000/admin/${id}`).then((res) => {
            alert("Admin hs been removed SuccessFully")
        }).catch(err => { alert(err) });
    }

    // filterData(salaryplan,searchkey){
    //   const result = salaryplan.filter((salaryplan) =>
    //  salaryplan.firstName.toLowerCase().includes(searchkey)||
    //  salaryplan.lastName.toLowerCase().includes(searchkey)
    //   )
    //   this.setState({salaryplan:result})
    // }

    // handleSearchArea=(e)=>{
    //   const searchkey = e.currentTarget.value;

    //   axios.get("http://localhost:5000/salaryplan").then(res =>{
    //     if(res.data.success){
    //       this.filterData(res.data.existingsalaryplan,searchkey)
    //     }
    //   });
    // }

    const filteredCountrise = admin.filter(std=>{

        return (std.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())||

        std.gender.toLowerCase().includes(searchTerm.toLocaleLowerCase()))

                

     })

 
     return(
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white" >
        <div className="rounded-t mb-0 px-4 py-3 border-0">

            <div className="rounded-t bg-white mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                    <h6 className="text-blueGray-700 text-xl font-bold">Admin Information</h6>
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
            {filteredCountrise.map( admin =>
            <div>
              
                

              <div class="container">
                 
                <div class="row">
                <div class="col-12">

                <table class="table table-image">
                <thead>
                <td>
                <th scope="col" width="450"><img  src={admin.pic}  alt="" width="350" height="250" /></th>
                <th scope="col" width="600"><h2 className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 ">{admin.name}</h2>
                <p className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                    >{admin.email}</p>
                <p className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                    >{admin.phone}</p>
                <p className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                    >{admin.gender}</p>
                 <p className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                    >{admin.loginType}</p>
               <br/>
                
                </th>
                </td>
                
                </thead>
                </table>  
                </div>
                </div>
                </div>
                </div>
           

                )}
        </div>
        </div>
                
        </div>
        
    )

}
export default AdminReportcomponent;