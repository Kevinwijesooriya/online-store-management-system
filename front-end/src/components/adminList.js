import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { MdDelete } from "react-icons/md"


function  AdminList() {

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
            alert("Salary plan Details Delete SuccessFully")
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


    return (<div className="App" >
        <nav class="navbar navbar-light bg-light">

            <div class="container-fluid">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"

                    onChange={e => setSearchTerm(e.target.value)}

                />

            </div>

        </nav>

        <div className="content">
            
            <div className="container" >
            <center>
<h1>Registered Admins</h1></center>

                <table className="table table-bordered border-primary"  >
        
  
  

           
                    <tbody>

                

                        {filteredCountrise.map((admin, index) => (
                            <tr key={index}>
                           
                              <div className="col-6 col-md-4" className="rounded float-start">
                                <img src={admin.pic} width="150" height="250"  />
                               </div>
                               
                             <center>
                          <h3>{admin.name}</h3><br></br>
                          <div>E-mail:{admin.email}</div><br></br>
                          <div>Phone number:{admin.phone}</div><br></br>
                          <div>Gender:{admin.gender}</div><br></br>
                          <div>Login Type:{admin.loginType}</div><br></br>
                             

                          
                        <div >
                                    <Link className="btn btn-success" to={"/UpdateAdmin/" + admin._id}>Edit</Link>
                                    <a href="/AdminList" className="btn btn-danger" onClick={() => Delete(admin._id)} >
                                        <MdDelete />Delete
                                    </a>
                                    
                              </div>      
                                    </center>
                                
                                    
                             
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br /><br /><br />
            </div>
        </div>
    </div>
    );

}
export default AdminList;