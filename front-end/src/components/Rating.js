import React, {useEffect, useState} from "react";
import axios from "axios";
import Reactstars from "react-rating-stars-component";
// import { useHistory } from "react-router-dom";
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
export default function Rating() {
    const [customID, set_custom_ID] = useState("");
    const [customName, setCustomName] = useState("");
    const [item_name, set_item_name] = useState("");
    const [itemcode, set_itemcode] = useState("");
    const [itemimg, set_itemimg] = useState("");
    const [rate, set_rate] = useState("");
    const [comment, set_comment] = useState("");
    let history = useHistory();
    const { id } = useParams();
    const[item,setItem]=useState({
        itemname: ""
       
    });
   const { itemname,itemimage
         } = item;
   const customerID = useSelector((state) => state.cusLogin.userInfo._id);
   const customername = useSelector((state) => state.cusLogin.userInfo.name);
    function sendData(e) {
        e.preventDefault();

        //   history.push({
        //     pathname: '/test',
        //     // search: '?query=abc',
        //     state:{ detail:`${rate}`, 
        //     detail2: `${comment}`}
        // });


        const newrating = {
            custom_ID:customerID ,
            item_name: `${item.itemname}`,
            itemcode: `${id}`,
            itemimg:`${item.itemimage}`,
            custom_name:customername,
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

    useEffect(()=>{
        
        function getitem(){
            axios.get(`http://localhost:5000/item/get/${id}`).then((res)=>{
                 console.log(res);
                 setItem(res.data.item);
            }).catch((err)=>{
                alert(err.massage);
            })
        }
        getitem();
    },[id]);

    


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