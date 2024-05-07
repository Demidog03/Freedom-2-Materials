import { PRODUCTS_ACTIONS } from "../reducers/productsReducer";
import axios from 'axios'

export function getProductsThunk() {
    return async (dispatch) => {
        try {
            dispatch({type: PRODUCTS_ACTIONS.setProductsLoading, payload: true})
            const res = await axios.get('https://fakestoreapi.com/products')
            dispatch({type: PRODUCTS_ACTIONS.addProducts, payload: res.data})
        } catch (err) {
            console.log(err);
        }
        finally {
            dispatch({type: PRODUCTS_ACTIONS.setProductsLoading, payload: false})
        }
    }
}

export function getCategoriesThunk() {
    return async (dispatch) => {
        try {
            const res = await axios.get('https://fakestoreapi.com/products/categories')
            dispatch({type: PRODUCTS_ACTIONS.addCategories, payload: res.data})
        } catch {

        } finally {

        }
    }
}

export function getProductsByCategoryThunk(category) {
    return async (dispatch) => {
        dispatch({type: PRODUCTS_ACTIONS.selectCategory, payload: category}) // payload: 
        try {
            dispatch({type: PRODUCTS_ACTIONS.setProductsLoading, payload: true})
            const res = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
            dispatch({type: PRODUCTS_ACTIONS.addProducts, payload: res.data})
        } catch (err) {
            console.log(err);
        }
        finally {
            dispatch({type: PRODUCTS_ACTIONS.setProductsLoading, payload: false})
        }
    }
}

export function getProductThunk(id) {
    return async (dispatch) => {
        try {
            dispatch({type: PRODUCTS_ACTIONS.setSelectedProductLoading, payload: true})
            const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
            dispatch({type: PRODUCTS_ACTIONS.selectProduct, payload: res.data})
        } catch (err) {
            console.log(err);
        }
        finally {
            dispatch({type: PRODUCTS_ACTIONS.setSelectedProductLoading, payload: false})
        }
    } 
}