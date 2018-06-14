import { CATALOG } from './../constants';

export const getProductById = id => {
  return CATALOG.find((item) => item.id === id);
};

export const getCartFullData = cart => {
  return cart.map((item) => {
    let product = getProductById(item.id);
    return {
      name: product.name,
      price: product.price,
      ...item,
    };
  });
};

export const getCartSize = (cart) => {
  return cart.reduce(((sum, product) => {
      return sum + product.quantity;
    }
  ), 0);
};

export const getCartCost = (cart) => {
  return cart.reduce(((sum, product) => {
      return sum + +product.price * product.quantity;
    }
  ), 0);
};
