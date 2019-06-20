import React, { Component } from 'react'

export default class ProductList extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.children}
                </div>
            </div>
        );
    }
}