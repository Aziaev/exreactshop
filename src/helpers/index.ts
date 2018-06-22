import { ASC, DESC } from '../constants/index';
import { CATALOG } from './../constants';

export const getRandomNumber = () => Math.floor( Math.random() * 5 + 1 );

export const getProductById = ( id: number ) => {
  return CATALOG.find( ( item ) => item.id === id );
};

export const getSortedFullDataCart = ( cart: ICartItem[], sortedBy: string, sortOrder: string ) => {
  let detailedCart = cart.map( ( item: ICartItem ) => {
    let product = getProductById( item.id );
    return {
      name: product.name,
      price: product.price,
      ...item,
    };
  } );
  return sortCart( detailedCart, sortedBy, sortOrder );
};

export const getCartSize = ( cart: ICartItem[] ) => {
  return cart.reduce( (( sum: number, product: ICartItem ) => {
      return sum + product.quantity;
    }
  ), 0 );
};

export const getCartCost = ( cart: ICartItem[] ) => {
  return cart.reduce( (( sum: number, product: ICartItem ) => {
      return sum + +product.price * product.quantity;
    }
  ), 0 );
};

const sortCart = ( cart: any, sortedBy: string, sortOrder: string ) => {
  return cart.sort( ( prev: ICartItem, next: ICartItem ): boolean => {
    if ( prev === null || next === null ) {
      return true;
    } else if ( sortOrder === ASC ) {
      return prev[ sortedBy ] < next[ sortedBy ];
    } else if ( sortOrder === DESC ) {
      return prev[ sortedBy ] > next[ sortedBy ];
    }
    return true;
  } );
};
