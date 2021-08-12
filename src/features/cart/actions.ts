import { product } from '../../models/product'
import { action } from 'typesafe-actions'
import {
    GET_ALL_PRODUCTS,
    RECEIVE_PRODUCTS,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CHECKOUT_REQUEST,
    CHECKOUT_SUCCESS,
    CHECKOUT_FAILURE,
} from './constants';

export const getAllProducts = () => action(GET_ALL_PRODUCTS);
export const receiveProducts = (products: product) => action(RECEIVE_PRODUCTS, products);

export function addToCart(productId: number) {
    return action(ADD_TO_CART, productId);
}

export function removeFromCart(productId: number) {
    return action(REMOVE_FROM_CART, productId);
}

export function checkout() {
    return action(CHECKOUT_REQUEST)
}

export function checkoutSuccess(cart: product) {
    return action(CHECKOUT_SUCCESS, cart);
}

export function checkoutFailure(error: string) {
    return action(CHECKOUT_FAILURE, error);
}
