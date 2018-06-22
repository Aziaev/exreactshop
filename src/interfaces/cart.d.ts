interface ICartState extends ICatalogState {
  sortedBy: string,
  sortOrder: string,
  cartCost: number,
  sortedCart: ICartItem[],
  cart: ICartItem[],
  stock: IStockItem[],
}

interface ICartProps {
  fetchFromLocalStorage(): any,
  addToCart( id: number ): any,
  fetchFromLocalStorage(): any,
  pushToLocalStorage( any: ICartItem[] ): any,
  reduceQuantity(): any,
  removeFromCart(): any,
  setSort(): any,
}
