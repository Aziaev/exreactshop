import { ASC, DESC } from '../constants/index';
import { CATALOG } from './../constants';

export const getRandomNumber = () => Math.floor(Math.random() * 5 + 1);

export const getProductById = id => {
  return CATALOG.find((item) => item.id === id);
};

export const getSortedFullDataCart = (cart, sortedBy, sortOrder) => {
  let detailedCart = cart.map((item) => {
    let product = getProductById(item.id);
    return {
      name: product.name,
      price: product.price,
      ...item,
    };
  });
  return sortCart(detailedCart, sortedBy, sortOrder);
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

const sortCart = (cart, sortedBy, sortOrder) => {
  return cart.sort((prev, next) => {
    if (prev === null || next === null) {
      return true;
    } else if (sortOrder === ASC) {
      return prev[sortedBy] < next[sortedBy];
    } else if (sortOrder === DESC) {
      return prev[sortedBy] > next[sortedBy];
    }
    return true;
  });
};
