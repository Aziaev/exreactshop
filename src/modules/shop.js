import { ADD_TO_CART, initialState, REDUCE_QUANTITY, REMOVE_FROM_CART } from '../constants';

export default (state = initialState, action) => {
  const { itemId, type } = action;

  switch (type) {
    case ADD_TO_CART:
      let extendedCart = [...state.cart];
      let foundItem = extendedCart.find((item) => item.id === itemId);
      if (foundItem) {
        foundItem.quantity = foundItem.quantity + 1;
      } else {
        extendedCart.push({
          id: itemId,
          quantity: 1
        });
      }
      return {
        ...state,
        cart: [...extendedCart]
      };

    case REMOVE_FROM_CART:
      const updatedCart = state.cart.filter(item => item.id !== itemId);
      return {
        ...state,
        cart: [...updatedCart]
      };

    case REDUCE_QUANTITY:
      let reducedCart = [...state.cart];
      let reducedItem = reducedCart.find((item) => item.id === itemId);
      if (reducedItem.quantity > 1) {
        reducedItem.quantity = reducedItem.quantity - 1;
      } else {
        reducedCart = reducedCart.filter(item => item.id !== itemId);
      }
      return {
        ...state,
        cart: reducedCart
      };
    default:
      return state;
  }
}

export const addToCart = (itemId) => {
  return dispatch => {
    return dispatch({
      type: ADD_TO_CART,
      itemId: itemId
    });
  };
};

export const removeFromCart = (itemId) => {
  return dispatch => {
    return dispatch({
      type: REMOVE_FROM_CART,
      itemId: itemId
    });
  };
};

export const reduceQuantity = (itemId) => {
  return dispatch => {
    return dispatch({
      type: REDUCE_QUANTITY,
      itemId: itemId
    });
  };
};
