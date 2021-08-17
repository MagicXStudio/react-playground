import * as logger from './logger-service';
import * as localStorage from './local-storage-service';
import products from './products'
import { product } from '../models/product'
const TIMEOUT = 100
const MAX_CHECKOUT = 2 // max different items

export const api = {
    getProducts() {
        return new Promise(resolve => {
            setTimeout(() => resolve(products), TIMEOUT)
        })
    },

    buyProducts(cart: product) {
        return new Promise((resolve, reject) =>
            setTimeout(() => {
                if (Object.keys(products.length).length <= MAX_CHECKOUT) resolve(cart)
                else reject(`You can buy ${MAX_CHECKOUT} items at maximum in a checkout`)
            }, TIMEOUT),
        )
    },
}

export default {
    logger,
    localStorage,
};
