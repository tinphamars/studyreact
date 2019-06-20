import React, { Component } from 'react'
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import callApi from './../../utils/apiCaller';
import { actFactFetchProductsRequest, actDEleteProductsRequest } from './../../actions/Index';
import { connect } from 'react-redux';

class ProductListPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        this.props.fetchAllProduts()
    }

    onDelete = (id) => {
        this.props.onDeleteProducts(id)
    }


    render() {
        // console.log(this.props)
        var { products } = this.props;
        return (
            <div className="container">
                <ProductList >
                    {this.showProductIteml(products)}
                </ProductList>
            </div>
        );
    }

    showProductIteml = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((item, i) => {
                return <ProductItem
                    key={i}
                    index={i}
                    product={item}
                    onDelete={this.onDelete}
                />
            });
        }
        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllProduts: () => {
            dispatch(actFactFetchProductsRequest())
        },
        onDeleteProducts: (id) => {
            dispatch(actDEleteProductsRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);