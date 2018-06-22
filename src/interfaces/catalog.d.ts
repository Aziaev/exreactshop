/**
 * Интерфейс пропсов каталога
 *
 * cart - содержимое корзины
 * stock - каталог товаров
 * cartSize - количество товаров в корзине
 * fetchFromLocalStorage - метод получения корзины из window.localStorage
 * pushToLocalStorage - метод сохранения корзины в window.localStorage
 * addToCart - метод добавления товара в корзину
 */
interface ICatalogProps {
  cart: ICartItem[],
  stock: IStockItem[],
  cartSize: number,
  fetchFromLocalStorage(): any;
  pushToLocalStorage( any: ICartItem[] ): any;
  addToCart( id: number ): any;
}

/**
 * Интерфейс стейта каталога
 *
 * shop - объект из редьюсера
 * * cart - содержимое корзины
 * * stock - каталог товаров
 * * sortedBy - поле по которому отсортирована корзина. default = null
 * * sortOrder - порядок сортировки null - без сортировки, ASC - по возрастанию, DESC - по убыванию
 * cartSize - количество товаров в корзине
 */
interface ICatalogState {
  shop: {
    cart: ICartItem[],
    stock: IStockItem[],
    sortedBy: string,
    sortOrder: string,
  },
  cartSize: number
}

/**
 * Интерфейс карточки товара в каталоге
 *
 * key - ключ при перечислении карточек товаров на странице
 * id - уникальный идентификатор товара
 * addToCart - метод добавления товара в корзину
 */
interface ICatalogItem {
  key: number,
  id: number,
  addToCart( id: number ): any;
}
