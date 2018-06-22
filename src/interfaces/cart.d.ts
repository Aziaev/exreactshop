/**
 * Интерфейс стейта корзины
 *
 * sortedBy - поле по которому отсортирована корзина. default = null
 * sortOrder - порядок сортировки null - без сортировки, ASC - по возрастанию, DESC - по убыванию
 * cartCost - стоимость содержимого корзины
 * sortedCart - отсортированная корзина
 * * stock - каталог товаров
 * cart - содержимое корзины
 * stock - каталог товаров
 */
interface ICartState extends ICatalogState {
  sortedBy: string,
  sortOrder: string,
  cartCost: number,
  sortedCart: ICartItem[],
  cart: ICartItem[],
  stock: IStockItem[],
}

/**
 * Интерфейс просов корзины
 *
 * addToCart - метод добавления(увеличения количества на единицу) товара в корзину
 * fetchFromLocalStorage - метод получения корзины из window.localStorage
 * pushToLocalStorage - метод сохранения корзины в window.localStorage
 * reduceQuantity - уменьшение количества имеющегося товара
 * removeFromCart - удаление товара из корзины
 * setSort - метод определяющий столбец по которому нужно сортировать корзину
 */
interface ICartProps {
  fetchFromLocalStorage(): any,
  addToCart( id: number ): any,
  pushToLocalStorage( any: ICartItem[] ): any,
  reduceQuantity(): any,
  removeFromCart(): any,
  setSort(): any,
}
