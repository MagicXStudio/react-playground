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
export const receiveProducts = (products: Array<product>) => action(RECEIVE_PRODUCTS, products);
export const addToCart = (productId: number) => action(ADD_TO_CART, productId);
export const removeFromCart = (productId: number) => action(REMOVE_FROM_CART, productId);
export const checkout = () => action(CHECKOUT_REQUEST)
export const checkoutSuccess = (cart: product) => action(CHECKOUT_SUCCESS, cart);
export const checkoutFailure = (error: string) => action(CHECKOUT_FAILURE, error);
