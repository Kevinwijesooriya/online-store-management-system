import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NoteHeader extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/noteList" className="navbar-brand"> Notes</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/CreateNotes" className="nav-link">Craete Notes</Link>
          </li>
          <li className="navbar-item">
          <Link to="#" className="nav-link">Edit Note Log</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}