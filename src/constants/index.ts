import CATALOG from './catalog';

const initialState: IState = {
  cart: [],
  stock: CATALOG,
  sortedBy: null,
  sortOrder: null
};

// Константы для экшенов
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const REDUCE_QUANTITY = 'REDUCE_QUANTITY';
const FETCH_FROM_STORAGE = 'FETCH_FROM_STORAGE';
const PUSH_TO_STORAGE = 'PUSH_TO_STORAGE';
const SET_SORT = 'SET_SORT';
const ASC = 'ASC';
const DESC = 'DESC';

export {
  ADD_TO_CART,
  ASC,
  DESC,
  REDUCE_QUANTITY,
  FETCH_FROM_STORAGE,
  PUSH_TO_STORAGE,
  SET_SORT,
  initialState,
  CATALOG,
  REMOVE_FROM_CART
};
