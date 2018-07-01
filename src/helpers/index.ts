import { ASC, DESC } from '../constants/index';
import { CATALOG } from './../constants';

/**
 * Метод возвращает произвольное число от 1 до 5
 */
export const getRandomNumber = () => Math.floor( Math.random() * 5 + 1 );

/**
 * Метод поиска товара в каталоге
 *
 * @param {number} id - уникальный номер товара в каталоге
 * @returns {IStockItem} - товарную позицию из каталога
 */
export const getProductById = ( id: number ) => {
  return CATALOG.find( ( item ) => item.id === id );
};

/**
 * Метод который дополняет поля товаров в корзине и сортирует его по требуемому полю и в требуемом направлении
 *
 * @param {ICartItem[]} cart - содержимое корзины для фильтрации
 * @param {string} sortedBy - поле по которому необходимо сортировать корзину
 * @param {string} sortOrder - порядок сортировки null - без сортировки, ASC - по возрастанию, DESC - по убыванию
 * @returns {any | void} - отсортированную корзину
 */
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

/**
 * Метод возвращает количество товаров в корзине
 *
 * @param {ICartItem[]} cart - содержимое корзины
 * @returns {number} количество товаров в корзине
 */
export const getCartSize = ( cart: ICartItem[] ) => {
  return cart.reduce( (( sum: number, product: ICartItem ) => {
      return sum + product.quantity;
    }
  ), 0 );
};

/**
 * Метод возвращает стоимость товаров в корзине
 *
 * @param {ICartItem[]} cart - содержимое корзины
 * @returns {number}
 */
export const getCartCost = ( cart: ICartItem[] ) => {
  return cart.reduce( (( sum: number, product: ICartItem ) => {
      return sum + +product.price * product.quantity;
    }
  ), 0 );
};

/**
 * Метод сортировки товаров в корзине по названию, количеству, цене
 *
 * @param cart - содержимое корзины
 * @param {string} sortedBy - название столбца
 * @param {string} sortOrder - порядок сортировки null - без сортировки, ASC - по возрастанию, DESC - по убыванию
 * @returns {any | void} - отсортированная коллекция товаров в корзине
 */
const sortCart = ( cart: any, sortedBy: string, sortOrder: string ) => {
  return cart.sort( ( prev: ICartItem, next: ICartItem ): boolean => {
    if ( prev === null || next === null ) {
      return true;
    } else if ( sortOrder === DESC ) {
      return prev[ sortedBy ] < next[ sortedBy ];
    } else if ( sortOrder === ASC ) {
      return prev[ sortedBy ] > next[ sortedBy ];
    }
    return true;
  } );
};
