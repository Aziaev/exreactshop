import i8r from '../assets/img/iphone 8 red.jpeg';
import i8plusB from '../assets/img/iphone 8plus black.jpeg';
import i8plusG from '../assets/img/iphone 8plus gold.jpeg';
import ixb from '../assets/img/iphone x black.jpeg';
import ixw from '../assets/img/iphone x white.jpeg';

// tslint:disable-next-line
const iphone8description = 'iPhone 8 introduces an all‑new glass design. The world’s most popular camera, now even better. The most powerful and smartest chip ever in a smartphone. Wireless charging that’s truly effortless. And augmented reality experiences never before possible. iPhone 8. A new generation of iPhone.';
// tslint:disable-next-line
const iphoneXdescription = 'Our vision has always been to create an iPhone that is entirely screen. One so immersive the device itself disappears into the experience. And so intelligent it can respond to a tap, your voice, and even a glance. With iPhone X, that vision is now a reality. Say hello to the future.';
const iphoneXTitle = 'Say hello to the future.';
const iphone8Title = 'A beautiful mind.';

export const CATALOG = [
  {
    id: 1,
    name: 'iPhone X Black',
    title: iphoneXTitle,
    description: iphoneXdescription,
    img: ixb,
    price: 74990
  },
  {
    id: 2,
    name: 'iPhone X White',
    title: iphoneXTitle,
    description: iphoneXdescription,
    img: ixw,
    price: 74990
  },
  {
    id: 3,
    name: 'iPhone 8 Plus Black',
    title: iphone8Title,
    description: iphone8description,
    img: i8plusB,
    price: 57990
  },
  {
    id: 4,
    name: 'iPhone 8 Plus Gold',
    title: iphone8Title,
    description: iphone8description,
    img: i8plusG,
    price: 57990
  },
  {
    id: 5,
    name: 'iPhone 8 Red',
    title: iphone8Title,
    description: iphone8description,
    img: i8r,
    price: 49490
  },
];

export default CATALOG;
