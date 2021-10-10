import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';




export default class EditNote extends Component {

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

  componentDidMount() {
    axios.get('http://localhost:5000/notes/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          title: response.data.title,
          description: response.data.description,
          date: new Date(response.data.date)
        })
      })
      .catch(function (error) {
        console.log(error);
      })



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

    axios.post('http://localhost:5000/notes/update/' + this.props.match.params.id, note)
      .then(res => console.log(res.data));



    window.location = "/admin/noteList";
  }




  render() {
    return (
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0" >

        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h4 className="text-blueGray-700 text-xl font-bold">Edit Note</h4>
          </div>
        </div>

        <div className="flex flex-wrap">
          <hr className="mt-6 border-b-1 border-blueGray-300" />
        </div>

        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={this.onSubmit}>
            <div className="flex flex-wrap">
            <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password">Title</label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={this.state.title}
                  onChange={this.onChangetitle}
                />
              </div>
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password">Description</label>
                <input type="text"
                  required
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                />
              </div>
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password">Date</label>
                <div >
                  <DatePicker
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                   selected={this.state.date}
                    onChange={this.onChangeDate}
                  />
                </div>
              </div>

              <div className="relative w-full mb-3">
                <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="submit">Edit Note</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}