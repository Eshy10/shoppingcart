import { DataList } from '../actionTypes';

export const addItemToCart = (cartItems: DataList[], cartItemToAdd: DataList) => {
    const existingCartItems = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)
    if (existingCartItems) {
     return cartItems.map(cartItem => 
        cartItem.id === cartItemToAdd.id
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
        )
    }
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const removeCartItem = (cartItems: DataList[], cartItemToRemove: DataList) => {
    const existingCartItems = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)
    if (existingCartItems.quantity === 1) {
      return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
    return cartItems.map(
        cartItem => cartItem.id === cartItemToRemove.id ?
        {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
        )
}