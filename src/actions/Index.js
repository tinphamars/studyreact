import * as Types from './../constants/ActionType';
import callApi from './../utils/apiCaller';


export const actFactFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(resp => {
            dispatch(actFetchProducts(resp.data))
        })
    }
}


export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}

export const actDeleteProducts = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

export const actDEleteProductsRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'DELETE', null).then(resp => {
            dispatch(actDeleteProducts(id))
        })
    }
}

export const actAddProducts = (products) => {
    return {
        type: Types.ADD_PRODUCT,
        products
    }
}

export const actAddProductsRequest = (products) => {
    return (dispatch) => {
        return callApi('products', 'POST', products).then(reps => {
            dispatch(actAddProducts(reps.data))
        })
    }
}

export const actGetProducts = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}
export const actGetProductsRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'GET', null).then(resp => {
            dispatch(actGetProducts(resp.data))
        })
    }
}

export const actUpdateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}
export const actUpdateProductRequest = (product) => {
    return (dispatch) => {
        return callApi(`products/${product.id}`, 'PUT', product).then(resp => {
            dispatch(actUpdateProduct(resp))
        })
    }
}