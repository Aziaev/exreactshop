import i8r from 'src/assets/img/iphone 8 red.jpeg'
import i8plusB from 'src/assets/img/iphone 8plus black.jpeg'
import i8plusG from 'src/assets/img/iphone 8plus gold.jpeg'
import ixb from 'src/assets/img/iphone x black.jpeg'
import ixw from 'src/assets/img/iphone x white.jpeg'
//
//
//
//
export const FIELDS = ['DAY', 'MONTH', 'YEAR'];

export const initialState = {
  date: new Date(),
  day: null,
  month: null,
  year: null,
};

export const STOCK = [
  {
    id: 1,
    name: 'iPhone X 64Gb Black',
    price: '74990',
    img: ixb,
    stock: 1,
  },
  {
    id: 2,
    name: 'iPhone X 64Gb White',
    price: '74990',
    img: ixw,
    stock: 0,
  },
  {
    id: 3,
    name: 'iPhone 8 plus 64Gb Black',
    price: '57990',
    img: i8plusB,
    stock: 10,
  },
  {
    id: 4,
    name: 'iPhone 8 plus 64Gb Gold',
    price: '57990',
    img: i8plusG,
    stock: 10,
  },
  {
    id: 5,
    name: 'iPhone 8 64Gb Red',
    price: '49490',
    img: i8plusG,
    stock: 10,
  }
];
