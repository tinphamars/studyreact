import React, { Component } from 'react'
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import callApi from './../../utils/apiCaller';
import { actFactFetchProductsRequest } from './../../actions/Index';
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
        var { products } = this.state
        callApi(`products/${id}`, 'delete', null).then(resp => {
            if (resp.status === 200) {
                var index = this.findIndex(products, id)
                if (index !== -1) {
                    products.splice(index, 1)
                    this.setState({
                        products
                    })
                }
            }
        })
    }

    findIndex = (products, id) => {
        var result = -1;
        products.forEach((element, index) => {
            if (element.id === id) {
                result = index
            }
        });
        return result
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);