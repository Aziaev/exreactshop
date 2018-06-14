import CATALOG from './catalog';

const initialState = {
  cart: [],
  stock: CATALOG
};

// Константы для экшенов
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const REDUCE_QUANTITY = 'REDUCE_QUANTITY';
const FETCH_FROM_STORAGE = 'FETCH_FROM_STORAGE';
const PUSH_TO_STORAGE ='PUSH_TO_STORAGE';

export {
  ADD_TO_CART,
  REDUCE_QUANTITY,
  FETCH_FROM_STORAGE,
  PUSH_TO_STORAGE,
  initialState,
  CATALOG,
  REMOVE_FROM_CART
};
