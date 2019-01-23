import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteNote, editNote } from '../REDUX/action/action'
import { withRouter } from 'react-router-dom'


class Note extends Component {


  _deleteNote = (note) => {
    this.props.deleteNote(note);
  }

  _editNote = (note) => {

    const { id } = note;
    this.props.history.push(`/editNote/${id}`);
  }


  _renderNote(note, color) {

    return (
      <div className="note-container">
        <div className="title-note" style={{ backgroundColor: color }}>
          <p>{note.title}</p>
        </div>
        <div className="content-note">
          <p>{note.content}</p>
          <button type="button" onClick={() => this._deleteNote(note)} className="btn btn-danger delete"><i className="fas fa-minus-circle"></i></button>
          <button type="button" onClick={() => this._editNote(note)} className="btn btn-secondary edit"><i className="fas fa-pencil-alt"></i></button>
        </div>
      </div>
    )
  }


  render() {
    const { note } = this.props;
    const yellow = "#CEA038";
    const red = "#AD292D";
    
    if (note.type === "notice")
      return (
        this._renderNote(note, yellow)
      )
    if (note.type === "danger") {
      return (
        this._renderNote(note, red)
      )
    }
    return (
      this._renderNote(note)
    )
  }
}



const mapDispatchToProps = (dispatch) => ({
  deleteNote: (note) => {
    dispatch(deleteNote(note))
  },
  editNote: (note) => {
    dispatch(editNote(note))
  }
});
export default withRouter(connect(null, mapDispatchToProps)(Note));
