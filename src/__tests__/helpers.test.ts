import * as helpers from '../helpers';
import CATALOG from '../constants/catalog';
import { ASC, DESC } from '../constants/index';

const mockUnsortedCart = [
  {
    id: 1,
    quantity: 1,
    name: 'name a',
    title: 'title 1',
    description: 'description 1',
    price: 34
  }, {
    id: 3,
    quantity: 3,
    name: 'name c',
    title: 'title 3',
    description: 'description 3',
    price: 5
  }, {
    id: 2,
    quantity: 2,
    name: 'name b',
    title: 'title 2',
    description: 'description 2',
    price: 67
  }
];

describe( 'getRandomNumber', function () {
  describe( 'При любом вызове функции', function () {
    it( 'Должен вернуть произвольное число от 0 до 5', function () {
      let result = helpers.getRandomNumber();
      expect( result > 0 && result < 5 );
    } );
  } );
} );

describe( 'getProductById', function () {
  const isInCatalog = 2;
  const isNotInCatalog = 100;
  describe( 'При передаче id товара из каталога', function () {
    it( 'Должен вернуть объект товара из каталога', function () {
      let result = helpers.getProductById( isInCatalog );
      expect( result ).toEqual( CATALOG[ 1 ] );
    } );
  } );
  describe( 'При передаче id товара не из каталога', function () {
    it( 'Должен вернуть неопределенный результат', function () {
      let result = helpers.getProductById( isNotInCatalog );
      expect( result ).toBeFalsy();
    } );
  } );
} );

describe( 'getSortedFullDataCart', function () {
  describe( 'При передаче корзины с сортировкой по полю name по возрастанию', function () {
    it( 'Возвращает корзину с сортировкой по \'name\' по возрастанию', function () {
      let result = helpers.getSortedFullDataCart( mockUnsortedCart, 'name', ASC );
      expect( result ).toHaveLength( 3 );
      expect( result[ 0 ] ).toEqual( mockUnsortedCart[ 0 ] );
      expect( result[ 1 ] ).toEqual( mockUnsortedCart[ 2 ] );
      expect( result[ 2 ] ).toEqual( mockUnsortedCart[ 1 ] );
    } );
  } );
  describe( 'При передаче корзины с сортировкой по полю name по убыванию', function () {
    it( 'Возвращает корзину с сортировкой по \'name\'', function () {
      let result = helpers.getSortedFullDataCart( mockUnsortedCart, 'name', DESC );
      expect( result ).toHaveLength( 3 );
      expect( result[ 0 ] ).toEqual( mockUnsortedCart[ 1 ] );
      expect( result[ 1 ] ).toEqual( mockUnsortedCart[ 2 ] );
      expect( result[ 2 ] ).toEqual( mockUnsortedCart[ 0 ] );
    } );
  } );
} );

describe( 'getCartSize', function () {
  const expectedSize = 6;
  describe( 'При передаче содержимого корзины', function () {
    it( 'Возвращает ожидаемое количество позиций в корзине', function () {
      let result = helpers.getCartSize( mockUnsortedCart );
      expect( result ).toEqual(expectedSize);
    } );
  } );
  describe( 'При передаче пустой корзины', function () {
    it( 'Возвращает 0', function () {
      let result = helpers.getCartSize( [] );
      expect( result ).toEqual(0);
    } );
  } );
} );

describe( 'getCartCost', function () {
  const expectedCost = 183;
  describe( 'При передаче содержимого корзины', function () {
    it( 'Возвращает ожидаемую стоимость товаров в корзине', function () {
      let result = helpers.getCartCost( mockUnsortedCart );
      expect( result ).toEqual(expectedCost);
    } );
  } );
  describe( 'При передаче пустой корзины', function () {
    it( 'Возвращает 0', function () {
      let result = helpers.getCartCost( [] );
      expect( result ).toEqual(0);
    } );
  } );
} );
