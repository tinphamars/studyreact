import React, { Component } from 'react'
import callApi from './../../utils/apiCaller';
import { actAddProductsRequest, actGetProductsRequest, actUpdateProductRequest } from './../../actions/Index';
import { connect } from 'react-redux';
import itemEditing from '../../reducers/itemEditing';

class ProductActionPage extends Component {

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
        var products = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        }
        if (id) {
            this.props.onUpdateProduct(products)
        } else {
            this.props.onAddProducts(products)
            history.goBack()
        }

    }

    componentDidMount() {
        var { match } = this.props
        if (match) {
            var id = match.params.id;
            this.props.onEditProduct(id)
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            var { itemEditing } = nextProps
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                chkbStatus: itemEditing.status
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

const mapStateToProps = state => {
    return {
        itemEditing: state.itemEditing
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        onAddProducts: (products) => {
            dispatch(actAddProductsRequest(products))
        },
        onEditProduct: (id) => {
            dispatch(actGetProductsRequest(id))
        },
        onUpdateProduct: (product) => {
            dispatch(actUpdateProductRequest(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(ProductActionPage)