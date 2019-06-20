import React, { Component } from 'react'
import callApi from './../../utils/apiCaller';

export default class ProductActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: ''
        };
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState(
            {
                [name]: value
            }
        )
    }

    onSave = (e) => {
        e.preventDefault();
        var { id, txtName, txtPrice, chkbStatus } = this.state
        var { history } = this.props
        if (id) {
            callApi(`products/${id}`, 'PUT', {
                id: id,
                name: txtName,
                price: txtPrice,
                status: chkbStatus,
            }).then(resp => {
                history.goBack()
            })
        } else {
            callApi('products', 'POST', {
                name: txtName,
                price: txtPrice,
                status: chkbStatus,
            }).then(resp => {
                history.push('/products')
            })
        }

    }

    componentDidMount() {
        var { match } = this.props
        if (match) {
            var id = match.params.id;
            callApi(`products/${id}`, 'get', null).then(resp => {
                let data = resp.data
                this.setState({
                    id: data.id,
                    txtName: data.name,
                    txtPrice: data.price,
                    chkbStatus: data.status
                })
            })
        }
    }


    render() {
        var { txtName, txtPrice, chkbStatus } = this.state;
        return (
            <div className="container">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label >PRODUCT NAME:</label>
                        <input type="text"
                            className="form-control"
                            placeholder="Product Name"
                            name="txtName"
                            value={txtName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label >PRICE:</label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Product Price"
                            name="txtPrice"
                            value={txtPrice}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            name="chkbStatus"
                            value={chkbStatus}
                            onChange={this.onChange}
                            checked={chkbStatus}
                        />
                        <label className="form-check-label" >Active</label>
                    </div>
                    <button type="submit" className="btn btn-success">Submit Form</button>
                </form>
            </div>
        );
    }
}