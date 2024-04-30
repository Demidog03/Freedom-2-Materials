const initialState = {
    products: []
}

export function productsReducer(state = initialState, action) { // state - состояние, action - методы
    switch (action.type) {
        case 'products/addProducts': {
            return state
        }
        default: { // else
            return state
        }
    }
}