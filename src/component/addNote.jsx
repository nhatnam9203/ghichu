import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNote } from '../REDUX/action/action'
import {withRouter} from 'react-router-dom'
class AddNote extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            content: '',
            select:'normal'
        }
    }

    _onChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    _onChangeContent = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    _onSubmit = async(e) => {
        e.preventDefault();
        const {title,content,select} = await this.state;
        await this.props.addNote({title,content,select});
        await this.props.history.push('/');
    }

    _onChangeSelect=async(e)=>{
       await this.setState({
            select : e.target.value
        });
        await console.log(this.state.select)
    }

  

    render() {
  
        return (
            <div className="updatenote-container">
            <div className="updatenote-wrapper">
                <div className="updatenote-title">
                    <p>Thêm ghi chú</p>
                </div>
                <form onSubmit={this._onSubmit}>
                    <div className="title-updatenote">
                        <input type="text"
                            className="form-control"
                            name="title"
                            placeholder="Nhập tiêu đề"
                            value={this.state.title}
                            onChange={this._onChangeTitle}
                        />
                    </div>
                    <div className="select-updatenote">
                        <label htmlFor="">Loại ghi chú</label>
                          <select className="form-control" name="" onChange={this._onChangeSelect}>
                            <option value="normal">Bình thường</option>
                            <option value="notice">Chú ý</option>
                            <option value="danger">Cảnh báo</option>
                          </select>
                    </div>
                    <div className="content-updatenote">
                        <div className="form-group">
                            <textarea
                                className="form-control"
                                name="content" id="" rows="3"
                                value={this.state.content}
                                onChange={this._onChangeContent}
                                rows="10"
                                placeholder="Nhập nội dung"
                            >
                            </textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary updatenote">
                    <i class="far fa-save"></i> Hoàn tất
                     </button>
                </form>
            </div>
        </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    addNote: (note) => {
        dispatch(addNote(note))
    }
});

export default withRouter(connect(null, mapDispatchToProps)(AddNote));
