import sendRequest from './send-request.cjs'
const BASE_URL = './controllers/orders.cjs'

// getting unpaid order for logged in user
export function getWishlist() {
    return sendRequest(`${BASE_URL}/cart`)
}

// adding item to cart
export function addToWishlist(itemId) {
    return sendRequest(`${BASE_URL}/wishlist/items/${itemId}`, 'POST')
}

// updating item quantity in cart
export function setItemQtyInWishlist(itemId, quantity) {
    return sendRequest(`${BASE_URL}/wishlist/qty`, 'PUT', { itemId, quantity })
}
