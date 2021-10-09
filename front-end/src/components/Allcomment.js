import React, {useStae,useEffect, useState} from "react";
import axios from "axios";
import Reactstars from "react-rating-stars-component";
import {Link} from 'react-router-dom';

export default function Allcomment(props){
    const [searchTerm, setSearchTerm] = useState('');
    const[rating,setrating]=useState([]);
    // const[gotrating,setgotrating]=useState([]);
    const item_name="Apple Iphone 12";
    console.log(props.itemname);
    useEffect(()=>{
        // getrating();
        gotrating();
    },[]);
    // function getrating(){
    //     axios.get(`http://localhost:8050/Feedback/`).then((res)=>{
    //         //  console.log(res);
    //          setrating(res.data);
    //     }).catch((err)=>{
    //         alert(err.massage);
    //     })
    // }

    function gotrating(){
        axios.get(`http://localhost:5000/Feedback/got/${props.itemname}`).then((res)=>{
            //  console.log(res);
             setrating(res.data);
        }).catch((err)=>{
            alert(err.massage);
        })
    }

   console.log(rating);
     
    function Delete(id) {
      axios.delete(`http://localhost:5000/Feedback/delete/${id}`).then((res) => {
          alert("Salary plan Details Delete SuccessFully")
      }).catch(err => { alert(err) });
  }
//   const filteredCountrise = rating.filter(rtd=>{
//     return (rtd.custom_name.toLowerCase().includes(searchTerm.toLocaleLowerCase())||
//     rtd.comment.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
            
//  }) 
 

    
    return(

     <div >
{/*          
         <h1>All commints</h1>  */}
            {/* <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav> */}
    <div className='container'>

            {rating.map((rtd) => (
                <div>
                    {/* <p>{rtd._id}</p>
                    <p>{rtd.item_name}</p> */}
                        <p><Reactstars size={30} value={`${rtd.rate}`} edit={false} /></p>
                        <p>{rtd.comment}</p>
                    <p>{rtd.date_ob.substring(0,10)} &nbsp; {rtd.date_ob.substring(11,19)}</p>

                    
                </div>


            ))}
              
        
              </div>

{/* <table  className="table table-success table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">ID Number</th>
      <th scope="col">Name</th>
      <th scope="col">Rate</th>
      <th scope="col">Commit</th>
      <th scope="col">Date</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
   {filteredCountrise.map((rtd,index) =>(
                   
        <tr key={index}>
             <th scope="row">{index+1}</th>
             <td>{rtd._id}</td>
             <td>{rtd.custom_name}</td>
             <td>{rtd.rate}</td>
             <td>{rtd.comment}</td>
             <td>{rtd.date_ob}</td>
             <td>
             <a className="btn btn-warning" href={`/editR/${rtd._id}`}>edit</a> &nbsp;
             <a className="btn btn-danger" href="/Rall"onClick={() => Delete(rtd._id)}>delete</a>  
            </td>      
        </tr>
                   


              ))}
  </tbody>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{std._id}</td>
      <td>{std.name}</td>
      <td>{std.age}</td>
      <td>{std.gender}</td>
      <td>{std.date_ob}</td>
    </tr>
  </tbody>
</table> */}


     </div>


    )
}