const initialState = {
    products: [],
    productsLoading: false,
    categories: [],
    selectedCategory: 'Категории',
    selectedProduct: null,
    selectedProductLoading: false
}

export const PRODUCTS_ACTIONS = {
    addProducts: 'products/addProducts',
    setProductsLoading: 'products/setProductsLoading',
    addCategories: 'products/addCategories',
    selectCategory: 'products/selectCategory',
    selectProduct: 'products/selectProduct',
    setSelectedProductLoading: 'products/setSelectedProductLoading'
}

export function productsReducer(state = initialState, action) { // state - состояние, action - методы
    switch (action.type) {
        case PRODUCTS_ACTIONS.addProducts: {
            return { ...state, products: action.payload }
        }
        case PRODUCTS_ACTIONS.setProductsLoading: {
            return { ...state, productsLoading: action.payload } //{ ...state, productsLoading: true/false }
        }
        case PRODUCTS_ACTIONS.addCategories: {
            return { ...state, categories: action.payload }
        }
        case PRODUCTS_ACTIONS.selectCategory: {
            return { ...state, selectedCategory: action.payload }
        }
        case PRODUCTS_ACTIONS.selectProduct: {
            return { ...state, selectedProduct: action.payload }
        }
        case PRODUCTS_ACTIONS.setSelectedProductLoading: {
            return { ...state, selectedProductLoading: action.payload } //{ ...state, productsLoading: true/false }
        }
        default: { // else
            return state
        }
    }
}