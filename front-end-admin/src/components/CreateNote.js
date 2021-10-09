import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";



export default class CreateNote extends Component {

    constructor(props) {
        super(props);
    
        
        
        this.onChangetitle = this.onChangetitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          
          
          title: '',
          description: '',
          date: new Date(),
        
        }
      }
    
      onChangetitle(e) {
        this.setState({
          title: e.target.value
        })
      }
      onChangeDescription(e) {
        this.setState({
          description: e.target.value
        })
      }
    
      onChangeDate(date) {
        this.setState({
          date: date
        })
      }
    
      onSubmit(e) {
        e.preventDefault();
    
        const note = {
          
          title: this.state.title,
          description: this.state.description, 
          date: this.state.date
        }
    
        console.log(note);
    
        axios.post('http://localhost:5000/notes/add', note)
          .then(res => console.log(res.data));
    
        window.location = '/noteList';
      }
    
      render() {
        return (
        <div>
          <h3>Create New Exercise Log</h3>
          <form onSubmit={this.onSubmit}>

          <div className="form-group">
              <label>title: </label>
              <input 
                  type="text" 
                  className="form-control"
                  value={this.state.title}
                  onChange={this.onChangetitle}
                  />
            </div>
            
            <div className="form-group"> 
              <label>Description: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                  />
            </div>
            <div className="form-group">
              <label>Date: </label>
              <div>
                <DatePicker
                  selected={this.state.date}
                  onChange={this.onChangeDate}
                />
              </div>
            </div>
    
            <div className="form-group">
              <input type="submit" value="create note" className="btn btn-primary" />
            </div>
          </form>
        </div>
        )
      }
    }