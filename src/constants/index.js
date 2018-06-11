import i8r from '../assets/img/iphone 8 red.jpeg';
import i8plusB from '../assets/img/iphone 8plus black.jpeg';
import i8plusG from '../assets/img/iphone 8plus gold.jpeg';
import ixb from '../assets/img/iphone x black.jpeg';
import ixw from '../assets/img/iphone x white.jpeg';

const iphone8description = 'iPhone 8 Plus — новое поколение iPhone. Передняя и задняя панели выполнены из самого прочного стекла, когда-либо созданного для iPhone, а рамка — из алюминия, применяемого в аэрокосмической отрасли.\n' +
  '\n' +
  'iPhone 8 Plus заряжается без проводов. Защищён от воды и пыли. Оснащён дисплеем Retina HD 5,5 дюйма с технологией True Tone, и двойной камерой 12 Мп с улучшенным режимом «Портрет» и новой функцией портретного освещения. Всё это работает на A11 Bionic — самом мощном и умном процессоре iPhone. И ещё iPhone 8 и iPhone 8 Plus поддерживают дополненную реальность в играх и приложениях.';
const iphoneXdescription = 'Всю переднюю поверхность iPhone X занимает дисплей Super Retina HD с диагональю 5,8 дюйма и поддержкой технологий HDR и True Tone. Передняя и задняя панели выполнены из самого прочного стекла, когда-либо созданного для iPhone, а рамка — из хирургической нержавеющей стали.\n' +
  '\n' +
  'iPhone X заряжается без проводов. Защищён от воды и пыли. И оснащён двойной камерой 12 Мп с двойной оптической стабилизацией изображения для отличных снимков даже при слабом освещении. Камера TrueDepth с новой функцией портретного освещения может сделать селфи в режиме «Портрет». А технология Face ID позволяет одним взглядом разблокировать iPhone X и пользоваться Apple Pay. Всё это работает на A11 Bionic — самом мощном и умном процессоре iPhone. И ещё iPhone X поддерживает технологии дополненной реальности в играх и приложениях.';

export const STOCK = [
  {
    item: {
      id: 1,
      name: 'iPhone X Black',
      title: 'iPhone X. Он Вас увидит. Он Вас удивит.',
      description: iphoneXdescription,
      price: '74990',
      img: ixb,
    },
    stock: 1
  },
  {
    item: {
      id: 2,
      name: 'iPhone X White',
      title: 'iPhone X. Он Вас увидит. Он Вас удивит.',
      description: iphoneXdescription,
      price: '74990',
      img: ixw,
    },
    stock: 0
  },
  {
    item: {
      id: 3,
      name: 'iPhone 8 plus Black',
      title: 'iPhone 8 Plus — никогда ещё интеллект не был в такой прекрасной форме.',
      description: iphone8description,
      price: '57990',
      img: i8plusB,
    },
    stock: 2
  },
  {
    item: {
      id: 4,
      name: 'iPhone 8 plus Gold',
      title: 'iPhone 8 Plus — никогда ещё интеллект не был в такой прекрасной форме.',
      description: iphone8description,
      price: '57990',
      img: i8plusG,
    },
    stock: 0
  },
  {
    item: {
      id: 5,
      name: 'iPhone 8 Red',
      title: 'iPhone 8 — никогда ещё интеллект не был в такой прекрасной форме.',
      description: iphone8description,
      price: '49490',
      img: i8r,
    },
    stock: 4
  },
];


export const initialState = {
  cart: [],
  stock: STOCK
};

