import React, {Component} from 'react';
import axios from "axios";
 
export default class Newitem extends Component {
 
  constructor(props){
    super(props);
    this.state={
        item:{}
    };
  }
 
  componentDidMount(){
    const id = this.props.match.params.id;
    axios.get(`http://localhost:5000/item/get/${id}`).then((res)=>{
        console.log(res);
        this.setState({
           item:res.data.item
          });
   }).catch((err)=>{
       alert(err.massage);
   })
}

  
render(){
 
      const{_id,itemname,itemimage,itemcategory,itembrand,itemcolor,itemprice,itemqty,itemdescription}=this.state.item;
 
  return(
    <div >
     
                <p>{itemname}</p>
                <img  src={`/images/${itemimage}`}  alt="" />
                <p>{itemimage}</p>
                <p>{itemcategory}</p>
                <p>{itembrand}</p>
                <p>{itemcolor}</p>
                <p>{itemprice}</p>
                <p>{itemqty}</p>
                <p>{itemdescription}</p>
      <a href={`/cart/${_id}`}>Add to cart</a> 
      <br/>
      <a href={`/comment/${_id}`}>Comment</a> 

    </div>
 
  )
}
}