import { ADD_TO_CART, initialState, REDUCE_QUANTITY, REMOVE_FROM_CART } from '../constants';
import { FETCH_FROM_STORAGE, PUSH_TO_STORAGE } from '../constants/index';

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

    case FETCH_FROM_STORAGE:
      const fetchedCart = JSON.parse(localStorage.getItem('cart'));
      console.log(`fetched from localstorage ${JSON.stringify(fetchedCart)}`);
      return {
        ...state,
        cart: [...fetchedCart]
      };
      return state;

    case PUSH_TO_STORAGE:
      const storedCart = [...state.cart];
      console.log(`PUSH_TO_STORAGE ${JSON.stringify(storedCart)}`);
      localStorage.setItem('cart', JSON.stringify(storedCart));
      return state;
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

export const fetchFromLocalStorage = () => {
  console.log(`fetchFromLocalStorage!!!`);
  return dispatch => {
    return dispatch({
      type: FETCH_FROM_STORAGE
    });
  };
};

export const pushToLocalStorage = () => {
  console.log(`pushToLocalStorage!!!`);
  return dispatch => {
    return dispatch({
      type: PUSH_TO_STORAGE
    });
  };
};
