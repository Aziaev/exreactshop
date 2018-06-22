/**
 * Интерфейс для единицы товара в корзине
 */
interface ICartItem {
  id: number,
  quantity: number,
  name?: string,
  title?: string,
  description?: string,
  img?: {},
  price?: number
}

/**
 * Интерфейс для единицы товара в каталоге
 */
interface IStockItem {
  id: number,
  name: string,
  title: string,
  description: string,
  img?: {},
  price?: number
}
