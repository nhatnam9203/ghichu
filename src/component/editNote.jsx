import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editNote } from '../REDUX/action/action'
import { withRouter } from 'react-router-dom'
class EditNote extends Component {

    constructor() {
        super();
        this.state = {
            id: '',
            title: '',
            content: '',
            select:'notice'
        }
    }


    componentDidMount() {
        this._findNote();
    }




    _findNote = () => {
        const id = this.props.match.params.id;
        const noteList = this.props.noteList;
        for (let i = 0; i < noteList.length; i++) {
            if (noteList[i].id === parseInt(id)) {
                this.setState({
                    id: noteList[i].id,
                    title: noteList[i].title,
                    content: noteList[i].content,
                    select : noteList[i].type,
                })
            }
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

    _onChangeSelect=async(e)=>{
        await this.setState({
            select : e.target.value
        })
    }

    _onSubmit = async (e) => {
        e.preventDefault();
        const { id, title, content,select } = await this.state;
        await this.props.editNote({ id, title, content,type:select });
        await this.props.history.push('/');
    }



    render() {
        const yellow = "#CEA038";
        const red = "#AD292D";
        const type = this.state.select;
        let color;
        if(type === "notice") color = yellow;
        if(type === "danger") color = red;
        return (
            <div className="updatenote-container">
                <div className="updatenote-wrapper">
                    <div className="updatenote-title" style={{ backgroundColor : color }}>
                        <p>Sửa ghi chú</p>
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
                            <select value={this.state.select} className="form-control" name="" onChange={this._onChangeSelect}>
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
                        <button type="submit" className="btn btn-primary updatenote" style={{ backgroundColor : color }}>
                            <i class="far fa-save"></i> Hoàn tất
                     </button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    noteList: state.Note,
    ResultFindNote: state.FindNote
});


const mapDispatchToProps = (dispatch) => ({
    editNote: (note) => {
        dispatch(editNote(note))
    },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditNote));
