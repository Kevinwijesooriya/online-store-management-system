import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



const Note = props => (
  <tr>
    
    <td>{props.note.title}</td>
    <td>{props.note.description}</td>
    <td>{props.note.date}</td>
    <td>
    <button>  <Link to={"/noteEdit/"+props.note._id}>edit</Link></button> | <button href ="/noteList" onClick={() => { props.deletenote(props.note._id) }}>delete</button>
    </td>
  </tr>
)


export default class NoteList extends Component {
 
  constructor(props) {
    super(props);

    this.deletenote = this.deletenote.bind(this);

    this.state = {note: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/notes/')
      .then(response => {
        this.setState({ note: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deletenote(id) {
    axios.delete(`http://localhost:5000/notes/${id}`)     
      .then(response => { console.log(response.data)});

    this.setState({
      note: this.state.note.filter(el => el._id !== id)
    })
  }

  noteList() {
    return this.state.note.map(currentnote => {
      return <Note note={currentnote} deletenote={this.deletenote} key={currentnote._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Notted notes</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
            <th>Title</th>
              <th>Description</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.noteList() }
          </tbody>
        </table>
      </div>
    )
  }
}