/* eslint-disable no-constant-condition */

import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects'
import * as actions from '../features/cart/actions'
import { getCart } from '../features/cart/reducer'
import { api } from '../services'
import { product} from '../models/product'
import {
    GET_ALL_PRODUCTS,
    CHECKOUT_REQUEST
} from '../features/cart/constants';
export function* getAllProducts() {
    const products: Array<product> = yield call(api.getProducts)
    yield put(actions.receiveProducts(products))
}

export function* checkout() {
    try {
        const cart: product = yield select(getCart)
        yield call(api.buyProducts, cart)
        yield put(actions.checkoutSuccess(cart))
    } catch (error) {
        yield put(actions.checkoutFailure(error))
    }
}

export function* watchGetProducts() {
    /*
      takeEvery will fork a new `getAllProducts` task on each GET_ALL_PRODUCTS actions
      i.e. concurrent GET_ALL_PRODUCTS actions are allowed
    */
    yield takeEvery(GET_ALL_PRODUCTS, getAllProducts)
}

export function* watchCheckout() {
    while (true) {
        yield take(CHECKOUT_REQUEST)
        /*
          ***THIS IS A BLOCKING CALL***
          It means that watchCheckout will ignore any CHECKOUT_REQUEST event until
          the current checkout completes, either by success or by Error.
          i.e. concurrent CHECKOUT_REQUEST are not allowed
          TODO: This needs to be enforced by the UI (disable checkout button)
        */
        yield call(checkout)
    }
}

export default function* root() {
    yield all([fork(getAllProducts), fork(watchGetProducts), fork(watchCheckout)])
}
