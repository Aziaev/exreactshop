/**
 * Интерфейс для экшенов редьюсера
 */
interface IAction {
  type: string,
  itemId?: number,
  sortedBy?: string
}

/**
 * Интерфейс для initial-state
 */
interface IState {
  cart: ICartItem[],
  stock: IStockItem[],
  sortedBy: string,
  sortOrder: string
}
