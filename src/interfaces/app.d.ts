interface IAction {
  type: string,
  itemId?: number,
  sortedBy?: string
}

interface IState {
  cart: ICartItem[],
  stock: IStockItem[],
  sortedBy: string,
  sortOrder: string
}
