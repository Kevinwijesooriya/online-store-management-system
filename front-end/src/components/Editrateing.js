import React, { useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom';
import Reactstars from "react-rating-stars-component";
import axios from "axios";


export default function Editrateing(props) {

    const [customID, set_custom_ID] = useState("");
    const [customName, setCustomName] = useState("");
    const [item_name, set_item_name] = useState("");
    const [itemcode, set_itemcode] = useState("");
    const [rate, set_rate] = useState("");
    const [comment, set_comment] = useState("");
    const { id } = useParams();
    const [feedback, setfeedback] = useState({
        rate: "",
        comment: "",
    });
    let history = useHistory();


    function sendData(e) {
        e.preventDefault();

           history.push({
             pathname: '/test',
             search: '?query=abc',
             state:{ detail:`${rate}`, 
             detail2: `${comment}`}
         });


        const newrating = {
            custom_ID: feedback.custom_ID,
            item_name: feedback.item_name,
            itemcode: feedback.itemcode,
            custom_name: feedback.custom_name,
            rate,
            comment,
        }
         console.log(newrating);

        axios.put(`http://localhost:5000/Feedback/update/${id}`, newrating).then(() => {
            alert("update your comment")
            history.push("/profile/comment");
        }).catch((err) => {
            alert(err)
        })


    }


    useEffect(() => {

        function getrate() {
            axios.get(`http://localhost:5000/Feedback/get/${id}`).then((res) => {
                console.log(res);
                setfeedback(res.data.feedback);
            }).catch((err) => {
                alert(err.massage);
            })
        }
        getrate();

    }, []);
    // const {name,age,gender} = student;
    console.log(feedback);

    return (

        <div className="container">
            <div>
            <form onSubmit={sendData}>

                <div className="mb-3">
                    <label htmlFor="rate" className="form-label" >Comment</label>
                   
                    <Reactstars size={30} onChange={(e) => {
                        set_rate(e);
                    }} />
                </div>

                <div className="mb-3">
                   
                    <input type="text" className="form-control" id="comment" placeholder="update comeent" Value={`${feedback.comment}`}
                        onChange={(e) => {
                            set_comment(e.target.value);
                        }}
                        required />
                </div>



                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            </div>
        </div>
    )


}