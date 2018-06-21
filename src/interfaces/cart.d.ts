interface ICart extends ICartState{
  sortedCart: ICartItem[],
  cartSize: number,
  cart: ICartItem[],
}

interface ICartState extends ICatalogState{
  sortedBy: string,
  sortOrder: string,
  sortedCart: ICartItem[],
  cartSize: number,
  cartCost: number,
  cart: ICartItem[],
}

interface ICartItem {
  id: number,
  quantity: number,
  name?: string,
  title?: string,
  description?: string,
  img?: {},
  price?: number
}

interface ICartProps {
  fetchFromLocalStorage(): any,
  addToCart(): any,
  fetchFromLocalStorage(): any,
  pushToLocalStorage(any: ICartItem[]): any,
  reduceQuantity(): any,
  removeFromCart(): any,
  setSort(): any,
}
