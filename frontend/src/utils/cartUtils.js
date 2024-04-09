export const toDecimals = num => {
    return (Math.round(num * 100) / 100).toFixed(2)
}

export const updateCart = (state) => {
     //Calculate items price
     state.itemsPrice = toDecimals(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0))

     //Calculate shipping price (If order is over $100 then free, else $10 shipping)
     state.shippingPrice = toDecimals(state.itemsPrice > 100 ? 0 : 100)
     //Calculate tax price (6.875% Minnesota)
     state.taxPrice = toDecimals(Number((0.06875 * state.itemsPrice).toFixed(2)))
     //Calculate total price
     state.totalPrice = toDecimals(Number(state.itemsPrice) + Number(state.shippingPrice) + Number(state.taxPrice))

     localStorage.setItem('cart', JSON.stringify(state))

     return state
}