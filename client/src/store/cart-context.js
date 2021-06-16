import React from "react";

const CartContext = React.createContext({
  items: [],
  totalPrice: 0,
  addItemToCart: (item) => {},
  removeItemFromCart: (id) => {},
  updateItemQuantity: (id, quantity) => {},
});

export default CartContext;
