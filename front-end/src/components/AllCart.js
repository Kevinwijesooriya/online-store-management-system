import React, { useState, useEffect } from "react";
import axios from 'axios';


function AllCart() {

    const [Cart, setCart] = useState([]);

    useEffect(() => {
        function getCart() {
            axios
                .get("http://localhost:5000/cart/")
                .then(res => {
                    setCart(res.data);
                })
                .catch(err => { alert(err) });
        }
        getCart();
    }, []);

    function onDelete(id) {
        axios.delete(`http://localhost:5000/cart/delete/${id}`).then((res) => {
            alert("Cart Details Deleted SuccessFully")
        }).catch(err => { alert(err) });
    }

    // filterData(cart,searchkey){
    //   const result = cart.filter((cart) =>
    //  cart.firstName.toLowerCase().includes(searchkey)||
    //  cart.lastName.toLowerCase().includes(searchkey)
    //   )
    //   this.setState({cart:result})
    // }

    // handleSearchArea=(e)=>{
    //   const searchkey = e.currentTarget.value;

    //   axios.get("http://localhost:5000/cart").then(res =>{
    //     if(res.data.success){
    //       this.filterData(res.data.existingcart,searchkey)
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
                {Cart.map((cart, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{cart.role_name}</td>
                        <td>{cart.salary}</td>
                        <td>{cart.date}</td>
                        <td>
                            <a type="button" className="btn btn-success" href={`/cart/update/${cart._id}`}>
                                Edit
                            </a>
                            <a type="button" className="btn btn-success" onClick={() => onDelete(cart._id)} >
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
export default AllCart;