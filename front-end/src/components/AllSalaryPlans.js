import React, { useState ,useEffect} from "react";
import axios from 'axios';


function AllSalaryPlans() {
  
    const [salaryplans, setSalaryplans] = useState([]);

    useEffect(() => {
        function getSalaryplans() {
            axios
                .get("http://localhost:5000/salaryplan/")
                .then(res => {
                    setSalaryplans(res.data);
                })
                .catch(err => { alert(err) });
        }
        getSalaryplans();
        
    }, []); 
    const [id,onDelete,getSalaryplans] = useState([]);

    
    useEffect(() => {
        function onDelete(id) {
        axios.delete(`http://localhost:5000/salaryplan/delete/${id}`).then((res) => {
            alert("Salary plan Details Delete SuccessFully")
            getSalaryplans();
        }).catch(err => { alert(err) });
        
    }  onDelete(id);
    }, []);

    

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



    
        return (<div className="container" >
            <table className="table table-bordered border-primary">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Role Name</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Date</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {salaryplans.map((salaryplan, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{salaryplan.role_name}</td>
                            <td>{salaryplan.salary}</td>
                            <td>{salaryplan.date}</td>
                            <td>
                                <a type="button" className="btn btn-success" href={`/salaryplan/update/${salaryplan._id}`}>
                                    Edit
                                </a>
                                <a type="button" className="btn btn-success" onClick={()=>onDelete(salaryplan._id)} >
                                    Delete
                                </a>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>

            <br /><br /><br />
        </div>);
    
                    }
export default  AllSalaryPlans;