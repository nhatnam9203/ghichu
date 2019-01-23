import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Menu extends Component {


  addNote=()=>{
    this.props.history.push('/note')
  }

  _home=()=>{
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="menu-container">
        <div className="menu-logo">
          <p onClick={this._home}>App ghi chú</p>
        </div>
        <div className="add-note">
          <button
          onClick={this.addNote}
            type="button" className="btn btn-primary">
            <i className="fas fa-folder-plus"></i>
            Thêm ghi chú
          </button>
        </div>
      </div>
    )
  }
}


export default withRouter(Menu);