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