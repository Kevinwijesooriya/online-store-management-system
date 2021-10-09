import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom';
import axios from "axios";

function EditProducts() {

    let history = useHistory();
    const{id} = useParams();

    const [product, editProduct] = useState({
        product_name: "",
        model_number: "",
        category: "",
        specifications: "",
        supplier: "",
        quantity: "",
        date: "",
    });

    const {
        product_name,
        model_number,
        category,
        specifications,
        supplier,
        quantity,
        date
    } = product;

    const onInputChange = (e, input_field) => { 
        editProduct({ ...product, [input_field]:  e.target.value });
}

async function onSubmit(e) {
    e.preventDefault();

    await axios.put(`http://localhost:5000/product/update/${id}`, product)
            .then(res => {
                alert("Successfully Updated");
                history.push("/product");
            })
            .catch(err => { alert(err) });

    }

    const loadproduct = async () => {
        const res = await axios.get
            (`http://localhost:5000/product/get/${id}`)
        editProduct(res.data.product)
    };
    useEffect(() => {
        loadproduct();
    }, []);


    return(
        <div className="container">
            <form onSubmit={onSubmit}>
            <h2>Edit Items</h2>&nbsp;
                <div className="form-group">
                    <label for="product_name">Item Name</label>
                    <input type="text" className="form-control" id="product_name" defaultValue={product_name}
                    onChange={e => onInputChange(e, "product_name")}
                    /> 
                </div>

                <div className="form-group">
                    <label for="model_number">Model Number</label>
                    <input type="text" className="form-control" id="model_number" defaultValue={model_number}
                    onChange={e => onInputChange(e, "model_number")}
                    />
                </div>

                <div className="form-group">
                    <label for="category">Category</label>
                    <input type="text" className="form-control" id="category" defaultValue={category}
                    onChange={e => onInputChange(e, "category")}
                    />
                </div>

                <div className="form-group">
                    <label for="specifications">Specifications</label>
                    <input type="text" className="form-control" id="specifications" defaultValue={specifications}
                    onChange={e => onInputChange(e, "specifications")}
                    />
                </div>

                <div className="form-group">
                    <label for="supplier">Supplier</label>
                    <input type="text" className="form-control" id="supplier" defaultValue={supplier}
                    onChange={e => onInputChange(e, "supplier")}
                    />
                </div>

                <div className="form-group">
                    <label for="quantity">Quantity</label>
                    <input type="number" className="form-control" id="quantity" defaultValue={quantity}
                    onChange={e => onInputChange(e, "quantity")}
                    />
                </div>

                <div className="form-group">
                    <label for="date">Date</label>
                    <input type="date" className="form-control" id="date" defaultValue={date}
                    onChange={e => onInputChange(e, "date")}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Update</button>

                </form>
        </div>
    )

}




export default EditProducts;

    