import React, { useState } from "react";
import axios from "axios";
import Reactstars from "react-rating-stars-component";
import { useHistory } from "react-router-dom";


export default function Rating() {
    const [customID, set_custom_ID] = useState("");
    const [customName, setCustomName] = useState("");
    const [item_name, set_item_name] = useState("");
    const [itemcode, set_itemcode] = useState("");
    const [rate, set_rate] = useState("");
    const [comment, set_comment] = useState("");
    let history = useHistory();


    function sendData(e) {
        e.preventDefault();

        //   history.push({
        //     pathname: '/test',
        //     // search: '?query=abc',
        //     state:{ detail:`${rate}`, 
        //     detail2: `${comment}`}
        // });


        const newrating = {
            custom_ID: "6139e6e813ebc16dec25059",
            item_name: "testitem",
            itemcode: "test code",
            custom_name: "test name",
            rate,
            comment,
        }
        console.log(newrating);

        axios.post("http://localhost:5000/Feedback/add", newrating).then(() => {
            alert("insert")
        }).catch((err) => {
            alert(err)
        })


    }
    //  const ratingChanged = (e)=>{
    //   alert(`you have given ${e} star rating for us.`);
    //   // setrating(e.target.value);
    //    };


    return (

        <div className="container">
          
            <form onSubmit={sendData}>

                <div className="mb-3">
                    <label htmlFor="rate" className="form-label" >Comment</label>
                    {/* <input type="text" className="form-control" id="rate" placeholder="Rate"
    onChange={(e)=>{
        set_rate(e.target.value);
    }} required/> */}
                    <Reactstars size={40} onChange={(e) => {
                        set_rate(e);
                    }} />
                </div>

                <div className="mb-3">
                    {/* <label htmlFor="comment" className="form-label"> comment</label> */}
                    <input type="text" className="form-control" id="comment" placeholder="comment"
                        onChange={(e) => {
                            set_comment(e.target.value);
                        }}
                        required />
                </div>



                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )


}