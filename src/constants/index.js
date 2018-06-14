import CATALOG from './catalog';

const initialState = {
  cart: [],
  stock: CATALOG
};

// Константы для экшенов
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const REDUCE_QUANTITY = 'REDUCE_QUANTITY';

export {
  ADD_TO_CART,
  REDUCE_QUANTITY,
  initialState,
  CATALOG,
  REMOVE_FROM_CART
};
