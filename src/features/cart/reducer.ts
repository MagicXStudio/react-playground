import { combineReducers } from 'redux'
import * as CartActions from './actions'
import { ActionType } from 'typesafe-actions';
import { product } from '../../models/product'
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CHECKOUT_REQUEST,
    CHECKOUT_SUCCESS,
    CHECKOUT_FAILURE,
} from './constants';

export type CartState = {
    checkoutPending: boolean,
    error: string;
    item: product;
    readonly reduxCounter: number;
};

const initialState: CartState = {
    checkoutPending: false,
    error: 'ok',
    reduxCounter: 0,
    item: { id: 0, title: '', price: 0, inventory: 0 }
}
export type CartAction = ActionType<typeof CartActions>;

function checkoutStatus(state: CartState = initialState, action: CartAction) {
    switch (action.type) {
        case CHECKOUT_REQUEST:
            return {
                checkoutPending: true,
                error: null,
            }
        case CHECKOUT_SUCCESS:
            return initialState.checkoutPending
        case CHECKOUT_FAILURE:
            return {
                checkoutPending: false,
                error: 'action.error',
            }
        default:
            return state
    }
}

function quantityById(state: CartState = initialState, action: CartAction) {
    console.log(action);
    const productId = 0; //action
    switch (action.type) {
        case CHECKOUT_SUCCESS:
            return initialState.item
        case ADD_TO_CART:
            return {
                ...state,
                [productId]: 1,
            }
        case REMOVE_FROM_CART:
            const qty = 1
            const copy = { ...state }
            if (qty > 0) copy.item.inventory = qty
            return copy
        default:
            return state
    }
}

export default combineReducers<CartState, CartAction>({ quantityById, checkoutStatus });

export function getQuantity(state: CartState, productId: number): number {
    return state.item.price || 0
}

export function getAddedIds(state: CartState) {
    return Object.keys(state.item)
}

export function getCart() {
    return "";
}
