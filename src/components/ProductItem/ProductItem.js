import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProductItem extends Component {
    onDelete = (id) => {
        if (confirm('you realy !!')) { //eslint-disable-line
            this.props.onDelete(id)
        }

    }
    render() {
        var { product } = this.props;
        return (
            <div className="card col-md-4">
                <div className="card-body">
                    <h3 className="card-title text-center">{product.name}</h3>
                    <p className="card-text text-center text-danger">Price: {product.price}</p>
                    <p className="card-text text-center text-success">{product.status === true ? "ACTIVE" : 'INACTIVE'}</p>
                    <Link to={`product/${product.id}/edit`} className="btn btn-primary">Edit</Link>
                    <button
                        className="btn btn-danger float-right"
                        onClick={() => this.onDelete(product.id)}
                    >Delete</button>
                </div>
            </div>
        );
    }
}