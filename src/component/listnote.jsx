import React, { Component } from 'react'
import Note from './note'
import { connect } from 'react-redux'
import Search from './search'
class ListNote extends Component {

  componentWillMount(){
    localStorage.setItem('note',JSON.stringify(this.props.noteList))
  }

  renderNote() {
    const renderNote = this.props.noteList.map((obj, index) => {
      return (
        <Note
          note={obj}
          index={index}
          key={index}
        />
      )
    });
    return renderNote;
  }


  render() {

    return (
      <React.Fragment>
        <Search />
        <div className="listnote-container">
          {this.renderNote()}
        </div>
      </React.Fragment>

    )
  }
}


const mapStateToProps = (state) => ({
  noteList: state.Note
});

export default connect(mapStateToProps, null)(ListNote);
