import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom';
import axios from "axios";

function EditIssueItem() {
    let history = useHistory();
    const{id} = useParams();

    const [issueitem, editIssueItem] = useState({
        product_name: "",
        model_number: "",
        issue_by: "",
        quantity: "",
        date: "",

    });

    const {
        product_name,
        model_number,
        issue_by,
        quantity,
        date
    } = issueitem;

    const onInputChange = (e, input_field) => {
        editIssueItem({ ...issueitem, [input_field]: e.target.value});
    }

    async function onSubmit(e) {
        e.preventDefault();

        await axios.put(`http://localhost:5000/issueitem/update/${id}`, issueitem)
            .then(res => {
                alert("Successfully Updated");
                history.push("/issueitem");
            })
            .catch(err => { alert(err) });
    }

    const loadissueitem = async () => {
        const res = await axios.get
            (`http://localhost:5000/issueitem/get/${id}`)
        editIssueItem(res.data.issueitem)
    };

    useEffect(() => {
        loadissueitem();
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
                    <input type="text" className="form-control" id="model_number"  defaultValue={model_number}
                    onChange={e => onInputChange(e, "model_number")}
                    />
                </div>
                
                <div className="form-group">
                    <label for="issue_by">Issue By</label>
                    <input type="text" className="form-control" id="issue_by" defaultValue={issue_by}
                    onChange={e => onInputChange(e, "issue_by")}
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

export default EditIssueItem;



    