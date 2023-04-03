import { ADD_PRODUCT, ADD_TO_CART, REMOVE_FROM_CART, REMOVE_PRODUCT } from "./actionTypes"

export const addProduct = (product)=>{
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}
export const removeProduct = (id)=>{
    return {
        type: REMOVE_PRODUCT,
        payload: id
    }
}

export const addToCart = (product)=>{
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export const removeFromCart = (product)=>{
    return {
        type: REMOVE_FROM_CART,
        payload: product
    }
}