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
                    <th scope="col"></th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {Cart.map((cart, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{cart.customerID}</td>
                        <td>{cart.productID[0]} , {cart.productID[1]} ....</td>
                        <td>{cart.price}</td>
                        <td>{cart.quantity}</td>
                        <td>
                            {/* <Link className="btn btn-success" to={"/cart/update/" + cart._id}>Edit</Link> */}

                            <button className="btn btn-success" onClick={() => onDelete(cart._id)} >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <br /><br /><br />
    </div>);

}
export default AllCart;