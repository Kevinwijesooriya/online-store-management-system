import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { MdDelete } from "react-icons/md"


function CustomerList() {

    const [searchTerm, setSearchTerm] = useState('');
    const [customer, setCustomer] = useState([]);

    useEffect(() => {
        function getCustomer() {
            axios
                .get("http://localhost:5000/customer/list")
                .then(res => {
                    setCustomer(res.data);
                })
                .catch(err => { alert(err) });
        }
        getCustomer()
    }, []);

    function Delete(id) {
        axios.delete(`http://localhost:5000/customer/${id}`).then((res) => {
            alert("Customer removed SuccessFully")
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

    
    const filteredCountrise = customer.filter(std=>{

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
<h1>Registered Customers</h1></center>
                <table className="table table-bordered border-primary"  >
             
                          
                
                

      
                <tbody>

                

{filteredCountrise.map((customer, index) => (
    <tr key={index}>
   
      <div  className="col-6 col-md-4" className="rounded float-start">
        <img src={customer.pic} width="150" height="250" />
</div>
       
     <center>
  <h3>{customer.name}</h3><br></br>
  <div >E-mail:{customer.email}</div><br></br>
  <div>Phone number:{customer.phone}</div><br></br>
  <div>Gender:{customer.gender}</div><br></br>
  <div>Login Type:{customer.loginType}</div><br></br>
     
  <a href="/CustomerList" className="btn btn-danger" onClick={() => Delete(customer._id)} >
                                        <MdDelete />Delete
                                    </a>
       
 
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
export default CustomerList;