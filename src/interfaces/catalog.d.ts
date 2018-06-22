interface ICatalogProps {
  cart: ICartItem[],
  stock: IStockItem[],
  cartSize: number,
  fetchFromLocalStorage(): any;
  pushToLocalStorage( any: ICartItem[] ): any;
  addToCart( id: number ): any;
}

interface ICatalogState {
  shop: {
    cart: ICartItem[],
    stock: IStockItem[],
    sortedBy: string,
    sortOrder: string,
  },
  cartSize: number
}

interface IState {
  cart: ICartItem[],
  stock: IStockItem[],
  sortedBy: string,
  sortOrder: string
}
