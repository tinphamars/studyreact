import * as Types from './../constants/ActionType';

var findIndex = (products, id) => {
    var result = -1;
    products.forEach((element, index) => {
        if (element.id === id) {
            result = index
        }
    });
    return result
}

var initialState = [];

const products = (state = initialState, action) => {
    var index = -1
    var { id } = action
    switch (action.type) {

        case Types.FETCH_PRODUCTS:
            state = action.products
            return [...state]

        case Types.DELETE_PRODUCT:
            index = findIndex(state, id)
            state.splice(index, 1)
            return [...state]

        case Types.ADD_PRODUCT:
            state.push(action.products)
            return [...state]
        default: return [...state]
    }
}


export default products;


