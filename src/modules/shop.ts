import {
  ADD_TO_CART,
  ASC,
  DESC,
  FETCH_FROM_STORAGE,
  initialState,
  PUSH_TO_STORAGE,
  REDUCE_QUANTITY,
  REMOVE_FROM_CART,
  SET_SORT
} from '../constants';

export default ( state = initialState, action: IAction ) => {
  const { itemId, type } = action;

  switch (type) {
    case ADD_TO_CART:
      let extendedCart = [ ...state.cart ];
      let foundItem = extendedCart.find( ( item ) => item.id === itemId );
      if ( foundItem ) {
        foundItem.quantity = foundItem.quantity + 1;
      } else {
        extendedCart.push( {
          id: itemId,
          quantity: 1
        } );
      }
      return {
        ...state,
        cart: [ ...extendedCart ]
      };

    case REMOVE_FROM_CART:
      const updatedCart = state.cart.filter( item => item.id !== itemId );
      return {
        ...state,
        cart: [ ...updatedCart ]
      };

    case REDUCE_QUANTITY:
      let reducedCart = [ ...state.cart ];
      let reducedItem = reducedCart.find( ( item ) => item.id === itemId );
      if ( reducedItem.quantity > 1 ) {
        reducedItem.quantity = reducedItem.quantity - 1;
      } else {
        reducedCart = reducedCart.filter( item => item.id !== itemId );
      }
      return {
        ...state,
        cart: reducedCart
      };

    case FETCH_FROM_STORAGE:
      const fetchedCart = JSON.parse( localStorage.getItem( 'cart' ) );
      if ( !fetchedCart ) {
        return state;
      } else {
        return {
          ...state,
          cart: [ ...fetchedCart ]
        };
      }

    case PUSH_TO_STORAGE:
      const storedCart = [ ...state.cart ];
      localStorage.setItem( 'cart', JSON.stringify( storedCart ) );
      return state;

    case SET_SORT:
      let sortOrder = state.sortOrder;
      let sortedBy = action.sortedBy;
      if ( sortOrder === null || sortOrder === DESC ) {
        sortOrder = ASC;
      } else if ( sortOrder === ASC ) {
        sortOrder = DESC;
      }
      let newState = {
        ...state,
        sortOrder: sortOrder,
        sortedBy: sortedBy
      };
      return {
        ...newState
      };
    default:
      return state;
  }
};

export const addToCart = ( itemId: number ) => {
  return (dispatch: any) => {
    return dispatch( {
      type: ADD_TO_CART,
      itemId: itemId
    } );
  };
};

export const removeFromCart = ( itemId: number ) => {
  return (dispatch: any) => {
    return dispatch( {
      type: REMOVE_FROM_CART,
      itemId: itemId
    } );
  };
};

export const reduceQuantity = ( itemId: number ) => {
  return (dispatch: any) => {
    return dispatch( {
      type: REDUCE_QUANTITY,
      itemId: itemId
    } );
  };
};

export const fetchFromLocalStorage = () => {
  return (dispatch: any) => {
    return dispatch( {
      type: FETCH_FROM_STORAGE
    } );
  };
};

export const pushToLocalStorage = () => {
  return (dispatch: any) => {
    return dispatch( {
      type: PUSH_TO_STORAGE
    } );
  };
};

export const setSort = ( sortedBy: string ) => {
  return (dispatch: any) => {
    return dispatch( {
      type: SET_SORT,
      sortedBy: sortedBy
    } );
  };
};
