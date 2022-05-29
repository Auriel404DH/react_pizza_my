export const addPizza = (payload) => {
  return {
    type: 'ADD_PIZZA',
    payload: payload,
  };
};

export const clearCart = () => {
  return {
    type: 'CLEAR_CART',
  };
};

export const removeCartPizza = (id) => {
  return {
    type: 'REMOVE_CART_ITEM',
    payload: id,
  };
};

export const plusCartPizza = (id) => {
  return {
    type: 'PLUS_CART_PIZZA',
    payload: id,
  };
};

export const minusCartPizza = (id) => {
  return {
    type: 'MINUS_CART_PIZZA',
    payload: id,
  }; 
};
