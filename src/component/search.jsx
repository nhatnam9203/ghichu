import React, { Component } from 'react'
import { connect } from 'react-redux'
import { search,select_search } from '../REDUX/action/action'
class Search extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
            select:''
        }
    }

    _onChangeSelect=async(e)=>{
        await this.setState({select : e.target.value});
        const {select} = this.state;
        await this.props.select_search({type:select});

    }

    _onChangeSearch = async (e) => {
        await this.setState({
            search: e.target.value
        });
        await this.props.search(this.state.search)
    }

    _search = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className="search-container">
                <form onSubmit={this._search}>
                    <input type="text"
                        className="form-control"
                        name="search"
                        placeholder="Tìm kiếm nội dung ghi chú"
                        onChange={this._onChangeSearch}
                    />
                    <div className="select-search">
                        <select value={this.state.select} className="form-control" name="" onChange={this._onChangeSelect}>
                            <option value="">Loại ghi chú</option>
                            <option value="normal">Bình thường</option>
                            <option value="notice">Chú ý</option>
                            <option value="danger">Cảnh báo</option>
                        </select>
                    </div>

                </form>
            </div>
        )
    }
}


// const mapStateToProps = (state) => ({

// });
const mapDispatchToProps = (dispatch) => ({
    search: (content) => {
        dispatch(search(content))
    },
    select_search: (type)=>{
        dispatch(select_search(type))
    }
});
export default connect(null, mapDispatchToProps)(Search);
