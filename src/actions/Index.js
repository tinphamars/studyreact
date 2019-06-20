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

