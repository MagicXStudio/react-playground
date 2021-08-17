import { combineReducers } from 'redux'
import * as CartActions from './actions'
import { ActionType } from 'typesafe-actions';
import { product } from '../../models/product'
import {
    GET_ALL_PRODUCTS,
    REMOVE_FROM_CART,
    CHECKOUT_REQUEST,
    CHECKOUT_SUCCESS,
    CHECKOUT_FAILURE,
} from './constants';

export type CartState = {
    error: string;
    item: product;
};

const initialState: CartState = {
    error: 'ok',
    item: { id: 0, title: '', price: 0, inventory: 0 }
}
export type CartAction = ActionType<typeof CartActions>;

function checkoutStatus(state: CartState = initialState, action: CartAction) {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return initialState;
        case REMOVE_FROM_CART:
            return initialState;
        case CHECKOUT_REQUEST:
            return initialState;
        default:
            return initialState
    }
}

function quantityById(state: CartState = initialState, action: CartAction) {
    console.log(action);
    switch (action.type) {
        case CHECKOUT_SUCCESS:
            return initialState
        case CHECKOUT_FAILURE:
            return initialState
        case GET_ALL_PRODUCTS:
            const qty = 1
            const copy = { ...state }
            if (qty > 0) copy.item.inventory = qty
            return initialState
        default:
            return initialState
    }
}

export default combineReducers({ quantityById, checkoutStatus });

export function getQuantity(state: CartState, productId: number): number {
    return state.item.price || 0
}

export function getAddedIds(state: CartState) {
    return Object.keys(state.item)
}

export function getCart() {
    return "";
}
