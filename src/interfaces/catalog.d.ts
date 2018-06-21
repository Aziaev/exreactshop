interface ICatalog {
  cart: ICartItem[],
  stock: IStockItem[],
  cartSize: number,
}

interface ICatalogProps {
  fetchFromLocalStorage(): {};
  pushToLocalStorage( any: ICartItem[] ): {};
  addToCart( id: number ): {};
}

interface ICatalogState {
  shop: {
    cart: ICartItem[],
    stock: IStockItem[],
    sortedBy: string,
    sortOrder: string,
  }
}

interface ICatalogItem {
  key: number,
  id: number,
  addToCart( id: number ): {};
}

interface IStockItem {
  id: number,
  name: string,
  title: string,
  description: string,
  img: {},
  price: number
}
